# Security Policy and Architecture

This document outlines the security architecture, headers, and client-side protections implemented for the portfolio website.

## Security Controls Overview

| Security Requirement | Implementation Method | Location / Details |
| :--- | :--- | :--- |
| **HTTPS** | Enforced at the Edge/CDN (Cloudflare Pages). Redirection config provided. | `_headers`, `vercel.json`, `netlify.toml` |
| **CSP (Content Security Policy)** | Strict script, style, and content origin controls. | `index.html` (meta tag), headers configs |
| **HSTS (Strict Transport Security)** | Forces HTTPS usage with 2-year duration and preload. | `_headers`, `vercel.json`, `netlify.toml` |
| **XSS Protection** | Output encoding via React JSX, explicit input validation/sanitization. | `Projects.tsx`, `security.ts`, `X-XSS-Protection` header |
| **CSRF Protection** | Not applicable (static site, no server-side cookies or mutable APIs). | N/A (see details below) |
| **CORS** | Browser assets are protected under standard origin policies. | `_headers`, `vercel.json`, `netlify.toml` |
| **Rate Limiting** | Handled at the Edge/CDN firewall (Cloudflare Pages). | Cloudflare Pages DDoS/WAF |
| **Input Validation** | String length limits and character sanitization on search fields. | `security.ts`, `Projects.tsx` |
| **Output Encoding** | Automated HTML escaping for dynamic variables. | Built-in React JSX escaping |

---

## 1. HTTPS & HSTS (HTTP Strict Transport Security)

To ensure all traffic between the client and server is encrypted:
- **HTTPS** redirection is handled automatically by Cloudflare Pages.
- **HSTS** is enabled via the `Strict-Transport-Security` header:
  ```http
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  ```
  This tells browsers to only interact with the domain (and all its subdomains) using secure HTTPS connections for the next 2 years, and makes the domain eligible for the browser HSTS preload lists.

---

## 2. Content Security Policy (CSP)

A robust Content Security Policy has been defined to block Cross-Site Scripting (XSS) and code injection attacks:
- **Header Delivery**: Configured via `_headers` (Cloudflare/Netlify), `vercel.json` (Vercel), and `netlify.toml` (Netlify).
- **Fallback Meta Tag**: Added in `index.html` for environment-independent security.

### Directives Configuration:
- `default-src 'self'`: Restricts loading resources to the same origin by default.
- `script-src 'self' 'unsafe-inline'`: Allows local compiled scripts. (Vite injects styles dynamically; in development HMR uses websocket connections).
- `style-src 'self' 'unsafe-inline'`: Allows inline styles used by Tailwind CSS, Framer Motion, and Radix UI.
- `img-src 'self' data: https://cdn.simpleicons.org https://picsum.photos https://cdn.jsdelivr.net https://upload.wikimedia.org https://cygri.github.io https://images.unsplash.com`: Restricts image loading to trusted sources (used for contact icons, profile picture, and certification badges).
- `font-src 'self' data:`: Permits fonts bundled locally.
- `connect-src 'self'`: Prevents sending tracking or data payloads to arbitrary external APIs.
- `object-src 'none'`: Prevents rendering flash or Java plugins.
- `frame-ancestors 'none'`: Prevents clickjacking by disabling embedding of this site inside external iframes.
- `base-uri 'self'`: Limits base element href values to same-origin.
- `form-action 'self'`: Restricts where form submissions can be sent.

---

## 3. XSS Protection & Output Encoding

React automatically escapes variables rendered in JSX templates to prevent HTML injection and DOM-based XSS:
```tsx
// React renders this safely as text content, not executable HTML code
<p>{query}</p>
```
To ensure this:
- We do **not** use `dangerouslySetInnerHTML` in the codebase.
- We set the `X-Content-Type-Options: nosniff` header to block MIME type sniffing exploits.
- We set the legacy `X-XSS-Protection: 1; mode=block` header to engage browser auditing tools.

---

## 4. CSRF (Cross-Site Request Forgery)

CSRF attacks target stateful applications that rely on ambient browser credentials (session cookies, basic auth headers) to execute write actions on a user's behalf.
- **Current Status**: Since this is a purely client-side static site without backend cookies, sessions, or mutable endpoints, CSRF is technically not possible.
- **Future Integration Plan**: If a backend API is added in the future (e.g. for contact forms), ensure:
  1. Requests use custom authorization headers (e.g., Bearer tokens) instead of session cookies, making CSRF impossible.
  2. If session cookies must be used, they must be set with `SameSite=Strict` or `SameSite=Lax` and include anti-CSRF token verification on all POST/PUT/DELETE routes.

---

## 5. CORS (Cross-Origin Resource Sharing)

A static single-page application does not handle cross-origin incoming requests (as it has no backend APIs). To secure assets, however, we:
- Keep the default browser security settings which block cross-origin reads of sensitive client assets.
- If assets need to be shared, configure specific `Access-Control-Allow-Origin` values for those paths on the CDN, avoiding wildcard `*` headers for private files.

---

## 6. Rate Limiting

Static files do not consume database or application server CPU cycles, making them highly resilient to traditional resource-exhaustion DDoS attacks.
- **Edge Protection**: Rate limiting is delegated to the CDN / edge platform. Cloudflare Pages includes automated global DDoS protection.
- **Recommendations**: For customized limits or to protect against scrape-bots/excessive bandwidth, configure rate limiting rules under the **Cloudflare Security WAF** dashboard.

---

## 7. Input Validation & Sanitization

All input fields are protected against injection and memory exhaustion:
- **Length Constraint**: The search field limits inputs to 100 characters via both the HTML `maxLength` attribute and JavaScript slice operations.
- **Explicit Sanitization**: The input is cleaned using a custom utility in `src/lib/security.ts` to strip HTML tags, script attempts, and escape special characters before processing.

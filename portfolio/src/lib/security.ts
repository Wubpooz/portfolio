/**
 * Utility functions for input validation and sanitization (defense-in-depth).
 */

/**
 * Sanitizes user input by:
 * 1. Trimming whitespace.
 * 2. Truncating to a maximum length to prevent Denial of Service (DoS) / memory exhaustion.
 * 3. Stripping out HTML tags, script elements, and potential inline script handlers (e.g. onerror, onload, javascript:).
 */
export function sanitizeInput(input: string, maxLength = 100): string {
  if (!input) return "";

  // 1. Truncate input first to protect subsequent regex operations
  let sanitized = input.slice(0, maxLength);

  // 2. Remove HTML tags completely (use a safer regex to avoid catastrophic backtracking)
  // Match typical tags starting with a letter and ending with '>' to keep this linear-time.
  sanitized = sanitized.replace(/<\/?[A-Za-z][^>]*>/g, "");

  // 3. Remove javascript: pseudo-protocol references
  sanitized = sanitized.replace(/javascript\s*:/gi, "");

  // 4. Escape characters that have special meaning in HTML contexts just in case (defense-in-depth)
  sanitized = escapeHtml(sanitized);

  return sanitized.trim();
}

/**
 * Escapes HTML characters to prevent XSS if rendered unsafely.
 */
export function escapeHtml(str: string): string {
  return str
    .replaceAll('&', "&amp;")
    .replaceAll('<', "&lt;")
    .replaceAll('>', "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll('\'', "&#039;");
}

/**
 * Checks if the input is a valid search query.
 * Blocks obviously malicious patterns.
 */
export function isValidSearchQuery(input: string): boolean {
  if (!input) return true;
  
  // Maximum length of search query
  if (input.length > 100) return false;

  // Block potential script injections or HTML tags
  const containsHtml = input.includes("<") && input.includes(">");
  const containsScript = /javascript:/i.test(input) || /onclick/i.test(input) || /onload/i.test(input) || /onerror/i.test(input);

  return !containsHtml && !containsScript;
}

# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your React + Vite portfolio. PostHog is initialized in `src/main.tsx` with `PostHogProvider` and `PostHogErrorBoundary`, giving you autocapture, session replay, and error tracking out of the box. Twelve custom events were instrumented across six files to track the key conversion actions that matter most for a portfolio: contact outreach, resume/vCard downloads, project engagement, language switching, and project filtering.

| Event | Description | File |
|---|---|---|
| `resume_downloaded` | User clicks the resume download button | `src/components/contact/Contact.tsx` |
| `vcard_downloaded` | User clicks the vCard download button | `src/components/contact/Contact.tsx`, `src/components/hero/Hero.tsx` |
| `contact_link_clicked` | User clicks a contact link (LinkedIn, GitHub, Email) | `src/components/contact/Contact.tsx` |
| `hero_social_link_clicked` | User clicks a social link from the hero quick-links panel | `src/components/hero/Hero.tsx` |
| `hero_email_cta_clicked` | User clicks the primary email CTA in the hero | `src/components/hero/Hero.tsx` |
| `hero_resume_opened` | User clicks the "Open Resume" button in the hero | `src/components/hero/Hero.tsx` |
| `project_live_link_clicked` | User clicks the live-demo link on a project card | `src/components/projects/ProjectCard.tsx` |
| `project_source_link_clicked` | User clicks the source-code link on a project card | `src/components/projects/ProjectCard.tsx` |
| `project_case_study_clicked` | User clicks the case study link on a project card | `src/components/projects/ProjectCard.tsx` |
| `project_external_link_clicked` | User clicks an external link on the project detail page | `src/pages/ProjectDetail.tsx` |
| `projects_filter_applied` | User applies a status filter on the projects listing page | `src/pages/Projects.tsx` |
| `language_switched` | User manually switches the UI language | `src/components/layout/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/218686/dashboard/801906)
- [Contact engagement over time](https://eu.posthog.com/project/218686/insights/AH08jOO1)
- [Resume & vCard downloads](https://eu.posthog.com/project/218686/insights/LCWj5LpT)
- [Project link clicks by type](https://eu.posthog.com/project/218686/insights/Clk3zMZ7)
- [Language preference](https://eu.posthog.com/project/218686/insights/90jP1iCx)
- [Projects filter usage](https://eu.posthog.com/project/218686/insights/jDURrqtg)


# S&J Website Changes Ledger

Current version: `v0.13.3-real-competitor-pricing`
Production domain: `https://sjwebdesignca.com/`
Production branch: `main`
Repository: `https://github.com/SJWebDesign/sj-web-design-portfolio`

This ledger records meaningful S&J website updates. Update it every time the website changes, including small content edits, design changes, concept additions, SEO changes, deployment configuration changes, and live verification notes.

## Standing Update Prompt

Use this prompt before finishing every future S&J website update:

```text
Update the S&J website changes ledger before final delivery.

Include:
- New version number
- Date
- Summary of what changed
- Files changed
- Deployment status
- Live verification notes, if deployed
- Any follow-up work or risks

Do not finish the task until CHANGES_LEDGER.md is current.
```

## Version History

### v0.13.3-real-competitor-pricing - 2026-07-18

- Commit: pending at time of writing
- Summary: Updated the pricing comparison sheet to compare S&J pricing against a real competitor.
- Changed: Reworked the comparison table to compare S&J plans against Jottful's published starting price and added a competitor reference note.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pending push to `main`.
- Notes: Jottful's published reference was checked July 18, 2026 and listed $99 setup plus co-maintenance starting at $65/month for up to 5 pages.

### v0.13.2-owner-portrait - 2026-07-18

- Commit: `bbf33b8`
- Summary: Added the owner's portrait to the About the Owner section.
- Changed: Added `assets/owner-photo.jpg`, replaced the empty portrait placeholder with a small top-right owner photo, and styled text to wrap around the photo on desktop while stacking cleanly on mobile.
- Files changed: `index.html`, `style.css`, `assets/owner-photo.jpg`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live owner photo and image asset verified.
- Notes: Photo is kept as a repo asset and used only in the owner section.

### v0.13.1-market-friendly-pricing - 2026-07-18

- Commit: `52bd07a`
- Summary: Reworded website pricing around being below typical market rates.
- Changed: Updated title, meta description, pricing snapshot, services card, pricing section, pricing dropdowns, and comparison table to communicate market-friendly pricing.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live market-friendly pricing language verified.
- Notes: User requested pricing language that communicates lower-than-market pricing; visible copy uses professional wording instead of informal wording.

### v0.13.0-print-material-services - 2026-07-18

- Commit: `8acd1fb`
- Summary: Added professional brand label, business card, and pamphlet design and printing services.
- Changed: Updated homepage title and description, added print navigation, revised the hero and services copy, and added a dedicated print materials section.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live print services section verified.
- Notes: Copy was professionally reworded from the user's request to include brand labels, business cards, and pamphlet design and printing.

### v0.12.0-owner-story-section - 2026-07-17

- Commit: `c040bde`
- Summary: Added an About the Owner section with a small business owner story and portrait space.
- Changed: Added a homepage owner section, added a reserved portrait area for a future owner image, added owner navigation, and styled the section for desktop and mobile layouts.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live owner section and portrait placeholder verified.
- Notes: Copy is intentionally professional and nonspecific so it can work before a final personal bio is written.

### v0.11.2-footer-copyright - 2026-07-17

- Commit: `7088471`
- Summary: Updated the footer copyright line.
- Changed: Removed pricing copy from the bottom footer and replaced it with `© 2026 S&J Tech Services LLC. All rights reserved.`
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live footer verified with no pricing text.
- Notes: Pricing remains in the main pricing section; only the footer pricing mention was removed.

### v0.11.1-ledger-repo-only - 2026-07-17

- Commit: `c181150`
- Summary: Removed the changes ledger from the public website UI while keeping the repo ledger active.
- Changed: Removed the footer link to the changes ledger and removed the public `changes-ledger.html` page from the current site files.
- Files changed: `index.html`, `changes-ledger.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage verified with no ledger link and public ledger page verified as removed.
- Notes: Continue logging future website changes in `CHANGES_LEDGER.md`, but do not surface the ledger in the website UI.

### v0.11.0-personal-pricing-chart - 2026-07-17

- Commit: `530979f`
- Summary: Added personally built website messaging, dropdown pricing, and a price comparison sheet.
- Changed: Stated that S&J builds the websites directly, added pricing from $49.99/month to $99.99/month based on page count, added dropdown pricing tiers, added a comparison table, and made clear that every plan includes page update features.
- Files changed: `index.html`, `style.css`, `changes-ledger.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage and public ledger page verified.
- Notes: Requested by the user as part of completing the website pricing presentation.

### v0.10.3-brand-pricing-copy - 2026-07-17

- Commit: `ca6a5c6`
- Summary: Updated homepage branding, owner names, and pricing-first hero copy.
- Changed: Replaced S&J Digital Agency OS with S&J Web Design, replaced the demo marker with Samantha A. Nielsen and James C. Garrett, and rewrote the hero headline around professional websites starting at $49.99/month.
- Files changed: `index.html`, `changes-ledger.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live domain verified.
- Notes: Requested by the user as part of completing the website copy.

### v0.10.2-ledger-link - 2026-07-17

- Commit: `d0a66e9`
- Summary: Added a homepage footer link to the public changes ledger.
- Changed: Linked `index.html` to `changes-ledger.html` and updated the current ledger version.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage link verified.
- Notes: This makes the ledger discoverable from the live site footer.

### v0.10.1-changes-ledger - 2026-07-17

- Commit: `9098df2`
- Summary: Added the S&J website changes ledger and standing update prompt.
- Changed: Created `CHANGES_LEDGER.md` and a public `changes-ledger.html` version for browser access.
- Files changed: `CHANGES_LEDGER.md`, `changes-ledger.html`
- Deployment: Pushed to `main`; public ledger page verified.
- Notes: Future S&J website changes must update this ledger before final delivery.

### v0.10.0-mini-shell-demo - 2026-07-17

- Commit: `4bd7bd5`
- Summary: Deployed the SJDOS-MINI-DRAFT-FAST-WEB shell demo to production.
- Changed: Replaced the homepage with a smaller static one-page demo and added external stylesheet support.
- Files changed: `index.html`, `style.css`
- Deployment: Pushed to `main`; live domain verified.
- Live verification: `https://sjwebdesignca.com/` returned `200`, new title was live, `SJDOS-MINI-DRAFT-FAST-WEB` marker was live, and `style.css` returned `200`.
- Notes: The prior richer portfolio homepage was intentionally replaced by the smallest working shell demo.

### v0.9.0-collaboration-options - 2026-07-17

- Commits: `8561354`, `503d2d1`
- Summary: Added flexible collaboration options to the site.
- Changed: Expanded service positioning around how clients can work with S&J.
- Deployment: Merged to `main`.

### v0.8.0-readme-update - 2026-07-17

- Commit: `d135dde`
- Summary: Updated the project README.
- Changed: Refreshed repo documentation.
- Deployment: Merged to `main`.

### v0.7.0-expanded-services - 2026-07-17

- Commits: `9d6f34b`, `072e59a`
- Summary: Expanded services and collaboration options.
- Changed: Added more detailed service content and clearer collaboration language.
- Deployment: Merged to `main`.

### v0.6.0-pricing-value-proposition - 2026-07-17

- Commits: `003856d`, `6eb591b`
- Summary: Added pricing value proposition content.
- Changed: Improved business positioning around value, pricing, and client decision-making.
- Deployment: Merged to `main`.

### v0.5.0-concept-card-previews - 2026-07-17

- Commits: `b0f262e`, `b96a27a`
- Summary: Added concept card previews.
- Changed: Improved how concept/demo work is previewed from the portfolio.
- Deployment: Merged to `main`.

### v0.4.0-concept-redesigns - 2026-07-17

- Commits: `195cd54`, `aac49cc`
- Summary: Redesigned all portfolio concepts.
- Changed: Updated the concept demo pages for stronger visual variety and presentation.
- Deployment: Merged to `main`.

### v0.3.0-desktop-layout-polish - 2026-07-17

- Commits: `496a005`, `0b9a933`
- Summary: Polished desktop concept previews.
- Changed: Improved desktop layout quality for concept presentation.
- Deployment: Merged to `main`.

### v0.2.0-mobile-redesign - 2026-07-17

- Commits: `1747d65`, `17fdb0e`
- Summary: Improved mobile portfolio experience.
- Changed: Adjusted the site for better phone-sized layouts and mobile usability.
- Deployment: Merged to `main`.

### v0.1.0-initial-portfolio-and-concepts - 2026-07-16

- Commits: `22ab8fc`, `c5e3413`, `1e6b306`, earlier setup commits
- Summary: Built the initial S&J portfolio foundation and early concept structure.
- Changed: Added portfolio contact details, featured names in the hero, and started the portfolio concept direction.
- Deployment: Merged to `main`.

## Future Versioning Rule

Use simple semantic-style labels:

- Patch version, such as `v0.10.1`, for small copy, SEO, link, or contact edits.
- Minor version, such as `v0.11.0`, for new sections, concept additions, layout changes, or meaningful design improvements.
- Major version, such as `v1.0.0`, only when the site becomes a full public-ready production portfolio rather than a draft or demo shell.

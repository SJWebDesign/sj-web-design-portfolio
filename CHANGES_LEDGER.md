# S&J Website Changes Ledger

Current version: `v0.16.7-internal-seo-update`
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

### v0.16.7-internal-seo-update - 2026-07-18

- Commit: pending at time of writing
- Summary: Rewrote the homepage internal SEO metadata with a more professional search presentation.
- Changed: Updated the title and meta description to mention websites from `$49.99/month` and real agent support, then added Open Graph, Twitter summary, and JSON-LD structured data using the same professional positioning.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pending push to `main`.
- Notes: SEO-only update; visible page content and pricing sections remain unchanged.

### v0.16.6-price-tier-update - 2026-07-18

- Commit: `186cc94`
- Summary: Updated the visible website plan prices.
- Changed: Set the five website plan prices to `$49.99`, `$54.99`, `$59.99`, `$69.99`, and `$79.99`, and updated the related homepage pricing range, highest-plan line, and comparison table price references.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage verified with the new five-price sequence and no old S&J `$84.99` or `$99.99` plan pricing.
- Notes: Price-only update; plan names, section structure, and non-price copy remain unchanged.

### v0.16.5-difference-section-rewrite - 2026-07-18

- Commit: `65ecf29`
- Summary: Revamped the `How we're different` section copy around real hands-on monthly support.
- Changed: Reworded the section headline, intro, and original three topic cards for 24/7 service access, direct owner support, and launch-focused process, then added a monthly-model note explaining predictable cost, faster communication, and support from someone who already knows the site.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage verified with the rewritten difference section, original three topics, and monthly partner note.
- Notes: Kept the original section topics while adding the benefit of a real website partner at one monthly price.

### v0.16.4-monthly-partner-message - 2026-07-18

- Commit: `22c6d67`
- Summary: Added a professional monthly partner message in three spaced-out areas of the homepage.
- Changed: Added `A real website partner, at one monthly price.` to the hero, pricing, and contact sections, with a reusable styled note treatment.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage verified with the message appearing exactly three times and the partner note styling deployed.
- Notes: Reworded the requested agent phrasing to fit the site's professional service positioning.

### v0.16.3-contact-email-update - 2026-07-18

- Commit: `c346913`
- Summary: Updated the public homepage contact email address.
- Changed: Replaced the homepage contact email and mailto link with `s.j.webdesign.contact@gmail.com`.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live homepage verified with the new email and mailto link and no old `hello@sjwebdesignca.com` reference.
- Notes: Concept demo mailto links already used the requested Gmail contact address.

### v0.16.2-owner-name-only - 2026-07-18

- Commit: `9012bf9`
- Summary: Removed the owner portrait from the public website and kept the owner's name in a professional font treatment.
- Changed: Replaced the owner portrait figure with a styled `Samantha A. Nielsen` name label, removed the handwritten/cute caption styling, removed owner photo CSS, and removed the owner photo asset from the current site files.
- Files changed: `index.html`, `style.css`, `assets/owner-photo.jpg`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live page verified with text-only owner name, no owner photo reference, and removed photo asset returning `404`.
- Notes: Owner section copy remains unchanged; the visual owner treatment is now text-only.

### v0.16.1-core-brand-color-palette - 2026-07-18

- Commit: `f132f58`
- Summary: Adjusted the redesigned layout to use only the S&J core brand colors.
- Changed: Removed the extra coral, teal, violet, mint, peach, and lavender styling from the redesign and replaced it with sapphire blue, daffodil yellow, and related blue/yellow tints for section backgrounds, accents, shadows, cards, pricing rows, and buttons.
- Files changed: `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live stylesheet verified with sapphire/blue and daffodil/yellow palette and no old accent colors.
- Notes: Keeps the more colorful layout direction while aligning the palette with the canonical S&J colors.

### v0.16.0-unique-color-layout-redesign - 2026-07-18

- Commit: `a89b82b`
- Summary: Redesigned the full site layout and visual system while preserving the existing website content.
- Changed: Reworked the CSS for a more colorful, less generic layout with an angled hero treatment, stronger section rhythm, varied card accents, refreshed pricing styling, and updated owner/media presentation.
- Files changed: `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live redesigned stylesheet and preserved homepage content verified.
- Notes: Based on the SJDOS uniqueness guidance to avoid a generic template by using distinct color pairing, section rhythm, card styling, and simple interaction details while keeping current text, data, and media unchanged.

### v0.15.1-hero-offers-pricing - 2026-07-18

- Commit: `2c67507`
- Summary: Replaced the hero snapshot panel with offers and estimated pricing.
- Changed: Replaced the starter/pricing/built-by/support list with website, social media, brand label, business card, and pamphlet offer estimates.
- Files changed: `index.html`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live hero offers and estimated pricing panel verified.
- Notes: Estimates are intentionally concise in the hero; detailed website pricing remains in the pricing section.

### v0.15.0-social-media-services - 2026-07-18

- Commit: `5fce087`
- Summary: Added social media services to the website offering.
- Changed: Updated meta description, hero copy, pricing snapshot wording, services grid, and responsive card layout to include professional social media support.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live social media services copy verified.
- Notes: User requested social media services to be added in a professional way.

### v0.14.0-service-difference-section - 2026-07-18

- Commit: `bca2df0`
- Summary: Added a deployable-in-24-hours callout and service differentiation section.
- Changed: Added `Deployable in 24 hours` near the top of the hero, added a `Why S&J` navigation link, and added a section explaining hands-on 24/7 service, direct owner support, and a launch-focused process.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live 24-hour callout and service difference section verified.
- Notes: Requested by the user to explain how S&J is different than competitors and highlight full hands-on 24/7 service.

### v0.13.5-owner-photo-caption - 2026-07-18

- Commit: `0da32ba`
- Summary: Added a name caption under the owner portrait.
- Changed: Converted the owner photo to a floated figure and added `Samantha A. Nielsen` in a small handwritten-style caption under the image.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live owner portrait caption verified.
- Notes: Keeps the owner portrait in the top-right wrap layout while adding a small personal name label.

### v0.13.4-hero-small-business-copy - 2026-07-18

- Commit: `2ba51ff`
- Summary: Updated the hero headline and support copy.
- Changed: Rewrote the hero H1 to a cleaner modern message, added the line `A small business for small businesses.`, and slightly reduced the H1 size.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live hero headline and support line verified.
- Notes: Requested to make the main header more professional and modern.

### v0.13.3-real-competitor-pricing - 2026-07-18

- Commit: `abf7a68`
- Summary: Updated the pricing comparison sheet to compare S&J pricing against a real competitor.
- Changed: Reworked the comparison table to compare S&J plans against Jottful's published starting price and added a competitor reference note.
- Files changed: `index.html`, `style.css`, `CHANGES_LEDGER.md`
- Deployment: Pushed to `main`; live Jottful competitor comparison verified.
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

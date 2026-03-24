# The Gothic Folly — Process Notes

## 2026-03-23 — Initial website build

John asked for a landing page for The Gothic Folly, a Burning Man 2026 art installation — a monumental open-air structure inspired by Gothic cathedral architecture, built for the playa.

**Design direction:** Warm desert palette (sandy, burnt orange, gold, dark playa brown) combined with cathedral architecture motifs (pointed arches, rose windows, tracery). Explicitly NOT dark gothic — warm and desert-toned.

**Site purpose:** Landing page for community supporters — two CTAs: Donate and Volunteer/Join Crew.

**Instagram:** @thegothicfolly (note: project name is "Folly" not "Folley" — early typo in folder name)

**Files created:**
- `index.html` — full landing page (hero, about, gallery, support/forms, footer)
- `style.css` — warm desert + cathedral gold design system
- `script.js` — form handling, modal, smooth scroll

**Fonts:** Cinzel (display, cathedral feel) + Crimson Text (body, editorial)

**Gallery:** Placeholder slots — real renderings to be pulled from @thegothicfolly Instagram. Instagram scraping was attempted but blocked; images need to be manually downloaded and added.

**Forms:** Currently show a thank-you modal on submit (no backend). Need to wire up to a real payment processor (Stripe? Buy Me a Coffee?) and a volunteer intake system (Google Form? Airtable?) — TBD with John.

**Stats section** in About: height and crew count left as `??` — fill in when known.

## 2026-03-23 — Real renderings added to gallery

John shared two iCloud photo links (shared by Alex Noerpel):
- Single photo: `https://share.icloud.com/photos/062NSD-VKXy7_m0Ln1HtaveVw`
- Album of 5: `https://share.icloud.com/photos/023JRxWZHi4q4qJYNpI2ZanEQ`

**Download method:** iCloud photo share pages require JavaScript rendering — curl alone doesn't work. Used Playwright (Node.js, `playwright` npm package with Chromium) to intercept network responses and save image binaries directly. Script intercepted both CDN and blob URLs; kept the largest unique version of each.

**Images saved to `images/`:**
- `rendering_sunset_cathedral.jpg` (532K) — concept rendering, blue-purple sunset sky, people in foreground, "The Gothic Folly / Burning Man 2026 / Concept Rendering" text
- `rendering_golden_cathedral.jpg` (144K) — concept rendering, warm golden/amber lighting
- `rendering_fabric_cathedral.jpg` (66K) — concept rendering, fabric/canopy draped treatment
- `rendering_neon_cathedral.jpg` (600K) — real Burning Man photo, colorful neon-lit cathedral (reference/inspiration)
- `rendering_photo_neon.jpg` (73K) — real photo with @THEGOTHICFOLLY watermark, purple/pink neon
- `rose_window_outline.jpg` (83K) — rose window design, black & white outline
- `rose_window_color.jpg` (87K) — rose window design, colored (warm oranges/purples)

**Gallery wired up:** All 4 placeholder slots in `index.html` replaced with real images. Added `.gallery-img` CSS rule (`object-fit: cover`, fills container). Used sunset rendering for large slot, golden rendering + neon photo + rose window for smaller slots.

**Playwright MCP config:** Updated `~/.claude.json` global and project-level playwright MCP args to add `--browser chromium` (only Chromium is installed on Pi, not Chrome). Takes effect after Claude restart.

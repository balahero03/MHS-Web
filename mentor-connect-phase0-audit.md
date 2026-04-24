# Mentor Connect Phase 0 Audit Report

Date: 2026-04-24
Repository: MHS-Web
Audit status: Completed before feature edits

## 1) Detected framework type
- Framework/runtime: React single-page application
- Build tool: Vite (from package scripts and dev server output)
- Evidence:
  - Root has `vite.config.js`
  - Dev command starts `vite --host`
  - Entry point in `src/main.jsx` via `createRoot`

## 2) Detected router type
- Router: React Router (BrowserRouter + Routes)
- Routing mode: client-side SPA routing
- Evidence:
  - `src/App.jsx` imports `BrowserRouter as Router, Routes, Route`
  - Route table exists in `src/App.jsx` for `/`, `/about`, `/blogs`, `/resources`
- App Router (`/app`) detected: No
- Pages Router (`/pages`) detected: No

## 3) Styling system used
- Tailwind detected: No (`tailwind.config.js/cjs/ts` not present)
- CSS Modules detected: No (`*.module.css` not found)
- Primary styling approach:
  - Global stylesheet: `src/index.css`
  - CSS custom properties in `:root`
  - Utility via classNames + inline style objects in JSX
- Motion/interaction styling uses:
  - CSS transitions/keyframes in `src/index.css`
  - Framer Motion components in multiple JSX files

## 4) Palette variables extracted
From `src/index.css :root`:

### Core theme variables
- `--primary: #1155cc`
- `--secondary: #3b82f6`
- `--accent: #8b5cf6`
- `--text-main: #1155cc`
- `--text-dim: #64748b`
- `--bg-white: #ffffff`
- `--bg-soft: #f8fafc`
- `--border: #e2e8f0`

### Math accent variables
- `--math-blue: #2563eb`
- `--math-green: #059669`
- `--math-purple: #7c3aed`
- `--math-orange: #ea580c`

### Pastel overlay variables
- `--p-blue: rgba(186, 215, 255, 0.4)`
- `--p-green: rgba(187, 247, 208, 0.4)`
- `--p-purple: rgba(216, 180, 254, 0.4)`
- `--p-orange: rgba(254, 215, 170, 0.4)`

## 5) Typography scale detected
### Font family tokens
- `--font-main: 'Plus Jakarta Sans', sans-serif`
- `--font-heading: 'Outfit', sans-serif`
- `--font-mono: 'Fira Code', monospace`

### Baseline text
- `body`: `font-family: var(--font-main)`, `line-height: 1.6`

### Heading and label patterns in active pages/components
- Brand primary (`.mhs-name-main`): `4.5rem`, weight `800`, letter-spacing `-2px`
- Tagline (`.mhs-tagline`): `0.75rem`, weight `700`, letter-spacing `5px`, uppercase
- Nav links (`.nav-links a`): `0.8rem`, weight `700`, letter-spacing `1.5px`, uppercase
- Society page major heading (`h2` inline): `clamp(2.5rem, 8vw, 4.5rem)`, weight `900`, letter-spacing `-2px`, line-height `1.1`
- Supporting labels use compact mono/body sizes around `0.75rem` to `0.9rem`

### Weight usage observed
- Common weights in use: `400, 500, 600, 700, 800, 900`

## 6) Navbar dropdown presence
- Desktop dropdown: Not present
- Mobile dropdown: Present
- Pattern found:
  - Toggle state: `menuOpen` in `src/App.jsx`
  - Animated container: `mobile-nav-dropdown`
  - Item list classes: `dropdown-list`, `dropdown-item`, `dropdown-circle`, `dropdown-label`
  - Animation: Framer Motion `AnimatePresence` + `Motion.div`

## 7) Footer structure summary
Footer is implemented inside `src/App.jsx` (not a standalone Footer component).

### Current major blocks
- Top footer wrapper: `.main-footer`
- Content container: `.footer-content-container`
- Branding block:
  - Logo (`<Logo minimized />`)
  - Intro paragraph (`.footer-intro-text`)
- Grid block (`.footer-grid`) with three content columns:
  - About the Institution
  - Department of Mathematics
  - Contact & Location + Quick Links
- Bottom bar:
  - `.footer-copyright-bar`
  - `.footer-bottom` with two short text lines

## 8) Reusable components inventory
Detected in `src/components`:
- `CoordinateCursor.jsx`
- `GlobalBackground.jsx`
- `Logo.jsx`
- `MemberCard.jsx`
- `ProblemOfTheWeek.jsx`
- `ScrollToTop.jsx`
- `StackedModal.jsx`

Audit against requested reusable types:
- Reusable Card component: Yes (`MemberCard`)
- Reusable Button component: No generic shared button component found
- Reusable Section/PageWrapper component: Not found
- Shared Navbar component: Not found (navbar markup is inside `src/App.jsx`)
- Shared Footer component: Not found (footer markup is inside `src/App.jsx`)

## 9) Form component presence
- Reusable shared form component: Not found
- Native form elements exist:
  - `src/pages/Resources.jsx` contains search `<input>`
  - `src/components/ProblemOfTheWeek.jsx` contains `<Motion.form>` and `<input>`

## 10) Animation utilities presence
- Framer Motion present and actively used:
  - `AnimatePresence`
  - `motion` (`Motion.*`) with transitions/springs
- CSS animation present:
  - `@keyframes float` in `src/index.css`
  - Transition-heavy interactive classes (nav, dropdown, cards, carousel controls)
- No external animation frameworks beyond Framer Motion detected in current source scan

## Phase 0 conclusion
- Phase 0 audit is complete and documented.
- No feature implementation edits have been made after this audit request.
- Next step can start only after explicit go-ahead to proceed to Phase 1+ changes under strict parity mode.

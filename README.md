# KAICON — Website Project

> **Fostering Development & Empowering Industries**
> East Africa's premier integrated infrastructure, industrial supply, and logistics company.

---

## 🌐 Live Repository
[github.com/francismees/kaicon](https://github.com/francismees/kaicon)

---

## 📁 Project Structure

```
kaicon/
├── index.html                  # Homepage
├── about.html                  # About Us page
├── services.html               # Services page
├── projects.html               # Portfolio/Projects listing page
├── excellence.html             # HSE Excellence page
├── contact.html                # Contact Us page
│
├── project-nida.html           # NIDA Data Centers — case study
├── project-tia.html            # Tanzania Institute of Accountancy — case study
├── project-pemba.html          # ZISP Pemba Schools — case study
├── project-iringa.html         # Iringa Modern Market — case study
├── project-shinyanga.html      # Shinyanga Abattoir — case study
├── project-geita.html          # Geita Power Station — case study
├── project-peninsular.html     # Peninsular Residence 5895 — case study
├── project-luanda.html         # Luanda Commercial Tower — case study
├── project-kigogo.html         # Kigogo Mixed-Use Complex — case study
│
├── css/
│   ├── reset.css               # CSS reset
│   ├── variables.css           # Design tokens (colors, typography, spacing)
│   ├── global.css              # Base typography, @font-face, buttons, utilities
│   └── components.css          # Navbar, footer, cards, filters, etc.
│
├── js/
│   ├── main.js                 # Navigation, mobile menu, scroll behaviours
│   ├── animations.js           # Scroll-reveal animations
│   ├── counters.js             # Animated stat counters
│   └── projects.js             # Portfolio filter (All / Government / Commercial / Industrial)
│
└── assets/
    ├── logo/
    │   └── kaicon-logo.svg     # Official brand logo (blue/red)
    └── fonts/
        ├── eurostile/          # Eurostile Extended WOFF2 files (5 weights)
        └── satoshi/            # Satoshi WOFF2 files (10 weights)
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary font (headings)** | Eurostile Extended |
| **Body font** | Satoshi |
| **Navy** | `#003B71` |
| **Red** | `#CE0E2D` |
| **White** | `#FFFFFF` |
| **Gypsum (light bg)** | `#F5F5F0` |
| **Grey** | `#D9D9D6` |

### Icons
Google Material Symbols Outlined — loaded via CDN with custom variation settings:
- **Weight:** 200 · **Grade:** -25 · **Optical Size:** 24

---

## ✅ Session Summary — 28 February 2026

### 1. File & Folder Organisation
- Created the `kaicon/` project directory and moved all website files into it from the root workspace.

### 2. Card Spacing Fix
- Corrected uneven internal padding on the service/project cards to achieve a clean, symmetrical layout.

### 3. Hero Layout Fix
- Reduced the hero headline (`Fostering Development & Empowering Industries`) font sizes so the ampersand no longer wraps to its own line on desktop.

### 4. Google Material Symbols Integration
- Added the Material Symbols Outlined font via Google Fonts CDN to all 6 pages.
- Replaced all emoji icons site-wide with Material Symbol equivalents (countries section on Contact page intentionally left as emoji).
- Fixed a CSS reset conflict (`font: inherit`) that was disabling ligatures, breaking icon rendering. Added `font-feature-settings: 'liga' 1 !important` to the icon class.
- Fixed a CDN link injection failure that left 5 of the 6 pages without the font — patched with a Python script.

### 5. HSE Excellence Page
- Removed the image from the HSE card grid so the 3 cards span evenly across the full row.

### 6. Icon Visibility & Colour Fixes
- **About page — Mission/Vision/Values section:** Icons were invisible against the dark navy/red card backgrounds. Set explicit `color: white` and increased `font-size` so they're clearly visible.
- **Contact page — Contact Details cards:** Icons were unstyled. Set `color: var(--red)` and increased `font-size` to `2.2rem`.
- **Footer contact icons:** Increased `font-size` to `1.3rem` and added proper flex alignment.

### 7. GitHub Setup & Deployment
- Initialised a Git repository inside `kaicon/`, ran initial commit of all 15 files.
- Added remote origin and pushed to `github.com/francismees/kaicon` on the `main` branch.
- All subsequent changes were committed and pushed in logical, descriptive commits.

### 8. Portfolio Case Study Pages (9 new pages)
- Designed a full-featured project case study HTML template with:
  - Fullscreen hero with overlay
  - Project description + challenge + solution narrative
  - Quick Facts sidebar (Client, Location, Sector, Services, Completion)
  - 3-image gallery strip
  - "Up Next" navigation banner to the next project
- Generated all 9 individual project pages from the template using a Python script with project-specific content.
- Updated `projects.html` to wrap each portfolio card in an `<a>` tag linking to the correct case study page.

### 9. Navbar Branding Refresh
- Changed the navbar background from semi-transparent **navy** to solid **white** so the KAICON logo renders in its original blue/red brand colours.
- Removed the `filter: brightness(0) invert(1)` style from the logo `<img>` across all 15 HTML files.
- Updated nav link colour to **navy**, with **red** hover underline and red hover text.
- Updated the mobile hamburger icon and the mobile menu background/borders to match the new light navbar.

### 10. Button Text Centering
- The uppercase text in the `CONTACT US` button appeared optically high. Fixed by adjusting `padding` from `0.9rem 2.2rem` to `1rem 2.2rem 0.8rem` — extra top padding balances the absence of lowercase descenders.

### 11. Font Loading Fix (Live Site)
**Root cause:** The `@font-face` rules in `global.css` referenced `../../Fonts/` — a path outside the project directory that only resolved locally and was never committed to Git, causing the live site to fall back to system fonts.

**Fix applied:**
- Used Python (`fontTools` + `brotli`) to convert all 15 font files (5 Eurostile Extd + 10 Satoshi) from `.otf` → `.woff2`.
- Placed the WOFF2 files inside the project at `assets/fonts/eurostile/` and `assets/fonts/satoshi/`.
- Rewrote all `@font-face` declarations to reference the new relative paths.
- Committed and pushed the 15 new font files to GitHub.

### 12. Mobile Hero Ampersand Fix
- On narrow screens, `&` was wrapping to its own line.
- Wrapped `& Empowering` in `<span style="white-space:nowrap">` to keep it glued to the adjacent word.
- Reduced the minimum `clamp()` font size for the hero title from `2rem` to `1.8rem` for additional responsive breathing room.

---

## 🔧 Local Development

No build tools required. Open any `.html` file directly in a browser. For live-reload development, use VS Code Live Server or:

```sh
npx serve .
```

---

## 📤 Deployment

The site is deployed as a static HTML site via **GitHub Pages** from the `main` branch of `github.com/francismees/kaicon`.

To push updates:
```sh
git add .
git commit -m "description of changes"
git push origin main
```

---

*KAICON website developed by Everything Dope. © 2026 KAICON. All rights reserved.*

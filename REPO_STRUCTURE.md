# Nexus-UI Repository Structure

## Branch Organization

### 📌 `main` Branch

**Purpose:** Source code, documentation, and development
**Contains:**

- `src/` - Source code (SCSS + TypeScript)
- `dist/` - Compiled output (CSS + JS minified)
- `examples/` - Example HTML files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `README.md` - Main documentation
- `CDN_USAGE.md` - CDN usage guide
- `cdn-test.html` - Quick CDN test
- `test-cdn.html` - Comprehensive test

**What developers see:** Full project with source code, build tools, and documentation

---

### 🚀 `gh-pages` Branch

**Purpose:** Public CDN serving (GitHub Pages automatic deployment)
**Contains:**

- `index.css` - Compiled CSS (~143KB minified)
- `index.js` - Compiled JavaScript
- `components/` - Individual component modules
- `utils/` - Utility modules
- `dist/` - Redundant copy of dist folder

**What users access via CDN:**

```
https://semsakadanupol.github.io/Nexus-Ui/index.css
https://semsakadanupol.github.io/Nexus-Ui/index.js
https://semsakadanupol.github.io/Nexus-Ui/components/Modal.js
https://semsakadanupol.github.io/Nexus-Ui/utils/theme.js
```

**Deployment:** Automatic via GitHub Actions when main branch is pushed

---

## Build & Deployment Pipeline

### Flow:

```
1. Developer modifies src/
   ↓
2. npm run build (SCSS + TypeScript compilation)
   ↓
3. dist/ folder updated locally
   ↓
4. git add dist/
   ↓
5. git commit -m "..."
   ↓
6. git push origin main
   ↓
7. GitHub Actions workflow triggered (.github/workflows/deploy.yml)
   ↓
8. Checkout main → Install → Build → Deploy to gh-pages
   ↓
9. GitHub Pages serves gh-pages branch via CDN
   ↓
10. Users access via https://semsakadanupol.github.io/Nexus-Ui/
```

---

## File Locations

### Source Code Location (Main Branch)

```
src/
├── index.ts                          # Entry point
├── components/
│   ├── Modal.ts
│   ├── Navbar.ts
│   ├── Carousel.ts
│   ├── Dropdown.ts
│   ├── Tooltip.ts
│   └── Offcanvas.ts
├── styles/
│   ├── index.scss                    # Main SCSS import
│   ├── _variables.scss               # Design tokens
│   ├── _themes.scss                  # Theme system (3 themes)
│   ├── utilities/
│   │   ├── _spacing.scss
│   │   ├── _colors.scss
│   │   ├── _typography.scss
│   │   ├── _transforms.scss          (NEW) Rotate, scale, skew
│   │   ├── _filters.scss             (NEW) Blur, grayscale, brightness
│   │   ├── _advanced-sizing.scss     (NEW) Aspect ratio, object-fit
│   │   ├── _text-effects.scss        (NEW) Text shadows, decoration
│   │   ├── _dynamic-arbitrary.scss   (NEW) w-100px, h-150px, etc.
│   │   └── ... (10+ more)
│   └── components/
│       ├── _buttons.scss
│       ├── _modals.scss
│       ├── _tables.scss              (NEW)
│       ├── _badges-progress-spinners.scss (NEW)
│       └── ... (more)
└── utils/
    ├── theme.ts                      # Theme manager (Tailwind-like)
    ├── arbitrary.ts                  (NEW) Dynamic utility generator
    ├── dom.ts                        # DOM utilities
    └── events.ts                     # Event utilities
```

### Compiled Output Location (Both Branches)

```
dist/
├── index.css                          # All utilities + components (143KB)
├── index.css.map                      # Source map
├── index.js                           # Compiled TypeScript entry
├── index.d.ts                         # TypeScript definitions
├── components/                        # Individual component modules
│   ├── Modal.js
│   ├── Modal.d.ts
│   ├── Navbar.js
│   └── ...
└── utils/                             # Utility modules
    ├── theme.js
    ├── arbitrary.js
    ├── dom.js
    └── ...
```

---

## CDN Content Details

### CSS File (143KB)

✅ Includes:

- 500+ utility classes
- Dynamic arbitrary utilities (w-100px, h-150px, p-24px, etc.)
- All component styles (buttons, cards, modals, tables, badges, etc.)
- Theme system CSS variables (light, dark, system modes)
- Responsive breakpoints (desktop-first)
- Animations and transitions

### JavaScript File (623 bytes, minified)

✅ Exports:

- ThemeManager (theme switching + design token management)
- Modal, Navbar, Carousel, Dropdown, Tooltip, Offcanvas ({components)
- Arbitrary utility builder functions
- DOM utilities
- Event utilities

---

## GitHub Pages Configuration

**Repository Settings:**

- Publishing source: Deploy from a branch
- Branch: `gh-pages`
- Domain: https://semsakadanupol.github.io/Nexus-Ui/

**GitHub Actions Workflow:** `.github/workflows/deploy.yml`

- Triggers on: `push` to `main` branch
- Steps:
  1. Checkout code
  2. Setup Node.js 18
  3. Install dependencies
  4. Run `npm run build`
  5. Deploy to `gh-pages` using peaceiris/actions-gh-pages

---

## Development Workflow

### To Make Changes:

```bash
# 1. Edit source files
nano src/styles/utilities/_dynamic-arbitrary.scss

# 2. Build locally
npm run build

# 3. Test locally
open examples/index.html

# 4. Commit to main
git add .
git commit -m "Update utilities"
git push origin main

# 5. GitHub Actions automatically deploys to gh-pages
# CDN updates within seconds
```

---

## Quick Reference

| What          | Where                         | URL                                            |
| ------------- | ----------------------------- | ---------------------------------------------- |
| Source Code   | `main` branch → `src/`        | N/A                                            |
| Built CSS     | `main` + `gh-pages` → `dist/` | https://semsakadanupol.github.io/.../index.css |
| Built JS      | `main` + `gh-pages` → `dist/` | https://semsakadanupol.github.io/.../index.js  |
| Documentation | `main` → `CDN_USAGE.md`       | https://github.com/.../blob/main/CDN_USAGE.md  |
| Test Files    | `main` → `.html` files        | Local or Raw GitHub                            |
| Public API    | `gh-pages` → root files       | GitHub Pages URL                               |

---

## Status ✅

- ✅ CSS CDN: Live and working (200 OK, ~143KB)
- ✅ JS CDN: Live and working (200 OK, ~623B)
- ✅ Components accessible: Modal, Navbar, Carousel, etc.
- ✅ Theme system: Light/Dark/System modes
- ✅ 500+ utilities: All compiled and available
- ✅ Automated deployment: GitHub Actions working
- ✅ Documentation: CDN_USAGE.md and test files available

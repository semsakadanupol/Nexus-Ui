# Nexus-UI Framework - Development Guide

This is the Nexus-UI Framework - a desktop-first utility CSS framework with TypeScript components.

## Project Setup

The project has been fully scaffolded with:

- TypeScript configuration
- SCSS utility-first CSS system
- React-like TypeScript components (Modal, Navbar, Carousel, Dropdown, Tooltip, Offcanvas)
- Comprehensive documentation
- Example HTML file

## Build Commands

- `npm install` - Install dependencies
- `npm run dev` - Watch mode for development (SCSS + TypeScript)
- `npm run build` - Build production minified CSS and JS
- `npm run build:css` - Build CSS only
- `npm run build:ts` - Build TypeScript only
- `npm run clean` - Remove dist folder

## Project Structure

```
nexus-ui/
├── src/
│   ├── index.ts                 # Main entry point
│   ├── styles/
│   │   ├── index.scss           # Main SCSS entry
│   │   ├── _variables.scss      # Design tokens
│   │   ├── _mixins.scss         # SCSS utilities
│   │   ├── _reset.scss          # Normalize/Reset
│   │   ├── utilities/           # Utility classes
│   │   │   ├── _spacing.scss
│   │   │   ├── _colors.scss
│   │   │   ├── _sizing.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _flexbox.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _positioning.scss
│   │   │   ├── _display.scss
│   │   │   ├── _borders.scss
│   │   │   └── _shadows.scss
│   │   └── components/          # Component styles
│   │       ├── _buttons.scss
│   │       ├── _cards.scss
│   │       ├── _modals.scss
│   │       └── _navbars.scss
│   └── components/              # TypeScript components
│       ├── Modal.ts
│       ├── Navbar.ts
│       ├── Carousel.ts
│       ├── Dropdown.ts
│       ├── Tooltip.ts
│       └── Offcanvas.ts
├── dist/                        # Built output (generated)
├── examples/
│   └── index.html               # Demo page
├── package.json
├── tsconfig.json
├── README.md                    # Full documentation
└── .gitignore

## Key Features

### Desktop-First Responsive Design
- Uses `max-width` media queries (opposite of mobile-first)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Prefix classes with breakpoint: `md:text-lg`, `sm:grid-cols-1`

### Utility Classes (Tailwind-like)
- Spacing: `m-`, `p-`, `gap-` (xs, sm, md, lg, xl, 2xl, 3xl)
- Colors: `text-`, `bg-`, `border-` (primary, secondary, success, etc.)
- Typography: `text-`, `font-`, `leading-`, `tracking-`
- Layout: `flex`, `grid`, `block`, `hidden`
- And many more!

### TypeScript Components (Bootstrap-like)
All components support instance methods like:
- Modal: show(), hide(), toggle()
- Navbar: setActive()
- Carousel: next(), prev(), go(), start(), pause()
- Dropdown: show(), hide(), toggle()
- Tooltip: show(), hide(), update(), dispose()
- Offcanvas: show(), hide(), toggle()

## Development Workflow

1. **Modify SCSS**: Edit files in `src/styles/`
2. **Run dev watch**: `npm run dev`
3. **View changes**: CSS compiles to `dist/nexus-ui.css`
4. **Modify TypeScript**: Edit files in `src/components/`
5. **Test in browser**: Open `examples/index.html`

## Variable Customization

All design tokens are in `src/styles/_variables.scss`:
- Colors, spacing, typography sizes, border radius, shadows, breakpoints

To customize, edit variables and rebuild.

## Important Notes

- Framework is desktop-first, not mobile-first
- All utilities are responsive with breakpoint prefixes
- Components require manual JavaScript initialization
- CSS is modular - only import what you need
- No CSS-in-JS, pure SCSS compilation

## Next Steps

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. View example: Open `examples/index.html` in browser
4. Build for production: `npm run build`
5. Customize: Edit variables in `src/styles/_variables.scss`
```

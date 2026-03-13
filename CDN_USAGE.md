# Nexus-UI CDN Usage Guide

## Quick Start

### CSS CDN

```html
<link
  rel="stylesheet"
  href="https://semsakadanupol.github.io/Nexus-Ui/index.css"
/>
```

### JavaScript Module CDN

```html
<script type="module">
  import {
    ThemeManager,
    Modal,
    Carousel,
  } from "https://semsakadanupol.github.io/Nexus-Ui/index.js";

  // Initialize theme
  ThemeManager.init();
  ThemeManager.setTheme("light");
</script>
```

## Available Utilities

### Dynamic Utilities (Arbitrary Values)

- **Width:** `w-100px`, `w-150px`, `w-200px`, `w-50rem` (1-200px, 1-50rem)
- **Height:** `h-100px`, `h-150px` (1-200px)
- **Padding:** `p-16px`, `p-24px`, `p-2rem` (1-100px, 1-20rem)
- **Gap:** `gap-16px`, `gap-12px` (1-100px, 1-20rem)
- **Max-Width:** `max-w-1200px`, `max-w-80rem`
- **Margin:** `m-16px`, `mt-12px`, `mb-8px`

### Colors

- **Text:** `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-info`
- **Background:** `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`
- **Border:** `border-primary`, `border-2px`, `border-success`

### Spacing (Standard)

`p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`, `p-2xl`, `p-3xl` (padding)
`m-xs`, `m-sm`, `m-md`, `m-lg`, `m-xl`, `m-2xl`, `m-3xl` (margin)

### Components

- **Buttons:** `btn btn-primary`, `btn btn-secondary`, `btn btn-outline`
- **Cards:** `card`
- **Tables:** `table`, `table-striped`, `table-bordered`, `table-hover`
- **Badges:** `badge badge-primary`, `badge badge-success`
- **Progress:** `progress-bar`
- **Spinners:** `spinner`

### Advanced Utilities

- **Transforms:** `rotate-45`, `scale-150`, `skew-12`
- **Filters:** `blur-4px`, `grayscale`, `brightness-150`
- **Text Effects:** `uppercase`, `lowercase`, `capitalize`, `underline`
- **Opacity:** `opacity-100`, `opacity-75`, `opacity-50`

## Theme System

### 3 Themes Available

1. **light** - Light mode (blue primary)
2. **dark** - Dark mode (light blue primary)
3. **system** - Follows OS preference

### Usage

```javascript
import { ThemeManager } from "https://semsakadanupol.github.io/Nexus-Ui/index.js";

// Initialize
ThemeManager.init(); // Uses saved or system preference

// Set theme
ThemeManager.setTheme("light");
ThemeManager.setTheme("dark");
ThemeManager.setTheme("system");

// Toggle
ThemeManager.toggle(); // light ↔ dark

// Cycle
ThemeManager.cycle(); // light → dark → system

// Listen for changes
ThemeManager.onChange((theme) => {
  console.log("Theme changed to:", theme);
});

// Get current
console.log(ThemeManager.getTheme());
```

### CSS Variables (Design Tokens)

All colors are CSS variables that update with the theme:

```css
--color-primary
--color-secondary
--color-accent
--color-success
--color-warning
--color-danger
--color-info
--color-text
--color-background
```

## Working Examples

### File: cdn-test.html

Simple test page showing:

- CSS loading status
- JS module loading status
- Theme switching buttons
- Working utilities and components

Open this file in a browser to verify the CDN is working.

### File: test-cdn.html

Comprehensive test page with:

- All sections of utilities
- Components demonstration
- Theme system examples
- Console debugging info

## Responsive Breakpoints (Desktop-First)

- **sm:** 640px (max-width)
- **md:** 768px (max-width)
- **lg:** 1024px (max-width)
- **xl:** 1280px (max-width)
- **2xl:** 1536px (max-width)

Usage: `md:grid-cols-2` (2 columns, down from 3 on tablet)

## Build Output Files

- `dist/index.css` - 143KB minified CSS (500+ utilities + components)
- `dist/index.js` - Compiled TypeScript modules
- `dist/components/` - Individual component modules
- `dist/utils/` - Utility modules

## Notes

- CSS is pre-compiled and ready to use
- JavaScript uses ES6 modules (requires `type="module"`)
- All color utilities use CSS variables for theme support
- Arbitrary utilities generated for 1-200px and 1-50rem ranges
- Dynamic utilities compile on-demand using SCSS loops

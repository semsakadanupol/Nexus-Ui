# Nexus-UI Framework

A modern, desktop-first utility-first CSS framework with built-in TypeScript components, inspired by Tailwind CSS and Bootstrap.

## Features

- 🎨 **Utility-First CSS**: Like Tailwind CSS with comprehensive utility classes
- 🖥️ **Desktop-First Responsive**: Starts with desktop styling and scales down (opposite of mobile-first)
- ✨ **Built-in Animations**: 13+ pre-built animations with utility classes (fade, slide, scale, bounce, pulse, spin, etc.)
- 🌓 **Theme System**: Light, dark, and high-contrast themes with smooth transitions and CSS variables
- 🧩 **TypeScript Components**: Built-in JavaScript components similar to Bootstrap
- 📦 **Lightweight**: Modular and tree-shakeable
- ♿ **Accessible**: WCAG compliant components
- 🎯 **Customizable**: Easy to extend and customize

## Installation

```bash
npm install nexus-ui
```

## Quick Start

### 1. Import CSS

```html
<link rel="stylesheet" href="node_modules/nexus-ui/dist/nexus-ui.css" />
```

### 2. Use Utility Classes

```html
<div class="flex items-center justify-between p-lg gap-md">
  <h1 class="text-2xl font-bold text-primary">Hello World</h1>
  <button class="btn btn-primary">Click me</button>
</div>
```

### 3. Use Components with TypeScript

```typescript
import { Modal, Navbar } from "nexus-ui";

// Initialize modal
const modal = new Modal("#myModal");
modal.show();

// Initialize navbar
const navbar = new Navbar("#myNavbar");
navbar.setActive(".nav-link");
```

## Documentation

### Utility Classes

#### Spacing

- `m-*` - Margin
- `p-*` - Padding
- `gap-*` - Gap (flexbox/grid)

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

```html
<div class="m-lg p-md gap-sm">...</div>
```

#### Colors

- `text-*` - Text color
- `bg-*` - Background color
- `border-*` - Border color

Available colors: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `neutral`

```html
<div class="text-primary bg-light border-secondary">...</div>
```

#### Typography

- `text-*` - Font size
- `font-*` - Font weight
- `leading-*` - Line height
- `tracking-*` - Letter spacing

```html
<p class="text-lg font-semibold leading-relaxed">...</p>
```

#### Flexbox

- `flex` - Display flex
- `flex-col`, `flex-row` - Direction
- `justify-*` - Justify content
- `items-*` - Align items
- `gap-*` - Gap

```html
<div class="flex flex-col justify-center items-center gap-md">...</div>
```

#### Grid

- `grid` - Display grid
- `grid-cols-*` - Template columns
- `gap-*` - Gap

```html
<div class="grid grid-cols-3 gap-lg">...</div>
```

#### Responsive Utilities

All utilities support responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

```html
<!-- Desktop: 2 columns, Tablet: 1 column -->
<div class="grid grid-cols-2 md:grid-cols-1 gap-lg">...</div>
```

### Components

#### Button

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary btn-lg">Large Secondary</button>
<button class="btn btn-danger btn-outline">Outline Danger</button>
<button class="btn btn-success btn-block">Full Width</button>
```

Button sizes: `btn-xs`, `btn-sm`, `btn-lg`, `btn-xl`

Button variants: `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`

#### Card

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Card content goes here</p>
  </div>
  <div class="card-footer">
    <a href="#" class="card-link">Learn more</a>
  </div>
</div>
```

#### Modal

```html
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>Modal Title</h2>
      <button class="modal-close" data-dismiss="modal">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

<script>
  const modal = new Modal("#myModal");
  modal.show();
</script>
```

#### Navbar

```html
<nav class="navbar navbar-light">
  <div class="navbar-brand">MyBrand</div>
  <button class="navbar-toggler">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a href="#" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">About</a>
    </li>
  </ul>
</nav>

<script>
  const navbar = new Navbar(".navbar");
</script>
```

#### Carousel

```html
<div id="myCarousel" class="carousel" data-ride="carousel">
  <div class="carousel-item active">
    <img src="...-" alt="..." />
  </div>
  <div class="carousel-item">
    <img src="..." alt="..." />
  </div>

  <button class="carousel-control-prev">❮</button>
  <button class="carousel-control-next">❯</button>
</div>

<script>
  const carousel = new Carousel("#myCarousel", { interval: 5000 });
</script>
```

### Colors

Primary color palette:

- `$primary` - #2563eb (Blue)
- `$secondary` - #8b5cf6 (Purple)
- `$success` - #10b981 (Green)
- `$danger` - #ef4444 (Red)
- `$warning` - #f59e0b (Amber)
- `$info` - #0ea5e9 (Cyan)

### Breakpoints (Desktop-First)

- `2xl` - 1536px and below
- `xl` - 1280px and below
- `lg` - 1024px and below
- `md` - 768px and below
- `sm` - 640px and below

## TypeScript API

### Modal

```typescript
import { Modal } from "nexus-ui";

const modal = new Modal("#myModal", {
  backdrop: true, // Show backdrop
  keyboard: true, // Close on Esc
});

modal.show();
modal.hide();
modal.toggle();

// Get existing instance
const instance = Modal.getInstance("#myModal");
```

### Navbar

```typescript
import { Navbar } from "nexus-ui";

const navbar = new Navbar("#myNavbar");
navbar.setActive(".nav-link");
```

### Carousel

```typescript
import { Carousel } from "nexus-ui";

const carousel = new Carousel("#myCarousel", {
  interval: 5000, // Auto-slide every 5 seconds
  keyboard: true, // Arrow key support
  pause: "hover", // Pause on hover
  ride: "carousel", // Auto-start
});

carousel.next();
carousel.prev();
carousel.go(2); // Go to index 2
carousel.start();
carousel.pause();
```

### Dropdown

```typescript
import { Dropdown } from "nexus-ui";

const dropdown = new Dropdown("#myDropdown");
dropdown.show();
dropdown.hide();
dropdown.toggle();
```

### Tooltip

```typescript
import { Tooltip } from "nexus-ui";

const tooltip = new Tooltip("#element", {
  title: "Hello!",
  placement: "top", // top, right, bottom, left
  trigger: "hover", // hover, click, focus
});

tooltip.show();
tooltip.hide();
tooltip.update("New title");
tooltip.dispose();
```

### Offcanvas

```typescript
import { Offcanvas } from "nexus-ui";

const offcanvas = new Offcanvas("#myOffcanvas", {
  backdrop: true,
  keyboard: true,
  scroll: false,
});

offcanvas.show();
offcanvas.hide();
offcanvas.toggle();
```

### Animations

Apply pre-built animations with utility classes:

```html
<!-- Entrance animations -->
<div class="animate-fade-in">Fades in smoothly</div>
<div class="animate-slide-up">Slides up on load</div>
<div class="animate-slide-right">Slides right with fade</div>
<div class="animate-scale-in">Scales up smoothly</div>

<!-- Continuous animations -->
<div class="animate-bounce">Bounces up and down</div>
<div class="animate-pulse">Pulses opacity</div>
<div class="animate-spin">Spins 360°</div>
<div class="animate-glow">Glows with box-shadow</div>

<!-- With delays -->
<div class="animate-slide-up animate-delay-base">Delayed slide</div>

<!-- Exit animations -->
<div class="animate-fade-out">Fades out on exit</div>
<div class="animate-slide-out-down">Slides down on exit</div>
```

Available animations: `fade-in`, `fade-out`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `slide-out-up`, `slide-out-down`, `slide-out-left`, `slide-out-right`, `scale-in`, `scale-out`, `bounce`, `pulse`, `spin`, `wiggle`, `shake`, `heartbeat`, `glow`

See [ANIMATIONS_THEMES.md](./ANIMATIONS_THEMES.md) for complete animation documentation.

### Theme System

Nexus-UI includes three built-in themes: **light**, **dark**, and **high-contrast**.

#### Switching Themes with JavaScript

```typescript
import { ThemeManager } from "nexus-ui";

// Set theme
ThemeManager.setTheme("dark");

// Get current theme
console.log(ThemeManager.getTheme()); // "dark"

// Toggle between light and dark
ThemeManager.toggle();

// Cycle through all themes
ThemeManager.cycle();

// Listen for changes
ThemeManager.onChange((theme) => {
  console.log("Theme changed to:", theme);
});
```

#### Using Themes in HTML

```html
<!-- Set theme with data attribute -->
<html data-theme="light">
  <!-- or -->
  <html data-theme="dark">
    <!-- or -->
    <html data-theme="high-contrast"></html>

    <!-- Use theme-aware color utilities -->
    <div class="bg-primary text-white">Adapts to theme</div>
    <button class="btn btn-primary">Theme-aware button</button>
  </html>
</html>
```

#### Theme Features

- **Automatic persistence** - Theme choice saved to localStorage
- **System preference detection** - Respects `prefers-color-scheme`
- **Smooth transitions** - Colors animate smoothly when switching
- **CSS Variables** - All colors use CSS custom properties for easy customization
- **High contrast mode** - WCAG AAA compliant for accessibility

See [ANIMATIONS_THEMES.md](./ANIMATIONS_THEMES.md) for complete theme documentation.

## Building

### Development

```bash
npm run dev
```

Watches SCSS and TypeScript files for changes.

### Production

```bash
npm run build
```

Generates minified CSS and compiled JavaScript.

## Customization

### Override Variables

Create `_custom.scss`:

```scss
$primary: #ff0000;
$font-size-base: 18px;

@import "nexus-ui/src/styles/index";
```

Then compile:

```bash
sass _custom.scss dist/custom.css
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
# Updated

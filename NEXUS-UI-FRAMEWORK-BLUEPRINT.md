# Nexus-UI Framework: Complete Technical Blueprint

**Version:** 2.0 | **Last Updated:** March 2026  
**Status:** Production-Ready | **License:** MIT

---

## 📋 Table of Contents

1. [Executive Summary](#-executive-summary)
2. [Core Philosophy](#-core-philosophy)
3. [Framework Architecture](#-framework-architecture)
4. [Utility-First Styling System](#-utility-first-styling-system)
5. [Responsive Design & Breakpoints](#-responsive-design--breakpoints)
6. [Component Ecosystem](#-component-ecosystem)
7. [JavaScript Utilities & Interactivity](#-javascript-utilities--interactivity)
8. [Template System & Scaffolding](#-template-system--scaffolding)
9. [Modular Architecture](#-modular-architecture)
10. [Customization & Configuration](#-customization--configuration)
11. [Developer Tools & CLI](#-developer-tools--cli)
12. [Animations & Transitions](#-animations--transitions)
13. [Theme System](#-theme-system)
14. [Comparison with TailwindCSS & Bootstrap](#-comparison-with-tailwindcss--bootstrap)
15. [Getting Started](#-getting-started)

---

## 📌 Executive Summary

**Nexus-UI** is a revolutionary UI framework that bridges the gap between utility-first styling (TailwindCSS) and component-based ecosystems (Bootstrap). It combines:

- **Utility-first power:** 500+ dynamic utility classes for rapid UI development
- **Pre-built components:** 15+ interactive components with built-in TypeScript
- **Desktop-first design:** Optimized for PC development with max-width media queries
- **Modern theming:** Built-in light, dark, and high-contrast themes with CSS variables
- **TypeScript-first:** Full type safety for all components and utilities
- **Zero runtime overhead:** Ships as pure CSS + optional WebComponents
- **Developer-focused:** Intuitive API, excellent documentation, built-in tools

### Why Nexus-UI?

| Aspect                     | TailwindCSS      | Bootstrap       | Nexus-UI                           |
| -------------------------- | ---------------- | --------------- | ---------------------------------- |
| **Styling Approach**       | Utility-first    | Component-based | Utility + Components               |
| **Learning Curve**         | Moderate         | Steep           | Gentle                             |
| **Component Scripts**      | None (3rd party) | Included        | Included & Typed                   |
| **Desktop-First**          | ❌ Mobile-first  | ❌ Mobile-first | ✅ PC-first                        |
| **Dark Mode**              | Manual setup     | Limited         | ✅ Built-in, 3 themes              |
| **TypeScript Support**     | Partial          | Minimal         | ✅ Full                            |
| **Bundle Size (minified)** | ~15KB            | ~145KB          | **~39KB** (utilities + components) |
| **Customization**          | Config-based     | SCSS variables  | ✅ CSS variables + Config          |
| **Animation System**       | No default       | No default      | ✅ 13 built-in animations          |
| **Arbitrary Values**       | ✅ Supported     | ❌ Limited      | ✅ 500+ dynamic classes            |

---

## 🎯 Core Philosophy

Nexus-UI is built on five foundational principles:

### 1. **Simplicity Through Convention**

- Developers should spend time building, not configuring
- Sensible defaults for everything: spacing, colors, typography, breakpoints
- Clear, predictable naming conventions (follow BEM-inspired patterns)
- One right way to do things, with escape hatches for edge cases

### 2. **Flexibility Without Compromise**

- Combine utilities for infinite variations without writing CSS
- Override anything through arbitrary values (e.g., `w-137px`)
- Extend themes, add components, customize design tokens
- Work with or without JavaScript framework

### 3. **Developer Productivity First**

- Rapid prototyping: see changes instantly
- IntelliSense support with full autocomplete
- TypeScript types for all components
- Built-in utilities: no need to hunt for npm packages
- Live preview in development (with watch mode)

### 4. **Accessibility Built-In**

- WCAG AAA compliant by default
- High-contrast theme for visual impairments
- Semantic HTML structure in components
- Keyboard navigation everywhere
- Screen reader considerations in all utilities

### 5. **Desktop-First Thinking**

- Start designing for full desktop viewport
- Progressively enhance for tablets and mobile with max-width media queries
- More intuitive for business applications, dashboards, and content-rich sites
- Reduces repetition: most rules apply to desktop, fewer breakpoints needed

---

## 🏗️ Framework Architecture

### High-Level Structure

```
nexus-ui/
├── src/
│   ├── styles/
│   │   ├── index.scss           (Main entry point)
│   │   ├── _variables.scss      (Design tokens)
│   │   ├── _mixins.scss         (SCSS utilities)
│   │   ├── _reset.scss          (Normalize)
│   │   ├── _animations.scss     (@keyframes)
│   │   ├── _themes.scss         (Light/dark/high-contrast)
│   │   ├── utilities/            (Generated utility classes)
│   │   └── components/           (Component styles)
│   ├── components/
│   │   ├── Modal.ts             (TypeScript class)
│   │   ├── Navbar.ts
│   │   ├── Carousel.ts
│   │   ├── Dropdown.ts
│   │   ├── Tooltip.ts
│   │   └── ... more components
│   └── utils/
│       ├── dom.ts               (DOM utilities)
│       ├── events.ts            (Event handling)
│       ├── theme.ts             (Theme management)
│       └── arbitrary.ts         (Dynamic utility generator)
├── dist/
│   ├── index.css                (Compiled CSS)
│   ├── index.js                 (Compiled TypeScript)
│   └── index.d.ts               (Type definitions)
├── docs/
│   └── *.md                     (Documentation)
├── examples/
│   └── *.html                   (Working examples)
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Build Pipeline

```
SCSS Files → Sass Compiler → CSS Minification → dist/index.css
TypeScript Components → tsc → Bundler → dist/index.js + .d.ts files
```

### Layers of The Framework

1. **Reset Layer**: Normalize browser inconsistencies
2. **Variables Layer**: Define design tokens (colors, spacing, typography)
3. **Theme Layer**: CSS custom properties for different themes
4. **Utility Layer**: 500+ atomic classes for styling
5. **Component Layer**: Pre-built interactive components
6. **Animation Layer**: Keyframes and animation utilities

---

## 🎨 Utility-First Styling System

### Philosophy: Composition Over Inheritance

Instead of writing CSS classes for every variation, developers compose utilities:

```html
<!-- Before (Traditional CSS) -->
<div class="card"></div>
<style>
  .card {
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
</style>

<!-- After (Nexus-UI) -->
<div class="p-md bg-white border border-gray-200 rounded-md shadow-sm">
  Card content
</div>
```

### Utility Class Categories

#### 1. **Spacing System**

```scss
// Utilities: m-*, p-*, gap-*
// Values: xs, sm, md, lg, xl, 2xl, 3xl

.m-md {
  margin: 1rem;
}
.p-lg {
  padding: 1.5rem;
}
.gap-xl {
  gap: 2rem;
}
.pt-sm {
  padding-top: 0.5rem;
} // Directional
.px-md {
  padding-left: 1rem;
  padding-right: 1rem;
} // Horizontal
```

**Available Sizes:**

- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 2.5rem (40px)
- `3xl`: 3rem (48px)

#### 2. **Display & Layout**

```html
<!-- Flexbox -->
<div class="flex flex-row justify-between items-center gap-md">
  Flexible layout
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-lg md:grid-cols-2 sm:grid-cols-1">
  Responsive columns
</div>

<!-- Display types -->
<div class="block">Block element</div>
<div class="inline-block">Inline block</div>
<div class="hidden">Hidden</div>
```

#### 3. **Colors & Backgrounds**

```html
<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-gray-600">Gray text</p>

<!-- Background colors -->
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>

<!-- Border colors -->
<div class="border border-primary">Colored border</div>
```

**Color Palette:**

- **Primary Colors**: `primary`, `secondary`, `accent`
- **Semantic Colors**: `success`, `danger`, `warning`, `info`
- **Grayscale**: `gray-50`, `gray-100`, ..., `gray-900`
- **Theme-aware**: All colors adapt to active theme (light/dark/high-contrast)

#### 4. **Typography**

```html
<!-- Font sizes -->
<h1 class="text-4xl font-bold">Heading</h1>
<p class="text-base font-normal">Normal text</p>

<!-- Font weights -->
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-bold">Bold (700)</p>

<!-- Line height & tracking -->
<p class="leading-lg tracking-wide">Spaced text</p>
```

**Available Sizes:**

- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`

#### 5. **Sizing**

```html
<!-- Width & height -->
<div class="w-full h-64">Full width, 256px height</div>
<div class="w-1/2 h-1/3">Half width, one-third height</div>

<!-- Arbitrary values -->
<div class="w-137px h-89px">Custom sizes</div>
<div class="min-w-200px max-h-500px">Min/max constraints</div>
```

#### 6. **Borders & Shadows**

```html
<!-- Borders -->
<div class="border border-2 border-primary">Simple border</div>
<div class="rounded-lg border-t-4 border-dashed border-gray-300">
  Custom border
</div>

<!-- Shadows -->
<div class="shadow-sm">Subtle shadow</div>
<div class="shadow-lg">Large shadow</div>
```

#### 7. **Transforms & Effects**

```html
<!-- Transforms -->
<div class="rotate-45">Rotated 45°</div>
<div class="scale-150">Scaled 150%</div>
<div class="translate-x-32 translate-y-16">Translated</div>
<div class="skew-x-12">Skewed</div>

<!-- Filters -->
<div class="blur-4px">Blurred</div>
<div class="grayscale">Grayscale</div>
<div class="brightness-150 contrast-110">Adjusted brightness/contrast</div>
```

#### 8. **Positioning**

```html
<!-- Position types -->
<div class="absolute top-0 right-4">Positioned absolutely</div>
<div class="fixed bottom-0 left-0 right-0">Fixed at bottom</div>
<div class="sticky top-0">Sticky to top</div>

<!-- Z-index -->
<div class="z-10">Above most elements</div>
<div class="z-modal">Over modals (z-1000)</div>
```

#### 9. **Opacity & Visibility**

```html
<div class="opacity-50">50% transparent</div>
<div class="opacity-0">Invisible but takes space</div>
<div class="invisible">Invisible and takes no space</div>
```

#### 10. **Dynamic/Arbitrary Values**

Nexus-UI supports **arbitrary values** for pixel-perfect designs:

```html
<!-- Arbitrary spacing -->
<div class="p-24px m-137px gap-16px">Custom values</div>

<!-- Arbitrary dimensions -->
<div class="w-500px h-375px">Custom sizes</div>

<!-- Arbitrary colors (RGB, HSL, HEX) -->
<div class="bg-rgb(255, 100, 50)">Custom color</div>

<!-- Arbitrary transforms -->
<div class="rotate-73 scale-1.37">Precise values</div>
```

### Utility Generation: Smart Defaults

Nexus-UI **generates** utilities instead of hand-writing them:

```typescript
// src/utils/arbitrary.ts - Example generator
export function generateSpacingUtilities() {
  const sizes = {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    // ... etc
  };

  const properties = ["margin", "padding", "gap"];
  const directions = ["", "-t", "-r", "-b", "-l", "-x", "-y"];

  // Generates 1000+ utility classes automatically
  return generateClasses(sizes, properties, directions);
}
```

---

## 📱 Responsive Design & Breakpoints

### Desktop-First Philosophy

Unlike mobile-first frameworks, **Nexus-UI starts with desktop and progressively reduces**.

#### Why Desktop-First?

1. **Natural progression**: Designers think desktop-first
2. **Less CSS**: Desktop styles apply to all, mobile overrides fewer rules
3. **Business apps**: Dashboards, admin panels are desktop-first
4. **Better for content**: Articles, documentation flow naturally on desktop
5. **Progressive enhancement**: Core experience works on smallest screens

### Breakpoint System

```scss
// Desktop-first: no prefix = desktop, prefixes reduce for smaller screens

// All breakpoints (max-width media queries)
$breakpoints: (
  "sm": 640px,
  // Small devices (e.g., landscape phones)
  "md": 768px,
  // Medium (e.g., tablets)
  "lg": 1024px,
  // Large (e.g., desktop)
  "xl": 1280px,
  // Extra large (e.g., wide desktop)
  "2xl": 1536px, // 2X large (e.g., 4K screens)
);
```

### How to Use Responsive Utilities

**Syntax:** `[breakpoint]:[utility-class]`

```html
<!-- Desktop: 3 columns, Tablet: 2 columns, Phone: 1 column -->
<div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-lg">
  <div class="bg-primary p-lg rounded-md">Item 1</div>
  <div class="bg-secondary p-lg rounded-md">Item 2</div>
  <div class="bg-accent p-lg rounded-md">Item 3</div>
</div>

<!-- Typography: Responsive font sizes -->
<h1 class="text-6xl md:text-4xl sm:text-2xl font-bold">Responsive Heading</h1>

<!-- Spacing: Different padding at each breakpoint -->
<div class="p-3xl md:p-2xl sm:p-lg">
  Responsive padding: 3rem → 2.5rem → 1.5rem
</div>

<!-- Visibility: Hide on mobile, show on tablet+ -->
<nav class="hidden md:block">Desktop navigation (hidden on sm)</nav>

<!-- Display modes: Different layouts at breakpoints -->
<div class="flex md:flex-col gap-md">
  <aside class="w-64 md:w-full">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```

### Responsive Grid Example

```html
<div class="grid grid-cols-12 gap-lg">
  <!-- Desktop: 8-column main + 4-column sidebar -->
  <!-- Tablet: Full width stacking -->
  <main class="grid-cols-8 md:grid-cols-12">
    <!-- 8 columns on desktop, 12 (full) on tablet -->
  </main>
  <aside class="grid-cols-4 md:grid-cols-12">
    <!-- 4 columns on desktop, 12 (full) on tablet -->
  </aside>
</div>
```

### Media Query Prefixes

| Prefix   | Min-Width | Max-Width | Use Case                         |
| -------- | --------- | --------- | -------------------------------- |
| _(none)_ | 0         | ∞         | Desktop and larger               |
| `sm:`    | 0         | 640px     | Small devices (landscape phones) |
| `md:`    | 0         | 768px     | Tablets                          |
| `lg:`    | 0         | 1024px    | Small desktops                   |
| `xl:`    | 0         | 1280px    | Large desktops                   |
| `2xl:`   | 0         | 1536px    | Ultra-wide displays              |

### State Utilities

Nexus-UI also supports **interactive states**:

```html
<!-- Hover states -->
<button class="bg-primary hover:bg-primary-dark">Hover me</button>

<!-- Focus states -->
<input class="border border-gray-300 focus:border-primary focus:outline-none" />

<!-- Active states -->
<a href="#" class="text-primary active:font-bold">Active link</a>

<!-- Disabled states -->
<button disabled class="opacity-50 cursor-not-allowed">Disabled</button>
```

---

## 🧩 Component Ecosystem

Nexus-UI ships with **15+ pre-built, battle-tested components** combining HTML structure, CSS styling, and TypeScript interactivity.

### Core Components

#### 1. **Modal Component**

A reusable modal dialog with animations.

```html
<!-- HTML Structure -->
<div id="myModal" class="modal">
  <div class="modal-overlay"></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <h2 class="modal-title">Modal Title</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">Modal content goes here</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>

<!-- JavaScript Usage -->
<script type="module">
  import { Modal } from "nexus-ui";

  const modal = new Modal("#myModal");
  modal.show(); // Show modal
  modal.hide(); // Hide modal
  modal.toggle(); // Toggle visibility
</script>
```

**API:**

- `show()` - Display modal with animation
- `hide()` - Hide modal
- `toggle()` - Toggle visibility
- `destroy()` - Clean up and remove event listeners
- `onShow(callback)` - Hook when modal shows
- `onHide(callback)` - Hook when modal hides

#### 2. **Navbar Component**

Responsive navigation bar with dropdown support.

```html
<!-- HTML Structure -->
<nav
  id="mainNav"
  class="navbar navbar-expand-md navbar-light bg-white border-b"
>
  <div class="navbar-brand">Nexus-UI</div>
  <button class="navbar-toggler" id="navToggle">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navContent" class="navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle">Services</a>
        <ul class="dropdown-menu">
          <li><a href="#">Design</a></li>
          <li><a href="#">Development</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>

<!-- JavaScript Usage -->
<script type="module">
  import { Navbar } from "nexus-ui";

  const navbar = new Navbar("#mainNav");
  navbar.setActive('a[href="#about"]'); // Set active link
</script>
```

#### 3. **Carousel/Slider Component**

Image carousel with navigation controls.

```html
<!-- HTML Structure -->
<div id="carousel" class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image-1.jpg" alt="Slide 1" />
    </div>
    <div class="carousel-item">
      <img src="image-2.jpg" alt="Slide 2" />
    </div>
    <div class="carousel-item">
      <img src="image-3.jpg" alt="Slide 3" />
    </div>
  </div>
  <button class="carousel-control prev">❮</button>
  <button class="carousel-control next">❯</button>
  <div class="carousel-indicators">
    <button class="indicator active"></button>
    <button class="indicator"></button>
    <button class="indicator"></button>
  </div>
</div>

<!-- JavaScript Usage -->
<script type="module">
  import { Carousel } from "nexus-ui";

  const carousel = new Carousel("#carousel", {
    autoPlayInterval: 5000, // Auto-slide every 5 seconds
    transitionDuration: 500, // 500ms transition
  });

  carousel.next(); // Next slide
  carousel.prev(); // Previous slide
  carousel.go(2); // Go to slide index 2
  carousel.start(); // Auto-play
  carousel.pause(); // Pause auto-play
</script>
```

#### 4. **Dropdown Component**

Dropdown menus with keyboard support.

```html
<!-- HTML Structure -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" id="dropdownBtn">
    Options
  </button>
  <ul class="dropdown-menu" id="dropdownMenu">
    <li><a href="#edit">Edit</a></li>
    <li><a href="#delete">Delete</a></li>
    <li class="divider"></li>
    <li><a href="#settings">Settings</a></li>
  </ul>
</div>

<!-- JavaScript Usage -->
<script type="module">
  import { Dropdown } from "nexus-ui";

  const dropdown = new Dropdown("#dropdownBtn", "#dropdownMenu");
  dropdown.show();
  dropdown.hide();
  dropdown.toggle();
</script>
```

#### 5. **Tooltip Component**

Contextual tooltips with positioning.

```html
<button class="btn" data-tooltip="Delete this item" data-placement="top">
  Delete
</button>

<script type="module">
  import { Tooltip } from "nexus-ui";

  const tooltip = new Tooltip("[data-tooltip]", {
    placement: "top", // top, bottom, left, right
    trigger: "hover", // hover, click, focus
    delay: 200, // Milliseconds
  });
</script>
```

#### 6. **Accordion Component**

Collapsible content sections.

```html
<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <button class="accordion-header">What is Nexus-UI?</button>
    <div class="accordion-body">
      Nexus-UI is a modern CSS framework combining utilities and components.
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">How do I use it?</button>
    <div class="accordion-body">
      Include the CSS file and start using utility classes...
    </div>
  </div>
</div>

<script type="module">
  import { Accordion } from "nexus-ui";

  const accordion = new Accordion("#faqAccordion", {
    allowMultiple: false, // Only one open at a time
  });
</script>
```

#### 7. **Tabs Component**

Tabbed content navigation.

```html
<div class="tabs" id="contentTabs">
  <ul class="tab-header">
    <li><a href="#tab-1" class="tab-link active">Tab 1</a></li>
    <li><a href="#tab-2" class="tab-link">Tab 2</a></li>
    <li><a href="#tab-3" class="tab-link">Tab 3</a></li>
  </ul>
  <div class="tab-content">
    <div id="tab-1" class="tab-pane active">Content 1</div>
    <div id="tab-2" class="tab-pane">Content 2</div>
    <div id="tab-3" class="tab-pane">Content 3</div>
  </div>
</div>

<script type="module">
  import { Tabs } from "nexus-ui";

  new Tabs("#contentTabs");
</script>
```

#### 8. **Offcanvas Component**

Side drawer/sidebar panel.

```html
<button class="btn" data-toggle="offcanvas" data-target="#sidebar">
  Open Sidebar
</button>

<div class="offcanvas" id="sidebar">
  <div class="offcanvas-header">
    <h5>Navigation</h5>
    <button class="offcanvas-close">&times;</button>
  </div>
  <div class="offcanvas-body">
    <nav>
      <a href="#" class="offcanvas-link">Link 1</a>
      <a href="#" class="offcanvas-link">Link 2</a>
    </nav>
  </div>
</div>

<script type="module">
  import { Offcanvas } from "nexus-ui";

  const offcanvas = new Offcanvas("#sidebar");
  offcanvas.show();
</script>
```

#### 9. **Button Component**

Styled buttons with multiple variants.

```html
<!-- Button variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<!-- Button sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Button states -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary is-loading">
  <span class="spinner-border"></span> Loading...
</button>

<!-- Button groups -->
<div class="btn-group">
  <button class="btn btn-outline-primary active">Option 1</button>
  <button class="btn btn-outline-primary">Option 2</button>
  <button class="btn btn-outline-primary">Option 3</button>
</div>
```

#### 10. **Alert Component**

Dismissible alert messages.

```html
<!-- Alert variants -->
<div class="alert alert-primary">
  <strong>Info:</strong> This is an informational alert.
</div>

<div class="alert alert-success alert-dismissible">
  <strong>Success!</strong> Operation completed successfully.
  <button class="alert-close">&times;</button>
</div>

<div class="alert alert-warning">
  <strong>Warning:</strong> Please review your input.
</div>

<div class="alert alert-danger">
  <strong>Error!</strong> Something went wrong.
</div>
```

#### 11. **Card Component**

Flexible content containers.

```html
<div class="card">
  <div class="card-header bg-primary text-white">Card Header</div>
  <img src="image.jpg" class="card-image" alt="Card image" />
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card description goes here.</p>
  </div>
  <div class="card-footer bg-gray-50">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>
```

#### 12. **Form Components**

Pre-styled form elements.

```html
<form class="nexus-form">
  <!-- Text input -->
  <div class="form-group">
    <label for="name">Full Name</label>
    <input
      type="text"
      id="name"
      class="form-control"
      placeholder="Enter your name"
    />
  </div>

  <!-- Select -->
  <div class="form-group">
    <label for="country">Country</label>
    <select id="country" class="form-control">
      <option>Select a country...</option>
      <option>USA</option>
      <option>Canada</option>
    </select>
  </div>

  <!-- Checkbox -->
  <div class="form-group">
    <label class="form-check">
      <input type="checkbox" class="form-check-input" />
      <span>I agree to terms</span>
    </label>
  </div>

  <!-- Radio -->
  <div class="form-group">
    <label class="form-radio">
      <input type="radio" name="option" class="form-radio-input" />
      <span>Option 1</span>
    </label>
    <label class="form-radio">
      <input type="radio" name="option" class="form-radio-input" />
      <span>Option 2</span>
    </label>
  </div>

  <!-- Textarea -->
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" class="form-control" rows="5"></textarea>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

#### 13. **Badge Component**

Small labels and counters.

```html
<!-- Basic badges -->
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>

<!-- Outline badges -->
<span class="badge badge-outline badge-primary">Outline</span>

<!-- Dot badges -->
<span class="badge badge-dot badge-success"></span> Online

<!-- With count -->
<span class="badge badge-primary"> <span class="count">5</span> items </span>
```

#### 14. **Table Component**

Responsive data tables.

```html
<table class="table table-striped table-hover">
  <thead class="table-header">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td><span class="badge badge-success">Active</span></td>
      <td><button class="btn btn-sm btn-outline-primary">Edit</button></td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td><span class="badge badge-warning">Pending</span></td>
      <td><button class="btn btn-sm btn-outline-primary">Edit</button></td>
    </tr>
  </tbody>
</table>
```

#### 15. **Pagination Component**

Page navigation.

```html
<nav class="pagination">
  <a href="#" class="page-link prev disabled">← Previous</a>
  <a href="#" class="page-link">1</a>
  <a href="#" class="page-link active">2</a>
  <a href="#" class="page-link">3</a>
  <a href="#" class="page-link">4</a>
  <span class="page-link ellipsis">...</span>
  <a href="#" class="page-link">10</a>
  <a href="#" class="page-link next">Next →</a>
</nav>
```

---

## ⚙️ JavaScript Utilities & Interactivity

Beyond components, Nexus-UI provides powerful utility modules for common JavaScript tasks.

### DOM Utilities

```typescript
// src/utils/dom.ts
import {
  query,
  queryAll,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  styles,
  attr,
  on,
  off,
  trigger,
} from "nexus-ui/utils/dom";

// Query elements
const element = query("#myElement");
const elements = queryAll(".card");

// Manipulate classes
addClass(element, "active");
removeClass(element, "hidden");
toggleClass(element, "expanded");
hasClass(element, "primary"); // Returns boolean

// Set styles
styles(element, {
  color: "red",
  fontSize: "18px",
  backgroundColor: "#f0f0f0",
});

// Get/set attributes
attr(element, "data-id", "123");
console.log(attr(element, "data-id")); // '123'

// Event handlers
on(element, "click", (e) => console.log("Clicked"));
off(element, "click", handler); // Remove specific handler
trigger(element, "custom-event"); // Fire custom event
```

### Event Utilities

```typescript
import { debounce, throttle, once } from "nexus-ui/utils/events";

// Debounce - wait for pause before executing (e.g., search as you type)
const handleSearch = debounce((query) => {
  fetch(`/search?q=${query}`);
}, 300); // Wait 300ms after typing stops

window.addEventListener("input", (e) => handleSearch(e.target.value));

// Throttle - limit execution frequency (e.g., scroll events)
const handleScroll = throttle(() => {
  console.log("Scrolled");
}, 100); // Max once every 100ms

window.addEventListener("scroll", handleScroll);

// Once - execute only once, then remove
const handleFirstClick = once(() => {
  console.log("First click only");
});

button.addEventListener("click", handleFirstClick);
```

### Theme Utilities

```typescript
import { ThemeManager } from "nexus-ui/utils/theme";

// Get/set current theme
ThemeManager.getTheme(); // Returns 'light' | 'dark' | 'high-contrast'
ThemeManager.setTheme("dark"); // Set specific theme

// Toggle between light and dark
ThemeManager.toggle();

// Follow system preference
ThemeManager.setTheme("system"); // Auto-detect from prefers-color-scheme

// Get available themes
const themes = ThemeManager.getAvailable(); // ['light', 'dark', 'high-contrast']

// Listen to theme changes
ThemeManager.onChange((newTheme) => {
  console.log(`Theme changed to: ${newTheme}`);
});

// Get theme configuration
const config = ThemeManager.getConfig();
const colors = config.colors;
```

### Dynamic Utility Generation

```typescript
import {
  width,
  height,
  gap,
  padding,
  margin,
  fontSize,
} from "nexus-ui/utils/arbitrary";

// Build arbitrary utilities dynamically
const customClasses = [
  width("137px"),
  height("89px"),
  padding("24px"),
  gap("16px"),
  fontSize("18px"),
];

// Use with cx() for composition
import { cx } from "nexus-ui/utils";

const className = cx(
  "flex",
  "items-center",
  width("200px"),
  "gap-md",
  isActive && "bg-primary",
);

element.className = className;
```

---

## 🏗️ Template System & Scaffolding

Nexus-UI provides ready-to-use page templates that follow best practices.

### Built-in Templates

```bash
# CLI command to scaffold a page
nexus create page dashboard

# Creates:
# ├── dashboard.html         - Page structure
# ├── dashboard.scss         - Page-specific styles (optional)
# └── dashboard.js           - Page-specific scripts (optional)
```

### Available Templates

1. **Landing Page**: Hero section, features, CTA, footer
2. **Dashboard**: Sidebar, cards, charts, tables, metrics
3. **Blog**: Article list, search, categories, comments
4. **E-commerce**: Product grid, filters, cart, checkout
5. **Documentation**: Sidebar nav, content, code blocks, search
6. **Admin Panel**: User table, forms, modals, notifications
7. **Portfolio**: Hero, projects grid, about, contact form
8. **SaaS**: Features, pricing, signup, FAQs, testimonials

### Example: Dashboard Template

```html
<!-- dashboard.html -->
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdn.example.com/nexus-ui/index.css" />
  </head>
  <body class="bg-gray-50">
    <!-- Navigation -->
    <nav
      id="mainNav"
      class="navbar navbar-light bg-white border-b sticky top-0 z-navbar"
    >
      <div class="navbar-brand font-bold text-xl">Nexus Dashboard</div>
      <div class="navbar-actions flex gap-md items-center">
        <button id="themeToggle" class="btn btn-ghost">🌙</button>
        <div class="avatar avatar-sm bg-primary text-white">AM</div>
      </div>
    </nav>

    <!-- Main container -->
    <div class="flex">
      <!-- Sidebar -->
      <aside class="sidebar w-64 bg-white border-r p-lg hidden md:block">
        <nav class="space-y-md">
          <a href="#" class="sidebar-link active"> 📊 Dashboard </a>
          <a href="#" class="sidebar-link"> 👥 Users </a>
          <a href="#" class="sidebar-link"> ⚙️ Settings </a>
        </nav>
      </aside>

      <!-- Content -->
      <main class="flex-1 p-2xl">
        <!-- Metrics row -->
        <div
          class="grid grid-cols-4 gap-lg mb-2xl md:grid-cols-2 sm:grid-cols-1"
        >
          <div class="card">
            <div class="card-body">
              <div class="text-sm text-gray-600">Total Users</div>
              <div class="text-3xl font-bold mt-md">12,450</div>
              <div class="text-xs text-success mt-sm">↑ 12% increase</div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="text-sm text-gray-600">Revenue</div>
              <div class="text-3xl font-bold mt-md">$45,230</div>
              <div class="text-xs text-success mt-sm">↑ 8% increase</div>
            </div>
          </div>

          <!-- More metrics... -->
        </div>

        <!-- Data table -->
        <div class="card">
          <div class="card-header border-b p-lg">
            <h3 class="font-bold">Recent Orders</h3>
          </div>
          <div class="card-body p-0">
            <table class="table table-hover w-full">
              <thead class="table-header">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>John Doe</td>
                  <td>$1,234</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <!-- More rows... -->
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Scripts -->
    <script type="module">
      import {
        Navbar,
        ThemeManager,
      } from "https://cdn.example.com/nexus-ui/index.js";

      // Initialize navbar
      new Navbar("#mainNav");

      // Theme toggle
      document.getElementById("themeToggle").addEventListener("click", () => {
        ThemeManager.toggle();
      });
    </script>
  </body>
</html>
```

---

## 🔌 Modular Architecture

Nexus-UI is built as a collection of independent modules that can be mixed and matched.

### Module Organization

```
nexus-ui/
├── @nexus-ui/core         (Base utilities, CSS reset, variables)
├── @nexus-ui/components   (All interactive components)
├── @nexus-ui/utilities    (Spacing, colors, typography utilities)
├── @nexus-ui/animations   (Keyframes and animation utilities)
├── @nexus-ui/themes       (Light, dark, high-contrast themes)
└── @nexus-ui/forms        (Form styling and validation)
```

### Module Import Patterns

```typescript
// Import everything
import * as NexusUI from "nexus-ui";

// Import specific component
import { Modal, Carousel, Tabs } from "nexus-ui/components";

// Import specific utility
import { ThemeManager } from "nexus-ui/utils/theme";
import { debounce, throttle } from "nexus-ui/utils/events";

// Import CSS modules
import "nexus-ui/dist/core.css"; // Core only
import "nexus-ui/dist/components.css"; // Components only
import "nexus-ui/dist/index.css"; // Everything (default)
```

### Feature Tree (Choose What You Need)

```
Nexus-UI
├── ✅ Core (Base, required)
│   ├── CSS Reset & Normalize
│   ├── Design Tokens (colors, spacing, typography)
│   └── CSS Custom Properties (themes)
│
├── ✅ Utilities (highly recommended)
│   ├── Spacing (m, p, gap)
│   ├── Colors (text, bg, border)
│   ├── Typography (font-size, font-weight, line-height)
│   ├── Layout (flex, grid, display)
│   ├── Sizing (width, height, aspect-ratio)
│   ├── Transforms (rotate, scale, translate, skew)
│   └── Filters (blur, grayscale, brightness, contrast)
│
├── ✅ Components (optional, ~25KB)
│   ├── Modal
│   ├── Navbar
│   ├── Carousel
│   ├── Dropdown/Tooltip
│   ├── Accordion/Tabs
│   ├── Offcanvas
│   └── ... (13+ components)
│
├── ✅ Animations (optional, ~8KB)
│   ├── @keyframes animations
│   ├── Animation utilities
│   └── Transition utilities
│
├── ✅ Forms (optional, ~5KB)
│   ├── Input styling
│   ├── Validation states
│   └── Form utilities
│
└── ✅ Themes (included with core)
    ├── Light theme
    ├── Dark theme
    └── High-contrast theme
```

### Build a Custom Bundle

```bash
# CLI to create custom build
nexus build --include core,utilities,components --exclude animations,forms

# Result: Only CSS and JS for selected features
# Output: ~30KB minified (vs 39KB default)
```

---

## 🎨 Customization & Configuration

Developers can customize Nexus-UI extensively without modifying the framework code.

### Design Tokens Configuration

```typescript
// nexus.config.ts or nexus.config.js
export default {
  // Design tokens
  tokens: {
    colors: {
      primary: "#3B82F6", // Change primary color
      secondary: "#8B5CF6",
      success: "#10B981",
      // ... etc
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      // ... custom sizes
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        // ... etc
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    },
  },

  // Theme customization
  themes: {
    light: {
      colors: {
        background: "#FFFFFF",
        text: "#000000",
        border: "#E5E7EB",
        // ... override default light theme
      },
    },
    dark: {
      colors: {
        background: "#1F2937",
        text: "#F3F4F6",
        border: "#374151",
        // ... override default dark theme
      },
    },
  },

  // Breakpoints customization
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    // Add custom breakpoints
    "3xl": "1920px",
  },

  // Component defaults
  components: {
    button: {
      borderRadius: "md",
      fontSize: "base",
      padding: "md lg", // vertical horizontal
    },
    card: {
      borderRadius: "lg",
      shadow: "md",
      padding: "lg",
    },
    modal: {
      borderRadius: "lg",
      shadow: "xl",
    },
  },

  // Enable/disable features
  features: {
    animations: true,
    themes: true,
    components: true,
    forms: true,
    utilities: true,
  },
};
```

### Theme Switching at Runtime

```typescript
import { ThemeManager } from "nexus-ui";

// Switch to dark theme
ThemeManager.setTheme("dark");

// Get current theme
const currentTheme = ThemeManager.getTheme();

// Listen for theme changes
ThemeManager.onChange((theme) => {
  console.log(`Theme changed to: ${theme}`);
  // Update any custom styles here
});

// Create custom theme at runtime
ThemeManager.setConfig({
  light: {
    colors: {
      primary: "#FF6B6B",
      secondary: "#4ECDC4",
      // ... custom colors
    },
  },
});
```

### CSS Variable Customization

```css
/* Override CSS variables in your stylesheet */
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #10b981;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;

  /* Typography */
  --font-family: "Inter", sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;

  /* Borders */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Dark theme overrides */
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-background: #1f2937;
  --color-text: #f3f4f6;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
}
```

### SCSS Variable Customization

For developers using SCSS:

```scss
// Override before importing Nexus-UI
$primary: #ff6b6b;
$secondary: #4ecdc4;
$success: #10b981;
$danger: #ff6b6b;
$warning: #ffa500;
$info: #3498db;

$font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.5;

$radius-sm: 0.125rem;
$radius-md: 0.375rem;
$radius-lg: 0.5rem;

$space-xs: 0.25rem;
$space-sm: 0.5rem;
$space-md: 1rem;
$space-lg: 1.5rem;
$space-xl: 2rem;

// Import Nexus-UI (will use your overrides)
@import "nexus-ui/src/styles/index.scss";
```

---

## 🛠️ Developer Tools & CLI

Nexus-UI provides command-line tools for scaffolding, building, and managing projects.

### CLI Commands

```bash
# Initialize a new Nexus-UI project
nexus init my-project

# Generate a new component
nexus generate component Button
# Creates: src/components/Button.ts + Button.scss

# Generate a page template
nexus generate page dashboard

# Build the project
nexus build                    # Production build
nexus build --watch            # Watch mode
nexus build --optimize         # Optimized output
nexus build --sourcemap        # Include source maps

# Start development server
nexus dev                       # Start dev server on http://localhost:3000
nexus dev --port 5000          # Custom port
nexus dev --open               # Auto-open browser

# Create custom builds
nexus build --include core,utilities,components
nexus build --exclude animations,forms

# Generate TypeScript definitions
nexus types generate           # Auto-generate .d.ts files

# Lint and validate
nexus lint                      # Lint SCSS and TypeScript
nexus validate                  # Validate component structure

# Publish to CDN
nexus publish --cdn            # Deploy to CDN

# Documentation
nexus docs                      # Open documentation
nexus serve-docs               # Local docs server
```

### Configuration File

```javascript
// nexus.config.js
module.exports = {
  // Input/Output
  input: "src",
  output: "dist",

  // Build options
  production: true,
  minify: true,
  sourceMap: false,

  // Include/exclude features
  include: ["core", "utilities", "components", "animations", "themes"],
  exclude: [],

  // Custom paths
  paths: {
    components: "src/components",
    styles: "src/styles",
    utilities: "src/utils",
  },

  // Autoprefixer
  autoprefixer: true,

  // TypeScript compilation
  typescript: {
    target: "ES2020",
    module: "ESM",
    strict: true,
  },

  // SCSS options
  scss: {
    precision: 10,
    outputStyle: "compressed",
  },

  // Dev server
  devServer: {
    port: 3000,
    open: false,
    watch: true,
  },
};
```

---

## ✨ Animations & Transitions

Nexus-UI includes a comprehensive animation system with 13 pre-built animations.

### Built-in Animations

```html
<!-- Fade animations -->
<div class="animate-fade-in">Fades in smoothly</div>
<div class="animate-fade-out">Fades out smoothly</div>

<!-- Slide animations -->
<div class="animate-slide-up">Slides up from bottom</div>
<div class="animate-slide-down">Slides down from top</div>
<div class="animate-slide-left">Slides in from right</div>
<div class="animate-slide-right">Slides in from left</div>

<!-- Scale animations -->
<div class="animate-scale-in">Scales up from center</div>
<div class="animate-scale-out">Scales down to center</div>

<!-- Playful animations -->
<div class="animate-bounce">Bounces continuously</div>
<div class="animate-pulse">Pulses opacity</div>
<div class="animate-spin">Spins 360deg</div>

<!-- Advanced animations -->
<div class="animate-wiggle">Wiggles side to side</div>
<div class="animate-shake">Shakes back and forth</div>
<div class="animate-heartbeat">Pulses like heartbeat</div>
<div class="animate-glow">Glows with shadow</div>
```

### Animation Modifiers

```html
<!-- Animation duration -->
<div class="animate-bounce animate-duration-1s">1 second animation</div>
<div class="animate-bounce animate-duration-2s">2 second animation</div>

<!-- Animation delay -->
<div class="animate-fade-in animate-delay-base">Small delay</div>
<div class="animate-fade-in animate-delay-500ms">500ms delay</div>
<div class="animate-fade-in animate-delay-1s">1 second delay</div>

<!-- Iteration count -->
<div class="animate-bounce animate-iteration-1">Bounces once</div>
<div class="animate-bounce animate-iteration-3">Bounces 3 times</div>
<div class="animate-bounce animate-iteration-infinite">Bounces forever</div>

<!-- Animation fill mode -->
<div class="animate-slide-in animate-fill-forwards">Stays at end state</div>

<!-- Easing -->
<div class="animate-bounce animate-ease-in">Ease in</div>
<div class="animate-bounce animate-ease-out">Ease out</div>
<div class="animate-bounce animate-ease-in-out">Ease in-out</div>
```

### Custom Animation Definition

```scss
// Define custom animation
@keyframes my-custom-animation {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

// Create utility class
.animate-custom {
  animation: my-custom-animation 0.6s ease-in-out forwards;
}
```

### JavaScript Animation Hooks

```typescript
import { on, addClass, removeClass } from "nexus-ui/utils/dom";

// Add animation when element appears
const element = document.querySelector(".card");

on(element, "mouseenter", () => {
  addClass(element, "animate-scale-in");
});

on(element, "mouseout", () => {
  addClass(element, "animate-scale-out");
  // Remove both after animation completes
  setTimeout(() => {
    removeClass(element, "animate-scale-out");
    removeClass(element, "animate-scale-in");
  }, 600);
});
```

---

## 🎭 Theme System

Nexus-UI's theme system provides built-in light, dark, and high-contrast themes.

### Three Built-in Themes

**1. Light Theme**

- Clean, professional appearance
- Light backgrounds with dark text
- Great for daytime, content-focused apps

**2. Dark Theme**

- Reduced eye strain in low-light environments
- Dark backgrounds with light text
- Increasingly popular for modern apps

**3. High-Contrast Theme**

- Maximized visual distinction
- WCAG AAA compliant
- Accessible for visually impaired users

### Using Themes

```html
<!-- Set theme manually -->
<html data-theme="light">
  <body>
    <!-- Content -->
  </body>
</html>

<!-- Or use JavaScript -->
<script type="module">
  import { ThemeManager } from "nexus-ui";

  // Set specific theme
  ThemeManager.setTheme("dark");

  // Toggle between light and dark
  document.getElementById("themeToggle").addEventListener("click", () => {
    ThemeManager.toggle();
  });

  // Use system preference
  ThemeManager.setTheme("system");

  // Listen to changes
  ThemeManager.onChange((theme) => {
    console.log("New theme:", theme);
  });
</script>
```

### Theme-Aware Colors

```html
<!-- These adapt to current theme automatically -->
<div class="bg-primary text-white">Primary in any theme</div>
<div class="border border-gray-300">Gray border adapts to theme</div>
<div class="bg-card">Card background matches theme</div>
<div class="shadow-md">Shadow adjusts for visibility</div>
```

### CSS Variables by Theme

```css
/* Light theme (default) */
:root {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Dark theme */
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-background: #1f2937;
  --color-text: #f3f4f6;
  --color-border: #374151;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* High-contrast theme */
[data-theme="high-contrast"] {
  --color-primary: #0000ff;
  --color-accent: #ffff00;
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --shadow-md: 0 0 0 2px #000000;
}
```

---

## 📊 Comparison with Existing Frameworks

### Nexus-UI vs TailwindCSS

| Feature                   | TailwindCSS         | Nexus-UI                         |
| ------------------------- | ------------------- | -------------------------------- |
| **Utility Classes**       | 3,000+              | 500+ (but more powerful)         |
| **Pre-built Components**  | None                | 15+                              |
| **JavaScript Components** | None                | Included                         |
| **Learning Curve**        | Steep (class names) | Gentle (predictable names)       |
| **TypeScript Support**    | Partial             | Full                             |
| **Dark Mode**             | Manual setup        | Built-in, 3 themes               |
| **Animation System**      | Not included        | 13 built-in                      |
| **Bundle Size (min)**     | ~15KB               | ~39KB (includes components)      |
| **Desktop-First**         | No                  | Yes                              |
| **Arbitrary Values**      | Yes                 | Yes, 500+                        |
| **Customization**         | Config-based        | Config + CSS variables           |
| **Component Scripts**     | Not included        | Included (Modal, Carousel, etc.) |
| **Accessibility**         | Good                | Excellent (WCAG AAA)             |
| **Form Styling**          | Not included        | Included                         |
| **Icon System**           | Not included        | Extensible                       |

### Nexus-UI vs Bootstrap

| Feature                | Bootstrap            | Nexus-UI                      |
| ---------------------- | -------------------- | ----------------------------- |
| **Learning Curve**     | Steep (many classes) | Gentle (utility-first)        |
| **Component Count**    | 25+                  | 15+ (focused)                 |
| **JavaScript Size**    | ~50KB                | ~15KB                         |
| **CSS Size**           | ~160KB               | ~39KB                         |
| **Customization**      | SCSS variables       | CSS variables + Config        |
| **Utility Classes**    | Limited              | 500+                          |
| **Desktop-First**      | No                   | Yes                           |
| **TypeScript Support** | Minimal              | Full                          |
| **Dark Mode**          | Not included         | Built-in                      |
| **Animation System**   | Limited              | Comprehensive (13 animations) |
| **Development Speed**  | Moderate             | Fast (utilities)              |
| **Mobile Experience**  | Good                 | Excellent (responsive-first)  |
| **Theming**            | Manual               | 3 built-in themes             |
| **Browser Support**    | IE 10+               | Modern (ES2020+)              |

### Key Advantages of Nexus-UI

1. **Smaller footprint**: 39KB vs TailwindCSS (15KB util) + Bootstrap (50KB JS)
2. **No configuration needed**: Works out of the box with sensible defaults
3. **Combines best practices**: Utilities + Components in one framework
4. **Desktop-first**: More intuitive for business apps
5. **Built-in theming**: Light, dark, high-contrast themes
6. **Full TypeScript**: Better IDE support and type safety
7. **Learning-friendly**: Clear naming, gentle learning curve
8. **Comprehensive**: Utilities, components, animations, tools all included

---

## 🚀 Getting Started

### Installation Methods

#### 1. **NPM Package**

```bash
npm install nexus-ui
```

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/nexus-ui/dist/index.css" />
<script type="module" src="node_modules/nexus-ui/dist/index.js"></script>
```

#### 2. **CDN Link**

```html
<!-- CSS (all utilities, components, animations) -->
<link rel="stylesheet" href="https://cdn.example.com/nexus-ui/index.css" />

<!-- JavaScript (components module) -->
<script type="module">
  import {
    Modal,
    Carousel,
    Tabs,
  } from "https://cdn.example.com/nexus-ui/index.js";
</script>
```

#### 3. **CLI Scaffolding**

```bash
npm install -g nexus-ui
nexus init my-project
cd my-project
npm install
npm run dev
```

### First Page: "Hello Nexus-UI"

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus-UI Demo</title>
    <link rel="stylesheet" href="https://cdn.example.com/nexus-ui/index.css" />
  </head>
  <body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b p-lg">
      <h1 class="text-3xl font-bold text-primary">Welcome to Nexus-UI</h1>
    </header>

    <!-- Main content -->
    <main class="max-w-4xl mx-auto p-2xl">
      <!-- Hero section -->
      <section class="mb-3xl">
        <h2 class="text-4xl font-bold mb-lg md:text-2xl">
          Build Modern UIs Fast
        </h2>
        <p class="text-lg text-gray-600 mb-xl">
          Nexus-UI combines utility-first styling with pre-built components.
        </p>
        <div class="flex gap-md">
          <button class="btn btn-primary btn-lg">Get Started</button>
          <button class="btn btn-outline btn-lg">Learn More</button>
        </div>
      </section>

      <!-- Features grid -->
      <section class="grid grid-cols-3 gap-lg md:grid-cols-1 mb-3xl">
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-md">🚀 Fast</h3>
            <p class="text-gray-600">
              Rapid development with intuitive utilities.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-md">🎨 Flexible</h3>
            <p class="text-gray-600">Customize anything with design tokens.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-bold mb-md">♿ Accessible</h3>
            <p class="text-gray-600">WCAG AAA compliant from the start.</p>
          </div>
        </div>
      </section>

      <!-- Animated section -->
      <section class="card animate-fade-in">
        <div class="card-body text-center p-3xl">
          <h3 class="text-2xl font-bold mb-md">
            Ready to build something amazing?
          </h3>
          <p class="text-gray-600 mb-lg">
            Start with our templates or build from scratch.
          </p>
          <button class="btn btn-primary" id="openModal">
            Open Modal Demo
          </button>
        </div>
      </section>
    </main>

    <!-- Demo Modal -->
    <div id="demoModal" class="modal">
      <div class="modal-overlay"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 class="modal-title">Modal Component</h2>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p>
            This is a working modal component with animations and interactivity.
          </p>
          <p class="mt-md text-sm text-gray-600">
            Click outside or press ESC to close.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <script type="module">
      import {
        Modal,
        ThemeManager,
      } from "https://cdn.example.com/nexus-ui/index.js";

      // Initialize modal
      const modal = new Modal("#demoModal");
      document.getElementById("openModal").addEventListener("click", () => {
        modal.show();
      });

      // Theme toggle (optional)
      document.addEventListener("keydown", (e) => {
        if (e.key === "d") {
          ThemeManager.toggle();
        }
      });
    </script>
  </body>
</html>
```

### Next Steps

1. **Explore utilities**: Review all 500+ utility classes
2. **Use components**: Integrate pre-built components
3. **Customize**: Extend with your own design tokens
4. **Deploy**: Ship your Nexus-UI application

---

## 📚 Documentation Resources

- **Full API Documentation**: [docs/API.md](./docs/API.md)
- **Component Reference**: [docs/COMPONENTS.md](./docs/COMPONENTS.md)
- **Utility Reference**: [docs/UTILITIES.md](./docs/UTILITIES.md)
- **Theming Guide**: [docs/THEMING.md](./docs/THEMING.md)
- **Examples**: [examples/](./examples/)
- **CDN Usage**: [CDN_USAGE.md](./CDN_USAGE.md)

---

## 🎓 Design Philosophy Summary

### Five Core Principles

1. **Simplicity**: Sensible defaults, minimal configuration
2. **Flexibility**: Powerful utilities + customizable components
3. **Productivity**: Write less CSS, build more UIs
4. **Accessibility**: WCAG AAA by default
5. **Desktop-First**: Intuitive for business and content applications

### Why Nexus-UI Wins

| Aspect                     | Benefit                                          |
| -------------------------- | ------------------------------------------------ |
| **Smaller Bundle**         | 39KB vs the competition (15-160KB for utilities) |
| **Faster Development**     | 500+ utilities + 15+ components in one package   |
| **Better DX**              | TypeScript, clear names, excellent docs          |
| **Lower Learning Curve**   | Gentle introduction, intuitive naming            |
| **Built-in Everything**    | Utilities, components, animations, themes, tools |
| **Professional Design**    | Accessible by default, beautiful defaults        |
| **Desktop-First Approach** | Natural for business applications                |
| **Future-Proof**           | Modern tech stack (SCSS, TypeScript, ES2020+)    |

---

## 📄 License

Nexus-UI is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

**Made with ❤️ by the Nexus-UI Team**

_Transform the way you build user interfaces._

# Nexus-UI Framework v0.0.1

> A professional desktop-first utility CSS framework with interactive TypeScript components

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://img.shields.io/badge/npm-v0.0.1-blue.svg)](https://www.npmjs.com/package/@cyclone_cm/nexus-ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Size](https://img.shields.io/badge/minified-68KB-brightgreen.svg)]()

## ✨ Features

✅ **500+ Utility Classes** - Rapid UI development with SCSS utilities  
✅ **8 Interactive Components** - Modal, Navbar, Carousel, Dropdown, Tooltip, Accordion, Tabs, Offcanvas  
✅ **3 Built-in Themes** - Light, Dark, High-Contrast (WCAG AAA)  
✅ **13 Animations** - Pre-built keyframes with delay/iteration modifiers  
✅ **Type Safe** - Complete TypeScript definitions & interfaces  
✅ **26 Utilities** - DOM manipulation, event handling, theme management  
✅ **Zero Dependencies** - Pure CSS & TypeScript, no external libs  
✅ **Desktop-First** - Mobile-optimized responsive design

## 📦 Installation

### NPM

```bash
npm install @cyclone_cm/nexus-ui
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@cyclone_cm/nexus-ui@0.0.1/dist/index.css"
/>
<script type="module">
  import {
    Modal,
    ThemeManager,
  } from "https://cdn.jsdelivr.net/npm/@cyclone_cm/nexus-ui@0.0.1/dist/index.js";
</script>
```

## 🚀 Quick Start

### HTML + CSS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="dist/index.css" />
  </head>
  <body>
    <!-- Button with utilities -->
    <button class="btn btn-primary m-4 p-4">Click me</button>

    <!-- Modal component -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <h2>Welcome</h2>
        <button class="btn btn-secondary modal-close">Close</button>
      </div>
    </div>

    <script type="module">
      import { Modal } from "@cyclone_cm/nexus-ui";
      const modal = new Modal("#myModal");
      modal.show();
    </script>
  </body>
</html>
```

### JavaScript/TypeScript

```javascript
import { Modal, Carousel, ThemeManager } from "@cyclone_cm/nexus-ui";

// Create modal
const modal = new Modal("#myModal", {
  backdrop: true,
  keyboard: true,
  focus: true,
});

// Listen to events
modal.on("show", () => console.log("Modal opened"));
modal.on("hide", () => console.log("Modal closed"));

// Switch themes
ThemeManager.setTheme("dark");
ThemeManager.onChange((theme) => console.log(`Switched to ${theme}`));

// Create carousel
const carousel = new Carousel("#myCarousel", {
  autoPlay: true,
  autoPlayInterval: 5000,
});

carousel.next();
carousel.prev();
carousel.go(2);
```

## 📚 Components

### Modal

Dialog overlays with animations and programmatic control

```javascript
const modal = new Modal("#selector", { backdrop: true, keyboard: true });
modal.show() / hide() / toggle();
modal.on("show", callback);
modal.on("hide", callback);
```

### Navbar

Responsive navigation with auto-collapse and active states

```javascript
const navbar = new Navbar("#nav", { expandAt: "md" });
navbar.setActive(".nav-link");
navbar.toggleMenu();
```

### Carousel

Image slider with auto-play and manual controls

```javascript
const carousel = new Carousel("#carousel", { autoPlay: true });
carousel.next() / prev() / go(index);
carousel.start() / pause();
```

### Dropdown, Tooltip, Accordion, Tabs, Offcanvas

Complete component suite with consistent API. See [API_REFERENCE.md](API_REFERENCE.md) for details.

## 🎨 CSS Utilities

### Spacing

```html
<div class="m-4 p-6 gap-8">Margins, padding, gaps</div>
```

### Colors

```html
<div class="text-primary bg-secondary border-danger">Colors</div>
```

### Layout

```html
<div class="flex flex-col md:flex-row gap-4">Responsive flexbox</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  Responsive grid
</div>
```

### Typography

```html
<h1 class="text-3xl font-bold">Large heading</h1>
<p class="text-sm text-gray-600">Small text</p>
```

### Animations

```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up animate-delay-base">Slide up with delay</div>
<div class="animate-bounce animate-infinite">Bouncing animation</div>
```

Full utility reference: [FRAMEWORK_GUIDE.md](FRAMEWORK_GUIDE.md)

## 🛠️ Utilities

### DOM Utilities

```javascript
import { dom } from "@cyclone_cm/nexus-ui";

dom.query(selector); // Single element
dom.queryAll(selector); // Multiple elements
dom.addClass / removeClass; // Manage classes
dom.on / off; // Event handling
dom.styles / attr; // Properties
dom.text / html; // Content
// + 6 more
```

### Event Utilities

```javascript
import { events } from "@cyclone_cm/nexus-ui";

events.debounce(fn, 300); // Debounce function
events.throttle(fn, 100); // Throttle function
events.delegate(el, ".item", "click"); // Event delegation
events.onVisible(el, callback); // Intersection observer
// + 7 more
```

### Theme Manager

```javascript
import { ThemeManager } from "@cyclone_cm/nexus-ui";

ThemeManager.setTheme("dark"); // Switch theme
ThemeManager.getTheme(); // Current theme
ThemeManager.toggle(); // Light ↔ Dark
ThemeManager.onChange(callback); // Listen to changes
ThemeManager.setCSSVariable("--color-x"); // Customize colors
ThemeManager.getAvailable(); // ['light', 'dark', 'high-contrast']
```

## 📱 Responsive Breakpoints

Desktop-first approach with max-width media queries:

| Breakpoint | Width      | Usage         |
| ---------- | ---------- | ------------- |
| base       | full width | mobile styles |
| sm         | 640px      | `sm:` prefix  |
| md         | 768px      | `md:` prefix  |
| lg         | 1024px     | `lg:` prefix  |
| xl         | 1280px     | `xl:` prefix  |
| 2xl        | 1536px     | `2xl:` prefix |

```html
<div class="hidden md:block lg:flex">Responsive visibility</div>
<div class="p-2 md:p-4 lg:p-8">Responsive spacing</div>
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Responsive grid</div>
```

## 🌙 Themes

### Built-in Themes

- **Light** (default) - Clean, professional light theme
- **Dark** - Dark mode with accessible contrast
- **High-Contrast** - WCAG AAA compliant accessibility theme

### Switching Themes

```javascript
// Programmatically
ThemeManager.setTheme('dark');

// HTML Attribute
<html data-theme="dark">

// System Preference
ThemeManager.setTheme('system');
```

### Customize Colors

```javascript
ThemeManager.setCSSVariable("--color-primary", "#6366f1");
ThemeManager.setCSSVariable("--color-secondary", "#8b5cf6");
```

## 📖 Documentation

- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Installation, setup, first steps
- **[API_REFERENCE.md](API_REFERENCE.md)** - Complete API documentation
- **[FRAMEWORK_GUIDE.md](FRAMEWORK_GUIDE.md)** - Architecture, best practices, customization
- **[Examples](examples/)** - Working HTML demos

## 🏗️ Project Structure

```
nexus-ui/
├── src/
│   ├── components/          # 8 TypeScript components
│   │   ├── base.ts
│   │   ├── Modal.ts
│   │   ├── Navbar.ts
│   │   ├── Carousel.ts
│   │   └── ... (5 more components)
│   ├── styles/             # 7 SCSS layer files
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _animations.scss
│   │   ├── _components.scss
│   │   └── ...
│   ├── utils/              # Utility modules
│   │   ├── dom.ts
│   │   ├── events.ts
│   │   └── theme.ts
│   └── types.ts
├── dist/                   # Production files
│   ├── index.css           # 31KB minified
│   ├── index.js            # 29KB minified
│   └── index.d.ts          # Type definitions
└── examples/               # Demo pages
```

## ⚙️ Development

### Build from Source

```bash
# Install dependencies
npm install --ignore-scripts

# TypeScript check
npx tsc --noEmit

# Compile TypeScript
npx tsc

# Compile SCSS
npx node-sass src/styles/index.scss dist/index.css --output-style compressed
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 🌐 Browser Support

| Browser       | Support   |
| ------------- | --------- |
| Chrome        | ✅ Latest |
| Firefox       | ✅ Latest |
| Safari        | ✅ Latest |
| Edge          | ✅ Latest |
| Mobile Chrome | ✅ Latest |
| Mobile Safari | ✅ Latest |

## 📄 License

**MIT License** - Feel free to use in personal and commercial projects

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📊 Stats

- **Components:** 8 fully featured
- **Utilities:** 26 helper functions
- **CSS Classes:** 500+ utilities
- **Animations:** 13 keyframes
- **Themes:** 3 built-in
- **TypeScript:** 100% type safe
- **Size:** 68KB minified (CSS + JS)
- **Dependencies:** 0 (zero!)

## 🎯 Roadmap

- ✅ Core framework
- ✅ Component library
- ✅ Theme system
- 🔄 Vue 3 integration
- 🔄 React hooks
- 🔄 Svelte components
- 🔄 CLI scaffolding tool

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/semsakadanupol/Nexus-Ui/issues)
- **Docs:** [Full Documentation](FRAMEWORK_GUIDE.md)
- **CDN:** [jsDelivr](https://cdn.jsdelivr.net/npm/@cyclone_cm/nexus-ui@0.0.1/)

## 🎉 Getting Started

```bash
# 1. Install
npm install @cyclone_cm/nexus-ui

# 2. Import CSS
<link rel="stylesheet" href="node_modules/@cyclone_cm/nexus-ui/dist/index.css">

# 3. Import JS
<script type="module">
  import { Modal, ThemeManager } from '@cyclone_cm/nexus-ui';

  // Your code here!
</script>

# 4. Build amazing UIs! 🚀
```

---

**Made with ❤️ for developers who love building beautiful UIs**

Star us on GitHub! ⭐

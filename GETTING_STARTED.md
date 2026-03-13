# Getting Started with Nexus-UI

Welcome to Nexus-UI! This guide will help you get up and running in minutes.

## Installation

### Via npm

```bash
npm install nexus-ui
```

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.example.com/nexus-ui/index.css" />
<script type="module" src="https://cdn.example.com/nexus-ui/index.js"></script>
```

## Your First Page

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Nexus-UI App</title>
    <link rel="stylesheet" href="path/to/nexus-ui/index.css" />
  </head>
  <body>
    <main>
      <!-- Your content here -->
    </main>
    <script type="module" src="path/to/nexus-ui/index.js"></script>
  </body>
</html>
```

### Basic Layout

```html
<!-- Header -->
<header class="bg-primary text-white p-lg">
  <h1 class="m-0">Welcome</h1>
</header>

<!-- Content -->
<main class="container p-2xl">
  <h2>Hello World</h2>
  <p>Your content here</p>
</main>

<!-- Footer -->
<footer class="bg-gray-900 text-white p-lg text-center">
  <p class="m-0">© 2024 My App</p>
</footer>
```

## Using Utilities

### Spacing

Control margins and padding with utility classes:

```html
<!-- Margin -->
<div class="m-md">1rem margin on all sides</div>
<div class="mt-lg">1.5rem margin-top</div>
<div class="mx-2xl">3rem margin on left and right</div>

<!-- Padding -->
<div class="p-md">1rem padding</div>
<div class="py-lg">1.5rem padding on top/bottom</div>
```

### Layout

Build responsive layouts easily:

```html
<!-- Flexbox -->
<div class="flex gap-md justify-between items-center">
  <h1>Title</h1>
  <nav class="flex gap-lg">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </nav>
</div>

<!-- Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) -->
<div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Colors

```html
<!-- Text colors -->
<p class="text-primary">Primary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>

<!-- Background colors -->
<div class="bg-secondary text-white p-md">Secondary background</div>

<!-- Border colors -->
<div class="border-2 border-primary rounded">Primary border</div>

<!-- All colors adapt to the current theme automatically -->
```

### Typography

```html
<!-- Font sizes -->
<h1 class="text-5xl font-bold">Heading</h1>
<h2 class="text-3xl font-semibold">Subheading</h2>
<p class="text-base leading-relaxed">Normal paragraph</p>
<small class="text-sm text-gray-600">Small text</small>

<!-- Font weights: font-light, font-normal, font-semibold, font-bold -->
<p class="font-bold">Bold text</p>

<!-- Line height: leading-tight, leading-normal, leading-relaxed, leading-loose -->
<p class="leading-loose">Spacious line height</p>
```

## Using Components

### Modal

```html
<!-- HTML -->
<button id="modalBtn" class="btn btn-primary">Open Modal</button>

<div id="myModal" class="modal">
  <div class="modal-overlay"></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <h2 class="modal-title">Modal Title</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script type="module">
  import { Modal } from "nexus-ui";

  const modal = new Modal("#myModal");

  document.getElementById("modalBtn").addEventListener("click", () => {
    modal.show();
  });

  modal.on("show", () => console.log("Modal opened"));
  modal.on("hide", () => console.log("Modal closed"));
</script>
```

### Carousel

```html
<!-- HTML -->
<div id="carousel" class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src="image1.jpg" alt="Slide 1" />
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" alt="Slide 2" />
    </div>
  </div>
  <button class="carousel-control carousel-control-prev" type="button">
    ❮
  </button>
  <button class="carousel-control carousel-control-next" type="button">
    ❯
  </button>
  <div class="carousel-indicators">
    <button class="active" data-index="0"></button>
    <button data-index="1"></button>
  </div>
</div>

<!-- JavaScript -->
<script type="module">
  import { Carousel } from "nexus-ui";

  const carousel = new Carousel("#carousel", {
    autoPlay: true,
    autoPlayInterval: 5000,
  });

  carousel.next(); // Next slide
  carousel.prev(); // Previous slide
  carousel.go(0); // Go to slide 0
</script>
```

### Tabs

```html
<!-- HTML -->
<div id="tabs" class="tabs">
  <div class="tab-links">
    <button class="tab-link active">Tab 1</button>
    <button class="tab-link">Tab 2</button>
    <button class="tab-link">Tab 3</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane active">Content 1</div>
    <div class="tab-pane">Content 2</div>
    <div class="tab-pane">Content 3</div>
  </div>
</div>

<!-- JavaScript -->
<script type="module">
  import { Tabs } from "nexus-ui";

  const tabs = new Tabs("#tabs");

  tabs.activateTab(0); // Activate first tab
  tabs.next(); // Next tab
  tabs.prev(); // Previous tab
</script>
```

### Accordion

```html
<!-- HTML -->
<div id="accordion" class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button">Section 1</button>
    </h2>
    <div class="accordion-body">
      <p>Content for section 1</p>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button">Section 2</button>
    </h2>
    <div class="accordion-body">
      <p>Content for section 2</p>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script type="module">
  import { Accordion } from "nexus-ui";

  const accordion = new Accordion("#accordion", {
    allowMultiple: false, // Only one section open at a time
  });

  accordion.open(0); // Open first section
  accordion.toggle(0); // Toggle first section
</script>
```

## Theme System

### Setting Themes

```javascript
import { ThemeManager } from "nexus-ui";

// Set a specific theme
ThemeManager.setTheme("light"); // Light theme
ThemeManager.setTheme("dark"); // Dark theme
ThemeManager.setTheme("high-contrast"); // High contrast (WCAG AAA)

// Toggle between light and dark
ThemeManager.toggle();

// Auto-detect from system preferences
ThemeManager.setTheme("system");

// Get current theme
const currentTheme = ThemeManager.getTheme(); // 'light', 'dark', etc.
```

### Listening to Theme Changes

```javascript
import { ThemeManager } from "nexus-ui";

// Listen for theme changes
const unsubscribe = ThemeManager.onChange((newTheme) => {
  console.log("Theme changed to:", newTheme);
});

// Unsubscribe when done
unsubscribe();
```

### Theme Switcher Button

```html
<button id="themeToggle" class="btn btn-outline">🌙 Dark</button>

<script type="module">
  import { ThemeManager } from "nexus-ui";

  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    ThemeManager.toggle();
    const currentTheme = ThemeManager.getTheme();
    themeToggle.textContent = currentTheme === "dark" ? "☀️ Light" : "🌙 Dark";
  });

  // Show initial theme
  const initialTheme = ThemeManager.getTheme();
  themeToggle.textContent = initialTheme === "dark" ? "☀️ Light" : "🌙 Dark";
</script>
```

## Responsive Design

Nexus-UI uses **desktop-first responsive design** with these breakpoints:

```
No prefix  = desktop (1536px+)
sm:        = small (max-width: 640px)
md:        = medium (max-width: 768px)
lg:        = large (max-width: 1024px)
xl:        = extra large (max-width: 1280px)
2xl:       = 2x large (max-width: 1536px)
```

### Examples

```html
<!-- Hide on mobile, show on tablet+ -->
<nav class="hidden md:block">Desktop Navigation</nav>

<!-- Show on mobile, hide on tablet+ -->
<button class="md:hidden">Mobile Menu</button>

<!-- Responsive font size -->
<h1 class="text-5xl md:text-3xl sm:text-xl">Responsive Heading</h1>

<!-- Responsive grid -->
<div class="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Responsive spacing -->
<div class="p-3xl md:p-2xl sm:p-lg">Responsive padding</div>

<!-- Responsive display -->
<div class="flex md:block">
  <div>Flex on desktop, block on mobile</div>
</div>
```

## Animations

### Using Animations

```html
<!-- Simple animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>
<div class="animate-bounce">Bounces</div>

<!-- With modifiers -->
<div class="animate-bounce animate-delay-500ms animate-duration-2s">
  Bounces after 500ms for 2 seconds
</div>

<!-- Different animations -->
<div class="animate-slide-down">Slide down</div>
<div class="animate-scale-in">Scale in</div>
<div class="animate-spin">Spinning</div>
<div class="animate-pulse">Pulsing</div>
```

### Available Animations

- `animate-fade-in` / `animate-fade-out` - Fade effect
- `animate-slide-up` / `animate-slide-down` / `animate-slide-left` / `animate-slide-right` - Slide effect
- `animate-scale-in` / `animate-scale-out` - Scale effect
- `animate-bounce` - Bouncing effect
- `animate-pulse` - Pulsing effect
- `animate-spin` - Spinning effect
- `animate-wiggle` - Wiggling effect
- `animate-shake` - Shaking effect

### Animation Modifiers

```html
<!-- Duration: 100ms to 2s -->
<div class="animate-fade-in animate-duration-500ms">Custom duration</div>

<!-- Delay: base to 1s -->
<div class="animate-bounce animate-delay-500ms">With delay</div>

<!-- Iteration: 1 to infinite -->
<div class="animate-spin animate-iteration-infinite">Infinite spin</div>

<!-- Fill mode: forwards, backwards, both -->
<div class="animate-fade-in animate-fill-forwards">Stays faded</div>
```

## Customization

### CSS Variables

Override colors and design tokens:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #10b981;
  --color-danger: #ef4444;

  --space-md: 1rem;
  --radius-lg: 0.5rem;
}

[data-theme="dark"] {
  --color-background: #1f2937;
  --color-text-primary: #f3f4f6;
}
```

### SCSS Variables

If using SCSS, customize with variables:

```scss
$primary: #ff6b6b;
$secondary: #4ecdc4;
$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
);

@import "nexus-ui/src/styles/index.scss";
```

## Utility Classes Reference

### Spacing

- `m-{size}` - Margin (xs, sm, md, lg, xl, 2xl, 3xl)
- `mt-{size}` - Margin top
- `mr-{size}` - Margin right
- `mb-{size}` - Margin bottom
- `ml-{size}` - Margin left
- `mx-{size}` - Margin horizontal
- `my-{size}` - Margin vertical
- `p-{size}` - Padding (same sizes as margin)

### Layout

- `flex` - Flexbox container
- `flex-col` - Flex column
- `flex-row` - Flex row
- `justify-start`, `justify-center`, `justify-between`, `justify-end` - Justify content
- `items-start`, `items-center`, `items-end` - Align items
- `gap-{size}` - Gap between flex/grid items

### Grid

- `grid` - Grid container
- `grid-cols-{1-12}` - Number of columns
- `gap-{size}` - Gap between items

### Colors

- `text-{color}` - Text color
- `bg-{color}` - Background color
- `border-{color}` - Border color

### Typography

- `text-{size}` - Font size (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)
- `font-{weight}` - Font weight (light, normal, semibold, bold)
- `leading-{height}` - Line height (tight, normal, relaxed, loose)
- `tracking-{width}` - Letter spacing (tight, normal, wide)

## Next Steps

1. **Explore Examples** - Check out the example pages in the `examples/` folder
2. **Read API Reference** - See [API_REFERENCE.md](./API_REFERENCE.md) for detailed component APIs
3. **Browse Components** - Visit [components.html](./examples/components.html) for live component demos
4. **Check GitHub** - Star us on [GitHub](https://github.com/your-username/Nexus-UI)
5. **Join Community** - Connect with other developers using Nexus-UI

## Troubleshooting

### Styles not loading?

Make sure you're importing the CSS file:

```html
<link rel="stylesheet" href="path/to/nexus-ui/index.css" />
```

### Components not working?

Ensure you're importing from the correct module and that JavaScript is enabled:

```javascript
import { Modal, Carousel } from "nexus-ui";
```

### Theme not switching?

Verify that the HTML element has the `data-theme` attribute:

```html
<html data-theme="light"></html>
```

## Support

Need help? Check out:

- [Documentation](https://github.com/your-username/Nexus-UI)
- [GitHub Issues](https://github.com/your-username/Nexus-UI/issues)
- [Discussions](https://github.com/your-username/Nexus-UI/discussions)

Happy building! 🚀

# Nexus-UI API Reference

Complete API documentation for all Nexus-UI components, utilities, and utilities.

## Components

### Modal

Interactive dialog overlay component for displaying content.

#### HTML Structure

```html
<div id="myModal" class="modal">
  <div class="modal-overlay"></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <h2 class="modal-title">Modal Title</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

#### TypeScript API

```typescript
import { Modal } from "nexus-ui";

const modal = new Modal("#myModal", options);

// Methods
modal.show(); // Show modal
modal.hide(); // Hide modal
modal.toggle(); // Toggle modal visibility
modal.isVisible(); // Check if modal is visible (boolean)
modal.destroy(); // Clean up and remove event listeners

// Events
modal.on("show", callback); // Fired when modal is shown
modal.on("hide", callback); // Fired when modal is hidden
modal.off("show", callback); // Remove event listener
```

#### Options

```typescript
interface ModalOptions {
  backdrop?: boolean | "static"; // Enable/disable backdrop, or 'static' to prevent close on click
  keyboard?: boolean; // Close on ESC key (default: true)
  focus?: boolean; // Focus modal on open (default: true)
}

// Example
const modal = new Modal("#myModal", {
  backdrop: "static",
  keyboard: false,
});
```

---

### Navbar

Responsive navigation bar component.

#### HTML Structure

```html
<nav id="navbar" class="navbar bg-primary text-white p-md">
  <div class="container flex justify-between items-center">
    <h1 class="brand m-0">Logo</h1>
    <button class="navbar-toggler" type="button">☰</button>
    <div class="navbar-collapse">
      <ul class="navbar-nav flex gap-lg">
        <li><a href="/" class="nav-link active">Home</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="/contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

#### TypeScript API

```typescript
import { Navbar } from "nexus-ui";

const navbar = new Navbar("#navbar", options);

// Methods
navbar.setActive(selector); // Set active nav link
navbar.getActive(); // Get currently active link
navbar.toggleMenu(); // Toggle mobile menu
navbar.expandMenu(); // Expand mobile menu
navbar.collapseMenu(); // Collapse mobile menu

// Events
navbar.on("expand", callback); // Fired when menu expands
navbar.on("collapse", callback); // Fired when menu collapses
navbar.on("activeChanged", callback); // Fired when active link changes
```

#### Options

```typescript
interface NavbarOptions {
  expandAt?: "sm" | "md" | "lg"; // Breakpoint at which navbar collapses (default: 'md')
  activeClass?: string; // Class for active links (default: 'active')
}
```

---

### Carousel

Image carousel/slider component.

#### HTML Structure

```html
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
```

#### TypeScript API

```typescript
import { Carousel } from "nexus-ui";

const carousel = new Carousel("#carousel", options);

// Methods
carousel.next(); // Go to next slide
carousel.prev(); // Go to previous slide
carousel.go(index); // Go to specific slide (0-indexed)
carousel.start(); // Start auto-play
carousel.pause(); // Pause auto-play
carousel.getCurrentIndex(); // Get current slide index

// Events
carousel.on("slideChange", callback); // Fired when slide changes
carousel.on("start", callback); // Fired when auto-play starts
carousel.on("pause", callback); // Fired when auto-play pauses
```

#### Options

```typescript
interface CarouselOptions {
  autoPlay?: boolean; // Enable auto-play (default: false)
  autoPlayInterval?: number; // Interval in ms (default: 5000)
  transitionDuration?: number; // Transition time in ms (default: 600)
}
```

---

### Tabs

Tab navigation component.

#### HTML Structure

```html
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
```

#### TypeScript API

```typescript
import { Tabs } from "nexus-ui";

const tabs = new Tabs("#tabs", options);

// Methods
tabs.activateTab(index); // Activate tab by index
tabs.getActiveIndex(); // Get currently active tab index
tabs.next(); // Activate next tab
tabs.prev(); // Activate previous tab

// Events
tabs.on("activate", callback); // Fired when tab is activated
```

#### Options

```typescript
interface TabsOptions {
  activeClass?: string; // Class for active tabs (default: 'active')
}
```

---

### Accordion

Collapsible content sections component.

#### HTML Structure

```html
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
```

#### TypeScript API

```typescript
import { Accordion } from "nexus-ui";

const accordion = new Accordion("#accordion", options);

// Methods
accordion.toggle(index); // Toggle section
accordion.open(index); // Open section
accordion.close(index); // Close section
accordion.getOpenItems(); // Get indices of open items
accordion.closeAll(); // Close all sections

// Events
accordion.on("open", callback); // Fired when section opens
accordion.on("close", callback); // Fired when section closes
```

#### Options

```typescript
interface AccordionOptions {
  allowMultiple?: boolean; // Allow multiple sections open (default: false)
}
```

---

### Dropdown

Dropdown menu component.

#### HTML Structure

```html
<div id="dropdown" class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
    <hr class="dropdown-divider" />
    <a href="#" class="dropdown-item">Item 3</a>
  </div>
</div>
```

#### TypeScript API

```typescript
import { Dropdown } from "nexus-ui";

const dropdown = new Dropdown("#dropdown");

// Methods
dropdown.show(); // Show dropdown
dropdown.hide(); // Hide dropdown
dropdown.toggle(); // Toggle dropdown

// Events
dropdown.on("show", callback); // Fired when dropdown shows
dropdown.on("hide", callback); // Fired when dropdown hides
```

#### Options

```typescript
interface DropdownOptions {
  autoClose?: boolean; // Auto-close on item click (default: true)
}
```

---

### Tooltip

Tooltip component for contextual information.

#### HTML Structure

```html
<button id="tooltip" class="btn btn-primary" title="Tooltip text">
  Hover me
</button>
```

#### TypeScript API

```typescript
import { Tooltip } from "nexus-ui";

const tooltip = new Tooltip("#tooltip", options);

// Methods
tooltip.show(target); // Show tooltip for target
tooltip.hide(); // Hide tooltip

// Events
tooltip.on("show", callback); // Fired when tooltip shows
tooltip.on("hide", callback); // Fired when tooltip hides
```

#### Options

```typescript
interface TooltipOptions {
  placement?: "top" | "bottom" | "left" | "right"; // Position (default: 'top')
  trigger?: "hover" | "click" | "focus"; // Trigger method (default: 'hover')
  delay?: number; // Delay in ms (default: 0)
  title?: string; // Tooltip content (default: from title attribute)
}
```

---

### Offcanvas

Side drawer/sidebar panel component.

#### HTML Structure

```html
<div id="offcanvas" class="offcanvas">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title">Sidebar</h2>
    <button class="offcanvas-close">&times;</button>
  </div>
  <div class="offcanvas-body">
    <p>Sidebar content</p>
  </div>
</div>

<button id="toggleBtn" class="btn btn-primary">Open Sidebar</button>
```

#### TypeScript API

```typescript
import { Offcanvas } from "nexus-ui";

const offcanvas = new Offcanvas("#offcanvas");

document.getElementById("toggleBtn").addEventListener("click", () => {
  offcanvas.toggle();
});

// Methods
offcanvas.show(); // Show offcanvas
offcanvas.hide(); // Hide offcanvas
offcanvas.toggle(); // Toggle offcanvas
offcanvas.isVisible(); // Check if visible

// Events
offcanvas.on("show", callback); // Fired when opens
offcanvas.on("hide", callback); // Fired when closes
```

#### Options

```typescript
interface OffcanvasOptions {
  backdrop?: boolean; // Show backdrop (default: true)
  keyboard?: boolean; // Close on ESC (default: true)
}
```

---

## Utilities

### DOM Utilities

```typescript
import { dom } from "nexus-ui";

// Query elements
dom.query(selector); // Query single element
dom.queryAll(selector); // Query all elements

// Class manipulation
dom.addClass(element, "class"); // Add class
dom.removeClass(element, "class"); // Remove class
dom.toggleClass(element, "class"); // Toggle class
dom.hasClass(element, "class"); // Check class

// Style manipulation
dom.styles(element, { color: "red" }); // Set multiple styles
dom.attr(element, "data-name", "value"); // Set attribute

// Event handling
dom.on(element, "click", handler); // Add event listener
dom.off(element, "click", handler); // Remove event listener
dom.trigger(element, "customEvent"); // Trigger custom event

// DOM traversal
dom.parent(element); // Get parent element
dom.children(element); // Get child elements
dom.next(element); // Get next sibling
dom.prev(element); // Get previous sibling

// Content manipulation
dom.text(element); // Get/set text content
dom.html(element); // Get/set innerHTML

// DOM ready
dom.ready(callback); // Execute when DOM is ready
```

### Event Utilities

```typescript
import { events } from "nexus-ui";

// Debounce
const debouncedFn = events.debounce(fn, 300);
debouncedFn(); // Waits 300ms before executing

// Throttle
const throttledFn = events.throttle(fn, 1000);
throttledFn(); // Executes at most once per 1000ms

// Once
const onceFn = events.once(fn);
onceFn(); // Executes only once

// RequestAnimationFrame
const frameId = events.raf(callback); // Execute on next frame
events.cancelRaf(frameId); // Cancel animation frame

// Event delegation
events.delegate(parent, ".item", "click", handler);

// Wait for element
events.waitForElement(".selector", 5000).then((el) => {
  // Element found within 5 seconds
});

// Visibility detection
events.onVisible(element, () => {
  console.log("Element is visible");
});

// Positioning
const position = events.getPosition(element); // Get element position
events.scrollIntoView(element, true); // Scroll into view
events.isInViewport(element); // Check if in viewport
```

### Theme Manager

```typescript
import { ThemeManager } from "nexus-ui";

// Set theme
ThemeManager.setTheme("light"); // Set light theme
ThemeManager.setTheme("dark"); // Set dark theme
ThemeManager.setTheme("high-contrast"); // Set high contrast
ThemeManager.setTheme("system"); // Use system preference

// Get theme
const theme = ThemeManager.getTheme(); // Get current theme
const effective = ThemeManager.getEffectiveTheme(); // Get effective theme

// Toggle theme
ThemeManager.toggle(); // Toggle between light and dark

// Available themes
const themes = ThemeManager.getAvailable(); // ['light', 'dark', 'high-contrast', 'system']

// Listen for changes
const unsubscribe = ThemeManager.onChange((newTheme) => {
  console.log("Theme changed to:", newTheme);
});
unsubscribe(); // Stop listening

// CSS Variables
const primary = ThemeManager.getCSSVariable("--color-primary");
ThemeManager.setCSSVariable("--color-primary", "#FF6B6B");

// Configuration
const config = ThemeManager.getConfig();
ThemeManager.setConfig(newConfig);
ThemeManager.extendConfig(partialConfig);

// Cleanup
ThemeManager.destroy();
```

---

## Utility Classes

### Spacing

```
m-xs, m-sm, m-md, m-lg, m-xl, m-2xl, m-3xl
mt-*, mr-*, mb-*, ml-*    (directional)
mx-*, my-*                (axis)
p-xs, p-sm, p-md, ...     (padding)
pt-*, pr-*, pb-*, pl-*
px-*, py-*
gap-* (for flex/grid)
```

### Display

```
flex              - Flexbox
flex-col          - Flex column
flex-row          - Flex row
block             - Block display
inline-block      - Inline-block
inline            - Inline display
hidden            - Display none
grid              - Grid display
```

### Flexbox

```
justify-start     - Start alignment
justify-center    - Center alignment
justify-between   - Space between
justify-end       - End alignment
items-start       - Align start
items-center      - Align center
items-end         - Align end
```

### Grid

```
grid-cols-1 to grid-cols-12  - Column count
gap-xs, gap-sm, gap-md, ...  - Gap sizes
```

### Colors

```
text-{color}      - Text color
bg-{color}        - Background color
border-{color}    - Border color
```

Available colors: `primary`, `secondary`, `accent`, `success`, `danger`, `warning`, `info`, `gray-50` to `gray-900`, `white`, `black`

### Typography

```
text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl
font-light, font-normal, font-semibold, font-bold
leading-tight, leading-normal, leading-relaxed, leading-loose
tracking-tight, tracking-normal, tracking-wide
```

### Sizing

```
w-{size}          - Width
h-{size}          - Height
min-w-*, min-h-*
max-w-*, max-h-*
w-full, h-full
w-screen, h-screen
```

### Borders

```
border            - 1px border
border-2          - 2px border
border-{color}    - Border color
rounded, rounded-lg, rounded-full
border-{side}-{color}  (top, right, bottom, left)
```

### Positioning

```
absolute          - Absolute position
fixed             - Fixed position
static            - Static position
sticky            - Sticky position
z-{level}         - Z-index
top, right, bottom, left  - Position values
```

### Responsive Prefixes

```
sm:  - Small (max-width: 640px)
md:  - Medium (max-width: 768px)
lg:  - Large (max-width: 1024px)
xl:  - Extra large (max-width: 1280px)
2xl: - 2x large (max-width: 1536px)

Example: md:flex, sm:text-sm, lg:p-lg
```

---

## Events

All components emit events that you can listen to:

```typescript
component.on("eventName", (detail) => {
  // Handle event
});

// Remove listener
component.off("eventName", handler);

// Clear all listeners
component.offAll();
```

Component-specific events are listed in their API sections above.

---

## Version

```typescript
import { VERSION } from "nexus-ui";
console.log(VERSION); // e.g., "2.0.0"
```

---

## TypeScript Support

Nexus-UI is fully typed with TypeScript. All component constructors, methods, and options are properly typed:

```typescript
import { Modal, Carousel, ThemeManager } from "nexus-ui";
import type { ModalOptions, CarouselOptions } from "nexus-ui";

// Full type support
const modal: Modal = new Modal("#modal");
const options: CarouselOptions = { autoPlay: true };
```

---

## Examples

### Complete Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <link rel="stylesheet" href="nexus-ui/index.css" />
  </head>
  <body>
    <!-- Modal -->
    <button id="openModal" class="btn btn-primary">Open Modal</button>
    <div id="myModal" class="modal">
      <!-- Modal structure -->
    </div>

    <!-- Theme switcher -->
    <button id="themeToggle">Toggle Theme</button>

    <script type="module">
      import { Modal, ThemeManager } from "nexus-ui";

      // Setup modal
      const modal = new Modal("#myModal");
      document.getElementById("openModal").addEventListener("click", () => {
        modal.show();
      });

      // Setup theme toggle
      document.getElementById("themeToggle").addEventListener("click", () => {
        ThemeManager.toggle();
      });

      // Listen to theme changes
      ThemeManager.onChange((theme) => {
        console.log("Theme is now:", theme);
      });
    </script>
  </body>
</html>
```

---

## Need Help?

- Check [GETTING_STARTED.md](./GETTING_STARTED.md) for tutorials
- View example pages in `examples/`
- Report issues on [GitHub](https://github.com/your-username/Nexus-UI)

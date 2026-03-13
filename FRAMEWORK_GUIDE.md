# Nexus-UI Framework Guide

Advanced guide for customizing and extending Nexus-UI for your specific needs.

## Design System Architecture

### Layer Structure

Nexus-UI uses a layered SCSS architecture for modularity and extensibility:

```
1. Variables    (_variables.scss)
   ↓
2. Mixins       (_mixins.scss)
   ↓
3. Reset        (_reset.scss)
   ↓
4. Themes       (_themes.scss)
   ↓
5. Animations   (_animations.scss)
   ↓
6. Utilities    (_utilities.scss)
   ↓
7. Components   (_components.scss)
```

#### Variables Layer

All design tokens centralized in `src/styles/_variables.scss`:

```scss
// Colors
$primary: #3b82f6;
$secondary: #8b5cf6;
$success: #10b981;
$danger: #ef4444;
$warning: #f59e0b;
$info: #0ea5e9;

// Spacing scale
$spacing: (
  xs: 0.25rem,
  // 4px
  sm: 0.5rem,
  // 8px
  md: 1rem,
  // 16px
  lg: 1.5rem,
  // 24px
  xl: 2rem,
  // 32px
  2xl: 3rem,
  // 48px
  3xl: 4rem, // 64px
);

// Typography
$font-sizes: (
  xs: 0.75rem,
  sm: 0.875rem,
  base: 1rem,
  lg: 1.125rem,
  xl: 1.25rem,
  2xl: 1.5rem,
  3xl: 1.875rem,
  4xl: 2.25rem,
  5xl: 3rem,
  6xl: 3.75rem,
);

// Responsive breakpoints (desktop-first)
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px,
);
```

#### Mixins Layer

Utility generators in `src/styles/_mixins.scss`:

```scss
// Responsive media queries (max-width)
@mixin respond-to($breakpoint) {
  @media (max-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Usage in components
.navbar {
  display: flex;

  @include respond-to(md) {
    flex-direction: column;
  }
}
```

#### Themes Layer

Three built-in themes with CSS custom properties:

```scss
[data-theme="light"] {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  --color-text-primary: #1f2937;
  /* ... more variables */
}

[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-background: #1f2937;
  --color-text-primary: #f3f4f6;
  /* ... more variables */
}

[data-theme="high-contrast"] {
  --color-primary: #0851b6;
  --color-background: #ffffff;
  --color-text-primary: #000000;
  /* ... more variables with max contrast */
}
```

---

## Customization Guide

### Method 1: CSS Variables (Recommended)

Override colors and tokens using CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
  --color-success: #2ecc71;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;

  /* Typography */
  --font-family-base: "Inter", sans-serif;
  --font-size-base: 1rem;

  /* Borders */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-base: 200ms ease-in-out;
}

[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-background: #1f2937;
}
```

### Method 2: SCSS Variables (for importing SCSS)

If you're importing SCSS directly:

```scss
// Override before import
$primary: #ff6b6b;
$secondary: #4ecdc4;
$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
  xl: 2rem,
  2xl: 3rem,
);

@import "nexus-ui/src/styles/index.scss";
```

### Method 3: Component-Level Customization

```css
/* Override specific component styles */
.btn {
  border-radius: 9999px; /* Pill buttons */
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
}
```

---

## Creating Custom Components

### Component Structure

Extend Nexus-UI components with custom functionality:

```typescript
import { BaseComponent, dom, events } from "nexus-ui";

export class CustomAlert extends BaseComponent {
  private element: HTMLElement | null;
  private closeBtn: HTMLElement | null;
  private options: AlertOptions;

  constructor(selector: string, options?: Partial<AlertOptions>) {
    super();

    this.element = dom.query(selector) as HTMLElement;
    if (!this.element) {
      throw new Error(`Element ${selector} not found`);
    }

    this.options = {
      autoClose: false,
      closeDelay: 5000,
      ...options,
    };

    this.init();
  }

  private init(): void {
    if (!this.element) return;

    this.closeBtn = this.element.querySelector(".alert-close") as HTMLElement;

    if (this.closeBtn) {
      dom.on(this.closeBtn, "click", () => this.close());
    }

    if (this.options.autoClose) {
      setTimeout(() => this.close(), this.options.closeDelay);
    }
  }

  public close(): void {
    if (!this.element) return;

    dom.addClass(this.element, "animate-fade-out");
    setTimeout(() => {
      if (this.element) {
        this.element.remove();
      }
      this.emit("close", { timestamp: Date.now() });
    }, 300);
  }

  public getName(): string {
    return "CustomAlert";
  }
}

interface AlertOptions {
  autoClose: boolean;
  closeDelay: number;
}
```

### Using Custom Components

```typescript
import { CustomAlert } from "./components/CustomAlert";

const alert = new CustomAlert(".alert", {
  autoClose: true,
  closeDelay: 3000,
});

alert.on("close", () => {
  console.log("Alert closed");
});
```

---

## Build Configuration

### npm Scripts

```json
{
  "scripts": {
    "dev": "npm run build -- --watch",
    "build": "npm run build:scss && npm run build:ts",
    "build:scss": "sass src/styles/index.scss dist/index.css",
    "build:ts": "tsc",
    "watch": "concurrently \"npm run build:scss -- --watch\" \"tsc --watch\"",
    "lint": "eslint src/** --ext .ts,.tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,scss,css}\"",
    "test": "jest",
    "serve": "http-server dist"
  }
}
```

### Environment Setup

```bash
# Install dependencies
npm install

# Watch mode (during development)
npm run dev

# Production build
npm run build

# Serve built files
npm run serve
```

---

## Advanced Animations

### Creating Custom Animations

```scss
// src/styles/_custom-animations.scss

@keyframes custom-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes custom-flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.animate-custom-bounce {
  animation: custom-bounce 1s ease-in-out infinite;
}

.animate-custom-flip {
  animation: custom-flip 0.6s ease-in-out;
}

// With modifiers
.animate-custom-bounce {
  &.animate-delay-500ms {
    animation-delay: 500ms;
  }

  &.animate-duration-2s {
    animation-duration: 2s;
  }
}
```

```html
<!-- Usage -->
<div class="animate-custom-bounce animate-delay-500ms">Bouncing element</div>
```

---

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2015",
    "lib": ["ES2020", "DOM"],
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Extending Components

### Method 1: Subclassing

```typescript
import { Carousel } from "nexus-ui";

export class AdvancedCarousel extends Carousel {
  public goToRandom(): void {
    const max = this.getMaxIndex();
    const random = Math.floor(Math.random() * max);
    this.go(random);
  }

  public goToLast(): void {
    this.go(this.getMaxIndex() - 1);
  }

  private getMaxIndex(): number {
    // Implementation
    return 0;
  }
}
```

### Method 2: Composition

```typescript
import { Modal } from "nexus-ui";

export class FormModal {
  private modal: Modal;
  private formElement: HTMLFormElement;

  constructor(selector: string) {
    const elem = document.querySelector(selector);
    if (!(elem instanceof HTMLElement)) throw new Error("Element not found");

    this.modal = new Modal(selector);
    this.formElement = elem.querySelector("form")!;

    this.setupForm();
  }

  private setupForm(): void {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(this.formElement);
      console.log(Object.fromEntries(formData));
      this.modal.hide();
    });
  }

  public show(): void {
    this.modal.show();
  }

  public hide(): void {
    this.modal.hide();
  }
}
```

---

## Performance Optimization

### Code Splitting

```typescript
// Only load components when needed
const { Modal } = await import("nexus-ui");

document.getElementById("btn").addEventListener("click", async () => {
  const modal = new Modal("#modal");
  modal.show();
});
```

### Lazy Load Components

```typescript
// Intersection Observer approach
const loadComponentsOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { Carousel } = require("nexus-ui");
        new Carousel(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".carousel").forEach((el) => {
    observer.observe(el);
  });
};

document.addEventListener("DOMContentLoaded", loadComponentsOnScroll);
```

---

## Testing

### Component Testing Example

```typescript
// __tests__/Modal.test.ts
import { Modal } from "nexus-ui";

describe("Modal", () => {
  let modal: Modal;
  let modalElement: HTMLElement;

  beforeEach(() => {
    // Create test HTML
    document.body.innerHTML = `
      <div id="testModal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-dialog">
          <div class="modal-body">Test</div>
        </div>
      </div>
    `;
    modalElement = document.getElementById("testModal")!;
    modal = new Modal("#testModal");
  });

  test("should show modal", () => {
    modal.show();
    expect(modal.isVisible()).toBe(true);
  });

  test("should hide modal", () => {
    modal.show();
    modal.hide();
    expect(modal.isVisible()).toBe(false);
  });

  test("should emit events", () => {
    const callback = jest.fn();
    modal.on("show", callback);
    modal.show();
    expect(callback).toHaveBeenCalled();
  });
});
```

---

## Accessibility Guidelines

### WCAG Compliance Checklist

- ✅ Semantic HTML (correct heading hierarchy)
- ✅ Color contrast ratios (WCAG AA minimum, AAA preferred)
- ✅ Keyboard navigation (Tab, Enter, Esc keys)
- ✅ ARIA labels for screen readers
- ✅ Focus indicators (visible focus styles)
- ✅ Text alternatives for images
- ✅ Sufficient touch targets (44x44px minimum)
- ✅ Color not the only indicator of state
- ✅ Reduced motion support (prefers-reduced-motion)

### Example: Accessible Modal

```html
<div
  id="modal"
  class="modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modalTitle"
>
  <div class="modal-overlay"></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <h2 id="modalTitle" class="modal-title">Modal Title</h2>
      <button class="modal-close" aria-label="Close modal">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" aria-label="Confirm action">
        Confirm
      </button>
    </div>
  </div>
</div>

<style>
  /* Support reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .modal {
      animation: none;
    }
  }

  /* Visible focus indicator */
  .btn:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>
```

---

## Browser Support

Nexus-UI supports:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

Uses modern CSS features:

- CSS Custom Properties
- CSS Grid
- Flexbox
- CSS Transforms & Animations
- ES2020 JavaScript

For older browsers, consider transpiling with Babel.

---

## Troubleshooting

### Common Issues

#### "Module not found" error

```typescript
// Ensure correct import path
import { Modal } from "nexus-ui"; // ✓ Correct
// import { Modal } from './nexus-ui';  // ✗ Wrong
```

#### Theme not switching

```typescript
// Ensure HTML has data-theme attribute
<html data-theme="light"> ✓

// Make sure ThemeManager is initialized
import { ThemeManager } from 'nexus-ui';
ThemeManager.setTheme('dark');
```

#### Components not responding

```typescript
// Verify elements exist in DOM
const modal = new Modal("#doesNotExist"); // Will throw error

// Use try-catch for safety
try {
  const modal = new Modal("#myModal");
} catch (error) {
  console.error("Modal not found:", error);
}
```

---

## Resources

- [Getting Started](./GETTING_STARTED.md)
- [API Reference](./API_REFERENCE.md)
- [Examples](./examples/)
- [GitHub Repository](https://github.com/your-username/Nexus-UI)

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

MIT License - see [LICENSE](./LICENSE) file

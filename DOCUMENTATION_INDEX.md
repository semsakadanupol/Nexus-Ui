# Nexus-UI Documentation Index

Complete navigation guide for all Nexus-UI documentation.

## 📚 Quick Navigation

### For New Users

1. **[README.md](./README.md)** - Framework overview and key features
2. **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Step-by-step setup guide
3. **[Examples](./examples/)** - Live demo pages
   - [Landing Page](./examples/landing.html) - Beautiful landing page demo
   - [Components Showcase](./examples/components.html) - All components in action
   - [Dashboard](./examples/dashboard.html) - Full-featured dashboard
   - [Forms](./examples/forms.html) - Form examples with validation

### For Developers

4. **[API_REFERENCE.md](./API_REFERENCE.md)** - Complete component and utility API
5. **[FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md)** - Advanced customization and architecture

### For Contributors

6. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute to Nexus-UI
7. **[CHANGELOG.md](./CHANGELOG.md)** - Version history and updates

---

## 📖 Documentation Sections

### Getting Started

**Location:** [GETTING_STARTED.md](./GETTING_STARTED.md)

- Installation methods (npm, CDN)
- Your first page
- Using utilities
- Using components
- Theme system basics
- Responsive design
- Animations
- Custom themes

### Component API Reference

**Location:** [API_REFERENCE.md](./API_REFERENCE.md)

- **Modal** - Dialog overlays with animations
- **Navbar** - Responsive navigation bars
- **Carousel** - Image sliders with auto-play
- **Tabs** - Tab navigation interfaces
- **Accordion** - Collapsible content sections
- **Dropdown** - Dropdown menus
- **Tooltip** - Contextual information popups
- **Offcanvas** - Side drawer panels

### Utility APIs

**Location:** [API_REFERENCE.md](./API_REFERENCE.md)

- **DOM Utilities** - Element querying and manipulation
- **Event Utilities** - Debounce, throttle, delegation
- **Theme Manager** - Theme switching and customization

### Utility Classes

**Location:** [API_REFERENCE.md](./API_REFERENCE.md#utility-classes) & [GETTING_STARTED.md](./GETTING_STARTED.md#utility-classes-reference)

- Spacing (margin, padding, gap)
- Layout (flex, grid, display)
- Colors (text, background, border)
- Typography (sizes, weights, line heights)
- Sizing (width, height, dimensions)
- Borders (styles, radius, colors)
- Positioning (absolute, fixed, sticky)
- Responsive (desktop-first breakpoints)
- Animations (fade, slide, bounce, etc.)

### Framework Architecture

**Location:** [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md)

- **Design System** - Color tokens, spacing scale, typography
- **Layer Structure** - Variables, mixins, reset, themes, animations, utilities, components
- **Customization Methods** - CSS variables, SCSS, component-level
- **Custom Components** - Extending and creating new components
- **Build Configuration** - npm scripts and setup
- **Advanced Animations** - Creating custom animations
- **TypeScript Support** - Full type safety and intellisense
- **Accessibility** - WCAG compliance and guidelines
- **Testing** - Unit testing components
- **Performance** - Code splitting and optimization
- **Browser Support** - Compatibility matrix

---

## 🎯 Common Tasks

### I want to...

#### Install and set up Nexus-UI

→ Read [GETTING_STARTED.md](./GETTING_STARTED.md#installation)

#### Build my first page

→ Read [GETTING_STARTED.md](./GETTING_STARTED.md#your-first-page)

#### Use a specific component

→ Find it in [API_REFERENCE.md](./API_REFERENCE.md#components)

#### Customize colors and theme

→ Read [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md#customization-guide)

#### Create a custom component

→ Read [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md#creating-custom-components)

#### Use utility classes for styling

→ Read [GETTING_STARTED.md](./GETTING_STARTED.md#using-utilities)

#### Set up dark mode/themes

→ Read [GETTING_STARTED.md](./GETTING_STARTED.md#theme-system)

#### Make my site responsive

→ Read [GETTING_STARTED.md](./GETTING_STARTED.md#responsive-design)

#### Find a utility class

→ Check [API_REFERENCE.md](./API_REFERENCE.md#utility-classes)

#### Debug an issue

→ Read [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md#troubleshooting)

#### Test my components

→ Read [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md#testing)

#### See live examples

→ Open the [Examples Directory](./examples/)

---

## 📂 File Structure

```
Nexus-UI/
├── README.md                      # Main overview
├── GETTING_STARTED.md             # Setup and basics
├── API_REFERENCE.md               # Component and utility APIs
├── FRAMEWORK_GUIDE.md             # Advanced guide
├── CHANGELOG.md                   # Version history
├── CONTRIBUTING.md                # Contribution guidelines
├── LICENSE                        # MIT License
│
├── src/                           # Source code
│   ├── styles/                    # SCSS files
│   │   ├── _variables.scss        # Design tokens
│   │   ├── _mixins.scss           # Utility generators
│   │   ├── _reset.scss            # CSS reset
│   │   ├── _themes.scss           # Theme definitions
│   │   ├── _animations.scss       # Animations
│   │   ├── _utilities.scss        # Utility classes
│   │   ├── _components.scss       # Component styles
│   │   └── index.scss             # Main entry
│   │
│   ├── components/                # TypeScript components
│   │   ├── Modal.ts
│   │   ├── Navbar.ts
│   │   ├── Carousel.ts
│   │   ├── Tabs.ts
│   │   ├── Accordion.ts
│   │   ├── Dropdown.ts
│   │   ├── Tooltip.ts
│   │   ├── Offcanvas.ts
│   │   └── base.ts
│   │
│   ├── utils/                     # Utilities
│   │   ├── dom.ts                 # DOM utilities
│   │   ├── events.ts              # Event utilities
│   │   └── theme.ts               # Theme manager
│   │
│   ├── types.ts                   # TypeScript interfaces
│   └── index.ts                   # Main export
│
├── dist/                          # Compiled output
│   ├── index.css                  # Compiled styles
│   ├── index.js                   # Compiled JavaScript
│   └── index.d.ts                 # Type definitions
│
├── examples/                      # Demo pages
│   ├── landing.html               # Landing page
│   ├── components.html             # Component showcase
│   ├── dashboard.html             # Dashboard demo
│   └── forms.html                 # Forms demo
│
├── package.json                   # npm configuration
├── tsconfig.json                  # TypeScript config
└── .github/
    └── workflows/
        └── deploy.yml             # CI/CD pipeline
```

---

## 🔗 External Resources

- [GitHub Repository](https://github.com/your-username/Nexus-UI)
- [npm Package](https://www.npmjs.com/package/nexus-ui)
- [CDN](https://cdn.example.com/nexus-ui/)
- [Issues & Discussions](https://github.com/your-username/Nexus-UI/issues)
- [Roadmap](https://github.com/your-username/Nexus-UI/projects)

---

## 💬 Getting Help

### Documentation

1. **Search the docs** - Use Ctrl+F in [API_REFERENCE.md](./API_REFERENCE.md)
2. **Check examples** - Browse [examples/](./examples/) for working code
3. **Read guides** - [GETTING_STARTED.md](./GETTING_STARTED.md) for setup, [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md) for advanced topics

### Community

- **GitHub Issues** - Report bugs or request features
- **GitHub Discussions** - Ask questions and share ideas
- **Stack Overflow** - Tag questions with `nexus-ui`
- **Twitter** - Follow us for updates [@nexus_ui](https://twitter.com/nexus_ui)

### Contribution

- **Bug Reports** - [GitHub Issues](https://github.com/your-username/Nexus-UI/issues)
- **Feature Requests** - [GitHub Issues](https://github.com/your-username/Nexus-UI/issues)
- **Pull Requests** - See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📊 Documentation Stats

| Section        | File               | Topics                                      | Estimated Read Time |
| -------------- | ------------------ | ------------------------------------------- | ------------------- |
| Overview       | README.md          | Framework, features, quick start            | 10 min              |
| Setup & Basics | GETTING_STARTED.md | Installation, utilities, components, themes | 45 min              |
| API Reference  | API_REFERENCE.md   | 8 components, 25+ utilities, theme API      | 60 min              |
| Advanced Guide | FRAMEWORK_GUIDE.md | Architecture, customization, testing        | 30 min              |
| Examples       | examples/          | 4 full-page demos                           | 15 min              |
| **Total**      |                    |                                             | **2-3 hours**       |

---

## 🗺️ Learning Path

### Beginner (0-2 hours)

1. Read [README.md](./README.md) (5 min)
2. Follow [GETTING_STARTED.md](./GETTING_STARTED.md) setup (15 min)
3. Explore [components.html](./examples/components.html) demo (10 min)
4. Build your first page using utilities (30 min)

**Result:** You can build static pages with Nexus-UI utilities and basic styling.

### Intermediate (2-4 hours)

1. Study [API_REFERENCE.md](./API_REFERENCE.md) (60 min)
2. Review [dashboard.html](./examples/dashboard.html) (15 min)
3. Implement interactive components (30 min)
4. Customize theme with CSS variables (30 min)

**Result:** You can build complete interactive pages with themed components.

### Advanced (4-8 hours)

1. Deep dive into [FRAMEWORK_GUIDE.md](./FRAMEWORK_GUIDE.md) (60 min)
2. Study source code in `src/` folder (60 min)
3. Create custom components (60 min)
4. Set up build pipeline and testing (60 min)

**Result:** You can extend Nexus-UI, create custom components, and contribute to the project.

---

## 📝 Documentation Conventions

### Code Examples

All code examples use TypeScript and ES modules:

```typescript
import { Modal } from "nexus-ui";
```

HTML examples use semantic HTML5 and best practices.

SCSS examples follow BEM naming convention:

```scss
.component-name {
  &__element {
    &--modifier {
    }
  }
}
```

### Links

- Internal links: `[text](./file.md)` or `[text](./file.md#section)`
- External links: `[text](https://example.com)`
- Code references: `ModalOptions`, `ThemeManager.setTheme()`

### Emphasis

- **Bold** for important terms
- `Code` for technical terms, file names, code snippets
- > Blockquotes for important notes

---

## 🎓 Version Information

| Version | Release Date | Highlights                                                |
| ------- | ------------ | --------------------------------------------------------- |
| 2.0.0   | 2024-01-XX   | Initial release with animations, themes, and 8 components |
| 1.5.0   | Coming       | Component enhancements and CLI tools                      |
| 1.4.0   | Coming       | Accessibility improvements                                |

See [CHANGELOG.md](./CHANGELOG.md) for full history.

---

## ✅ Documentation Checklist

Use this to track your learning:

- [ ] Read README for overview
- [ ] Install Nexus-UI
- [ ] Build first page
- [ ] Learn utility classes
- [ ] Explore components
- [ ] Set up theme switching
- [ ] Make page responsive
- [ ] Use animations
- [ ] Add interactivity with components
- [ ] Customize styling
- [ ] Create custom component
- [ ] Set up tests
- [ ] Publish your project

---

## 🚀 Next Steps

1. **[Get Started](./GETTING_STARTED.md)** - Begin building with Nexus-UI
2. **[View Examples](./examples/)** - See it in action
3. **[Read Full API](./API_REFERENCE.md)** - Reference documentation
4. **[Explore Framework](./FRAMEWORK_GUIDE.md)** - Deep dive into architecture
5. **[Contribute](./CONTRIBUTING.md)** - Help improve Nexus-UI

---

**Last Updated:** January 2024  
**Framework Version:** 2.0.0  
**Docs Version:** 1.0.0

Happy building! 🎨

// ============================================
// Navbar Component
// ============================================

import {
  select,
  selectAll,
  addClass,
  removeClass,
  toggleClass,
  on,
} from "../utils/index.js";

export class Navbar {
  private element: Element;
  private toggler: Element | null;
  private navMenu: Element | null;

  constructor(element: Element | string) {
    this.element = typeof element === "string" ? select(element)! : element;
    this.toggler = this.element.querySelector(".navbar-toggler");
    this.navMenu = this.element.querySelector(".navbar-nav");
    this.init();
  }

  private init(): void {
    if (!this.toggler || !this.navMenu) return;

    // Toggle mobile menu
    on(this.toggler, "click", () => this.toggleMenu());

    // Close menu when clicking link
    const navLinks = selectAll(".nav-link", this.element);
    navLinks.forEach((link: Element) => {
      on(link, "click", () => this.closeMenu());
    });

    // Setup dropdowns
    this.setupDropdowns();
  }

  private setupDropdowns(): void {
    const dropdowns = selectAll(".nav-dropdown", this.element);

    dropdowns.forEach((dropdown: Element) => {
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");

      if (toggle) {
        on(toggle, "click", (e: Event) => {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        });
      }
    });
  }

  private toggleDropdown(dropdown: Element): void {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");

    // Close other dropdowns
    selectAll(".nav-dropdown.active", this.element).forEach((item: Element) => {
      if (item !== dropdown) {
        removeClass(item, "active");
      }
    });

    // Toggle current dropdown
    toggleClass(dropdown, "active");
    if (toggle) {
      toggleClass(toggle, "active");
    }
  }

  private toggleMenu(): void {
    if (!this.toggler || !this.navMenu) return;

    toggleClass(this.navMenu, "active");
    toggleClass(this.toggler, "active");
  }

  private closeMenu(): void {
    if (!this.navMenu || !this.toggler) return;

    removeClass(this.navMenu, "active");
    removeClass(this.toggler, "active");
  }

  setActive(selector: string): void {
    selectAll(".nav-link.active", this.element).forEach((link: Element) => {
      removeClass(link, "active");
    });

    const activeLink = select(selector, this.element);
    if (activeLink) {
      addClass(activeLink, "active");
    }
  }

  static getInstance(element: Element | string): Navbar | null {
    const el = typeof element === "string" ? select(element) : element;
    return el ? (el as any).__navbar || null : null;
  }

  static getOrCreateInstance(element: Element | string): Navbar {
    const el = typeof element === "string" ? select(element)! : element;
    let instance = (el as any).__navbar;

    if (!instance) {
      instance = new Navbar(el);
      (el as any).__navbar = instance;
    }

    return instance;
  }
}

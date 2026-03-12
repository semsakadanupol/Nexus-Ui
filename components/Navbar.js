// ============================================
// Navbar Component
// ============================================
import { select, selectAll, addClass, removeClass, toggleClass, on, } from "../utils/index.js";
export class Navbar {
    constructor(element) {
        this.element = typeof element === "string" ? select(element) : element;
        this.toggler = this.element.querySelector(".navbar-toggler");
        this.navMenu = this.element.querySelector(".navbar-nav");
        this.init();
    }
    init() {
        if (!this.toggler || !this.navMenu)
            return;
        // Toggle mobile menu
        on(this.toggler, "click", () => this.toggleMenu());
        // Close menu when clicking link
        const navLinks = selectAll(".nav-link", this.element);
        navLinks.forEach((link) => {
            on(link, "click", () => this.closeMenu());
        });
        // Setup dropdowns
        this.setupDropdowns();
    }
    setupDropdowns() {
        const dropdowns = selectAll(".nav-dropdown", this.element);
        dropdowns.forEach((dropdown) => {
            const toggle = dropdown.querySelector(".nav-dropdown-toggle");
            if (toggle) {
                on(toggle, "click", (e) => {
                    e.preventDefault();
                    this.toggleDropdown(dropdown);
                });
            }
        });
    }
    toggleDropdown(dropdown) {
        const toggle = dropdown.querySelector(".nav-dropdown-toggle");
        // Close other dropdowns
        selectAll(".nav-dropdown.active", this.element).forEach((item) => {
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
    toggleMenu() {
        if (!this.toggler || !this.navMenu)
            return;
        toggleClass(this.navMenu, "active");
        toggleClass(this.toggler, "active");
    }
    closeMenu() {
        if (!this.navMenu || !this.toggler)
            return;
        removeClass(this.navMenu, "active");
        removeClass(this.toggler, "active");
    }
    setActive(selector) {
        selectAll(".nav-link.active", this.element).forEach((link) => {
            removeClass(link, "active");
        });
        const activeLink = select(selector, this.element);
        if (activeLink) {
            addClass(activeLink, "active");
        }
    }
    static getInstance(element) {
        const el = typeof element === "string" ? select(element) : element;
        return el ? el.__navbar || null : null;
    }
    static getOrCreateInstance(element) {
        const el = typeof element === "string" ? select(element) : element;
        let instance = el.__navbar;
        if (!instance) {
            instance = new Navbar(el);
            el.__navbar = instance;
        }
        return instance;
    }
}
//# sourceMappingURL=Navbar.js.map
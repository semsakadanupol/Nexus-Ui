import { query, queryAll, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Navbar extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.navLinks = [];
        this.isExpanded = false;
        this.element = query(selector);
        this.toggler = this.element?.querySelector(".navbar-toggler") || null;
        this.collapse = this.element?.querySelector(".navbar-collapse") || null;
        this.navLinks = queryAll(`${selector} .nav-link`);
        this.options = {
            ...DEFAULT_OPTIONS,
            expandAt: "md",
            activeClass: "active",
            ...options,
        };
        this.init();
    }
    init() {
        if (this.toggler) {
            on(this.toggler, "click", () => this.toggleMenu());
        }
        this.navLinks.forEach((link) => {
            on(link, "click", () => {
                if (window.innerWidth < 768) {
                    this.collapseMenu();
                }
                this.setActive(link);
            });
        });
        on(window, "resize", () => {
            if (window.innerWidth >= 768) {
                this.expandMenu();
            }
            else {
                this.collapseMenu();
            }
        });
    }
    toggleMenu() {
        if (this.isExpanded) {
            this.collapseMenu();
        }
        else {
            this.expandMenu();
        }
    }
    expandMenu() {
        if (this.collapse) {
            addClass(this.collapse, "show");
            this.isExpanded = true;
            this.emit("expand");
        }
    }
    collapseMenu() {
        if (this.collapse) {
            removeClass(this.collapse, "show");
            this.isExpanded = false;
            this.emit("collapse");
        }
    }
    setActive(selector) {
        this.navLinks.forEach((link) => {
            removeClass(link, this.options.activeClass);
        });
        let targetLink = null;
        if (typeof selector === "string") {
            targetLink = query(selector);
        }
        else {
            targetLink = selector;
        }
        if (targetLink) {
            addClass(targetLink, this.options.activeClass);
            this.emit("activeChanged", { target: targetLink });
        }
    }
    getActive() {
        return (this.navLinks.find((link) => link.classList.contains(this.options.activeClass)) || null);
    }
    destroy() {
        super.dispose();
    }
}
//# sourceMappingURL=Navbar.js.map
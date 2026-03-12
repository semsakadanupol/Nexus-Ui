// ============================================
// Dropdown Component
// ============================================
import { select, selectAll, addClass, removeClass, on, } from "../utils/index.js";
export class Dropdown {
    constructor(element) {
        this.element = typeof element === "string" ? select(element) : element;
        this.toggleBtn = this.element.querySelector('[data-toggle="dropdown"]');
        this.menu = this.element.querySelector(".dropdown-menu");
        this.init();
    }
    init() {
        if (!this.toggleBtn || !this.menu)
            return;
        on(this.toggleBtn, "click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggle();
        });
        // Close when clicking outside
        on(document, "click", () => this.hide());
    }
    show() {
        if (!this.menu)
            return;
        addClass(this.element, "show");
        addClass(this.menu, "show");
    }
    hide() {
        if (!this.menu)
            return;
        removeClass(this.element, "show");
        removeClass(this.menu, "show");
    }
    toggle() {
        this.element.classList.contains("show") ? this.hide() : this.show();
    }
    static getInstance(element) {
        const el = typeof element === "string" ? select(element) : element;
        return el ? el.__dropdown || null : null;
    }
}
export class Tooltip {
    constructor(element, options) {
        this.tooltip = null;
        this.element = typeof element === "string" ? select(element) : element;
        this.options = { placement: "top", trigger: "hover", ...options };
        this.init();
    }
    init() {
        this.createTooltip();
        this.setupTriggers();
    }
    createTooltip() {
        this.tooltip = document.createElement("div");
        this.tooltip.className = `tooltip tooltip-${this.options.placement}`;
        this.tooltip.textContent = this.options.title;
        document.body.appendChild(this.tooltip);
    }
    setupTriggers() {
        const trigger = this.options.trigger;
        if (trigger === "hover") {
            on(this.element, "mouseenter", () => this.show());
            on(this.element, "mouseleave", () => this.hide());
        }
        else if (trigger === "click") {
            on(this.element, "click", () => this.toggle());
        }
        else if (trigger === "focus") {
            on(this.element, "focus", () => this.show());
            on(this.element, "blur", () => this.hide());
        }
    }
    updatePosition() {
        if (!this.tooltip)
            return;
        const rect = this.element.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        let top = 0;
        let left = 0;
        switch (this.options.placement) {
            case "top":
                top = rect.top - tooltipRect.height - 8;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;
            case "bottom":
                top = rect.bottom + 8;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;
            case "left":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.left - tooltipRect.width - 8;
                break;
            case "right":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.right + 8;
                break;
        }
        this.tooltip.style.top = `${top + window.scrollY}px`;
        this.tooltip.style.left = `${left + window.scrollX}px`;
    }
    show() {
        if (!this.tooltip)
            return;
        this.updatePosition();
        addClass(this.tooltip, "show");
    }
    hide() {
        if (!this.tooltip)
            return;
        removeClass(this.tooltip, "show");
    }
    toggle() {
        this.tooltip?.classList.contains("show") ? this.hide() : this.show();
    }
    update(title) {
        this.options.title = title;
        if (this.tooltip) {
            this.tooltip.textContent = title;
        }
    }
    dispose() {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }
}
export class Offcanvas {
    constructor(element, options = {}) {
        this.isShown = false;
        this.element = typeof element === "string" ? select(element) : element;
        this.options = {
            backdrop: true,
            keyboard: true,
            scroll: false,
            ...options,
        };
        this.init();
    }
    init() {
        const closeButtons = selectAll('[data-dismiss="offcanvas"]', this.element);
        closeButtons.forEach((button) => {
            on(button, "click", () => this.hide());
        });
    }
    show() {
        if (this.isShown)
            return;
        this.isShown = true;
        addClass(this.element, "show");
        if (!this.options.scroll) {
            document.body.style.overflow = "hidden";
        }
    }
    hide() {
        if (!this.isShown)
            return;
        this.isShown = false;
        removeClass(this.element, "show");
        document.body.style.overflow = "";
    }
    toggle() {
        this.isShown ? this.hide() : this.show();
    }
}
//# sourceMappingURL=Dropdown.js.map
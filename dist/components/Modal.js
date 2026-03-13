// ============================================
// Modal Component
// ============================================
import { select, addClass, removeClass, on, trigger, } from "../utils/index.js";
export class Modal {
    constructor(element, options = {}) {
        this.backdrop = null;
        this.isShown = false;
        this.element = typeof element === "string" ? select(element) : element;
        this.options = { backdrop: true, keyboard: true, ...options };
        this.init();
    }
    init() {
        if (!this.element)
            return;
        // Find or create backdrop
        this.backdrop = select(".modal-backdrop");
        if (!this.backdrop) {
            this.backdrop = document.createElement("div");
            this.backdrop.className = "modal-backdrop";
            document.body.appendChild(this.backdrop);
        }
        // Setup event listeners
        this.setupEventListeners();
    }
    setupEventListeners() {
        if (!this.element)
            return;
        const closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
        closeButtons.forEach((button) => {
            on(button, "click", (e) => {
                if (e instanceof MouseEvent) {
                    e.preventDefault();
                }
                this.hide();
            });
        });
        // Keyboard support
        if (this.options.keyboard) {
            on(document, "keydown", (e) => {
                if (e instanceof KeyboardEvent && e.key === "Escape" && this.isShown) {
                    this.hide();
                }
            });
        }
        // Backdrop click
        if (this.backdrop && this.options.backdrop !== "static") {
            on(this.backdrop, "click", () => this.hide());
        }
    }
    show() {
        if (this.isShown)
            return;
        this.isShown = true;
        if (this.backdrop) {
            addClass(this.backdrop, "active");
        }
        addClass(this.element, "active");
        document.body.style.overflow = "hidden";
        trigger(this.element, "show.bs.modal");
    }
    hide() {
        if (!this.isShown)
            return;
        this.isShown = false;
        if (this.backdrop) {
            removeClass(this.backdrop, "active");
        }
        removeClass(this.element, "active");
        document.body.style.overflow = "";
        trigger(this.element, "hide.bs.modal");
    }
    toggle() {
        this.isShown ? this.hide() : this.show();
    }
    static getInstance(element) {
        const el = typeof element === "string" ? select(element) : element;
        return el ? el.__modal || null : null;
    }
    static getOrCreateInstance(element, options) {
        const el = typeof element === "string" ? select(element) : element;
        let instance = el.__modal;
        if (!instance) {
            instance = new Modal(el, options);
            el.__modal = instance;
        }
        return instance;
    }
}
//# sourceMappingURL=Modal.js.map
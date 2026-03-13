import { query, on, off, addClass, removeClass, } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Modal extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.isShown = false;
        this.element = query(selector);
        this.backdrop = this.element?.querySelector(".modal-overlay") || null;
        this.dialog = this.element?.querySelector(".modal-dialog") || null;
        this.closeBtn = this.element?.querySelector(".modal-close") || null;
        this.dismissBtn =
            this.element?.querySelector('[data-dismiss="modal"]') || null;
        this.options = {
            ...DEFAULT_OPTIONS,
            backdrop: true,
            keyboard: true,
            focus: true,
            ...options,
        };
        this.init();
    }
    init() {
        if (!this.element)
            return;
        if (this.closeBtn) {
            on(this.closeBtn, "click", () => this.hide());
        }
        if (this.dismissBtn) {
            on(this.dismissBtn, "click", () => this.hide());
        }
        if (this.backdrop) {
            on(this.backdrop, "click", () => {
                if (this.options.backdrop !== "static") {
                    this.hide();
                }
            });
        }
        if (this.options.keyboard) {
            on(document, "keydown", (e) => {
                const event = e;
                if (event.key === "Escape" && this.isShown) {
                    this.hide();
                }
            });
        }
    }
    show() {
        if (!this.element || this.isShown)
            return;
        this.isShown = true;
        addClass(this.element, "show");
        addClass(document.body, "modal-open");
        if (this.options.focus && this.dialog) {
            this.dialog.focus();
        }
        this.emit("show");
    }
    hide() {
        if (!this.element || !this.isShown)
            return;
        this.isShown = false;
        removeClass(this.element, "show");
        removeClass(document.body, "modal-open");
        setTimeout(() => {
            if (this.element && !this.isShown) {
                this.element.style.display = "none";
            }
        }, 300);
        this.emit("hide");
    }
    toggle() {
        if (this.isShown) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    isVisible() {
        return this.isShown;
    }
    destroy() {
        if (this.closeBtn) {
            off(this.closeBtn, "click", () => this.hide());
        }
        if (this.dismissBtn) {
            off(this.dismissBtn, "click", () => this.hide());
        }
        if (this.backdrop) {
            off(this.backdrop, "click", () => this.hide());
        }
    }
}
//# sourceMappingURL=Modal.js.map
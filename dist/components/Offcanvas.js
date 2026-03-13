import { query, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Offcanvas extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.isShown = false;
        this.element = query(selector);
        this.closeBtn = this.element?.querySelector(".offcanvas-close") || null;
        this.options = {
            ...DEFAULT_OPTIONS,
            backdrop: true,
            keyboard: true,
            ...options,
        };
        this.init();
    }
    init() {
        if (this.closeBtn) {
            on(this.closeBtn, "click", () => this.hide());
        }
        if (this.options.keyboard) {
            on(document, "keydown", (e) => {
                const event = e;
                if (event.key === "Escape" && this.isShown) {
                    this.hide();
                }
            });
        }
        if (this.element && this.options.backdrop) {
            on(this.element, "click", (e) => {
                if (e.target === this.element) {
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
        addClass(document.body, "offcanvas-open");
        this.emit("show");
    }
    hide() {
        if (!this.element || !this.isShown)
            return;
        this.isShown = false;
        removeClass(this.element, "show");
        removeClass(document.body, "offcanvas-open");
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
        super.dispose();
    }
}
//# sourceMappingURL=Offcanvas.js.map
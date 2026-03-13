import { query, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Dropdown extends BaseComponent {
    constructor(toggleSelector, menuSelector, options) {
        super(toggleSelector, options);
        this.isShown = false;
        this.toggleBtn = query(toggleSelector);
        this.menu = query(menuSelector);
        this.options = {
            ...DEFAULT_OPTIONS,
            autoClose: true,
            ...options,
        };
        this.init();
    }
    init() {
        if (this.toggleBtn) {
            on(this.toggleBtn, "click", () => this.toggleMethod());
        }
        on(document, "click", (e) => {
            const target = e.target;
            if (this.toggleBtn &&
                !this.toggleBtn.contains(target) &&
                this.menu &&
                !this.menu.contains(target)) {
                this.hide();
            }
        });
        if (this.menu && this.options.autoClose) {
            const items = this.menu.querySelectorAll("li a");
            items.forEach((item) => {
                on(item, "click", () => this.hide());
            });
        }
    }
    show() {
        if (!this.menu || this.isShown)
            return;
        this.isShown = true;
        addClass(this.menu, "show");
        if (this.toggleBtn) {
            addClass(this.toggleBtn, "show");
        }
        this.emit("show");
    }
    hide() {
        if (!this.menu || !this.isShown)
            return;
        this.isShown = false;
        removeClass(this.menu, "show");
        if (this.toggleBtn) {
            removeClass(this.toggleBtn, "show");
        }
        this.emit("hide");
    }
    toggleMethod() {
        if (this.isShown) {
            this.hide();
        }
        else {
            this.show();
        }
    }
}
//# sourceMappingURL=Dropdown.js.map
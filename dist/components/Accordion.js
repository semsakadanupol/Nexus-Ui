import { queryAll, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Accordion extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.items = [];
        this.headers = [];
        this.bodies = [];
        this.openItems = new Set();
        this.items = queryAll(`${selector} .accordion-item`);
        this.headers = queryAll(`${selector} .accordion-header`);
        this.bodies = queryAll(`${selector} .accordion-body`);
        this.options = {
            ...DEFAULT_OPTIONS,
            allowMultiple: false,
            ...options,
        };
        this.init();
    }
    init() {
        this.headers.forEach((header, index) => {
            on(header, "click", () => this.toggle(index));
        });
    }
    toggle(index) {
        if (this.openItems.has(index)) {
            this.close(index);
        }
        else {
            this.open(index);
        }
    }
    open(index) {
        if (index < 0 || index >= this.items.length)
            return;
        if (!this.options.allowMultiple) {
            this.openItems.forEach((openIndex) => {
                if (openIndex !== index) {
                    this.close(openIndex);
                }
            });
        }
        this.openItems.add(index);
        addClass(this.headers[index], "active");
        addClass(this.bodies[index], "show");
        this.emit("open", { index });
    }
    close(index) {
        if (index < 0 || index >= this.items.length)
            return;
        this.openItems.delete(index);
        removeClass(this.headers[index], "active");
        removeClass(this.bodies[index], "show");
        this.emit("close", { index });
    }
    getOpenItems() {
        return Array.from(this.openItems);
    }
    closeAll() {
        this.openItems.forEach((index) => {
            this.close(index);
        });
    }
}
//# sourceMappingURL=Accordion.js.map
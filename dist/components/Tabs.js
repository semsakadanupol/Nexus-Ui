import { queryAll, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Tabs extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.tabLinks = [];
        this.tabPanes = [];
        this.activeIndex = 0;
        this.tabLinks = queryAll(`${selector} .tab-link`);
        this.tabPanes = queryAll(`${selector} .tab-pane`);
        this.options = {
            ...DEFAULT_OPTIONS,
            activeClass: "active",
            ...options,
        };
        this.init();
    }
    init() {
        this.tabLinks.forEach((link, index) => {
            on(link, "click", (e) => {
                e.preventDefault();
                this.activateTab(index);
            });
        });
        if (this.tabLinks.length > 0) {
            this.activateTab(0);
        }
    }
    activateTab(index) {
        if (index < 0 || index >= this.tabLinks.length)
            return;
        this.tabLinks.forEach((link) => removeClass(link, this.options.activeClass));
        this.tabPanes.forEach((pane) => removeClass(pane, this.options.activeClass));
        this.activeIndex = index;
        addClass(this.tabLinks[index], this.options.activeClass);
        addClass(this.tabPanes[index], this.options.activeClass);
        this.emit("activate", { index });
    }
    getActiveIndex() {
        return this.activeIndex;
    }
    next() {
        const nextIndex = (this.activeIndex + 1) % this.tabLinks.length;
        this.activateTab(nextIndex);
    }
    prev() {
        const prevIndex = (this.activeIndex - 1 + this.tabLinks.length) % this.tabLinks.length;
        this.activateTab(prevIndex);
    }
}
//# sourceMappingURL=Tabs.js.map
import { query, queryAll, on, styles } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Tooltip extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.tooltip = null;
        this.isShown = false;
        this.element = query(selector);
        this.options = {
            ...DEFAULT_OPTIONS,
            placement: "top",
            trigger: "hover",
            delay: 0,
            ...options,
        };
        this.init();
    }
    init() {
        const triggers = queryAll(this.selector);
        triggers.forEach((trigger) => {
            const tooltipText = trigger.getAttribute("data-tooltip");
            if (!tooltipText)
                return;
            if (this.options.trigger === "hover") {
                on(trigger, "mouseenter", () => this.show(trigger));
                on(trigger, "mouseleave", () => this.hide());
            }
            else if (this.options.trigger === "click") {
                on(trigger, "click", () => {
                    if (this.isShown) {
                        this.hide();
                    }
                    else {
                        this.show(trigger);
                    }
                });
            }
            else if (this.options.trigger === "focus") {
                on(trigger, "focus", () => this.show(trigger));
                on(trigger, "blur", () => this.hide());
            }
        });
    }
    show(target) {
        if (this.isShown)
            return;
        const text = target.getAttribute("data-tooltip");
        if (!text)
            return;
        this.isShown = true;
        this.tooltip = document.createElement("div");
        this.tooltip.className = `tooltip show ${this.options.placement}`;
        this.tooltip.textContent = text;
        document.body.appendChild(this.tooltip);
        this.positionTooltip(target);
        this.emit("show");
    }
    hide() {
        if (!this.isShown || !this.tooltip)
            return;
        this.isShown = false;
        this.tooltip.remove();
        this.tooltip = null;
        this.emit("hide");
    }
    positionTooltip(target) {
        if (!this.tooltip)
            return;
        const rect = target.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        let top = 0;
        let left = 0;
        switch (this.options.placement) {
            case "top":
                top = rect.top - tooltipRect.height - 10;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;
            case "bottom":
                top = rect.bottom + 10;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;
            case "left":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.left - tooltipRect.width - 10;
                break;
            case "right":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.right + 10;
                break;
        }
        styles(this.tooltip, {
            position: "fixed",
            top: `${top}px`,
            left: `${left}px`,
            zIndex: "1070",
        });
    }
}
//# sourceMappingURL=Tooltip.js.map
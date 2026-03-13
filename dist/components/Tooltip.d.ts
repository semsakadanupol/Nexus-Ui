import { BaseComponent, ComponentOptions } from "./base";
export interface TooltipOptions extends ComponentOptions {
    placement?: "top" | "bottom" | "left" | "right";
    trigger?: "hover" | "click" | "focus";
    delay?: number;
}
export declare class Tooltip extends BaseComponent {
    private element;
    private tooltip;
    protected options: TooltipOptions;
    private isShown;
    constructor(selector: string, options?: Partial<TooltipOptions>);
    private init;
    show(target: HTMLElement): void;
    hide(): void;
    private positionTooltip;
}
//# sourceMappingURL=Tooltip.d.ts.map
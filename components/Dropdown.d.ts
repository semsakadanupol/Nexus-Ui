export declare class Dropdown {
    private element;
    private toggleBtn;
    private menu;
    constructor(element: Element | string);
    private init;
    show(): void;
    hide(): void;
    toggle(): void;
    static getInstance(element: Element | string): Dropdown | null;
}
export interface TooltipOptions {
    title: string;
    placement?: "top" | "right" | "bottom" | "left";
    trigger?: "hover" | "click" | "focus";
}
export declare class Tooltip {
    private element;
    private tooltip;
    private options;
    constructor(element: Element | string, options: TooltipOptions);
    private init;
    private createTooltip;
    private setupTriggers;
    private updatePosition;
    show(): void;
    hide(): void;
    toggle(): void;
    update(title: string): void;
    dispose(): void;
}
export interface OffcanvasOptions {
    backdrop?: boolean;
    keyboard?: boolean;
    scroll?: boolean;
}
export declare class Offcanvas {
    private element;
    private options;
    private isShown;
    constructor(element: Element | string, options?: OffcanvasOptions);
    private init;
    show(): void;
    hide(): void;
    toggle(): void;
}
//# sourceMappingURL=Dropdown.d.ts.map
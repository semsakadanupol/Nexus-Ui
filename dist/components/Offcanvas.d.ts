import { BaseComponent, ComponentOptions } from "./base";
export interface OffcanvasOptions extends ComponentOptions {
    backdrop?: boolean;
    keyboard?: boolean;
}
export declare class Offcanvas extends BaseComponent {
    private element;
    private closeBtn;
    private isShown;
    protected options: OffcanvasOptions;
    constructor(selector: string, options?: Partial<OffcanvasOptions>);
    private init;
    show(): void;
    hide(): void;
    toggle(): void;
    isVisible(): boolean;
    destroy(): void;
}
//# sourceMappingURL=Offcanvas.d.ts.map
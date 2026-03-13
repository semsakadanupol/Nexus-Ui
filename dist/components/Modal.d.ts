import { ComponentOptions, BaseComponent } from "./base";
export interface ModalOptions extends ComponentOptions {
    backdrop?: "static" | boolean;
    keyboard?: boolean;
    focus?: boolean;
}
export declare class Modal extends BaseComponent {
    private element;
    private backdrop;
    private dialog;
    private closeBtn;
    private dismissBtn;
    private isShown;
    protected options: ModalOptions;
    constructor(selector: string, options?: Partial<ModalOptions>);
    private init;
    show(): void;
    hide(): void;
    toggle(): void;
    isVisible(): boolean;
    destroy(): void;
}
//# sourceMappingURL=Modal.d.ts.map
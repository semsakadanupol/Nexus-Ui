export interface ModalOptions {
    backdrop?: boolean | "static";
    keyboard?: boolean;
}
export declare class Modal {
    private element;
    private backdrop;
    private options;
    private isShown;
    constructor(element: Element | string, options?: ModalOptions);
    private init;
    private setupEventListeners;
    show(): void;
    hide(): void;
    toggle(): void;
    static getInstance(element: Element | string): Modal | null;
    static getOrCreateInstance(element: Element | string, options?: ModalOptions): Modal;
}
//# sourceMappingURL=Modal.d.ts.map
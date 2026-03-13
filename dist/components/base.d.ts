export interface ComponentOptions {
    debug?: boolean;
    autoInit?: boolean;
    [key: string]: any;
}
export declare const DEFAULT_OPTIONS: ComponentOptions;
export type EventName = "show" | "hide" | "toggle" | string;
type EventListener = (event: CustomEvent) => void;
export declare class BaseComponent {
    protected selector: string;
    protected options: ComponentOptions;
    protected listeners: Map<EventName, EventListener[]>;
    constructor(selector: string, options?: Partial<ComponentOptions>);
    protected emit(eventName: EventName, detail?: any): void;
    on(eventName: EventName, callback: EventListener): void;
    off(eventName: EventName, callback: EventListener): void;
    offAll(eventName?: EventName): void;
    getName(): string;
    protected getElement(): HTMLElement | null;
    protected debug(message: string, data?: any): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=base.d.ts.map
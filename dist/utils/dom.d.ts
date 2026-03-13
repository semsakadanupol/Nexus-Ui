export declare function query(selector: string): HTMLElement | null;
export declare function queryAll(selector: string): HTMLElement[];
export declare function addClass(el: HTMLElement | null, className: string): void;
export declare function removeClass(el: HTMLElement | null, className: string): void;
export declare function toggleClass(el: HTMLElement | null, className: string, force?: boolean): boolean;
export declare function hasClass(el: HTMLElement | null, className: string): boolean;
export declare function styles(el: HTMLElement | null, styleObj: Record<string, string>): void;
export declare function attr(el: HTMLElement | null, name: string, value?: string): string | void;
export declare function on(el: HTMLElement | Document | null, eventName: string, handler: (e: Event) => void): void;
export declare function off(el: HTMLElement | null, eventName: string, handler: (e: Event) => void): void;
export declare function trigger(el: HTMLElement | null, eventName: string): void;
export declare function ready(callback: () => void): void;
export declare function parent(el: HTMLElement | null, selector?: string): HTMLElement | null;
export declare function children(el: HTMLElement | null, selector?: string): HTMLElement[];
export declare function next(el: HTMLElement | null, selector?: string): HTMLElement | null;
export declare function prev(el: HTMLElement | null, selector?: string): HTMLElement | null;
export declare function text(el: HTMLElement | null, content?: string): string | void;
export declare function html(el: HTMLElement | null, content?: string): string | void;
//# sourceMappingURL=dom.d.ts.map
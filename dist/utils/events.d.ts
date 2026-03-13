export interface EventOptions {
    bubble?: boolean;
    cancelable?: boolean;
    detail?: any;
}
/**
 * Add event listener to element
 */
export declare function on<K extends keyof HTMLElementEventMap>(element: Element | Document, event: K, handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
/**
 * Remove event listener from element
 */
export declare function off<K extends keyof HTMLElementEventMap>(element: Element | Document, event: K, handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
/**
 * Add one-time event listener
 */
export declare function once<K extends keyof HTMLElementEventMap>(element: Element | Document, event: K, handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any, options?: AddEventListenerOptions): void;
/**
 * Trigger a custom event
 */
export declare function trigger(element: Element, eventName: string, options?: EventOptions): boolean;
/**
 * Add delegated event listener (event delegation)
 */
export declare function delegate(parent: Element, event: string, selector: string, handler: (this: Element, ev: Event, target: Element) => any): void;
/**
 * Wait for an element to exist in DOM
 */
export declare function waitForElement(selector: string, timeout?: number): Promise<Element | null>;
/**
 * Call function after DOM is ready
 */
export declare function ready(callback: () => void): void;
/**
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
//# sourceMappingURL=events.d.ts.map
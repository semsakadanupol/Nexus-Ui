export declare function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void;
export declare function throttle(func: (...args: any[]) => void, limit: number): (...args: any[]) => void;
export declare function once(func: (...args: any[]) => void): (...args: any[]) => void;
export declare function raf(callback: FrameRequestCallback): number;
export declare function cancelRaf(id: number): void;
export declare function delegate(parent: HTMLElement | Document, selector: string, eventName: string, handler: (e: Event, target: Element) => void): void;
export declare function waitForElement(selector: string, timeout?: number): Promise<HTMLElement>;
export declare function onVisible(element: HTMLElement | null, callback: (entry: IntersectionObserverEntry) => void, options?: IntersectionObserverInit): IntersectionObserver | null;
export declare function getPosition(element: HTMLElement | null): {
    top: number;
    left: number;
    bottom: number;
    right: number;
    width: number;
    height: number;
    x: number;
    y: number;
} | null;
export declare function isInViewport(element: HTMLElement | null): boolean;
export declare function scrollIntoView(element: HTMLElement | null, smooth?: boolean): void;
//# sourceMappingURL=events.d.ts.map
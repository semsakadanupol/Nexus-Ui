/**
 * Select a single element
 */
export declare function select<T extends Element = Element>(selector: string, parent?: Document | Element): T | null;
/**
 * Select multiple elements
 */
export declare function selectAll<T extends Element = Element>(selector: string, parent?: Document | Element): T[];
/**
 * Create an element
 */
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, options?: {
    className?: string;
    id?: string;
    innerHTML?: string;
}): HTMLElementTagNameMap[K];
/**
 * Add a class to an element
 */
export declare function addClass(element: Element, className: string): void;
/**
 * Remove a class from an element
 */
export declare function removeClass(element: Element, className: string): void;
/**
 * Toggle a class on an element
 */
export declare function toggleClass(element: Element, className: string, force?: boolean): boolean;
/**
 * Check if element has a class
 */
export declare function hasClass(element: Element, className: string): boolean;
/**
 * Set attributes on an element
 */
export declare function setAttributes(element: Element, attributes: Record<string, string | number | boolean>): void;
/**
 * Get an attribute value
 */
export declare function getAttribute(element: Element, attribute: string): string | null;
/**
 * Remove element from DOM
 */
export declare function remove(element: Element): void;
/**
 * Add multiple elements to parent
 */
export declare function append(parent: Element, ...children: (Element | string)[]): void;
/**
 * Get closest parent element matching selector
 */
export declare function closest<T extends Element = Element>(element: Element, selector: string): T | null;
/**
 * Check if element matches selector
 */
export declare function matches(element: Element, selector: string): boolean;
/**
 * Get element position and dimensions
 */
export declare function getRect(element: Element): DOMRect;
/**
 * Scroll element into view
 */
export declare function scrollIntoView(element: Element, behavior?: ScrollBehavior): void;
//# sourceMappingURL=dom.d.ts.map
// ============================================
// Event Utilities
// ============================================
/**
 * Add event listener to element
 */
export function on(element, event, handler, options) {
    element.addEventListener(event, handler, options);
}
/**
 * Remove event listener from element
 */
export function off(element, event, handler, options) {
    element.removeEventListener(event, handler, options);
}
/**
 * Add one-time event listener
 */
export function once(element, event, handler, options) {
    element.addEventListener(event, handler, {
        ...options,
        once: true,
    });
}
/**
 * Trigger a custom event
 */
export function trigger(element, eventName, options = {}) {
    const customEvent = new CustomEvent(eventName, {
        bubbles: options.bubble ?? true,
        cancelable: options.cancelable ?? true,
        detail: options.detail,
    });
    return element.dispatchEvent(customEvent);
}
/**
 * Add delegated event listener (event delegation)
 */
export function delegate(parent, event, selector, handler) {
    parent.addEventListener(event, (e) => {
        const target = e.target.closest(selector);
        if (target) {
            handler.call(target, e, target);
        }
    });
}
/**
 * Wait for an element to exist in DOM
 */
export async function waitForElement(selector, timeout = 5000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        const element = document.querySelector(selector);
        if (element)
            return element;
        await new Promise((resolve) => setTimeout(resolve, 50));
    }
    return null;
}
/**
 * Call function after DOM is ready
 */
export function ready(callback) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback, { once: true });
    }
    else {
        callback();
    }
}
/**
 * Debounce function
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
/**
 * Throttle function
 */
export function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
//# sourceMappingURL=events.js.map
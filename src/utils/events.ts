// ============================================
// Event Utilities
// ============================================

export interface EventOptions {
  bubble?: boolean;
  cancelable?: boolean;
  detail?: any;
}

/**
 * Add event listener to element
 */
export function on<K extends keyof HTMLElementEventMap>(
  element: Element | Document,
  event: K,
  handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void {
  element.addEventListener(event as string, handler as EventListener, options);
}

/**
 * Remove event listener from element
 */
export function off<K extends keyof HTMLElementEventMap>(
  element: Element | Document,
  event: K,
  handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | EventListenerOptions,
): void {
  element.removeEventListener(
    event as string,
    handler as EventListener,
    options,
  );
}

/**
 * Add one-time event listener
 */
export function once<K extends keyof HTMLElementEventMap>(
  element: Element | Document,
  event: K,
  handler: (this: Element | Document, ev: HTMLElementEventMap[K]) => any,
  options?: AddEventListenerOptions,
): void {
  element.addEventListener(event as string, handler as EventListener, {
    ...options,
    once: true,
  });
}

/**
 * Trigger a custom event
 */
export function trigger(
  element: Element,
  eventName: string,
  options: EventOptions = {},
): boolean {
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
export function delegate(
  parent: Element,
  event: string,
  selector: string,
  handler: (this: Element, ev: Event, target: Element) => any,
): void {
  parent.addEventListener(event, (e: Event) => {
    const target = (e.target as Element).closest(selector);
    if (target) {
      handler.call(target, e, target);
    }
  });
}

/**
 * Wait for an element to exist in DOM
 */
export async function waitForElement(
  selector: string,
  timeout: number = 5000,
): Promise<Element | null> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const element = document.querySelector(selector);
    if (element) return element;

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  return null;
}

/**
 * Call function after DOM is ready
 */
export function ready(callback: () => void): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
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
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * NEXUS-UI EVENT UTILITIES
 * Advanced event handling utilities
 */

/**
 * Debounce function - execute after delay with no more calls
 */
export function debounce(
  func: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return function (...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Throttle function - limit execution frequency
 */
export function throttle(
  func: (...args: any[]) => void,
  limit: number,
): (...args: any[]) => void {
  let inThrottle: boolean = false;

  return function (...args: any[]) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Execute function only once, then remove
 */
export function once(func: (...args: any[]) => void): (...args: any[]) => void {
  let called = false;

  return function (...args: any[]) {
    if (!called) {
      called = true;
      func(...args);
    }
  };
}

/**
 * Request Animation Frame helper
 */
export function raf(callback: FrameRequestCallback): number {
  return requestAnimationFrame(callback);
}

/**
 * Cancel Animation Frame
 */
export function cancelRaf(id: number): void {
  cancelAnimationFrame(id);
}

/**
 * Event delegation wrapper
 */
export function delegate(
  parent: HTMLElement | Document,
  selector: string,
  eventName: string,
  handler: (e: Event, target: Element) => void,
): void {
  if (!parent) return;

  parent.addEventListener(eventName, (e) => {
    const target = (e.target as Element).closest(selector);
    if (target && parent.contains(target as Node)) {
      handler(e, target);
    }
  });
}

/**
 * Wait for element to be available in DOM
 */
export function waitForElement(
  selector: string,
  timeout = 10000,
): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);

    if (element) {
      resolve(element as HTMLElement);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element as HTMLElement);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

/**
 * Execute when element becomes visible (using Intersection Observer)
 */
export function onVisible(
  element: HTMLElement | null,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
): IntersectionObserver | null {
  if (!element) return null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);

  observer.observe(element);
  return observer;
}

/**
 * Get position of element relative to viewport
 */
export function getPosition(element: HTMLElement | null) {
  if (!element) return null;

  const rect = element.getBoundingClientRect();

  return {
    top: rect.top,
    left: rect.left,
    bottom: rect.bottom,
    right: rect.right,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y,
  };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement | null): boolean {
  if (!element) return false;

  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scroll element into view smoothly
 */
export function scrollIntoView(
  element: HTMLElement | null,
  smooth = true,
): void {
  if (element) {
    element.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
      inline: "nearest",
    });
  }
}

/**
 * NEXUS-UI DOM UTILITIES
 * Helper functions for DOM manipulation
 */

/**
 * Query a single element
 */
export function query(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}

/**
 * Query multiple elements
 */
export function queryAll(selector: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(selector));
}

/**
 * Add class to element
 */
export function addClass(el: HTMLElement | null, className: string): void {
  if (el) {
    el.classList.add(className);
  }
}

/**
 * Remove class from element
 */
export function removeClass(el: HTMLElement | null, className: string): void {
  if (el) {
    el.classList.remove(className);
  }
}

/**
 * Toggle class on element
 */
export function toggleClass(
  el: HTMLElement | null,
  className: string,
  force?: boolean,
): boolean {
  if (el) {
    return el.classList.toggle(className, force);
  }
  return false;
}

/**
 * Check if element has class
 */
export function hasClass(el: HTMLElement | null, className: string): boolean {
  if (el) {
    return el.classList.contains(className);
  }
  return false;
}

/**
 * Set multiple styles on element
 */
export function styles(
  el: HTMLElement | null,
  styleObj: Record<string, string>,
): void {
  if (el) {
    Object.assign(el.style, styleObj);
  }
}

/**
 * Get or set attribute
 */
export function attr(
  el: HTMLElement | null,
  name: string,
  value?: string,
): string | void {
  if (!el) return;

  if (value !== undefined) {
    el.setAttribute(name, value);
  } else {
    return el.getAttribute(name) || "";
  }
}

/**
 * Add event listener
 */
export function on(
  el: HTMLElement | Document | null,
  eventName: string,
  handler: (e: Event) => void,
): void {
  if (el) {
    el.addEventListener(eventName, handler);
  }
}

/**
 * Remove event listener
 */
export function off(
  el: HTMLElement | null,
  eventName: string,
  handler: (e: Event) => void,
): void {
  if (el) {
    el.removeEventListener(eventName, handler);
  }
}

/**
 * Trigger custom event
 */
export function trigger(el: HTMLElement | null, eventName: string): void {
  if (el) {
    el.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true }),
    );
  }
}

/**
 * Call function after DOM is ready
 */
export function ready(callback: () => void): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

/**
 * Get element's parent
 */
export function parent(
  el: HTMLElement | null,
  selector?: string,
): HTMLElement | null {
  if (!el) return null;

  if (selector) {
    return el.closest(selector);
  }

  return el.parentElement;
}

/**
 * Get element's children
 */
export function children(
  el: HTMLElement | null,
  selector?: string,
): HTMLElement[] {
  if (!el) return [];

  if (selector) {
    return Array.from(el.querySelectorAll(selector));
  }

  return Array.from(el.children) as HTMLElement[];
}

/**
 * Find next sibling
 */
export function next(
  el: HTMLElement | null,
  selector?: string,
): HTMLElement | null {
  if (!el) return null;

  let next = el.nextElementSibling as HTMLElement | null;

  if (selector) {
    while (next) {
      if (next.matches(selector)) {
        return next;
      }
      next = next.nextElementSibling as HTMLElement | null;
    }
    return null;
  }

  return next;
}

/**
 * Find previous sibling
 */
export function prev(
  el: HTMLElement | null,
  selector?: string,
): HTMLElement | null {
  if (!el) return null;

  let prev = el.previousElementSibling as HTMLElement | null;

  if (selector) {
    while (prev) {
      if (prev.matches(selector)) {
        return prev;
      }
      prev = prev.previousElementSibling as HTMLElement | null;
    }
    return null;
  }

  return prev;
}

/**
 * Get element's text content
 */
export function text(el: HTMLElement | null, content?: string): string | void {
  if (!el) return "";

  if (content !== undefined) {
    el.textContent = content;
  } else {
    return el.textContent || "";
  }
}

/**
 * Get element's HTML content
 */
export function html(el: HTMLElement | null, content?: string): string | void {
  if (!el) return "";

  if (content !== undefined) {
    el.innerHTML = content;
  } else {
    return el.innerHTML || "";
  }
}

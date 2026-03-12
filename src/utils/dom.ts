// ============================================
// DOM Utilities
// ============================================

/**
 * Select a single element
 */
export function select<T extends Element = Element>(
  selector: string,
  parent: Document | Element = document,
): T | null {
  return parent.querySelector<T>(selector);
}

/**
 * Select multiple elements
 */
export function selectAll<T extends Element = Element>(
  selector: string,
  parent: Document | Element = document,
): T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}

/**
 * Create an element
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: { className?: string; id?: string; innerHTML?: string },
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (options?.className) {
    element.className = options.className;
  }

  if (options?.id) {
    element.id = options.id;
  }

  if (options?.innerHTML) {
    element.innerHTML = options.innerHTML;
  }

  return element;
}

/**
 * Add a class to an element
 */
export function addClass(element: Element, className: string): void {
  element.classList.add(...className.split(" "));
}

/**
 * Remove a class from an element
 */
export function removeClass(element: Element, className: string): void {
  element.classList.remove(...className.split(" "));
}

/**
 * Toggle a class on an element
 */
export function toggleClass(
  element: Element,
  className: string,
  force?: boolean,
): boolean {
  return element.classList.toggle(className, force);
}

/**
 * Check if element has a class
 */
export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * Set attributes on an element
 */
export function setAttributes(
  element: Element,
  attributes: Record<string, string | number | boolean>,
): void {
  Object.entries(attributes).forEach(([key, value]) => {
    if (value === false) {
      element.removeAttribute(key);
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

/**
 * Get an attribute value
 */
export function getAttribute(
  element: Element,
  attribute: string,
): string | null {
  return element.getAttribute(attribute);
}

/**
 * Remove element from DOM
 */
export function remove(element: Element): void {
  element.remove();
}

/**
 * Add multiple elements to parent
 */
export function append(
  parent: Element,
  ...children: (Element | string)[]
): void {
  children.forEach((child) => {
    if (typeof child === "string") {
      parent.appendChild(document.createTextNode(child));
    } else {
      parent.appendChild(child);
    }
  });
}

/**
 * Get closest parent element matching selector
 */
export function closest<T extends Element = Element>(
  element: Element,
  selector: string,
): T | null {
  return element.closest<T>(selector);
}

/**
 * Check if element matches selector
 */
export function matches(element: Element, selector: string): boolean {
  return element.matches(selector);
}

/**
 * Get element position and dimensions
 */
export function getRect(element: Element): DOMRect {
  return element.getBoundingClientRect();
}

/**
 * Scroll element into view
 */
export function scrollIntoView(
  element: Element,
  behavior: ScrollBehavior = "smooth",
): void {
  element.scrollIntoView({ behavior });
}

// ============================================
// DOM Utilities
// ============================================
/**
 * Select a single element
 */
export function select(selector, parent = document) {
    return parent.querySelector(selector);
}
/**
 * Select multiple elements
 */
export function selectAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}
/**
 * Create an element
 */
export function createElement(tag, options) {
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
export function addClass(element, className) {
    element.classList.add(...className.split(" "));
}
/**
 * Remove a class from an element
 */
export function removeClass(element, className) {
    element.classList.remove(...className.split(" "));
}
/**
 * Toggle a class on an element
 */
export function toggleClass(element, className, force) {
    return element.classList.toggle(className, force);
}
/**
 * Check if element has a class
 */
export function hasClass(element, className) {
    return element.classList.contains(className);
}
/**
 * Set attributes on an element
 */
export function setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
        if (value === false) {
            element.removeAttribute(key);
        }
        else {
            element.setAttribute(key, String(value));
        }
    });
}
/**
 * Get an attribute value
 */
export function getAttribute(element, attribute) {
    return element.getAttribute(attribute);
}
/**
 * Remove element from DOM
 */
export function remove(element) {
    element.remove();
}
/**
 * Add multiple elements to parent
 */
export function append(parent, ...children) {
    children.forEach((child) => {
        if (typeof child === "string") {
            parent.appendChild(document.createTextNode(child));
        }
        else {
            parent.appendChild(child);
        }
    });
}
/**
 * Get closest parent element matching selector
 */
export function closest(element, selector) {
    return element.closest(selector);
}
/**
 * Check if element matches selector
 */
export function matches(element, selector) {
    return element.matches(selector);
}
/**
 * Get element position and dimensions
 */
export function getRect(element) {
    return element.getBoundingClientRect();
}
/**
 * Scroll element into view
 */
export function scrollIntoView(element, behavior = "smooth") {
    element.scrollIntoView({ behavior });
}
//# sourceMappingURL=dom.js.map
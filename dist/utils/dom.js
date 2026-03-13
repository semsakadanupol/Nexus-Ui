export function query(selector) {
    return document.querySelector(selector);
}
export function queryAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
export function addClass(el, className) {
    if (el) {
        el.classList.add(className);
    }
}
export function removeClass(el, className) {
    if (el) {
        el.classList.remove(className);
    }
}
export function toggleClass(el, className, force) {
    if (el) {
        return el.classList.toggle(className, force);
    }
    return false;
}
export function hasClass(el, className) {
    if (el) {
        return el.classList.contains(className);
    }
    return false;
}
export function styles(el, styleObj) {
    if (el) {
        Object.assign(el.style, styleObj);
    }
}
export function attr(el, name, value) {
    if (!el)
        return;
    if (value !== undefined) {
        el.setAttribute(name, value);
    }
    else {
        return el.getAttribute(name) || "";
    }
}
export function on(el, eventName, handler) {
    if (el) {
        el.addEventListener(eventName, handler);
    }
}
export function off(el, eventName, handler) {
    if (el) {
        el.removeEventListener(eventName, handler);
    }
}
export function trigger(el, eventName) {
    if (el) {
        el.dispatchEvent(new CustomEvent(eventName, { bubbles: true, cancelable: true }));
    }
}
export function ready(callback) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback);
    }
    else {
        callback();
    }
}
export function parent(el, selector) {
    if (!el)
        return null;
    if (selector) {
        return el.closest(selector);
    }
    return el.parentElement;
}
export function children(el, selector) {
    if (!el)
        return [];
    if (selector) {
        return Array.from(el.querySelectorAll(selector));
    }
    return Array.from(el.children);
}
export function next(el, selector) {
    if (!el)
        return null;
    let next = el.nextElementSibling;
    if (selector) {
        while (next) {
            if (next.matches(selector)) {
                return next;
            }
            next = next.nextElementSibling;
        }
        return null;
    }
    return next;
}
export function prev(el, selector) {
    if (!el)
        return null;
    let prev = el.previousElementSibling;
    if (selector) {
        while (prev) {
            if (prev.matches(selector)) {
                return prev;
            }
            prev = prev.previousElementSibling;
        }
        return null;
    }
    return prev;
}
export function text(el, content) {
    if (!el)
        return "";
    if (content !== undefined) {
        el.textContent = content;
    }
    else {
        return el.textContent || "";
    }
}
export function html(el, content) {
    if (!el)
        return "";
    if (content !== undefined) {
        el.innerHTML = content;
    }
    else {
        return el.innerHTML || "";
    }
}
//# sourceMappingURL=dom.js.map
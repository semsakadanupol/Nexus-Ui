export function debounce(func, delay) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
            timeoutId = null;
        }, delay);
    };
}
export function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}
export function once(func) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            func(...args);
        }
    };
}
export function raf(callback) {
    return requestAnimationFrame(callback);
}
export function cancelRaf(id) {
    cancelAnimationFrame(id);
}
export function delegate(parent, selector, eventName, handler) {
    if (!parent)
        return;
    parent.addEventListener(eventName, (e) => {
        const target = e.target.closest(selector);
        if (target && parent.contains(target)) {
            handler(e, target);
        }
    });
}
export function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const element = document.querySelector(selector);
        if (element) {
            resolve(element);
            return;
        }
        const observer = new MutationObserver(() => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
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
export function onVisible(element, callback, options) {
    if (!element)
        return null;
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
export function getPosition(element) {
    if (!element)
        return null;
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
export function isInViewport(element) {
    if (!element)
        return false;
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
export function scrollIntoView(element, smooth = true) {
    if (element) {
        element.scrollIntoView({
            behavior: smooth ? "smooth" : "auto",
            block: "start",
            inline: "nearest",
        });
    }
}
//# sourceMappingURL=events.js.map
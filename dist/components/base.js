export const DEFAULT_OPTIONS = {
    debug: false,
    autoInit: true,
};
export class BaseComponent {
    constructor(selector, options) {
        this.listeners = new Map();
        this.selector = selector;
        this.options = {
            ...DEFAULT_OPTIONS,
            ...options,
        };
    }
    emit(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            cancelable: true,
        });
        const element = document.querySelector(this.selector);
        if (element) {
            element.dispatchEvent(event);
        }
        const listeners = this.listeners.get(eventName);
        if (listeners) {
            listeners.forEach((listener) => {
                listener(event);
            });
        }
        if (this.options.debug) {
            console.log(`[${this.constructor.name}] Event emitted: ${eventName}`, detail);
        }
    }
    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        this.listeners.get(eventName).push(callback);
    }
    off(eventName, callback) {
        const listeners = this.listeners.get(eventName);
        if (listeners) {
            const index = listeners.indexOf(callback);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }
    offAll(eventName) {
        if (eventName) {
            this.listeners.delete(eventName);
        }
        else {
            this.listeners.clear();
        }
    }
    getName() {
        return this.constructor.name;
    }
    getElement() {
        return document.querySelector(this.selector);
    }
    debug(message, data) {
        if (this.options.debug) {
            console.log(`[${this.getName()}] ${message}`, data || "");
        }
    }
    dispose() {
        this.offAll();
        this.debug("Component disposed");
    }
}
//# sourceMappingURL=base.js.map
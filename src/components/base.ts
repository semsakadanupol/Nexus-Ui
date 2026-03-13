/**
 * NEXUS-UI BASE COMPONENT
 * Base class for all components
 */

export interface ComponentOptions {
  debug?: boolean;
  autoInit?: boolean;
  [key: string]: any;
}

export const DEFAULT_OPTIONS: ComponentOptions = {
  debug: false,
  autoInit: true,
};

export type EventName = "show" | "hide" | "toggle" | string;
type EventListener = (event: CustomEvent) => void;

export class BaseComponent {
  protected selector: string;
  protected options: ComponentOptions;
  protected listeners: Map<EventName, EventListener[]> = new Map();

  constructor(selector: string, options?: Partial<ComponentOptions>) {
    this.selector = selector;
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options,
    };
  }

  /**
   * Emit custom event
   */
  protected emit(eventName: EventName, detail?: any): void {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true,
    });

    // Get the element and dispatch
    const element = document.querySelector(this.selector);
    if (element) {
      element.dispatchEvent(event);
    }

    // Also call registered listeners
    const listeners = this.listeners.get(eventName);
    if (listeners) {
      listeners.forEach((listener) => {
        listener(event);
      });
    }

    if (this.options.debug) {
      console.log(
        `[${this.constructor.name}] Event emitted: ${eventName}`,
        detail,
      );
    }
  }

  /**
   * Register event listener
   */
  public on(eventName: EventName, callback: EventListener): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName)!.push(callback);
  }

  /**
   * Remove event listener
   */
  public off(eventName: EventName, callback: EventListener): void {
    const listeners = this.listeners.get(eventName);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  /**
   * Remove all listeners for event
   */
  public offAll(eventName?: EventName): void {
    if (eventName) {
      this.listeners.delete(eventName);
    } else {
      this.listeners.clear();
    }
  }

  /**
   * Get component name
   */
  public getName(): string {
    return this.constructor.name;
  }

  /**
   * Get selected element
   */
  protected getElement(): HTMLElement | null {
    return document.querySelector(this.selector);
  }

  /**
   * Log debug message
   */
  protected debug(message: string, data?: any): void {
    if (this.options.debug) {
      console.log(`[${this.getName()}] ${message}`, data || "");
    }
  }

  /**
   * Dispose component (cleanup)
   */
  public dispose(): void {
    this.offAll();
    this.debug("Component disposed");
  }
}

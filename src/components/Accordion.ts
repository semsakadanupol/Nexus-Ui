/**
 * NEXUS-UI ACCORDION COMPONENT
 */

import { queryAll, on, addClass, removeClass, toggleClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface AccordionOptions extends ComponentOptions {
  allowMultiple?: boolean;
}

export class Accordion extends BaseComponent {
  private items: HTMLElement[] = [];
  private headers: HTMLElement[] = [];
  private bodies: HTMLElement[] = [];
  protected options: AccordionOptions;
  private openItems: Set<number> = new Set();

  constructor(selector: string, options?: Partial<AccordionOptions>) {
    super(selector, options);

    this.items = queryAll(`${selector} .accordion-item`);
    this.headers = queryAll(`${selector} .accordion-header`);
    this.bodies = queryAll(`${selector} .accordion-body`);

    this.options = {
      ...DEFAULT_OPTIONS,
      allowMultiple: false,
      ...options,
    };

    this.init();
  }

  /**
   * Initialize accordion
   */
  private init(): void {
    this.headers.forEach((header, index) => {
      on(header, "click", () => this.toggle(index));
    });
  }

  /**
   * Toggle accordion item
   */
  public toggle(index: number): void {
    if (this.openItems.has(index)) {
      this.close(index);
    } else {
      this.open(index);
    }
  }

  /**
   * Open accordion item
   */
  public open(index: number): void {
    if (index < 0 || index >= this.items.length) return;

    if (!this.options.allowMultiple) {
      // Close all other items
      this.openItems.forEach((openIndex) => {
        if (openIndex !== index) {
          this.close(openIndex);
        }
      });
    }

    this.openItems.add(index);
    addClass(this.headers[index], "active");
    addClass(this.bodies[index], "show");

    this.emit("open", { index });
  }

  /**
   * Close accordion item
   */
  public close(index: number): void {
    if (index < 0 || index >= this.items.length) return;

    this.openItems.delete(index);
    removeClass(this.headers[index], "active");
    removeClass(this.bodies[index], "show");

    this.emit("close", { index });
  }

  /**
   * Get open items
   */
  public getOpenItems(): number[] {
    return Array.from(this.openItems);
  }

  /**
   * Close all items
   */
  public closeAll(): void {
    this.openItems.forEach((index) => {
      this.close(index);
    });
  }
}

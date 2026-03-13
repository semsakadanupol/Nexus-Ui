/**
 * NEXUS-UI OFFCANVAS COMPONENT
 */

import { query, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface OffcanvasOptions extends ComponentOptions {
  backdrop?: boolean;
  keyboard?: boolean;
}

export class Offcanvas extends BaseComponent {
  private element: HTMLElement | null;
  private closeBtn: HTMLElement | null;
  private isShown: boolean = false;
  protected options: OffcanvasOptions;

  constructor(selector: string, options?: Partial<OffcanvasOptions>) {
    super(selector, options);

    this.element = query(selector);
    this.closeBtn = this.element?.querySelector(".offcanvas-close") || null;

    this.options = {
      ...DEFAULT_OPTIONS,
      backdrop: true,
      keyboard: true,
      ...options,
    };

    this.init();
  }

  /**
   * Initialize offcanvas
   */
  private init(): void {
    if (this.closeBtn) {
      on(this.closeBtn, "click", () => this.hide());
    }

    // Keyboard handler
    if (this.options.keyboard) {
      on(document as unknown as HTMLElement, "keydown", (e: Event) => {
        const event = e as KeyboardEvent;
        if (event.key === "Escape" && this.isShown) {
          this.hide();
        }
      });
    }

    // Backdrop click handler
    if (this.element && this.options.backdrop) {
      on(this.element, "click", (e) => {
        if (e.target === this.element) {
          this.hide();
        }
      });
    }
  }

  /**
   * Show offcanvas
   */
  public show(): void {
    if (!this.element || this.isShown) return;

    this.isShown = true;
    addClass(this.element, "show");
    addClass(document.body, "offcanvas-open");

    this.emit("show");
  }

  /**
   * Hide offcanvas
   */
  public hide(): void {
    if (!this.element || !this.isShown) return;

    this.isShown = false;
    removeClass(this.element, "show");
    removeClass(document.body, "offcanvas-open");

    this.emit("hide");
  }

  /**
   * Toggle offcanvas
   */
  public toggle(): void {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Check if offcanvas is shown
   */
  public isVisible(): boolean {
    return this.isShown;
  }

  /**
   * Destroy offcanvas
   */
  public destroy(): void {
    super.dispose();
  }
}

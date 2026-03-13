/**
 * NEXUS-UI MODAL COMPONENT
 */

import {
  query,
  on,
  off,
  addClass,
  removeClass,
  toggleClass,
} from "../utils/dom";
import { ComponentOptions, BaseComponent, DEFAULT_OPTIONS } from "./base";

export interface ModalOptions extends ComponentOptions {
  backdrop?: "static" | boolean;
  keyboard?: boolean;
  focus?: boolean;
}

export class Modal extends BaseComponent {
  private element: HTMLElement | null;
  private backdrop: HTMLElement | null;
  private dialog: HTMLElement | null;
  private closeBtn: HTMLElement | null;
  private dismissBtn: HTMLElement | null;
  private isShown: boolean = false;
  protected options: ModalOptions;

  constructor(selector: string, options?: Partial<ModalOptions>) {
    super(selector, options);

    this.element = query(selector);
    this.backdrop = this.element?.querySelector(".modal-overlay") || null;
    this.dialog = this.element?.querySelector(".modal-dialog") || null;
    this.closeBtn = this.element?.querySelector(".modal-close") || null;
    this.dismissBtn =
      this.element?.querySelector('[data-dismiss="modal"]') || null;

    this.options = {
      ...DEFAULT_OPTIONS,
      backdrop: true,
      keyboard: true,
      focus: true,
      ...options,
    };

    this.init();
  }

  /**
   * Initialize modal
   */
  private init(): void {
    if (!this.element) return;

    // Close button handler
    if (this.closeBtn) {
      on(this.closeBtn, "click", () => this.hide());
    }

    // Dismiss button handler
    if (this.dismissBtn) {
      on(this.dismissBtn, "click", () => this.hide());
    }

    // Backdrop click handler
    if (this.backdrop) {
      on(this.backdrop, "click", () => {
        if (this.options.backdrop !== "static") {
          this.hide();
        }
      });
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
  }

  /**
   * Show modal
   */
  public show(): void {
    if (!this.element || this.isShown) return;

    this.isShown = true;
    addClass(this.element, "show");
    addClass(document.body, "modal-open");

    if (this.options.focus && this.dialog) {
      this.dialog.focus();
    }

    this.emit("show");
  }

  /**
   * Hide modal
   */
  public hide(): void {
    if (!this.element || !this.isShown) return;

    this.isShown = false;
    removeClass(this.element, "show");
    removeClass(document.body, "modal-open");

    // Delay for animation
    setTimeout(() => {
      if (this.element && !this.isShown) {
        this.element.style.display = "none";
      }
    }, 300);

    this.emit("hide");
  }

  /**
   * Toggle modal visibility
   */
  public toggle(): void {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Check if modal is shown
   */
  public isVisible(): boolean {
    return this.isShown;
  }

  /**
   * Destroy modal
   */
  public destroy(): void {
    if (this.closeBtn) {
      off(this.closeBtn, "click", () => this.hide());
    }
    if (this.dismissBtn) {
      off(this.dismissBtn, "click", () => this.hide());
    }
    if (this.backdrop) {
      off(this.backdrop, "click", () => this.hide());
    }
  }
}

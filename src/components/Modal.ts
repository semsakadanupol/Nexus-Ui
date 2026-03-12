// ============================================
// Modal Component
// ============================================

import {
  select,
  addClass,
  removeClass,
  on,
  off,
  trigger,
} from "../utils/index.js";

export interface ModalOptions {
  backdrop?: boolean | "static";
  keyboard?: boolean;
}

export class Modal {
  private element: Element;
  private backdrop: Element | null = null;
  private options: ModalOptions;
  private isShown: boolean = false;

  constructor(element: Element | string, options: ModalOptions = {}) {
    this.element = typeof element === "string" ? select(element)! : element;
    this.options = { backdrop: true, keyboard: true, ...options };
    this.init();
  }

  private init(): void {
    if (!this.element) return;

    // Find or create backdrop
    this.backdrop = select(".modal-backdrop");
    if (!this.backdrop) {
      this.backdrop = document.createElement("div");
      this.backdrop.className = "modal-backdrop";
      document.body.appendChild(this.backdrop);
    }

    // Setup event listeners
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (!this.element) return;

    const closeButtons = this.element.querySelectorAll(
      '[data-dismiss="modal"]',
    );
    closeButtons.forEach((button: Element) => {
      on(button, "click", (e: Event) => {
        if (e instanceof MouseEvent) {
          e.preventDefault();
        }
        this.hide();
      });
    });

    // Keyboard support
    if (this.options.keyboard) {
      on(document, "keydown", (e: KeyboardEvent | Event) => {
        if (e instanceof KeyboardEvent && e.key === "Escape" && this.isShown) {
          this.hide();
        }
      });
    }

    // Backdrop click
    if (this.backdrop && this.options.backdrop !== "static") {
      on(this.backdrop, "click", () => this.hide());
    }
  }

  show(): void {
    if (this.isShown) return;

    this.isShown = true;

    if (this.backdrop) {
      addClass(this.backdrop, "active");
    }

    addClass(this.element, "active");
    document.body.style.overflow = "hidden";

    trigger(this.element, "show.bs.modal");
  }

  hide(): void {
    if (!this.isShown) return;

    this.isShown = false;

    if (this.backdrop) {
      removeClass(this.backdrop, "active");
    }

    removeClass(this.element, "active");
    document.body.style.overflow = "";

    trigger(this.element, "hide.bs.modal");
  }

  toggle(): void {
    this.isShown ? this.hide() : this.show();
  }

  static getInstance(element: Element | string): Modal | null {
    const el = typeof element === "string" ? select(element) : element;
    return el ? (el as any).__modal || null : null;
  }

  static getOrCreateInstance(
    element: Element | string,
    options?: ModalOptions,
  ): Modal {
    const el = typeof element === "string" ? select(element)! : element;
    let instance = (el as any).__modal;

    if (!instance) {
      instance = new Modal(el, options);
      (el as any).__modal = instance;
    }

    return instance;
  }
}

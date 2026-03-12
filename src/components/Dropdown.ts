// ============================================
// Dropdown Component
// ============================================

import {
  select,
  selectAll,
  addClass,
  removeClass,
  on,
} from "../utils/index.js";

export class Dropdown {
  private element: Element;
  private toggleBtn: Element | null;
  private menu: Element | null;

  constructor(element: Element | string) {
    this.element = typeof element === "string" ? select(element)! : element;
    this.toggleBtn = this.element.querySelector('[data-toggle="dropdown"]');
    this.menu = this.element.querySelector(".dropdown-menu");
    this.init();
  }

  private init(): void {
    if (!this.toggleBtn || !this.menu) return;

    on(this.toggleBtn, "click", (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    });

    // Close when clicking outside
    on(document, "click", () => this.hide());
  }

  show(): void {
    if (!this.menu) return;

    addClass(this.element, "show");
    addClass(this.menu, "show");
  }

  hide(): void {
    if (!this.menu) return;

    removeClass(this.element, "show");
    removeClass(this.menu, "show");
  }

  toggle(): void {
    this.element.classList.contains("show") ? this.hide() : this.show();
  }

  static getInstance(element: Element | string): Dropdown | null {
    const el = typeof element === "string" ? select(element) : element;
    return el ? (el as any).__dropdown || null : null;
  }
}

// ============================================
// Tooltip Component
// ============================================

export interface TooltipOptions {
  title: string;
  placement?: "top" | "right" | "bottom" | "left";
  trigger?: "hover" | "click" | "focus";
}

export class Tooltip {
  private element: Element;
  private tooltip: HTMLElement | null = null;
  private options: TooltipOptions;

  constructor(element: Element | string, options: TooltipOptions) {
    this.element = typeof element === "string" ? select(element)! : element;
    this.options = { placement: "top", trigger: "hover", ...options };
    this.init();
  }

  private init(): void {
    this.createTooltip();
    this.setupTriggers();
  }

  private createTooltip(): void {
    this.tooltip = document.createElement("div");
    this.tooltip.className = `tooltip tooltip-${this.options.placement}`;
    this.tooltip.textContent = this.options.title;
    document.body.appendChild(this.tooltip);
  }

  private setupTriggers(): void {
    const trigger = this.options.trigger;

    if (trigger === "hover") {
      on(this.element, "mouseenter", () => this.show());
      on(this.element, "mouseleave", () => this.hide());
    } else if (trigger === "click") {
      on(this.element, "click", () => this.toggle());
    } else if (trigger === "focus") {
      on(this.element, "focus", () => this.show());
      on(this.element, "blur", () => this.hide());
    }
  }

  private updatePosition(): void {
    if (!this.tooltip) return;

    const rect = this.element.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (this.options.placement) {
      case "top":
        top = rect.top - tooltipRect.height - 8;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case "bottom":
        top = rect.bottom + 8;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.left - tooltipRect.width - 8;
        break;
      case "right":
        top = rect.top + rect.height / 2 - tooltipRect.height / 2;
        left = rect.right + 8;
        break;
    }

    this.tooltip.style.top = `${top + window.scrollY}px`;
    this.tooltip.style.left = `${left + window.scrollX}px`;
  }

  show(): void {
    if (!this.tooltip) return;

    this.updatePosition();
    addClass(this.tooltip, "show");
  }

  hide(): void {
    if (!this.tooltip) return;

    removeClass(this.tooltip, "show");
  }

  toggle(): void {
    this.tooltip?.classList.contains("show") ? this.hide() : this.show();
  }

  update(title: string): void {
    this.options.title = title;
    if (this.tooltip) {
      this.tooltip.textContent = title;
    }
  }

  dispose(): void {
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
  }
}

// ============================================
// Offcanvas Component
// ============================================

export interface OffcanvasOptions {
  backdrop?: boolean;
  keyboard?: boolean;
  scroll?: boolean;
}

export class Offcanvas {
  private element: Element;
  private options: OffcanvasOptions;
  private isShown: boolean = false;

  constructor(element: Element | string, options: OffcanvasOptions = {}) {
    this.element = typeof element === "string" ? select(element)! : element;
    this.options = {
      backdrop: true,
      keyboard: true,
      scroll: false,
      ...options,
    };
    this.init();
  }

  private init(): void {
    const closeButtons = selectAll('[data-dismiss="offcanvas"]', this.element);
    closeButtons.forEach((button: Element) => {
      on(button, "click", () => this.hide());
    });
  }

  show(): void {
    if (this.isShown) return;

    this.isShown = true;
    addClass(this.element, "show");

    if (!this.options.scroll) {
      document.body.style.overflow = "hidden";
    }
  }

  hide(): void {
    if (!this.isShown) return;

    this.isShown = false;
    removeClass(this.element, "show");
    document.body.style.overflow = "";
  }

  toggle(): void {
    this.isShown ? this.hide() : this.show();
  }
}

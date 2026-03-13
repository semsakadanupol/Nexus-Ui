/**
 * NEXUS-UI DROPDOWN COMPONENT
 */

import { query, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface DropdownOptions extends ComponentOptions {
  autoClose?: boolean;
}

export class Dropdown extends BaseComponent {
  private toggleBtn: HTMLElement | null;
  private menu: HTMLElement | null;
  private isShown: boolean = false;
  protected options: DropdownOptions;

  constructor(
    toggleSelector: string,
    menuSelector: string,
    options?: Partial<DropdownOptions>,
  ) {
    super(toggleSelector, options);

    this.toggleBtn = query(toggleSelector);
    this.menu = query(menuSelector);

    this.options = {
      ...DEFAULT_OPTIONS,
      autoClose: true,
      ...options,
    };

    this.init();
  }

  /**
   * Initialize dropdown
   */
  private init(): void {
    if (this.toggleBtn) {
      on(this.toggleBtn, "click", () => this.toggleMethod());
    }

    // Close on click outside
    on(document as unknown as HTMLElement, "click", (e) => {
      const target = e.target as HTMLElement;
      if (
        this.toggleBtn &&
        !this.toggleBtn.contains(target) &&
        this.menu &&
        !this.menu.contains(target)
      ) {
        this.hide();
      }
    });

    // Close on menu item click if autoClose is true
    if (this.menu && this.options.autoClose) {
      const items = this.menu.querySelectorAll("li a");
      items.forEach((item) => {
        on(item as HTMLElement, "click", () => this.hide());
      });
    }
  }

  /**
   * Show dropdown
   */
  public show(): void {
    if (!this.menu || this.isShown) return;

    this.isShown = true;
    addClass(this.menu, "show");
    if (this.toggleBtn) {
      addClass(this.toggleBtn, "show");
    }

    this.emit("show");
  }

  /**
   * Hide dropdown
   */
  public hide(): void {
    if (!this.menu || !this.isShown) return;

    this.isShown = false;
    removeClass(this.menu, "show");
    if (this.toggleBtn) {
      removeClass(this.toggleBtn, "show");
    }

    this.emit("hide");
  }

  /**
   * Toggle dropdown
   */
  public toggleMethod(): void {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }
}

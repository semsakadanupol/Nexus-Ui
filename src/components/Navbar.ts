/**
 * NEXUS-UI NAVBAR COMPONENT
 */

import { query, queryAll, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface NavbarOptions extends ComponentOptions {
  expandAt?: "sm" | "md" | "lg";
  activeClass?: string;
}

export class Navbar extends BaseComponent {
  private element: HTMLElement | null;
  private toggler: HTMLElement | null;
  private collapse: HTMLElement | null;
  private navLinks: HTMLElement[] = [];
  protected options: NavbarOptions;
  private isExpanded: boolean = false;

  constructor(selector: string, options?: Partial<NavbarOptions>) {
    super(selector, options);

    this.element = query(selector);
    this.toggler = this.element?.querySelector(".navbar-toggler") || null;
    this.collapse = this.element?.querySelector(".navbar-collapse") || null;
    this.navLinks = queryAll(`${selector} .nav-link`);

    this.options = {
      ...DEFAULT_OPTIONS,
      expandAt: "md",
      activeClass: "active",
      ...options,
    };

    this.init();
  }

  /**
   * Initialize navbar
   */
  private init(): void {
    // Toggle button handler
    if (this.toggler) {
      on(this.toggler, "click", () => this.toggleMenu());
    }

    // Nav link handlers
    this.navLinks.forEach((link) => {
      on(link, "click", () => {
        if (window.innerWidth < 768) {
          this.collapseMenu();
        }
        this.setActive(link);
      });
    });

    // Window resize handler
    on(window as any, "resize", () => {
      if (window.innerWidth >= 768) {
        this.expandMenu();
      } else {
        this.collapseMenu();
      }
    });
  }

  /**
   * Toggle menu visibility
   */
  private toggleMenu(): void {
    if (this.isExpanded) {
      this.collapseMenu();
    } else {
      this.expandMenu();
    }
  }

  /**
   * Expand menu
   */
  private expandMenu(): void {
    if (this.collapse) {
      addClass(this.collapse, "show");
      this.isExpanded = true;
      this.emit("expand");
    }
  }

  /**
   * Collapse menu
   */
  private collapseMenu(): void {
    if (this.collapse) {
      removeClass(this.collapse, "show");
      this.isExpanded = false;
      this.emit("collapse");
    }
  }

  /**
   * Set active nav link
   */
  public setActive(selector: string | HTMLElement): void {
    // Remove active from all links
    this.navLinks.forEach((link) => {
      removeClass(link, this.options.activeClass!);
    });

    // Add active to selected link
    let targetLink: HTMLElement | null = null;

    if (typeof selector === "string") {
      targetLink = query(selector);
    } else {
      targetLink = selector;
    }

    if (targetLink) {
      addClass(targetLink, this.options.activeClass!);
      this.emit("activeChanged", { target: targetLink });
    }
  }

  /**
   * Get active link
   */
  public getActive(): HTMLElement | null {
    return (
      this.navLinks.find((link) =>
        link.classList.contains(this.options.activeClass!),
      ) || null
    );
  }

  /**
   * Destroy navbar
   */
  public destroy(): void {
    super.dispose();
  }
}

/**
 * NEXUS-UI TABS COMPONENT
 */

import { queryAll, on, addClass, removeClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface TabsOptions extends ComponentOptions {
  activeClass?: string;
}

export class Tabs extends BaseComponent {
  private tabLinks: HTMLElement[] = [];
  private tabPanes: HTMLElement[] = [];
  private activeIndex: number = 0;
  protected options: TabsOptions;

  constructor(selector: string, options?: Partial<TabsOptions>) {
    super(selector, options);

    this.tabLinks = queryAll(`${selector} .tab-link`);
    this.tabPanes = queryAll(`${selector} .tab-pane`);

    this.options = {
      ...DEFAULT_OPTIONS,
      activeClass: "active",
      ...options,
    };

    this.init();
  }

  /**
   * Initialize tabs
   */
  private init(): void {
    this.tabLinks.forEach((link, index) => {
      on(link, "click", (e) => {
        e.preventDefault();
        this.activateTab(index);
      });
    });

    // Activate first tab by default
    if (this.tabLinks.length > 0) {
      this.activateTab(0);
    }
  }

  /**
   * Activate tab
   */
  public activateTab(index: number): void {
    if (index < 0 || index >= this.tabLinks.length) return;

    // Deactivate all tabs
    this.tabLinks.forEach((link) =>
      removeClass(link, this.options.activeClass!),
    );
    this.tabPanes.forEach((pane) =>
      removeClass(pane, this.options.activeClass!),
    );

    // Activate selected tab
    this.activeIndex = index;
    addClass(this.tabLinks[index], this.options.activeClass!);
    addClass(this.tabPanes[index], this.options.activeClass!);

    this.emit("activate", { index });
  }

  /**
   * Get active tab index
   */
  public getActiveIndex(): number {
    return this.activeIndex;
  }

  /**
   * Next tab
   */
  public next(): void {
    const nextIndex = (this.activeIndex + 1) % this.tabLinks.length;
    this.activateTab(nextIndex);
  }

  /**
   * Previous tab
   */
  public prev(): void {
    const prevIndex =
      (this.activeIndex - 1 + this.tabLinks.length) % this.tabLinks.length;
    this.activateTab(prevIndex);
  }
}

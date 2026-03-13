/**
 * NEXUS-UI CAROUSEL COMPONENT
 */

import { queryAll, query, addClass, removeClass } from "../utils/dom";
import { BaseComponent, ComponentOptions, DEFAULT_OPTIONS } from "./base";

export interface CarouselOptions extends ComponentOptions {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transitionDuration?: number;
}

export class Carousel extends BaseComponent {
  private element: HTMLElement | null;
  private items: HTMLElement[] = [];
  private indicators: HTMLElement[] = [];
  private currentIndex: number = 0;
  protected options: CarouselOptions;
  private autoPlayInterval: NodeJS.Timeout | null = null;
  private isAutoPlaying: boolean = false;

  constructor(selector: string, options?: Partial<CarouselOptions>) {
    super(selector, options);

    this.element = query(selector);
    this.items = queryAll(`${selector} .carousel-item`);
    this.indicators = queryAll(`${selector} .indicator`);

    this.options = {
      ...DEFAULT_OPTIONS,
      autoPlay: false,
      autoPlayInterval: 5000,
      transitionDuration: 500,
      ...options,
    };

    this.init();
  }

  /**
   * Initialize carousel
   */
  private init(): void {
    // Set first item as active
    if (this.items.length > 0) {
      addClass(this.items[0], "active");
    }
    if (this.indicators.length > 0) {
      addClass(this.indicators[0], "active");
    }

    // Prev/Next button handlers
    const prevBtn = this.element?.querySelector(".carousel-control.prev");
    const nextBtn = this.element?.querySelector(".carousel-control.next");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.prev());
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.next());
    }

    // Indicator click handlers
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.go(index));
    });

    // Auto-play if enabled
    if (this.options.autoPlay) {
      this.start();
    }
  }

  /**
   * Show item at index
   */
  private showItem(index: number): void {
    if (index < 0 || index >= this.items.length) return;

    // Remove active from all items
    this.items.forEach((item) => removeClass(item, "active"));
    this.indicators.forEach((indicator) => removeClass(indicator, "active"));

    // Add active to current item
    this.currentIndex = index;
    addClass(this.items[index], "active");
    if (this.indicators[index]) {
      addClass(this.indicators[index], "active");
    }

    this.emit("slideChange", { index });
  }

  /**
   * Go to next slide
   */
  public next(): void {
    const nextIndex = (this.currentIndex + 1) % this.items.length;
    this.showItem(nextIndex);
  }

  /**
   * Go to previous slide
   */
  public prev(): void {
    const prevIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(prevIndex);
  }

  /**
   * Go to specific slide
   */
  public go(index: number): void {
    this.showItem(index);
  }

  /**
   * Start auto-play
   */
  public start(): void {
    if (this.isAutoPlaying) return;

    this.isAutoPlaying = true;
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.options.autoPlayInterval);

    this.emit("start");
  }

  /**
   * Pause auto-play
   */
  public pause(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.isAutoPlaying = false;
    this.emit("pause");
  }

  /**
   * Get current index
   */
  public getCurrentIndex(): number {
    return this.currentIndex;
  }

  /**
   * Destroy carousel
   */
  public destroy(): void {
    this.pause();
    super.dispose();
  }
}

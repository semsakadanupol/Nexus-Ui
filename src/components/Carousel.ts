// ============================================
// Carousel Component
// ============================================

import {
  selectAll,
  addClass,
  removeClass,
  on,
  trigger,
} from "../utils/index.js";

export interface CarouselOptions {
  interval?: number;
  keyboard?: boolean;
  pause?: "hover" | false;
  ride?: "carousel" | false;
}

export class Carousel {
  private element: Element;
  private items: Element[];
  private currentIndex: number = 0;
  private options: CarouselOptions;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(element: Element | string, options: CarouselOptions = {}) {
    this.element =
      typeof element === "string"
        ? document.querySelector(element) || new HTMLElement()
        : element;
    this.items = selectAll(".carousel-item", this.element);
    this.options = {
      interval: 5000,
      keyboard: true,
      pause: "hover",
      ride: "carousel",
      ...options,
    };
    this.init();
  }

  private init(): void {
    if (this.items.length === 0) return;

    this.showItem(0);
    this.setupControls();
    this.setupKeyboard();

    if (this.options.ride === "carousel") {
      this.start();
    }
  }

  private setupControls(): void {
    const prevBtn = this.element.querySelector(".carousel-control-prev");
    const nextBtn = this.element.querySelector(".carousel-control-next");

    if (prevBtn) {
      on(prevBtn, "click", () => this.prev());
    }

    if (nextBtn) {
      on(nextBtn, "click", () => this.next());
    }

    // Pause on hover
    if (this.options.pause === "hover") {
      on(this.element, "mouseenter", () => this.pause());
      on(this.element, "mouseleave", () => this.start());
    }
  }

  private setupKeyboard(): void {
    if (this.options.keyboard) {
      on(document, "keydown", (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") this.prev();
        if (e.key === "ArrowRight") this.next();
      });
    }
  }

  private showItem(index: number): void {
    if (index < 0) {
      index = this.items.length - 1;
    } else if (index >= this.items.length) {
      index = 0;
    }

    this.items.forEach((item, i) => {
      if (i === index) {
        addClass(item, "active");
      } else {
        removeClass(item, "active");
      }
    });

    this.currentIndex = index;
    trigger(this.element, "slid.bs.carousel");
  }

  next(): void {
    this.showItem(this.currentIndex + 1);
  }

  prev(): void {
    this.showItem(this.currentIndex - 1);
  }

  go(index: number): void {
    this.showItem(index);
  }

  start(): void {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      this.next();
    }, this.options.interval);
  }

  pause(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  static getInstance(element: Element | string): Carousel | null {
    const el =
      typeof element === "string" ? document.querySelector(element) : element;
    return el ? (el as any).__carousel || null : null;
  }
}

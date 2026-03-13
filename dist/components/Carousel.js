// ============================================
// Carousel Component
// ============================================
import { selectAll, addClass, removeClass, on, trigger, } from "../utils/index.js";
export class Carousel {
    constructor(element, options = {}) {
        this.currentIndex = 0;
        this.intervalId = null;
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
    init() {
        if (this.items.length === 0)
            return;
        this.showItem(0);
        this.setupControls();
        this.setupKeyboard();
        if (this.options.ride === "carousel") {
            this.start();
        }
    }
    setupControls() {
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
    setupKeyboard() {
        if (this.options.keyboard) {
            on(document, "keydown", (e) => {
                if (e.key === "ArrowLeft")
                    this.prev();
                if (e.key === "ArrowRight")
                    this.next();
            });
        }
    }
    showItem(index) {
        if (index < 0) {
            index = this.items.length - 1;
        }
        else if (index >= this.items.length) {
            index = 0;
        }
        this.items.forEach((item, i) => {
            if (i === index) {
                addClass(item, "active");
            }
            else {
                removeClass(item, "active");
            }
        });
        this.currentIndex = index;
        trigger(this.element, "slid.bs.carousel");
    }
    next() {
        this.showItem(this.currentIndex + 1);
    }
    prev() {
        this.showItem(this.currentIndex - 1);
    }
    go(index) {
        this.showItem(index);
    }
    start() {
        if (this.intervalId)
            return;
        this.intervalId = setInterval(() => {
            this.next();
        }, this.options.interval);
    }
    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    static getInstance(element) {
        const el = typeof element === "string" ? document.querySelector(element) : element;
        return el ? el.__carousel || null : null;
    }
}
//# sourceMappingURL=Carousel.js.map
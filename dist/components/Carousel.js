import { queryAll, query, addClass, removeClass } from "../utils/dom";
import { BaseComponent, DEFAULT_OPTIONS } from "./base";
export class Carousel extends BaseComponent {
    constructor(selector, options) {
        super(selector, options);
        this.items = [];
        this.indicators = [];
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.isAutoPlaying = false;
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
    init() {
        if (this.items.length > 0) {
            addClass(this.items[0], "active");
        }
        if (this.indicators.length > 0) {
            addClass(this.indicators[0], "active");
        }
        const prevBtn = this.element?.querySelector(".carousel-control.prev");
        const nextBtn = this.element?.querySelector(".carousel-control.next");
        if (prevBtn) {
            prevBtn.addEventListener("click", () => this.prev());
        }
        if (nextBtn) {
            nextBtn.addEventListener("click", () => this.next());
        }
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => this.go(index));
        });
        if (this.options.autoPlay) {
            this.start();
        }
    }
    showItem(index) {
        if (index < 0 || index >= this.items.length)
            return;
        this.items.forEach((item) => removeClass(item, "active"));
        this.indicators.forEach((indicator) => removeClass(indicator, "active"));
        this.currentIndex = index;
        addClass(this.items[index], "active");
        if (this.indicators[index]) {
            addClass(this.indicators[index], "active");
        }
        this.emit("slideChange", { index });
    }
    next() {
        const nextIndex = (this.currentIndex + 1) % this.items.length;
        this.showItem(nextIndex);
    }
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.showItem(prevIndex);
    }
    go(index) {
        this.showItem(index);
    }
    start() {
        if (this.isAutoPlaying)
            return;
        this.isAutoPlaying = true;
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.options.autoPlayInterval);
        this.emit("start");
    }
    pause() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.isAutoPlaying = false;
        this.emit("pause");
    }
    getCurrentIndex() {
        return this.currentIndex;
    }
    destroy() {
        this.pause();
        super.dispose();
    }
}
//# sourceMappingURL=Carousel.js.map
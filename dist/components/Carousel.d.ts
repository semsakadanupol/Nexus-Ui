import { BaseComponent, ComponentOptions } from "./base";
export interface CarouselOptions extends ComponentOptions {
    autoPlay?: boolean;
    autoPlayInterval?: number;
    transitionDuration?: number;
}
export declare class Carousel extends BaseComponent {
    private element;
    private items;
    private indicators;
    private currentIndex;
    protected options: CarouselOptions;
    private autoPlayInterval;
    private isAutoPlaying;
    constructor(selector: string, options?: Partial<CarouselOptions>);
    private init;
    private showItem;
    next(): void;
    prev(): void;
    go(index: number): void;
    start(): void;
    pause(): void;
    getCurrentIndex(): number;
    destroy(): void;
}
//# sourceMappingURL=Carousel.d.ts.map
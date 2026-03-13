export interface CarouselOptions {
    interval?: number;
    keyboard?: boolean;
    pause?: "hover" | false;
    ride?: "carousel" | false;
}
export declare class Carousel {
    private element;
    private items;
    private currentIndex;
    private options;
    private intervalId;
    constructor(element: Element | string, options?: CarouselOptions);
    private init;
    private setupControls;
    private setupKeyboard;
    private showItem;
    next(): void;
    prev(): void;
    go(index: number): void;
    start(): void;
    pause(): void;
    static getInstance(element: Element | string): Carousel | null;
}
//# sourceMappingURL=Carousel.d.ts.map
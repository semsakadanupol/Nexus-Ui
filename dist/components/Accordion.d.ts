import { BaseComponent, ComponentOptions } from "./base";
export interface AccordionOptions extends ComponentOptions {
    allowMultiple?: boolean;
}
export declare class Accordion extends BaseComponent {
    private items;
    private headers;
    private bodies;
    protected options: AccordionOptions;
    private openItems;
    constructor(selector: string, options?: Partial<AccordionOptions>);
    private init;
    toggle(index: number): void;
    open(index: number): void;
    close(index: number): void;
    getOpenItems(): number[];
    closeAll(): void;
}
//# sourceMappingURL=Accordion.d.ts.map
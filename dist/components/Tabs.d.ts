import { BaseComponent, ComponentOptions } from "./base";
export interface TabsOptions extends ComponentOptions {
    activeClass?: string;
}
export declare class Tabs extends BaseComponent {
    private tabLinks;
    private tabPanes;
    private activeIndex;
    protected options: TabsOptions;
    constructor(selector: string, options?: Partial<TabsOptions>);
    private init;
    activateTab(index: number): void;
    getActiveIndex(): number;
    next(): void;
    prev(): void;
}
//# sourceMappingURL=Tabs.d.ts.map
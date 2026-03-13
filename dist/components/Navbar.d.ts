import { BaseComponent, ComponentOptions } from "./base";
export interface NavbarOptions extends ComponentOptions {
    expandAt?: "sm" | "md" | "lg";
    activeClass?: string;
}
export declare class Navbar extends BaseComponent {
    private element;
    private toggler;
    private collapse;
    private navLinks;
    protected options: NavbarOptions;
    private isExpanded;
    constructor(selector: string, options?: Partial<NavbarOptions>);
    private init;
    private toggleMenu;
    private expandMenu;
    private collapseMenu;
    setActive(selector: string | HTMLElement): void;
    getActive(): HTMLElement | null;
    destroy(): void;
}
//# sourceMappingURL=Navbar.d.ts.map
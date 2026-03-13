export declare class Navbar {
    private element;
    private toggler;
    private navMenu;
    constructor(element: Element | string);
    private init;
    private setupDropdowns;
    private toggleDropdown;
    private toggleMenu;
    private closeMenu;
    setActive(selector: string): void;
    static getInstance(element: Element | string): Navbar | null;
    static getOrCreateInstance(element: Element | string): Navbar;
}
//# sourceMappingURL=Navbar.d.ts.map
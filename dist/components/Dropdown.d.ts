import { BaseComponent, ComponentOptions } from "./base";
export interface DropdownOptions extends ComponentOptions {
    autoClose?: boolean;
}
export declare class Dropdown extends BaseComponent {
    private toggleBtn;
    private menu;
    private isShown;
    protected options: DropdownOptions;
    constructor(toggleSelector: string, menuSelector: string, options?: Partial<DropdownOptions>);
    private init;
    show(): void;
    hide(): void;
    toggleMethod(): void;
}
//# sourceMappingURL=Dropdown.d.ts.map
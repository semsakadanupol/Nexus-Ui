export interface ComponentOptions {
    selector?: string;
    autoInit?: boolean;
    debug?: boolean;
}
export interface ComponentEventMap {
    show?: Event;
    hide?: Event;
    toggle?: Event;
}
export type EventHandler = (event: Event) => void;
export type EventName = "show" | "hide" | "toggle" | string;
export interface ThemeConfig {
    name: "light" | "dark" | "high-contrast" | "system";
    colors?: Record<string, string>;
}
export interface ThemeDefinition {
    colors: Record<string, string>;
    spacing: Record<string, string>;
    typography: Record<string, string | number>;
}
//# sourceMappingURL=types.d.ts.map
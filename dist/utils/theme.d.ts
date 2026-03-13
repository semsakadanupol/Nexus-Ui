type Theme = "light" | "dark" | "high-contrast" | "system";
type ThemeChangeCallback = (theme: Theme | "light" | "dark") => void;
interface ThemeManagerConfig {
    storageKey?: string;
    htmlElement?: HTMLElement;
    preferenceMediaQuery?: string;
}
declare class ThemeManagerClass {
    private currentTheme;
    private storageKey;
    private htmlElement;
    private preferenceMediaQuery;
    private listeners;
    private mediaQueryList;
    constructor(config?: ThemeManagerConfig);
    private init;
    private detectSystemTheme;
    private applyTheme;
    private notifyListeners;
    setTheme(theme: Theme): void;
    getTheme(): Theme;
    getEffectiveTheme(): "light" | "dark";
    toggle(): void;
    getAvailable(): Theme[];
    onChange(callback: ThemeChangeCallback): () => void;
    clearListeners(): void;
    getCSSVariable(name: string): string;
    setCSSVariable(name: string, value: string): void;
    getConfig(): Record<string, any>;
    destroy(): void;
}
export declare const ThemeManager: ThemeManagerClass;
export { ThemeManagerClass };
//# sourceMappingURL=theme.d.ts.map
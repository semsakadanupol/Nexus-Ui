/**
 * Tailwind-like Theme Manager - Handle theme switching, customization, and design tokens
 * Supports multiple themes, custom configs, and design token management
 */
export type ThemeName = "light" | "dark" | "system";
export interface ThemeColors {
    primary?: string;
    secondary?: string;
    accent?: string;
    success?: string;
    warning?: string;
    danger?: string;
    info?: string;
    [key: string]: string | undefined;
}
export interface ThemeConfig {
    colors?: ThemeColors;
    spacing?: {
        [key: string]: string;
    };
    typography?: {
        fontSizes?: {
            [key: string]: string;
        };
        fontWeights?: {
            [key: string]: number;
        };
        lineHeights?: {
            [key: string]: number | string;
        };
    };
    borderRadius?: {
        [key: string]: string;
    };
    shadows?: {
        [key: string]: string;
    };
    transitions?: {
        [key: string]: string;
    };
    [key: string]: any;
}
export interface ThemeDefinition {
    light?: ThemeConfig;
    dark?: ThemeConfig;
    [key: string]: ThemeConfig | undefined;
}
export declare class ThemeManager {
    private static readonly STORAGE_KEY;
    private static readonly THEME_ATTR;
    private static currentTheme;
    private static observers;
    private static themeConfig;
    private static customConfig;
    /**
     * Initialize theme system with optional custom config
     */
    static init(customConfig?: ThemeDefinition): void;
    /**
     * Get complete theme configuration
     */
    static getConfig(themeName?: ThemeName): ThemeConfig;
    /**
     * Get specific theme config value
     * @example
     * ThemeManager.getValue("colors", "primary") // "#3b82f6"
     * ThemeManager.getValue("spacing", "4") // "1rem"
     */
    static getValue(section: string, key: string, themeName?: ThemeName): any;
    /**
     * Get all values from a section
     * @example
     * ThemeManager.getSection("colors") // { primary: "#3b82f6", ... }
     */
    static getSection(section: string, themeName?: ThemeName): any;
    /**
     * Set or extend theme configuration
     * @example
     * ThemeManager.setConfig("light", {
     *   colors: { primary: "#ff0000" }
     * })
     */
    static setConfig(themeName: ThemeName | string, config: ThemeConfig): void;
    /**
     * Extend existing theme config
     */
    static extendConfig(themeName: ThemeName, config: Partial<ThemeConfig>): void;
    /**
     * Get saved theme from localStorage
     */
    private static getSavedTheme;
    /**
     * Get system preferred theme
     */
    private static getPreferredTheme;
    /**
     * Resolve theme to actual theme (system -> light or dark)
     */
    private static resolveTheme;
    /**
     * Set theme and save to localStorage
     */
    static setTheme(theme: ThemeName | string): void;
    /**
     * Apply theme CSS variables to DOM
     */
    private static applyThemeToDOM;
    /**
     * Get current theme
     */
    static getTheme(): ThemeName;
    /**
     * Toggle between light and dark theme
     */
    static toggle(): ThemeName;
    /**
     * Cycle through all available themes: light -> dark -> system -> light
     */
    static cycle(): ThemeName;
    /**
     * Get all available themes
     */
    static getAvailableThemes(): ThemeName[];
    /**
     * Check if system prefers light mode
     */
    static prefersLight(): boolean;
    /**
     * Check if system prefers dark mode
     */
    static prefersDark(): boolean;
    /**
     * Listen for theme changes
     */
    static onChange(callback: (theme: ThemeName) => void): () => void;
    /**
     * Notify all observers of theme change
     */
    private static notifyObservers;
    /**
     * Enable transitions when changing themes
     */
    static enableTransitions(): void;
    /**
     * Disable transitions when changing themes
     */
    static disableTransitions(): void;
    /**
     * Deep merge objects (for config merging)
     */
    private static deepMerge;
    /**
     * Check if value is object
     */
    private static isObject;
}
export default ThemeManager;
//# sourceMappingURL=theme.d.ts.map
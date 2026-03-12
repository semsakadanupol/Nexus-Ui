/**
 * Theme Manager - Handle theme switching and persistence
 */
export type Theme = "light" | "dark" | "high-contrast";
export declare class ThemeManager {
    private static readonly STORAGE_KEY;
    private static readonly THEME_ATTR;
    private static currentTheme;
    private static observers;
    /**
     * Initialize theme system
     */
    static init(): void;
    /**
     * Get saved theme from localStorage
     */
    private static getSavedTheme;
    /**
     * Get system preferred theme
     */
    private static getPreferredTheme;
    /**
     * Set theme and save to localStorage
     */
    static setTheme(theme: Theme): void;
    /**
     * Get current theme
     */
    static getTheme(): Theme;
    /**
     * Toggle between light and dark theme
     */
    static toggle(): Theme;
    /**
     * Cycle through all themes
     */
    static cycle(): Theme;
    /**
     * Check if system prefers dark mode
     */
    static prefersLight(): boolean;
    /**
     * Check if system prefers dark mode
     */
    static prefersDark(): boolean;
    /**
     * Listen for theme changes
     */
    static onChange(callback: (theme: Theme) => void): () => void;
    /**
     * Notify all observers of theme change
     */
    private static notifyObservers;
    /**
     * Apply transitions when changing themes
     */
    static enableTransitions(): void;
    /**
     * Disable transitions when changing themes
     */
    static disableTransitions(): void;
}
//# sourceMappingURL=theme.d.ts.map
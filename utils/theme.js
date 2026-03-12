/**
 * Theme Manager - Handle theme switching and persistence
 */
export class ThemeManager {
    /**
     * Initialize theme system
     */
    static init() {
        const saved = this.getSavedTheme();
        const preferred = this.getPreferredTheme();
        const theme = saved || preferred || "light";
        this.setTheme(theme);
    }
    /**
     * Get saved theme from localStorage
     */
    static getSavedTheme() {
        if (typeof localStorage !== "undefined") {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved && ["light", "dark", "high-contrast"].includes(saved)) {
                return saved;
            }
        }
        return null;
    }
    /**
     * Get system preferred theme
     */
    static getPreferredTheme() {
        if (typeof window !== "undefined" && window.matchMedia) {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
        return "light";
    }
    /**
     * Set theme and save to localStorage
     */
    static setTheme(theme) {
        // Add transition class
        document.documentElement.classList.add("theme-transition");
        // Set theme attribute
        document.documentElement.setAttribute(this.THEME_ATTR, theme);
        this.currentTheme = theme;
        // Save to localStorage
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(this.STORAGE_KEY, theme);
        }
        // Notify observers
        this.notifyObservers(theme);
        // Remove transition class after animation
        setTimeout(() => {
            document.documentElement.classList.remove("theme-transition");
        }, 300);
    }
    /**
     * Get current theme
     */
    static getTheme() {
        return this.currentTheme;
    }
    /**
     * Toggle between light and dark theme
     */
    static toggle() {
        const newTheme = this.currentTheme === "light" ? "dark" : "light";
        this.setTheme(newTheme);
        return newTheme;
    }
    /**
     * Cycle through all themes
     */
    static cycle() {
        const themes = ["light", "dark", "high-contrast"];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        this.setTheme(newTheme);
        return newTheme;
    }
    /**
     * Check if system prefers dark mode
     */
    static prefersLight() {
        if (typeof window === "undefined")
            return true;
        return !window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    /**
     * Check if system prefers dark mode
     */
    static prefersDark() {
        if (typeof window === "undefined")
            return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    /**
     * Listen for theme changes
     */
    static onChange(callback) {
        this.observers.add(callback);
        // Return unsubscribe function
        return () => {
            this.observers.delete(callback);
        };
    }
    /**
     * Notify all observers of theme change
     */
    static notifyObservers(theme) {
        this.observers.forEach((callback) => callback(theme));
    }
    /**
     * Apply transitions when changing themes
     */
    static enableTransitions() {
        document.documentElement.classList.add("theme-transition");
    }
    /**
     * Disable transitions when changing themes
     */
    static disableTransitions() {
        document.documentElement.classList.remove("theme-transition");
    }
}
ThemeManager.STORAGE_KEY = "nexus-theme";
ThemeManager.THEME_ATTR = "data-theme";
ThemeManager.currentTheme = "light";
ThemeManager.observers = new Set();
// Auto-initialize on module load
if (typeof document !== "undefined") {
    ThemeManager.init();
}
//# sourceMappingURL=theme.js.map
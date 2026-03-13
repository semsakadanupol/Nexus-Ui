/**
 * Tailwind-like Theme Manager - Handle theme switching, customization, and design tokens
 * Supports multiple themes, custom configs, and design token management
 */
/**
 * Default Tailwind-like theme configuration
 */
const DEFAULT_THEME = {
    light: {
        colors: {
            primary: "#3b82f6",
            secondary: "#6b7280",
            accent: "#f59e0b",
            success: "#10b981",
            warning: "#f59e0b",
            danger: "#ef4444",
            info: "#0ea5e9",
        },
        spacing: {
            0: "0",
            1: "0.25rem",
            2: "0.5rem",
            3: "0.75rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            12: "3rem",
            16: "4rem",
        },
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            full: "9999px",
        },
    },
    dark: {
        colors: {
            primary: "#60a5fa",
            secondary: "#9ca3af",
            accent: "#fbbf24",
            success: "#34d399",
            warning: "#fbbf24",
            danger: "#f87171",
            info: "#38bdf8",
        },
    },
};
export class ThemeManager {
    /**
     * Initialize theme system with optional custom config
     */
    static init(customConfig) {
        if (customConfig) {
            this.customConfig = this.deepMerge(DEFAULT_THEME, customConfig);
            this.themeConfig = this.customConfig;
        }
        const saved = this.getSavedTheme();
        const theme = (saved || "system");
        this.setTheme(theme);
    }
    /**
     * Get complete theme configuration
     */
    static getConfig(themeName) {
        let theme = themeName || this.currentTheme;
        // Resolve system theme to actual theme
        if (theme === "system") {
            theme = this.getPreferredTheme();
        }
        return this.themeConfig[theme] || {};
    }
    /**
     * Get specific theme config value
     * @example
     * ThemeManager.getValue("colors", "primary") // "#3b82f6"
     * ThemeManager.getValue("spacing", "4") // "1rem"
     */
    static getValue(section, key, themeName) {
        let theme = themeName || this.currentTheme;
        // Resolve system theme to actual theme
        if (theme === "system") {
            theme = this.getPreferredTheme();
        }
        const config = this.themeConfig[theme];
        if (!config)
            return undefined;
        const sectionConfig = config[section];
        if (typeof sectionConfig === "object" && sectionConfig !== null) {
            return sectionConfig[key];
        }
        return undefined;
    }
    /**
     * Get all values from a section
     * @example
     * ThemeManager.getSection("colors") // { primary: "#3b82f6", ... }
     */
    static getSection(section, themeName) {
        let theme = themeName || this.currentTheme;
        // Resolve system theme to actual theme
        if (theme === "system") {
            theme = this.getPreferredTheme();
        }
        const config = this.themeConfig[theme];
        if (!config)
            return {};
        return config[section] || {};
    }
    /**
     * Set or extend theme configuration
     * @example
     * ThemeManager.setConfig("light", {
     *   colors: { primary: "#ff0000" }
     * })
     */
    static setConfig(themeName, config) {
        if (!this.themeConfig[themeName]) {
            this.themeConfig[themeName] = {};
        }
        this.themeConfig[themeName] = this.deepMerge(this.themeConfig[themeName] || {}, config);
        this.applyThemeToDOM(this.currentTheme);
    }
    /**
     * Extend existing theme config
     */
    static extendConfig(themeName, config) {
        if (!this.themeConfig[themeName]) {
            this.themeConfig[themeName] = {};
        }
        this.themeConfig[themeName] = this.deepMerge(this.themeConfig[themeName] || {}, config);
    }
    /**
     * Get saved theme from localStorage
     */
    static getSavedTheme() {
        if (typeof localStorage !== "undefined") {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved &&
                (saved === "system" || saved === "dark" || saved === "light")) {
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
     * Resolve theme to actual theme (system -> light or dark)
     */
    static resolveTheme(theme) {
        if (theme === "system") {
            return this.getPreferredTheme();
        }
        return theme;
    }
    /**
     * Set theme and save to localStorage
     */
    static setTheme(theme) {
        if (theme !== "system" && theme !== "dark" && theme !== "light") {
            console.warn(`Theme "${theme}" not found. Using default.`);
            return;
        }
        // Add transition class
        document.documentElement.classList.add("theme-transition");
        // Resolve actual theme (system -> light or dark)
        const resolvedTheme = this.resolveTheme(theme);
        // Set theme attribute with resolved value
        document.documentElement.setAttribute(this.THEME_ATTR, resolvedTheme);
        this.currentTheme = theme;
        // Apply theme to DOM using resolved theme
        this.applyThemeToDOM(resolvedTheme);
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
     * Apply theme CSS variables to DOM
     */
    static applyThemeToDOM(theme) {
        if (typeof document === "undefined")
            return;
        const resolvedTheme = typeof theme === "string" && theme !== "system"
            ? theme
            : this.resolveTheme(theme);
        const config = this.themeConfig[resolvedTheme];
        if (!config)
            return;
        // Apply colors
        if (config.colors) {
            Object.entries(config.colors).forEach(([key, value]) => {
                if (value) {
                    document.documentElement.style.setProperty(`--color-${key}`, value);
                }
            });
        }
        // Apply spacing
        if (config.spacing) {
            Object.entries(config.spacing).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--spacing-${key}`, value);
            });
        }
        // Apply border radius
        if (config.borderRadius) {
            Object.entries(config.borderRadius).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--radius-${key}`, value);
            });
        }
        // Apply typography
        if (config.typography?.fontSizes) {
            Object.entries(config.typography.fontSizes).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--font-size-${key}`, value);
            });
        }
        // Apply shadows
        if (config.shadows) {
            Object.entries(config.shadows).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--shadow-${key}`, value);
            });
        }
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
     * Cycle through all available themes: light -> dark -> system -> light
     */
    static cycle() {
        const themes = ["light", "dark", "system"];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        this.setTheme(newTheme);
        return newTheme;
    }
    /**
     * Get all available themes
     */
    static getAvailableThemes() {
        return ["light", "dark", "system"];
    }
    /**
     * Check if system prefers light mode
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
     * Enable transitions when changing themes
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
    /**
     * Deep merge objects (for config merging)
     */
    static deepMerge(target, source) {
        const output = { ...target };
        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (this.isObject(source[key])) {
                    if (!(key in target))
                        Object.assign(output, { [key]: source[key] });
                    else
                        output[key] = this.deepMerge(target[key], source[key]);
                }
                else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    }
    /**
     * Check if value is object
     */
    static isObject(item) {
        return item && typeof item === "object" && !Array.isArray(item);
    }
}
ThemeManager.STORAGE_KEY = "nexus-theme";
ThemeManager.THEME_ATTR = "data-theme";
ThemeManager.currentTheme = "light";
ThemeManager.observers = new Set();
ThemeManager.themeConfig = DEFAULT_THEME;
ThemeManager.customConfig = {};
export default ThemeManager;
// Auto-initialize on module load
if (typeof document !== "undefined") {
    ThemeManager.init();
}
//# sourceMappingURL=theme.js.map
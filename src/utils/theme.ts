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
  spacing?: { [key: string]: string };
  typography?: {
    fontSizes?: { [key: string]: string };
    fontWeights?: { [key: string]: number };
    lineHeights?: { [key: string]: number | string };
  };
  borderRadius?: { [key: string]: string };
  shadows?: { [key: string]: string };
  transitions?: { [key: string]: string };
  [key: string]: any;
}

export interface ThemeDefinition {
  light?: ThemeConfig;
  dark?: ThemeConfig;
  [key: string]: ThemeConfig | undefined;
}

/**
 * Default Tailwind-like theme configuration
 */
const DEFAULT_THEME: ThemeDefinition = {
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
  private static readonly STORAGE_KEY = "nexus-theme";
  private static readonly THEME_ATTR = "data-theme";
  private static currentTheme: ThemeName = "light";
  private static observers: Set<(theme: ThemeName) => void> = new Set();
  private static themeConfig: ThemeDefinition = DEFAULT_THEME;
  private static customConfig: ThemeDefinition = {};

  /**
   * Initialize theme system with optional custom config
   */
  static init(customConfig?: ThemeDefinition): void {
    if (customConfig) {
      this.customConfig = this.deepMerge(DEFAULT_THEME, customConfig);
      this.themeConfig = this.customConfig;
    }

    const saved = this.getSavedTheme();
    const theme = (saved || "system") as ThemeName;
    this.setTheme(theme);
  }

  /**
   * Get complete theme configuration
   */
  static getConfig(themeName?: ThemeName): ThemeConfig {
    let theme = themeName || this.currentTheme;
    // Resolve system theme to actual theme
    if (theme === "system") {
      theme = this.getPreferredTheme();
    }
    return this.themeConfig[theme as "light" | "dark"] || {};
  }

  /**
   * Get specific theme config value
   * @example
   * ThemeManager.getValue("colors", "primary") // "#3b82f6"
   * ThemeManager.getValue("spacing", "4") // "1rem"
   */
  static getValue(section: string, key: string, themeName?: ThemeName): any {
    let theme = themeName || this.currentTheme;
    // Resolve system theme to actual theme
    if (theme === "system") {
      theme = this.getPreferredTheme();
    }
    const config = this.themeConfig[theme as "light" | "dark"];
    if (!config) return undefined;

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
  static getSection(section: string, themeName?: ThemeName): any {
    let theme = themeName || this.currentTheme;
    // Resolve system theme to actual theme
    if (theme === "system") {
      theme = this.getPreferredTheme();
    }
    const config = this.themeConfig[theme as "light" | "dark"];
    if (!config) return {};

    return config[section] || {};
  }

  /**
   * Set or extend theme configuration
   * @example
   * ThemeManager.setConfig("light", {
   *   colors: { primary: "#ff0000" }
   * })
   */
  static setConfig(themeName: ThemeName | string, config: ThemeConfig): void {
    if (!this.themeConfig[themeName]) {
      this.themeConfig[themeName] = {};
    }
    this.themeConfig[themeName] = this.deepMerge(
      this.themeConfig[themeName] || {},
      config,
    );
    this.applyThemeToDOM(this.currentTheme);
  }

  /**
   * Extend existing theme config
   */
  static extendConfig(
    themeName: ThemeName,
    config: Partial<ThemeConfig>,
  ): void {
    if (!this.themeConfig[themeName]) {
      this.themeConfig[themeName] = {};
    }
    this.themeConfig[themeName] = this.deepMerge(
      this.themeConfig[themeName] || {},
      config,
    );
  }

  /**
   * Get saved theme from localStorage
   */
  private static getSavedTheme(): ThemeName | null {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem(this.STORAGE_KEY) as ThemeName | null;
      if (
        saved &&
        (saved === "system" || saved === "dark" || saved === "light")
      ) {
        return saved;
      }
    }
    return null;
  }

  /**
   * Get system preferred theme
   */
  private static getPreferredTheme(): ThemeName {
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
  private static resolveTheme(theme: ThemeName): "light" | "dark" {
    if (theme === "system") {
      return this.getPreferredTheme() as "light" | "dark";
    }
    return theme as "light" | "dark";
  }

  /**
   * Set theme and save to localStorage
   */
  static setTheme(theme: ThemeName | string): void {
    if (theme !== "system" && theme !== "dark" && theme !== "light") {
      console.warn(`Theme "${theme}" not found. Using default.`);
      return;
    }

    // Add transition class
    document.documentElement.classList.add("theme-transition");

    // Resolve actual theme (system -> light or dark)
    const resolvedTheme = this.resolveTheme(theme as ThemeName);

    // Set theme attribute with resolved value
    document.documentElement.setAttribute(this.THEME_ATTR, resolvedTheme);
    this.currentTheme = theme as ThemeName;

    // Apply theme to DOM using resolved theme
    this.applyThemeToDOM(resolvedTheme as "light" | "dark");

    // Save to localStorage
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(this.STORAGE_KEY, theme);
    }

    // Notify observers
    this.notifyObservers(theme as ThemeName);

    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  }

  /**
   * Apply theme CSS variables to DOM
   */
  private static applyThemeToDOM(theme: "light" | "dark" | ThemeName): void {
    if (typeof document === "undefined") return;

    const resolvedTheme =
      typeof theme === "string" && theme !== "system"
        ? theme
        : this.resolveTheme(theme as ThemeName);
    const config = this.themeConfig[resolvedTheme as "light" | "dark"];
    if (!config) return;

    // Apply colors
    if (config.colors) {
      Object.entries(config.colors).forEach(([key, value]) => {
        if (value) {
          document.documentElement.style.setProperty(
            `--color-${key}`,
            value as string,
          );
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
  static getTheme(): ThemeName {
    return this.currentTheme;
  }

  /**
   * Toggle between light and dark theme
   */
  static toggle(): ThemeName {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Cycle through all available themes: light -> dark -> system -> light
   */
  static cycle(): ThemeName {
    const themes: ThemeName[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Get all available themes
   */
  static getAvailableThemes(): ThemeName[] {
    return ["light", "dark", "system"];
  }

  /**
   * Check if system prefers light mode
   */
  static prefersLight(): boolean {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /**
   * Check if system prefers dark mode
   */
  static prefersDark(): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /**
   * Listen for theme changes
   */
  static onChange(callback: (theme: ThemeName) => void): () => void {
    this.observers.add(callback);

    // Return unsubscribe function
    return () => {
      this.observers.delete(callback);
    };
  }

  /**
   * Notify all observers of theme change
   */
  private static notifyObservers(theme: ThemeName): void {
    this.observers.forEach((callback) => callback(theme));
  }

  /**
   * Enable transitions when changing themes
   */
  static enableTransitions(): void {
    document.documentElement.classList.add("theme-transition");
  }

  /**
   * Disable transitions when changing themes
   */
  static disableTransitions(): void {
    document.documentElement.classList.remove("theme-transition");
  }

  /**
   * Deep merge objects (for config merging)
   */
  private static deepMerge(target: any, source: any): any {
    const output = { ...target };

    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = this.deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  /**
   * Check if value is object
   */
  private static isObject(item: any): boolean {
    return item && typeof item === "object" && !Array.isArray(item);
  }
}

export default ThemeManager;

// Auto-initialize on module load
if (typeof document !== "undefined") {
  ThemeManager.init();
}

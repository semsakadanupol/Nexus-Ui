/**
 * NEXUS-UI THEME MANAGER
 * Centralized theme management system
 */

type Theme = "light" | "dark" | "high-contrast" | "system";
type ThemeChangeCallback = (theme: Theme | "light" | "dark") => void;

interface ThemeManagerConfig {
  storageKey?: string;
  htmlElement?: HTMLElement;
  preferenceMediaQuery?: string;
}

class ThemeManagerClass {
  private currentTheme: Theme = "light";
  private storageKey: string = "nexus-theme";
  private htmlElement: HTMLElement;
  private preferenceMediaQuery: string = "(prefers-color-scheme: dark)";
  private listeners: ThemeChangeCallback[] = [];
  private mediaQueryList: MediaQueryList | null = null;

  constructor(config?: ThemeManagerConfig) {
    this.storageKey = config?.storageKey || "nexus-theme";
    this.htmlElement = config?.htmlElement || document.documentElement;
    this.preferenceMediaQuery =
      config?.preferenceMediaQuery || "(prefers-color-scheme: dark)";

    this.init();
  }

  /**
   * Initialize theme manager
   */
  private init(): void {
    // Load saved theme from storage
    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;

    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Use system preference
      this.detectSystemTheme();
    }

    // Listen for system theme changes
    this.mediaQueryList = window.matchMedia(this.preferenceMediaQuery);
    this.mediaQueryList.addListener((e) => {
      if (this.currentTheme === "system") {
        this.detectSystemTheme();
      }
    });
  }

  /**
   * Detect system theme preference
   */
  private detectSystemTheme(): void {
    const isDark = window.matchMedia(this.preferenceMediaQuery).matches;
    const theme: Theme = isDark ? "dark" : "light";
    this.applyTheme(theme);
  }

  /**
   * Apply theme to HTML element
   */
  private applyTheme(theme: Theme | "light" | "dark"): void {
    // Handle 'system' theme
    if (theme === "system") {
      this.detectSystemTheme();
      return;
    }

    this.htmlElement.setAttribute("data-theme", theme);
    this.currentTheme = theme as Theme;

    // Notify listeners
    this.notifyListeners(theme);
  }

  /**
   * Notify all listeners of theme change
   */
  private notifyListeners(theme: Theme | "light" | "dark"): void {
    this.listeners.forEach((callback) => {
      callback(theme as any);
    });
  }

  /**
   * Set active theme
   */
  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);

    // Save to storage if not system
    if (theme !== "system") {
      localStorage.setItem(this.storageKey, theme);
    } else {
      localStorage.removeItem(this.storageKey);
    }
  }

  /**
   * Get current theme
   */
  public getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get effective theme (resolved if system)
   */
  public getEffectiveTheme(): "light" | "dark" {
    if (this.currentTheme === "system") {
      return window.matchMedia(this.preferenceMediaQuery).matches
        ? "dark"
        : "light";
    }
    return this.currentTheme as "light" | "dark" | "high-contrast" as any;
  }

  /**
   * Toggle between light and dark themes
   */
  public toggle(): void {
    const current = this.getEffectiveTheme();
    this.setTheme(current === "light" ? "dark" : "light");
  }

  /**
   * Get available themes
   */
  public getAvailable(): Theme[] {
    return ["light", "dark", "high-contrast", "system"];
  }

  /**
   * Register theme change listener
   */
  public onChange(callback: ThemeChangeCallback): () => void {
    this.listeners.push(callback);

    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  /**
   * Clear all listeners
   */
  public clearListeners(): void {
    this.listeners = [];
  }

  /**
   * Get CSS variable value
   */
  public getCSSVariable(name: string): string {
    const value = getComputedStyle(this.htmlElement).getPropertyValue(name);
    return value.trim();
  }

  /**
   * Set CSS variable
   */
  public setCSSVariable(name: string, value: string): void {
    this.htmlElement.style.setProperty(name, value);
  }

  /**
   * Get theme configuration
   */
  public getConfig(): Record<string, any> {
    return {
      storageKey: this.storageKey,
      currentTheme: this.currentTheme,
      effectiveTheme: this.getEffectiveTheme(),
      available: this.getAvailable(),
    };
  }

  /**
   * Destroy theme manager and clean up
   */
  public destroy(): void {
    if (this.mediaQueryList) {
      this.mediaQueryList.removeListener(() => {});
    }
    this.clearListeners();
  }
}

// Export singleton instance
export const ThemeManager = new ThemeManagerClass();

// Also export class for custom instances
export { ThemeManagerClass };

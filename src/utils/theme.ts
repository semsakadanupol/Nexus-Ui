/**
 * Theme Manager - Handle theme switching and persistence
 */

export type Theme = "light" | "dark" | "high-contrast";

export class ThemeManager {
  private static readonly STORAGE_KEY = "nexus-theme";
  private static readonly THEME_ATTR = "data-theme";
  private static currentTheme: Theme = "light";
  private static observers: Set<(theme: Theme) => void> = new Set();

  /**
   * Initialize theme system
   */
  static init(): void {
    const saved = this.getSavedTheme();
    const preferred = this.getPreferredTheme();
    const theme = saved || preferred || "light";
    this.setTheme(theme);
  }

  /**
   * Get saved theme from localStorage
   */
  private static getSavedTheme(): Theme | null {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
      if (saved && ["light", "dark", "high-contrast"].includes(saved)) {
        return saved;
      }
    }
    return null;
  }

  /**
   * Get system preferred theme
   */
  private static getPreferredTheme(): Theme {
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
  static setTheme(theme: Theme): void {
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
  static getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Toggle between light and dark theme
   */
  static toggle(): Theme {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Cycle through all themes
   */
  static cycle(): Theme {
    const themes: Theme[] = ["light", "dark", "high-contrast"];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Check if system prefers dark mode
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
  static onChange(callback: (theme: Theme) => void): () => void {
    this.observers.add(callback);

    // Return unsubscribe function
    return () => {
      this.observers.delete(callback);
    };
  }

  /**
   * Notify all observers of theme change
   */
  private static notifyObservers(theme: Theme): void {
    this.observers.forEach((callback) => callback(theme));
  }

  /**
   * Apply transitions when changing themes
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
}

// Auto-initialize on module load
if (typeof document !== "undefined") {
  ThemeManager.init();
}

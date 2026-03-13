class ThemeManagerClass {
    constructor(config) {
        this.currentTheme = "light";
        this.storageKey = "nexus-theme";
        this.preferenceMediaQuery = "(prefers-color-scheme: dark)";
        this.listeners = [];
        this.mediaQueryList = null;
        this.storageKey = config?.storageKey || "nexus-theme";
        this.htmlElement = config?.htmlElement || document.documentElement;
        this.preferenceMediaQuery =
            config?.preferenceMediaQuery || "(prefers-color-scheme: dark)";
        this.init();
    }
    init() {
        const savedTheme = localStorage.getItem(this.storageKey);
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
        else {
            this.detectSystemTheme();
        }
        this.mediaQueryList = window.matchMedia(this.preferenceMediaQuery);
        this.mediaQueryList.addListener((e) => {
            if (this.currentTheme === "system") {
                this.detectSystemTheme();
            }
        });
    }
    detectSystemTheme() {
        const isDark = window.matchMedia(this.preferenceMediaQuery).matches;
        const theme = isDark ? "dark" : "light";
        this.applyTheme(theme);
    }
    applyTheme(theme) {
        if (theme === "system") {
            this.detectSystemTheme();
            return;
        }
        this.htmlElement.setAttribute("data-theme", theme);
        this.currentTheme = theme;
        this.notifyListeners(theme);
    }
    notifyListeners(theme) {
        this.listeners.forEach((callback) => {
            callback(theme);
        });
    }
    setTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        if (theme !== "system") {
            localStorage.setItem(this.storageKey, theme);
        }
        else {
            localStorage.removeItem(this.storageKey);
        }
    }
    getTheme() {
        return this.currentTheme;
    }
    getEffectiveTheme() {
        if (this.currentTheme === "system") {
            return window.matchMedia(this.preferenceMediaQuery).matches
                ? "dark"
                : "light";
        }
        return this.currentTheme;
    }
    toggle() {
        const current = this.getEffectiveTheme();
        this.setTheme(current === "light" ? "dark" : "light");
    }
    getAvailable() {
        return ["light", "dark", "high-contrast", "system"];
    }
    onChange(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter((cb) => cb !== callback);
        };
    }
    clearListeners() {
        this.listeners = [];
    }
    getCSSVariable(name) {
        const value = getComputedStyle(this.htmlElement).getPropertyValue(name);
        return value.trim();
    }
    setCSSVariable(name, value) {
        this.htmlElement.style.setProperty(name, value);
    }
    getConfig() {
        return {
            storageKey: this.storageKey,
            currentTheme: this.currentTheme,
            effectiveTheme: this.getEffectiveTheme(),
            available: this.getAvailable(),
        };
    }
    destroy() {
        if (this.mediaQueryList) {
            this.mediaQueryList.removeListener(() => { });
        }
        this.clearListeners();
    }
}
export const ThemeManager = new ThemeManagerClass();
export { ThemeManagerClass };
//# sourceMappingURL=theme.js.map
/**
 * Arbitrary/Dynamic Utility Generator
 * Build dynamic CSS utility classes with any unit (px, rem, vh, vw, em, %)
 * Similar to Tailwind's arbitrary values: w-[100px] → w-100px
 */
export type Unit = "px" | "rem" | "vh" | "vw" | "em" | "pct";
export interface ArbitraryOptions {
    value: number | string;
    unit?: Unit;
}
/**
 * Generate arbitrary width class
 * @example
 * width(100, 'px') → 'w-100px'
 * width(50, 'vh') → 'w-50vh'
 */
export declare function width(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary height class
 * @example
 * height(200, 'px') → 'h-200px'
 * height(100, 'vh') → 'h-100vh'
 */
export declare function height(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary gap/spacing class
 * @example
 * gap(16, 'px') → 'gap-16px'
 * gap(2, 'rem') → 'gap-2rem'
 */
export declare function gap(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary font-size class
 * @example
 * fontSize(18, 'px') → 'text-18px'
 * fontSize(1.2, 'rem') → 'text-1.2rem'
 */
export declare function fontSize(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary border-radius class
 * @example
 * borderRadius(8, 'px') → 'rounded-8px'
 * borderRadius(1, 'rem') → 'rounded-1rem'
 */
export declare function borderRadius(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary max-width class
 * @example
 * maxWidth(1200, 'px') → 'max-w-1200px'
 * maxWidth(80, 'rem') → 'max-w-80rem'
 */
export declare function maxWidth(value: number | string): string;
/**
 * Generate arbitrary min/max height classes
 * @example
 * minHeight(100, 'px') → 'min-h-100px'
 * maxHeight(500, 'px') → 'max-h-500px'
 */
export declare function minHeight(value: number | string, unit?: Unit): string;
export declare function maxHeight(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary z-index class
 * @example
 * zIndex(10) → 'z-10'
 * zIndex(100) → 'z-100'
 */
export declare function zIndex(value: number): string;
/**
 * Generate arbitrary line-height class
 * @example
 * lineHeight(24, 'px') → 'leading-24px'
 * lineHeight(1.5, 'rem') → 'leading-1.5rem'
 */
export declare function lineHeight(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary letter-spacing class
 * @example
 * letterSpacing(1, 'px') → 'tracking-1px'
 * letterSpacing(0.1, 'rem') → 'tracking-0.1rem'
 */
export declare function letterSpacing(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary word-spacing class
 * @example
 * wordSpacing(2, 'px') → 'space-2px'
 * wordSpacing(0.5, 'rem') → 'space-0.5rem'
 */
export declare function wordSpacing(value: number | string, unit?: Unit): string;
/**
 * Generate arbitrary opacity class
 * @example
 * opacity(50) → 'opacity-50'
 * opacity(75) → 'opacity-75'
 */
export declare function opacity(value: number): string;
/**
 * Generate padding classes (all sides and directional)
 * @example
 * padding(16, 'px') → 'p-16px'
 * paddingTop(12, 'px') → 'pt-12px'
 */
export declare function padding(value: number | string, unit?: Unit): string;
export declare function paddingX(value: number | string, unit?: Unit): string;
export declare function paddingY(value: number | string, unit?: Unit): string;
export declare function paddingTop(value: number | string, unit?: Unit): string;
export declare function paddingBottom(value: number | string, unit?: Unit): string;
export declare function paddingLeft(value: number | string, unit?: Unit): string;
export declare function paddingRight(value: number | string, unit?: Unit): string;
/**
 * Generate margin classes (all sides and directional)
 * @example
 * margin(8, 'px') → 'm-8px'
 * marginBottom(24, 'px') → 'mb-24px'
 */
export declare function margin(value: number | string, unit?: Unit): string;
export declare function marginX(value: number | string, unit?: Unit): string;
export declare function marginY(value: number | string, unit?: Unit): string;
export declare function marginTop(value: number | string, unit?: Unit): string;
export declare function marginBottom(value: number | string, unit?: Unit): string;
export declare function marginLeft(value: number | string, unit?: Unit): string;
export declare function marginRight(value: number | string, unit?: Unit): string;
/**
 * Generate positioning classes
 * @example
 * positionTop(50, 'px') → 'top-50px'
 * positionTop(50, 'vh') → 'top-50vh'
 */
export declare function positionTop(value: number | string, unit?: Unit): string;
export declare function positionRight(value: number | string, unit?: Unit): string;
export declare function positionBottom(value: number | string, unit?: Unit): string;
export declare function positionLeft(value: number | string, unit?: Unit): string;
/**
 * Utility class for chainable arbitrary builder
 * @example
 * new ArbitraryBuilder()
 *   .width(100, 'px')
 *   .height(50, 'vh')
 *   .gap(2, 'rem')
 *   .build() → 'w-100px h-50vh gap-2rem'
 */
export declare class ArbitraryBuilder {
    private classes;
    width(value: number | string, unit?: Unit): this;
    height(value: number | string, unit?: Unit): this;
    gap(value: number | string, unit?: Unit): this;
    fontSize(value: number | string, unit?: Unit): this;
    borderRadius(value: number | string, unit?: Unit): this;
    maxWidth(value: number | string): this;
    minHeight(value: number | string, unit?: Unit): this;
    maxHeight(value: number | string, unit?: Unit): this;
    zIndex(value: number): this;
    padding(value: number | string, unit?: Unit): this;
    margin(value: number | string, unit?: Unit): this;
    opacity(value: number): this;
    /**
     * Add custom class to chain
     */
    add(...customClasses: string[]): this;
    /**
     * Build final class string
     */
    build(): string;
    /**
     * Get classes array
     */
    toArray(): string[];
    /**
     * Clear builder
     */
    clear(): this;
}
/**
 * Quick helper to build class strings
 * @example
 * cx(width(100), height(50), 'flex', 'items-center')
 */
export declare function cx(...classes: (string | undefined | null | false)[]): string;
declare const _default: {
    width: typeof width;
    height: typeof height;
    gap: typeof gap;
    fontSize: typeof fontSize;
    borderRadius: typeof borderRadius;
    maxWidth: typeof maxWidth;
    minHeight: typeof minHeight;
    maxHeight: typeof maxHeight;
    zIndex: typeof zIndex;
    lineHeight: typeof lineHeight;
    letterSpacing: typeof letterSpacing;
    wordSpacing: typeof wordSpacing;
    opacity: typeof opacity;
    padding: typeof padding;
    paddingX: typeof paddingX;
    paddingY: typeof paddingY;
    paddingTop: typeof paddingTop;
    paddingBottom: typeof paddingBottom;
    paddingLeft: typeof paddingLeft;
    paddingRight: typeof paddingRight;
    margin: typeof margin;
    marginX: typeof marginX;
    marginY: typeof marginY;
    marginTop: typeof marginTop;
    marginBottom: typeof marginBottom;
    marginLeft: typeof marginLeft;
    marginRight: typeof marginRight;
    positionTop: typeof positionTop;
    positionRight: typeof positionRight;
    positionBottom: typeof positionBottom;
    positionLeft: typeof positionLeft;
    ArbitraryBuilder: typeof ArbitraryBuilder;
    cx: typeof cx;
};
export default _default;
//# sourceMappingURL=arbitrary.d.ts.map
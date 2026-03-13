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
export function width(value: number | string, unit: Unit = "px"): string {
  return `w-${value}${unit}`;
}

/**
 * Generate arbitrary height class
 * @example
 * height(200, 'px') → 'h-200px'
 * height(100, 'vh') → 'h-100vh'
 */
export function height(value: number | string, unit: Unit = "px"): string {
  return `h-${value}${unit}`;
}

/**
 * Generate arbitrary gap/spacing class
 * @example
 * gap(16, 'px') → 'gap-16px'
 * gap(2, 'rem') → 'gap-2rem'
 */
export function gap(value: number | string, unit: Unit = "px"): string {
  return `gap-${value}${unit}`;
}

/**
 * Generate arbitrary font-size class
 * @example
 * fontSize(18, 'px') → 'text-18px'
 * fontSize(1.2, 'rem') → 'text-1.2rem'
 */
export function fontSize(value: number | string, unit: Unit = "px"): string {
  return `text-${value}${unit}`;
}

/**
 * Generate arbitrary border-radius class
 * @example
 * borderRadius(8, 'px') → 'rounded-8px'
 * borderRadius(1, 'rem') → 'rounded-1rem'
 */
export function borderRadius(
  value: number | string,
  unit: Unit = "px",
): string {
  return `rounded-${value}${unit}`;
}

/**
 * Generate arbitrary max-width class
 * @example
 * maxWidth(1200, 'px') → 'max-w-1200px'
 * maxWidth(80, 'rem') → 'max-w-80rem'
 */
export function maxWidth(value: number | string): string {
  if (typeof value === "string" && value.includes("rem")) {
    return `max-w-${value}`;
  }
  return `max-w-${value}px`;
}

/**
 * Generate arbitrary min/max height classes
 * @example
 * minHeight(100, 'px') → 'min-h-100px'
 * maxHeight(500, 'px') → 'max-h-500px'
 */
export function minHeight(value: number | string, unit: Unit = "px"): string {
  return `min-h-${value}${unit}`;
}

export function maxHeight(value: number | string, unit: Unit = "px"): string {
  return `max-h-${value}${unit}`;
}

/**
 * Generate arbitrary z-index class
 * @example
 * zIndex(10) → 'z-10'
 * zIndex(100) → 'z-100'
 */
export function zIndex(value: number): string {
  return `z-${value}`;
}

/**
 * Generate arbitrary line-height class
 * @example
 * lineHeight(24, 'px') → 'leading-24px'
 * lineHeight(1.5, 'rem') → 'leading-1.5rem'
 */
export function lineHeight(value: number | string, unit: Unit = "px"): string {
  return `leading-${value}${unit}`;
}

/**
 * Generate arbitrary letter-spacing class
 * @example
 * letterSpacing(1, 'px') → 'tracking-1px'
 * letterSpacing(0.1, 'rem') → 'tracking-0.1rem'
 */
export function letterSpacing(
  value: number | string,
  unit: Unit = "px",
): string {
  return `tracking-${value}${unit}`;
}

/**
 * Generate arbitrary word-spacing class
 * @example
 * wordSpacing(2, 'px') → 'space-2px'
 * wordSpacing(0.5, 'rem') → 'space-0.5rem'
 */
export function wordSpacing(value: number | string, unit: Unit = "px"): string {
  return `space-${value}${unit}`;
}

/**
 * Generate arbitrary opacity class
 * @example
 * opacity(50) → 'opacity-50'
 * opacity(75) → 'opacity-75'
 */
export function opacity(value: number): string {
  const normalized = Math.min(100, Math.max(0, value));
  return `opacity-${normalized}`;
}

/**
 * Generate padding classes (all sides and directional)
 * @example
 * padding(16, 'px') → 'p-16px'
 * paddingTop(12, 'px') → 'pt-12px'
 */
export function padding(value: number | string, unit: Unit = "px"): string {
  return `p-${value}${unit}`;
}

export function paddingX(value: number | string, unit: Unit = "px"): string {
  return `px-${value}${unit}`;
}

export function paddingY(value: number | string, unit: Unit = "px"): string {
  return `py-${value}${unit}`;
}

export function paddingTop(value: number | string, unit: Unit = "px"): string {
  return `pt-${value}${unit}`;
}

export function paddingBottom(
  value: number | string,
  unit: Unit = "px",
): string {
  return `pb-${value}${unit}`;
}

export function paddingLeft(value: number | string, unit: Unit = "px"): string {
  return `pl-${value}${unit}`;
}

export function paddingRight(
  value: number | string,
  unit: Unit = "px",
): string {
  return `pr-${value}${unit}`;
}

/**
 * Generate margin classes (all sides and directional)
 * @example
 * margin(8, 'px') → 'm-8px'
 * marginBottom(24, 'px') → 'mb-24px'
 */
export function margin(value: number | string, unit: Unit = "px"): string {
  return `m-${value}${unit}`;
}

export function marginX(value: number | string, unit: Unit = "px"): string {
  return `mx-${value}${unit}`;
}

export function marginY(value: number | string, unit: Unit = "px"): string {
  return `my-${value}${unit}`;
}

export function marginTop(value: number | string, unit: Unit = "px"): string {
  return `mt-${value}${unit}`;
}

export function marginBottom(
  value: number | string,
  unit: Unit = "px",
): string {
  return `mb-${value}${unit}`;
}

export function marginLeft(value: number | string, unit: Unit = "px"): string {
  return `ml-${value}${unit}`;
}

export function marginRight(value: number | string, unit: Unit = "px"): string {
  return `mr-${value}${unit}`;
}

/**
 * Generate positioning classes
 * @example
 * positionTop(50, 'px') → 'top-50px'
 * positionTop(50, 'vh') → 'top-50vh'
 */
export function positionTop(value: number | string, unit: Unit = "px"): string {
  return `top-${value}${unit}`;
}

export function positionRight(
  value: number | string,
  unit: Unit = "px",
): string {
  return `right-${value}${unit}`;
}

export function positionBottom(
  value: number | string,
  unit: Unit = "px",
): string {
  return `bottom-${value}${unit}`;
}

export function positionLeft(
  value: number | string,
  unit: Unit = "px",
): string {
  return `left-${value}${unit}`;
}

/**
 * Utility class for chainable arbitrary builder
 * @example
 * new ArbitraryBuilder()
 *   .width(100, 'px')
 *   .height(50, 'vh')
 *   .gap(2, 'rem')
 *   .build() → 'w-100px h-50vh gap-2rem'
 */
export class ArbitraryBuilder {
  private classes: string[] = [];

  width(value: number | string, unit: Unit = "px"): this {
    this.classes.push(width(value, unit));
    return this;
  }

  height(value: number | string, unit: Unit = "px"): this {
    this.classes.push(height(value, unit));
    return this;
  }

  gap(value: number | string, unit: Unit = "px"): this {
    this.classes.push(gap(value, unit));
    return this;
  }

  fontSize(value: number | string, unit: Unit = "px"): this {
    this.classes.push(fontSize(value, unit));
    return this;
  }

  borderRadius(value: number | string, unit: Unit = "px"): this {
    this.classes.push(borderRadius(value, unit));
    return this;
  }

  maxWidth(value: number | string): this {
    this.classes.push(maxWidth(value));
    return this;
  }

  minHeight(value: number | string, unit: Unit = "px"): this {
    this.classes.push(minHeight(value, unit));
    return this;
  }

  maxHeight(value: number | string, unit: Unit = "px"): this {
    this.classes.push(maxHeight(value, unit));
    return this;
  }

  zIndex(value: number): this {
    this.classes.push(zIndex(value));
    return this;
  }

  padding(value: number | string, unit: Unit = "px"): this {
    this.classes.push(padding(value, unit));
    return this;
  }

  margin(value: number | string, unit: Unit = "px"): this {
    this.classes.push(margin(value, unit));
    return this;
  }

  opacity(value: number): this {
    this.classes.push(opacity(value));
    return this;
  }

  /**
   * Add custom class to chain
   */
  add(...customClasses: string[]): this {
    this.classes.push(...customClasses);
    return this;
  }

  /**
   * Build final class string
   */
  build(): string {
    return this.classes.join(" ");
  }

  /**
   * Get classes array
   */
  toArray(): string[] {
    return [...this.classes];
  }

  /**
   * Clear builder
   */
  clear(): this {
    this.classes = [];
    return this;
  }
}

/**
 * Quick helper to build class strings
 * @example
 * cx(width(100), height(50), 'flex', 'items-center')
 */
export function cx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default {
  width,
  height,
  gap,
  fontSize,
  borderRadius,
  maxWidth,
  minHeight,
  maxHeight,
  zIndex,
  lineHeight,
  letterSpacing,
  wordSpacing,
  opacity,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  positionTop,
  positionRight,
  positionBottom,
  positionLeft,
  ArbitraryBuilder,
  cx,
};

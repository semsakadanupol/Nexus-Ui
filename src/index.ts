/**
 * NEXUS-UI MAIN EXPORT
 * Exports all components, utilities, and types
 */

// Components
export { Modal } from "./components/Modal";
export { Navbar } from "./components/Navbar";
export { Carousel } from "./components/Carousel";
export { Dropdown } from "./components/Dropdown";
export { Tooltip } from "./components/Tooltip";
export { Accordion } from "./components/Accordion";
export { Tabs } from "./components/Tabs";
export { Offcanvas } from "./components/Offcanvas";

// Utilities
export { ThemeManager } from "./utils/theme";
export {
  on,
  off,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  query,
  queryAll,
  styles,
  attr,
  trigger,
} from "./utils/dom";
export { debounce, throttle, once } from "./utils/events";

// Types
export type { ComponentOptions, ComponentEventMap } from "./types";

// Version
export const VERSION = "0.0.2";

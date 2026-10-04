import type { CSSProperties } from "react";

/** Allows CSS custom properties (e.g. `--i`) in a style prop without casting at every call site. */
export const css = (vars: Record<string, string | number>) =>
  vars as CSSProperties;

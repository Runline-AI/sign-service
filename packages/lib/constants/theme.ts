import type { TCssVarsSchema } from '../types/css-vars';

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * KEEP THIS FILE IN SYNC WITH `packages/ui/styles/theme.css`.
 *
 * These are the light-mode default values for the CSS custom properties
 * defined under `:root` in the theme stylesheet, exposed here as hex strings
 * so they can be used as defaults for colour-picker UI components and other
 * places that don't render through CSS variables.
 *
 * If you change a value in `theme.css`, update it here too. There is NO
 * automated check linking the two files; they have drifted historically
 * and will drift again unless you update both.
 *
 * Computed via `colord({ h, s, l }).toHex()` — see the inline HSL comments
 * for the source-of-truth values from `theme.css`.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
export const DEFAULT_BRAND_COLORS = {
  background: '#fafafa', // 0 0% 98%
  foreground: '#0a0a0b', // 240 4.8% 4.1%
  muted: '#f6f6f7', // 240 5.9% 96.7%
  mutedForeground: '#5b5b63', // 240 4.2% 37.3%
  popover: '#ffffff', // 0 0% 100%
  popoverForeground: '#0a0a0b', // 240 4.8% 4.1%
  card: '#ffffff', // 0 0% 100%
  cardBorder: '#d8d8dd', // 240 6.8% 85.7%
  cardForeground: '#0a0a0b', // 240 4.8% 4.1%
  fieldCard: '#f8ebfe', // 281.1 90.5% 95.9%
  fieldCardBorder: '#c75cf9', // 280.9 92.9% 66.9%
  fieldCardForeground: '#0a0a0b', // 240 4.8% 4.1%
  widget: '#f7f7f7', //                  0 0% 97%
  widgetForeground: '#f2f2f2', //        0 0% 95%
  border: '#d8d8dd', // 240 6.8% 85.7%
  input: '#b6b6bd', // 240 5% 72.7%
  primary: '#0a0a0b', // 240 4.8% 4.1%
  primaryForeground: '#ffffff', // 0 0% 100%
  secondary: '#f6f6f7', // 240 5.9% 96.7%
  secondaryForeground: '#0a0a0b', // 240 4.8% 4.1%
  accent: '#f8e4ff', // 284.4 100% 94.7%
  accentForeground: '#0a0a0b', // 240 4.8% 4.1%
  destructive: '#ff0000', //             0 100% 50%
  destructiveForeground: '#f8fafc', //   210 40% 98%
  ring: '#c75cf9', // 280.9 92.9% 66.9%
  warning: '#e1cb05', //                 54 96% 45%
  envelopeEditorBackground: '#fafafa', // 0 0% 98%
  // `cardBorderTint` is intentionally excluded from the colour-picker UI:
  // unlike the rest of these tokens it is consumed via `rgb(var(--token))`
  // (not `hsl(...)`) and stored as raw RGB triplets in `theme.css`. It does
  // not flow through `toNativeCssVars` and is not user-customisable from the
  // branding form. `radius` is a length, not a colour, so it lives in
  // `DEFAULT_BRAND_RADIUS` below.
} as const satisfies Record<keyof Omit<TCssVarsSchema, 'radius' | 'cardBorderTint'>, string>;

export const DEFAULT_BRAND_RADIUS = '0.875rem';

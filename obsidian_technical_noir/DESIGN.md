---
name: Obsidian Technical Noir
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e2e2eb'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e2e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#111319'
  on-background: '#e2e2eb'
  surface-variant: '#33343b'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
This design system is engineered for power users, developers, and knowledge architects who thrive in high-focus environments. It evokes the focused solitude of a high-end code editor combined with the sophisticated depth of modern knowledge management tools. 

The brand personality is **Precise, Intellectual, and Heroic**. It utilizes a mix of **Minimalism** and **Glassmorphism** to create a sense of infinite digital space. While the primary interface remains understated to prioritize content, "Heroic" flair is injected through vibrant accent colors and meticulous iconography, signaling moments of achievement, verification, and high-value data.

## Colors
The palette is rooted in a "Deep Charcoal" foundation to minimize eye strain and maximize contrast.
- **Base (#0f1117):** The canvas color. Total matte black is avoided to allow for subtle depth layering.
- **Electric Purple (#a855f7):** The primary action color, used for interactive states and brand highlights.
- **Neon Emerald (#10b981):** Reserved exclusively for "Verified," "Success," and "System Ready" statuses.
- **Gold/Amber (#f59e0b):** Used for "Heroic" elements—achievements, premium features, and critical data points that require immediate attention.

## Typography
The typographic system creates a hierarchy of technical clarity. **Inter** provides high legibility for prose and headings, while **JetBrains Mono** is utilized for data points, metadata, and "Heroic" labels to lean into the code-editor aesthetic. 

Small caps and increased letter spacing should be applied to technical labels to distinguish them from standard body text. For mobile, scale all headlines down by one tier (e.g., `headline-lg` becomes `headline-md` size).

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy within a modular framework. 
- **Desktop:** 12-column grid with tight 16px gutters to maintain a "technical" and compact density.
- **Sidebars:** Utilize fixed-width left and right rails (typically 240px) to mimic the Obsidian workspace layout.
- **Sectioning:** Sections are divided by thin 1px borders rather than wide gaps, creating a "pane-based" interface.
- **Rhythm:** Spacing follows a strict 4px base unit (4, 8, 12, 16, 24, 32, 48, 64).

## Elevation & Depth
Depth is communicated through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.
- **Level 0 (Canvas):** #0f1117.
- **Level 1 (Panes/Cards):** #161b22 with a 1px border (#ffffff at 8% opacity).
- **Level 2 (Overlays/Modals):** Glassmorphism effect using `backdrop-filter: blur(12px)` and a background color of `rgba(22, 27, 34, 0.8)`.
- **Heroic Elevation:** Only used for Gold/Amber elements, a subtle outer glow (`0 0 15px rgba(245, 158, 11, 0.2)`) can be applied to give the impression of light emission.

## Shapes
The shape language is sharp and disciplined. We use **Soft (0.25rem)** rounding for standard components to maintain a modern feel without losing the "technical" edge.
- **Standard Radius:** 4px (inputs, small buttons, chips).
- **Container Radius:** 8px (cards, panes).
- **Extreme Radius:** 0px is used for tab systems to emphasize the "pane" connection to the header.

## Components
- **Buttons:** 
  - *Primary:* Electric Purple background, white text, 4px radius.
  - *Ghost:* No background, 1px white (8% alpha) border, JetBrains Mono font.
- **Heroic Badges:** JetBrains Mono font, Amber background or border, used for high-status achievements.
- **Verified Status:** Small Emerald Green checkmark with a subtle "pulse" animation in high-priority views.
- **Input Fields:** Deep charcoal background (#090b0f), 1px border that glows Electric Purple on focus.
- **Glass Panes:** Used for floating sidebars or command palettes; must use backdrop blur to maintain readability over complex data.
- **Lists:** High-density, separated by 1px horizontal lines. Hover states should use a subtle gray highlight (`rgba(255, 255, 255, 0.03)`).
- **Data Points:** Always rendered in JetBrains Mono to ensure numerical alignment and a "pro" look.
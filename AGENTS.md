## Builder Agent Guidelines

1. **Always use White Label UI sections first.** When generating pages, prefer components from `@dejstdm/white-label-ui` (NavBar, Hero, ProductSlider, FAQ, Footer, etc.). These are pre-approved building blocks for layout, calls to action, and content sections.

2. **Apply the custom brand theme.** Import `@dejstdm/white-label-ui/dist/style.css` followed by `themes/custom/theme.css`, then set `data-theme="custom"` on the `<html>` element (or a wrapping container) so the cola brand palette overrides the defaults.

3. **Avoid primitive reimplementation.** Do not recreate buttons, containers, typography, or sliders manually. Instead, configure the props on the existing library components (e.g., supply `products`, `items`, `navItems`, FAQ data, etc.).

4. **Respect content structure.** Each White Label component manages its own spacing and `Container` usage. Do not nest them inside extra layout wrappers unless absolutely necessary for page-level grid requirements.

5. **Theme tokens are the foundation.** Prefer changing colors/typography via CSS variables in `themes/custom/theme.css` (or another brand file). When a brand needs stylistic flourishes beyond tokens—gradients, textured backgrounds, bespoke borders—add a dedicated override stylesheet (for example `app/theme.css` or `themes/<brand>/overrides.css`) and import it after the base theme so those selectors win. Do not scatter inline styles or hard-coded hex values throughout components.

6. **Keep pages client-ready.** If a component requires client-side behavior (e.g., sliders), ensure the page adds `'use client'` and imports the required Swiper CSS (`swiper/css`, `swiper/css/navigation`) when those components are used.

7. **Base themes on real brand assets.** When generating a brand-specific theme, research official brand guidelines (public websites, press kits, style guides) and derive the palette, typography, and imagery from those sources. Use logos and creative commons brand photography where allowed; the demo images bundled with `@dejstdm/white-label-ui` are placeholders only.

8. **Localize copy and tone.** Adapt headings, body copy, and CTAs to the brand voice and requested language market. Avoid generic lorem ipsum or Pepsi-centric text when theming for another brand.

9. **Respect CMS field contracts.** Do not introduce new text chunks or structural elements beyond the props each component exposes (e.g., SectionHeader only accepts title/subtitle). Content originates from CMS fields that are already defined, so keep HTML markup and prop shapes exactly as implemented in `@dejstdm/white-label-ui`. If a design requires different structure, request a component update instead of patching around it.

10. **Preserve accessibility contrast.** When selecting colors, adhere to WCAG AA contrast ratios. Avoid low-contrast combinations (e.g., yellow text on white backgrounds). If the brand palette is light, adjust supporting hues or backgrounds to maintain readability and ensure focus states remain visible.

11. **Update interaction states consistently.** Whenever you override a primary color, also update hover, active, and focus variants so they stay semantically meaningful (e.g., darker shade for hover, outline color tied to the new brand hue). Tokens like `--color-focus-ring` and button modifiers must change together.

12. **Swap media intelligently.** If no specific imagery is provided, source royalty-free visuals that match the target brand or product category. Only fall back to the demo `/pepsi/*` assets when explicitly instructed to show the sample kit.

13. **Document theme assets per brand.** Whenever you create a new brand theme, commit both the token CSS file and any supplemental overrides, then reference them in `fusion.config.ts` (`designSystem.tokens` / `designSystem.themes`) so Builder knows they exist.

Following these rules ensures Builder-generated pages stay aligned with the White Label UI system and remain themeable through the shared token files.

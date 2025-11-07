# Builder.io – Design System Setup Guide

## 📁 Repositories

- **Design System:** `white-label-ui-lib`
- **Next.js App (target site):** `wl-next-js-test`

---

## 🧩 File Structure

### Design System (`white-label-ui-lib`)
- Components → `src/components/**`
- Component entrypoint → `src/index.ts`
- Stories & docs → `src/stories/**`
- Design tokens → `src/tokens/**`
- Utilities (non-UI helpers) → `src/utils/**`

### Next.js App (`wl-next-js-test`)
- App pages → `app/**` (Next 13 App Router)
- Shared sections → `src/sections/**`
- Imports from design system via:
  ```ts
  import { NavBar, Hero, Button, Container, Heading, Text, FAQ, Footer } from 'white-label-ui-lib';

### ⚙️ Component Usage Rules
- Import only from the library’s public API (white-label-ui-lib).
- Do not deep import (/components/...).
- Use documented props and variants; no custom props.
- No inline styles or arbitrary Tailwind classes.
- Use Container for layout width and spacing.
- Keep content (copy/images/links) inside the Next.js app; styling lives in the library.

## 🧱 Key Components & Props
### NavBar
``` ts
{
  logoSrc: string,
  links: Array<{ label: string, href: string }>,
  cta?: { label: string, href: string },
  sticky?: boolean
}
```

### Hero
``` ts
{
  title: string,
  eyebrow?: string,
  subtitle?: string,
  media?: { type: 'image'|'video', src: string, alt?: string },
  ctaPrimary?: { label: string, href: string },
  ctaSecondary?: { label: string, href: string },
  mode?: 'fixedHeight'|'viewportHeight'|'minHeight'|'aspectRatioCover'
}
```

### Button
``` ts
{
  variant: 'solid'|'outline'|'text',
  size: 'sm'|'md'|'lg',
  iconLeft?: ReactNode,
  iconRight?: ReactNode,
  disabled?: boolean
}
```
### Heading
``` ts
{
  as?: 'h1'|'h2'|'h3'|'h4',
  variant?: 'display'|'h1'|'h2'|'h3'
}
```

### Text
``` ts
{
  variant?: 'body'|'small'|'label'|'muted',
  as?: 'p'|'span'|'div'
}
```

### FAQ
``` ts
{
  items: Array<{ question: string, answer: string }>
}
```

### Footer
``` ts
{
  links: Array<{ label: string, href: string }>,
  legal?: string
}
```

Use stories in src/stories/ for prop examples.
If code and stories differ, prefer the code.

## 🎨 Theming & Tokens
- Themes use [data-theme="<brand>"] at the <html> or top layout level.
- All color/typography/spacing values come from CSS variables.
- Do not override tokens per page; rely on active theme.

### Color Roles
- `--color-brand-primary`
- `--color-text-primary`
- `--color-surface-background`
- etc.

### Spacing Tokens
- `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`

## Media Guidelines
- Respect aspect ratios:
  - Hero → 16:9, 21:9, 4:3
  - Cards → 1:1, 4:3
  - Portraits → 3:4, 2:3
- Crop or fit via component props (e.g., mode), not inline CSS.

## ♿ Accessibility
- Follow WCAG 2.2 AA.
- Use native interactive elements (Button, NavBar links).
- Focus outlines and contrasts come from the theme.

## 📚 Referencing Repositories

- Use repo + path syntax:
  - "white-label-ui-lib/src/components/Hero/Hero.tsx"
  - "white-label-ui-lib/src/stories/Hero.stories.mdx"
- Generated page files should live in:
  - wl-next-js-test/app/** (for App Router)
  - wl-next-js-test/src/sections/** for reusable sections.

## ✅ Do / ❌ Don’t
- ✅ Use existing components and their documented variants/props.
- ✅ Use Container for page width and vertical rhythm (spacing tokens).
- ✅ Keep content (copy/images/links) in the Next.js app; presentation comes from the library.
- ❌ No inline CSS or ad-hoc Tailwind classes; no deep imports from component internals.
- ❌ Don’t invent new props or variants.
- ❌ Don’t hardcode colors/typography; always rely on tokens.

## 🧠 Example Page Structure
``` tsx
// wl-next-js-test/app/(site)/page.tsx
import { NavBar, Hero, Container, FAQ, Footer } from 'white-label-ui-lib';

export default function HomePage() {
  return (
    <div data-theme="brand-default">
      <NavBar
        logoSrc="/logo.svg"
        links={[
          { label: 'Products', href: '/products' },
          { label: 'About', href: '/about' },
        ]}
        cta={{ label: 'Buy now', href: '/shop' }}
        sticky
      />

      <Hero
        eyebrow="New"
        title="White Label, one system."
        subtitle="Build once, theme for every brand."
        media={{ type: 'image', src: '/hero.jpg', alt: 'Hero image' }}
        mode="aspectRatioCover"
        ctaPrimary={{ label: 'Get started', href: '/get-started' }}
      />

      <Container as="section">
        <FAQ items={[
          { question: 'How does theming work?', answer: 'Via CSS variables on [data-theme].' },
          { question: 'Is AA enforced?', answer: 'Yes, in the design system.' },
        ]} />
      </Container>

      <Footer links={[
        { label: 'Privacy', href: '/privacy' },
        { label: 'Imprint', href: '/imprint' },
      ]} />
    </div>
  );
}
```

## 🧩 Build & Runtime Assumptions
- `white-label-ui-lib` is installed (local workspace or GitHub -dependency).
- Global CSS from tokens/theme is imported once (e.g., `app/globals.-css`).
- Component server/client boundaries follow library definitions.
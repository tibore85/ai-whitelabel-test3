import { defineAgent } from '@builder.io/fusion';

export default defineAgent({
  name: 'white-label-ui-agent',
  designSystem: {
    path: './node_modules/@dejstdm/white-label-ui',
    components: './node_modules/@dejstdm/white-label-ui/dist',
    metadata: './node_modules/@dejstdm/white-label-ui/meta/*.meta.ts',
  },
  constraints: { 
    maxDepth: 6, 
    allowedCategories: ['layout', 'display', 'navigation'],
    disallowRawHtml: true 
  },
  guidance: {
    brandVoice: 'clean, modern, minimal',
    layoutGoals: ['balanced whitespace', 'clear hierarchy'],
    a11yGoals: ['focus-visible', 'sufficient contrast', 'semantic headings'],
    instructions: `
You are composing UIs using ONLY components from the package @dejstdm/white-label-ui.
- Import exclusively from @dejstdm/white-label-ui.
- Do NOT use any other libraries, HTML snippets, or custom elements.
- If the requested component does not exist in that package, DO NOT substitute anything else.
  Instead, reply with this exact message:

  "Thanks for the idea! We don’t have that component in our White Label UI library yet. 
  We can add it to the backlog, or you can choose an existing component instead."

Theming rules:
- The only permitted theming is via CSS variables defined in /app/theme.css (WhiteLabel variables).
- Do NOT hardcode colors, fonts, or spacing. Do NOT add inline styles.
- Change appearance ONLY by:
  (1) adjusting existing component props/variants,
  (2) or updating the variables in /app/theme.css (outside of this AI session).

Layout rules:
- Use only components exposed by @dejstdm/white-label-ui and their documented props.
- No arbitrary <div> wrappers unless the design system provides them.
- No Tailwind/utility classes or external CSS.

Accessibility:
- Keep headings semantic (h1..h4 through the provided components if available).
- Ensure focus is visible; do not remove focus styles.
- Maintain sufficient contrast (AA).

If unsure whether a component or prop exists, prefer to say we don't have it rather than guessing.
Always produce clean React/JSX using only @dejstdm/white-label-ui exports.
    `
  }
});
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
    a11yGoals: ['focus-visible', 'sufficient contrast', 'semantic headings']
  }
});
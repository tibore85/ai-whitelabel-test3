"use client";

import type { JSX } from 'react';
import { NavBar, Hero, ProductSlider, FAQ, Footer } from '@dejstdm/white-label-ui';
import '@dejstdm/white-label-ui/dist/style.css';
import '@dejstdm/white-label-ui/themes/7up/dist/theme.css';
import 'swiper/css';
import 'swiper/css/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Test Components', href: '/test-components', active: true },
  { label: 'Docs', href: 'https://github.com/users/dejstdm/packages/npm/package/white-label-ui' },
  { label: 'Contact', href: 'mailto:labs@example.com' },
];

const productSlides = [
  {
    id: 'classic',
    image: '/pepsi/cans/REG.png',
    imageAlt: 'Pepsi Classic can',
    title: 'Pepsi Classic',
    description: '<p>Balanced sweetness with crisp carbonation built for everyday sipping.</p>',
    buttonLabel: 'View classic',
    buttonHref: '#classic',
  },
  {
    id: 'diet',
    image: '/pepsi/cans/DIET.png',
    imageAlt: 'Pepsi Diet can',
    title: 'Pepsi Diet',
    description: '<p>Zero-sugar refreshment powered by the same bold cola profile.</p>',
    buttonLabel: 'View diet',
    buttonHref: '#diet',
  },
  {
    id: 'mango',
    image: '/pepsi/cans/MANGO.png',
    imageAlt: 'Pepsi Mango can',
    title: 'Pepsi Mango',
    description: '<p>Tropical mango aroma layered over the signature Pepsi bite.</p>',
    buttonLabel: 'View mango',
    buttonHref: '#mango',
  },
  {
    id: 'lime',
    image: '/pepsi/cans/LIME.png',
    imageAlt: 'Pepsi Lime can',
    title: 'Pepsi Lime',
    description: '<p>Zesty citrus twist that keeps tasting sessions bright and lively.</p>',
    buttonLabel: 'View lime',
    buttonHref: '#lime',
  },
];

const faqItems = [
  {
    id: 'install',
    question: 'How do I install the White Label UI kit?',
    answer:
      '<p>Run <code>npm install @dejstdm/white-label-ui</code> plus the required peer dependencies (<code>react</code>, <code>react-dom</code>, and <code>swiper</code>).</p>',
  },
  {
    id: 'styles',
    question: 'Where do the styles live?',
    answer:
      '<p>Import <code>@dejstdm/white-label-ui/dist/style.css</code> once in <code>app/layout.tsx</code>. Themes can be swapped by importing an alternate theme CSS file and setting <code>data-theme</code> on <code>&lt;html&gt;</code>.</p>',
  },
  {
    id: 'sliders',
    question: 'What do slider components need?',
    answer:
      '<p>Product and recipe sliders rely on Swiper. Make sure to import <code>swiper/css</code> and <code>swiper/css/navigation</code> (plus pagination if you use the recipe slider).</p>',
  },
  {
    id: 'cms',
    question: 'Can I feed CMS content into these sections?',
    answer:
      '<p>Yes. Most props accept HTML strings rendered through a WYSIWYG friendly renderer, so you can drop in sanitized CMS content without building primitives.</p>',
  },
];

const footerLinks = [
  { label: 'Storybook', href: 'http://localhost:6006' },
  { label: 'Component Docs', href: 'https://github.com/users/dejstdm/packages/npm/package/white-label-ui' },
  { label: 'Support', href: 'mailto:labs@example.com' },
];

const createSocialIcon = (title: string, letter: string): JSX.Element => (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <text
      x="14"
      y="17"
      textAnchor="middle"
      fontFamily="var(--font-heading, Helvetica, Arial, sans-serif)"
      fontSize="11"
      fill="currentColor"
    >
      {letter}
    </text>
    <title>{title}</title>
  </svg>
);

const footerSocialLinks = [
  {
    name: 'instagram',
    href: 'https://instagram.com/whitelabelui',
    icon: createSocialIcon('Instagram', 'IG'),
  },
  {
    name: 'facebook',
    href: 'https://facebook.com/whitelabelui',
    icon: createSocialIcon('Facebook', 'FB'),
  },
  {
    name: 'tiktok',
    href: 'https://tiktok.com/@whitelabelui',
    icon: createSocialIcon('TikTok', 'TT'),
  },
];

const BrandMark = () => (
  <div className="wl-footer-logo" aria-label="White Label UI">
    <strong>WL Labs</strong>
  </div>
);

export default function TestPage() {
  return (
    <>
      <NavBar logo={<BrandMark />} items={navItems} sticky />

      <Hero
        backgroundImage="/pepsi/images/hero.jpg"
        subheadline="<p>White Label UI Playground</p>"
        headline="Launch-ready PepsiCo sections"
        body="<p>Mix and match hero, slider, and FAQ sections to see how the latest <strong>@dejstdm/white-label-ui</strong> package behaves inside your Next.js app.</p>"
        buttonLabel="View Storybook"
        buttonHref="http://localhost:6006"
      />

      <ProductSlider
        headline="Product slider"
        subheadline="<p>Swipe through flavor variants powered by the updated component API.</p>"
        products={productSlides}
        containerBreakpoint="lg"
        className="wl-section"
      />

      <FAQ
        headline="Implementation FAQs"
        subheadline="<p>Answers to the questions we hear most when onboarding teams to the white-label kit.</p>"
        items={faqItems}
        containerBreakpoint="md"
        className="wl-section"
      />

      <Footer
        logo={<BrandMark />}
        socialLinks={footerSocialLinks}
        links={footerLinks}
        copyright="White Label UI"
        copyrightYear={new Date().getFullYear().toString()}
      />
    </>
  );
}

import type { JSX } from 'react';
import { NavBar, Hero, ProductSlider, TextSection, ImageSection, FAQ, Footer } from '@dejstdm/white-label-ui';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
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

const galleryImages = [
  { id: 'churros', src: '/pepsi/recipes/Churros.jpg', alt: 'Churros' },
  { id: 'meatballs', src: '/pepsi/recipes/Meatballs.jpg', alt: 'Meatballs' },
  { id: 'pancakes', src: '/pepsi/recipes/Pancakes.jpg', alt: 'Pancakes' },
  { id: 'chicken-rice', src: '/pepsi/recipes/ChickenRice.jpg', alt: 'Chicken Rice' },
];

const faqItems = [
  {
    id: 'ingredients',
    question: 'What ingredients are used in Pepsi products?',
    answer: '<p>Each variant uses a unique formula. Please refer to the can label for exact ingredients and nutrition information.</p>',
  },
  {
    id: 'availability',
    question: 'Where can I find these flavors?',
    answer: '<p>Availability varies by region and retailer. Check your local stores or online grocery delivery apps.</p>',
  },
  {
    id: 'storage',
    question: 'How should I store unopened cans?',
    answer: '<p>Store in a cool, dry place away from direct sunlight. Best served chilled.</p>',
  },
];

const BrandMark = (): JSX.Element => (
  <div className="wl-footer-logo" aria-label="White Label UI">
    <strong>WL Labs</strong>
  </div>
);

export default function Home(): JSX.Element {
  return (
    <>
      <NavBar logo={<BrandMark />} items={navItems} sticky />

      <Hero
        backgroundImage="/pepsi/images/hero.jpg"
        subheadline="<p>Bold taste, zero sugar</p>"
        headline="PEPSI MAX"
        body="<p>Maximum taste with no sugar.</p>"
        buttonLabel="Discover more"
        buttonHref="#products"
      />

      <ProductSlider
        id="products"
        headline="Our Drinks"
        subheadline="<p>Pick your flavour</p>"
        products={productSlides}
        containerBreakpoint="lg"
        className="wl-section"
      />

      <TextSection
        id="about"
        headline="Crafted for refreshment"
        subheadline="<p>Great taste, right when you want it</p>"
        text="<p>From classic cola to bold, fruit-forward twists, there’s a Pepsi built for every moment. Enjoy it ice-cold on its own or pair it with your favorite dishes.</p>"
        containerBreakpoint="md"
        className="wl-section"
      />

      <ImageSection
        id="gallery"
        headline="Serve with Pepsi"
        subheadline="<p>Try these favorites</p>"
        images={galleryImages}
        containerBreakpoint="md"
        className="wl-section"
      />

      <FAQ
        id="faq"
        headline="Frequently asked questions"
        subheadline="<p>Quick answers about our drinks</p>"
        items={faqItems}
        containerBreakpoint="md"
        className="wl-section"
      />

      <Footer
        logo={<BrandMark />}
        links={[
          { label: 'Contact', href: '#' },
          { label: 'Privacy', href: '#' },
          { label: 'Cookies', href: '#' },
          { label: 'Terms', href: '#' },
        ]}
        copyright={new Date().getFullYear().toString()}
        copyrightYear={new Date().getFullYear().toString()}
      />
    </>
  );
}

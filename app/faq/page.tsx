"use client";
import type { JSX } from "react";
import { NavBar, Hero, ProductSlider, Footer } from "@dejstdm/white-label-ui";
import laysLogo from "@/public/lays-logo.png";

const navItems = [
  { label: "Snacks", href: "#snacks" },
  { label: "Flavors", href: "#flavors" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "#contact" },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact Lay's", href: "#" },
];

const logoSrc = laysLogo.src;
const logoAlt = "Lay's logo";

const productSlides = [
  {
    id: 'gesalzen',
    image: 'https://www.lays.de/prod/s3fs-public/2023-05/Gesalzen_0.png',
    imageAlt: 'Lay\'s Gesalzen',
    title: 'Lay\'s Gesalzen',
    buttonLabel: 'View product',
    buttonHref: '#gesalzen',
  },
  {
    id: 'ofen-gesalzen',
    image: 'https://www.lays.de/prod/s3fs-public/2025-11/Ofen-Gesalzen_0_0.png',
    imageAlt: 'Lay\'s Ofen-Gesalzen',
    title: 'Lay\'s Ofen-Gesalzen',
    buttonLabel: 'View product',
    buttonHref: '#ofen-gesalzen',
  },
  {
    id: 'pizza-hut',
    image: 'https://www.lays.de/prod/s3fs-public/2023-05/Lays-PizzaHut_0.png',
    imageAlt: 'Lay\'s Pizza Hut',
    title: 'Lay\'s Pizza Hut',
    buttonLabel: 'View product',
    buttonHref: '#pizza-hut',
  },
  {
    id: 'bugles-nacho-cheese',
    image: 'https://www.lays.de/prod/s3fs-public/2023-05/Bugles-NachoCheese_0.png',
    imageAlt: 'Bugles Nacho Cheese',
    title: 'Bugles Nacho Cheese',
    buttonLabel: 'View product',
    buttonHref: '#bugles-nacho-cheese',
  },
];

export default function FAQPage(): JSX.Element {
  return (
    <>
      <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
      <Hero
        headline="Lay's snacks"
        backgroundImage="https://www.lays.de/prod/s3fs-public/2025-06/Lays_UCL_Podolski_MaxProbiert_Black_KV%202.jpg"
      />
      <ProductSlider
        id="products"
        headline="Our Products"
        subheadline="<p>Discover our flavors</p>"
        products={productSlides}
        containerBreakpoint="lg"
        className="wl-section"
      />
      <Footer
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        links={footerLinks}
        copyright="Lay's"
        copyrightYear={new Date().getFullYear().toString()}
      />
    </>
  );
}

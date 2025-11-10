"use client";
import type { JSX } from "react";
import { NavBar, FAQ, Footer } from "@dejstdm/white-label-ui";
import laysLogo from "@/public/lays-logo.png";

const navItems = [
  { label: "Snacks", href: "#snacks" },
  { label: "Flavors", href: "#flavors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const faqItems = [
  {
    id: "ingredients",
    question: "What ingredients are used in Lay's chips?",
    answer:
      "<p>Lay’s chips use simple ingredients like potatoes, vegetable oil, and seasonings. Check each bag for the exact recipe and allergen information.</p>",
  },
  {
    id: "availability",
    question: "Where can I find limited-edition flavors?",
    answer:
      "<p>Limited flavors roll out to select retailers and online partners. Follow Lay’s social channels for the latest drops and availability updates.</p>",
  },
  {
    id: "storage",
    question: "How should I store Lay's chips for maximum freshness?",
    answer:
      "<p>Keep the bag sealed and store it in a cool, dry place. Once opened, use a clip or transfer to an airtight container to preserve crunch.</p>",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact Lay’s", href: "#" },
];

const logoSrc = laysLogo.src;
const logoAlt = "Lay’s logo";

export default function ExamplePageOne(): JSX.Element {
  return (
    <>
      <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
      <FAQ
        id="faq"
        headline="Lay’s fan questions"
        subheadline="<p>Answers about our crisps, flavors, and freshness.</p>"
        items={faqItems}
      />
      <Footer
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        links={footerLinks}
        copyright="Lay’s"
        copyrightYear={new Date().getFullYear().toString()}
      />
    </>
  );
}

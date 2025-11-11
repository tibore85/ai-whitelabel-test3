"use client";
import type { JSX } from "react";
import { NavBar, Hero, Footer } from "@dejstdm/white-label-ui";
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

export default function FAQPage(): JSX.Element {
  return (
    <>
      <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
      <Hero
        headline="Lay's snacks"
        backgroundImage="https://www.lays.fr/prod/s3fs-public/2025-06/banner2%20horrizontal%20copy2.png"
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

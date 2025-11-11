"use client";
import type { JSX } from "react";
import {
  NavBar,
  FAQ,
  Hero,
   ProductSlider,
  Footer,
  RecipeSlider,
  TextSection,
 
} from "@dejstdm/white-label-ui";
import laysLogo from "@/public/lays-logo.png";

const navItems = [
  { label: "Snacks", href: "#snacks" },
  { label: "Recipes", href: "#recipes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
const heroContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
  subheadline: "<p>Lay’s Summer Crunch Tour</p>",
  headline: "Bright, crispy chips for every sunny hang",
  body: "<p>Celebrate the season with limited-run Lay’s flavors, sunshine-ready recipes, and snackable inspiration straight from the Flavor Kitchen.</p>",
  buttonLabel: "Explore flavors",
  buttonHref: "#flavors",
};
const snacksSection = {
  headline: "Snacking pensé pour chaque moment",
  subheadline:
    "<p>La mission de Lay’s est de vous offrir des chips irrésistibles pour égayer vos apéritifs, vos barbecues d’été ou encore accompagner vos pique-niques.</p>",
  text: "<p>Des recettes comme Lay’s Gourmet ou Recette à l’Ancienne associent une texture sur-mesure à chaque assaisonnement, tandis que Lay’s Recette Paysanne offre de grandes chips ondulées, épaisses, terriblement croquantes et au bon goût de pomme de terre. Pour les instants plus légers, adoptez Lay’s Cuites au four : légèrement striées, elles gardent tout le plaisir tout en limitant l’apport en matières grasses.</p>",
};


const productSlides = [
  {
    id: "gourmet",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-09/3168930179146---LAYS-GOURMET-SALT.png",
    imageAlt: "Sachet Lay’s Gourmet Sel de Mer",
    title: "Lay’s Gourmet",
    description:
      "<p>Avec Lay’s Gourmet, nous associons à chaque saveur, la texture qui saura la sublimer au mieux. Lay’s Gourmet, sublimez votre apéritif.</p>",
    buttonLabel: "Découvrir Lay’s Gourmet",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "classique",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-06/LAYS-NATURE-135G_0.png",
    imageAlt: "Paquet Lay’s Classique nature 135g",
    title: "Lay’s Classique",
    description:
      "<p>La mission de Lay’s est de vous offrir des chips irrésistibles pour égayer vos apéritifs, vos barbecues d’été ou vos pique-niques.</p>",
    buttonLabel: "Découvrir Lay’s Classique",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "ancienne",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-06/LAY%27S%20ANCIENNE%20NATURE%20155G%201_0.png",
    imageAlt: "Paquet Lay’s Recette à l’Ancienne nature",
    title: "Lay's Recette à l'Ancienne",
    description:
      "<p>Lay’s Recette à l’Ancienne, ce sont des pommes de terre coupées en fines tranches et cuites doucement pour plus de croustillant.</p>",
    buttonLabel: "Découvrir la Recette à l’Ancienne",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "paysanne",
    image:
      "https://www.lays.fr/prod/s3fs-public/2024-11/05_FR_LAY%27S%20PAYSANNE%20NATURE%20155G_826x826px_0.png",
    imageAlt: "Sachet Lay’s Recette Paysanne nature",
    title: "Lay's Recette Paysanne",
    description:
      "<p>Craquez pour la générosité des chips Lay’s Recette Paysanne : de grandes chips ondulées, épaisses et terriblement croquantes.</p>",
    buttonLabel: "Découvrir la Recette Paysanne",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "cuites-four",
    image:
      "https://www.lays.fr/prod/s3fs-public/2023-08/Lays-cuites-four-NATURE_0.png",
    imageAlt: "Paquet Lay’s Cuites au Four nature",
    title: "Lay's Cuites au four",
    description:
      "<p>Légèrement striées pour plus de croustillance, elles offrent un bon goût de pommes de terre tout en limitant leur apport en matières grasses.</p>",
    buttonLabel: "Découvrir les Cuites au four",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "format-individuel",
    image:
      "https://www.lays.fr/prod/s3fs-public/2024-03/LAY%27S-MPK-SEL-6x25g_0.png",
    imageAlt: "Pack Lay’s format individuel sel",
    title: "Lay's Format Individuel",
    description:
      "<p>Retrouvez vos saveurs préférées en format individuel pour encore plus de plaisir : idéal à emporter pour vos pique-niques et barbecues.</p>",
    buttonLabel: "Découvrir les formats individuels",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "max",
    image:
      "https://www.lays.fr/prod/s3fs-public/2023-08/LAYS-MAX-NATURE_0.png",
    imageAlt: "Paquet Lay’s MAX nature ondulées",
    title: "Lay's MAX",
    description:
      "<p>Lay’s MAX, la gamme de chips ondulées de Lay’s pour un croquant extrême et une gourmandise assumée.</p>",
    buttonLabel: "Découvrir Lay’s MAX",
    buttonHref: "https://www.lays.fr/",
  },
];
const recipeSlides = [
  {
    id: "pork-tenderloin-hoagie",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/Low-Country-Pork-Tenderloin-Hoagie-With-Buttermilk-Mustard-Mayo.jpg?itok=yq0JFb11",
    imageAlt:
      "Low Country Pork Tenderloin Hoagie with Buttermilk Mustard Mayo",
    href: "https://www.lays.com/recipes/low-country-pork-tenderloin-hoagie-buttermilk-mustard-mayo",
  },
  {
    id: "cheesesteak-sliders",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/LAY%27S-Cheddar-and-Sour-Cream-Philly-Cheesesteak-Sliders.jpg.jpg?itok=nXGBpGvm",
    imageAlt:
      "Lay’s Cheddar & Sour Cream Philly Cheesesteak Sliders on tray",
    href: "https://www.lays.com/recipes/lays-cheddar-and-sour-cream-philly-cheesesteak-sliders",
  },
  {
    id: "lemon-dill-cauliflower",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/Lemon-Dill%20Roasted%20Cauliflower.jpg?itok=wukTRPut",
    imageAlt: "Lemon-Dill Roasted Cauliflower served with Lay’s chips",
    href: "https://www.lays.com/recipes/lemon-dill-roasted-cauliflower",
  },
  {
    id: "fudgy-chew-cookies",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/No-Bake-Fudgy-Chew-Cookies.jpg?itok=uogmIH4U",
    imageAlt: "No-Bake Fudgy-Chew Cookies topped with Lay’s crumbs",
    href: "https://www.lays.com/recipes/no-bake-fudgy-chew-cookies",
  },
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
        <Hero
              backgroundImage={heroContent.backgroundImage}
              subheadline={heroContent.subheadline}
              headline={heroContent.headline}
              body={heroContent.body}
              buttonLabel={heroContent.buttonLabel}
              buttonHref={heroContent.buttonHref}
            />

      <TextSection
        id="snacks"
        headline={snacksSection.headline}
        subheadline={snacksSection.subheadline}
        text={snacksSection.text}
      />
     
      <RecipeSlider
        id="recipes"
        headline="Recipes"
        subheadline="<p>These flavorful recipes are guaranteed to make you smile. 😊</p>"
        recipes={recipeSlides}
        headerButtonLabel="View all recipes"
        headerButtonHref="https://www.lays.com/recipes"
      />
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

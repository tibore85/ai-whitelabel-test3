"use client";

import { Hero, Container, SectionHeader, TextSection, ImageSection, Button } from "../../white-label-ui-lib/packages/components-react";
import { Footer } from "../../white-label-ui-lib/packages/components-react/Footer.jsx";

export default function Home() {
  const products = [
    { title: "Pepsi", image: "/pepsi/cans/REG.png" },
    { title: "Pepsi Max", image: "/pepsi/cans/MAX.png" },
    { title: "Diet Pepsi", image: "/pepsi/cans/DIET.png" },
    { title: "Pepsi Lime", image: "/pepsi/cans/LIME.png" },
    { title: "Pepsi Mango", image: "/pepsi/cans/MANGO.png" },
  ];

  const recipes = [
    { title: "Churros", image: "/pepsi/recipes/Churros.jpg" },
    { title: "Meatballs", image: "/pepsi/recipes/Meatballs.jpg" },
    { title: "Pancakes", image: "/pepsi/recipes/Pancakes.jpg" },
    { title: "Chicken Rice", image: "/pepsi/recipes/ChickenRice.jpg" },
  ];

  return (
    <div>
      <Hero
        backgroundImage="/pepsi/images/hero.jpg"
        subheadline="<p>Bold taste, zero sugar</p>"
        headline="PEPSI MAX"
        body="<p>Maximum taste with no sugar.</p>"
        buttonLabel="Discover more"
        buttonHref="#products"
      />

      <section id="products" className="wl-sec">
        <Container breakpoint="xl" padding>
          <SectionHeader
            headline="Our Drinks"
            subheadline="<p>Pick your flavour</p>"
            align="center"
          />
          <div className="pepsi-grid">
            {products.map((p) => (
              <div key={p.title} className="pepsi-card">
                <div className="pepsi-card__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <h3 className="pepsi-card__title">{p.title}</h3>
                <div className="pepsi-card__cta">
                  <Button variant="outline" href="#">Learn more</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="recipes" className="wl-sec">
        <Container breakpoint="xl" padding>
          <SectionHeader
            headline="Serve with Pepsi"
            subheadline="<p>Try these favourites</p>"
            align="center"
          />
          <div className="pepsi-grid pepsi-grid--recipes">
            {recipes.map((r) => (
              <div key={r.title} className="pepsi-card pepsi-card--recipe">
                <div className="pepsi-card__image pepsi-card__image--square">
                  <img src={r.image} alt={r.title} loading="lazy" />
                </div>
                <h3 className="pepsi-card__title">{r.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer
        links={[
          { label: "Contact" },
          { label: "Privacy" },
          { label: "Cookies" },
          { label: "Terms" },
        ]}
        copyright={`© ${new Date().getFullYear()} PEPSI`}
      />
    </div>
  );
}

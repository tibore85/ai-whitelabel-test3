"use client";

import React from 'react';

function Container({ children, className = '', padding = false }) {
  return (
    <div className={`container-wrapper ${className}`} style={{ padding: padding ? '0 24px' : undefined }}>
      {children}
    </div>
  );
}

function Button({ children, href, variant = 'solid' }) {
  const className = `pepsi-button pepsi-button--${variant}`;
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}

function SectionHeader({ headline, subheadline, align = 'center' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {headline && <h2 className="section-header__title">{headline}</h2>}
      {subheadline && (
        <div
          className="section-header__sub"
          dangerouslySetInnerHTML={{ __html: subheadline }}
        />
      )}
    </div>
  );
}

function Hero({ backgroundImage, subheadline, headline, body, buttonLabel, buttonHref }) {
  return (
    <section className="hero">
      {backgroundImage && (
        <div className="hero__background" aria-hidden>
          <img src={backgroundImage} alt="" className="hero__background-image" />
          <div className="hero__overlay" />
        </div>
      )}
      <div className="hero__content">
        <Container padding>
          <div className="hero__text">
            {subheadline && (
              <div className="hero__subheadline" dangerouslySetInnerHTML={{ __html: subheadline }} />
            )}
            {headline && <div className="hero__headline">{headline}</div>}
            {body && <div className="hero__body" dangerouslySetInnerHTML={{ __html: body }} />}
            {buttonLabel && (
              <div className="hero__button-wrapper">
                <Button variant="inverted" href={buttonHref}>{buttonLabel}</Button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}

function Footer({ links = [], copyright }) {
  return (
    <footer className="site-footer">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div className="footer__logo">PEPSI</div>
          <nav className="footer__links">
            {links.map((l, i) => (
              <a key={i} className="footer__link" href={l.href || '#'}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div style={{ marginTop: 18, opacity: 0.9 }}>{copyright}</div>
      </Container>
    </footer>
  );
}

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

      <section id="products" className="wl-sec" style={{ padding: '48px 0' }}>
        <Container padding>
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

      <section id="recipes" className="wl-sec" style={{ padding: '48px 0' }}>
        <Container padding>
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

      <style jsx>{`
        .container-wrapper { max-width: 1140px; margin: 0 auto; }
        .pepsi-button { display:inline-flex; align-items:center; gap:8px; padding:10px 16px; border-radius:8px; text-decoration:none; }
        .pepsi-button--solid { background: var(--color-brand-primary); color: var(--color-brand-on-primary); border: 2px solid var(--color-brand-primary); }
        .pepsi-button--outline { background: transparent; color: var(--color-brand-primary); border: 2px solid var(--color-brand-primary); }
        .pepsi-button--inverted { background: var(--color-brand-on-primary); color: var(--color-brand-primary); border: 2px solid transparent; }
        .section-header { text-align: center; margin-bottom: 24px; }
        .section-header__title { font-size: 28px; margin-bottom:8px; }
        .site-footer { background: #f7f7f7; padding: 24px 0; margin-top: 40px; }
        .footer__logo { font-weight:700; }
        .footer__links { display:flex; gap:12px; }
        .footer__link { color:inherit; }
      `}</style>
    </div>
  );
}

import { getImage } from "astro:assets";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import logo from "../assets/images/logo.png";
import "../styles/Footer.css";

const optLogo = await getImage({ src: logo, width: 480, format: "webp" });

const links = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQ", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Schedule Appointment", href: "https://overtimesportspt.janeapp.com/", external: true },
];

const locations = [
  {
    id: "centennial",
    name: "Centennial",
    street: "327 South Inverness Dr",
    city: "Centennial, CO 80112",
    map: "https://maps.app.goo.gl/Ng3fLwf8KgRr15k29",
  },
  {
    id: "highlands-ranch",
    name: "Highlands Ranch",
    street: "8955 S Ridgeline Blvd #800",
    city: "Highlands Ranch, CO 80129",
    map: "https://maps.app.goo.gl/fQELNxp2jEhLMJP6A",
  },
];

export const Footer = () => (
  <footer className="site-footer" aria-label="Site footer">
    <div className="site-footer__inner">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="/" aria-label="Overtime Sports PT home">
            <img
              className="site-logo"
              src={optLogo.src}
              width={optLogo.options.width}
              height={optLogo.options.height}
              alt="Overtime Sports Physical Therapy and Performance"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="site-footer__description">
            Sports Rehab. Recovery. Performance.
          </p>
          <address className="site-footer__contact">
            <a href="tel:+17207719677">(720) 771-9677</a>
            <a href="mailto:info@overtimesportspt.com">info@overtimesportspt.com</a>
          </address>
          <a
            className="site-footer__social"
            href="https://www.instagram.com/overtimesportspt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Overtime Sports PT on Instagram (opens in a new tab)"
          >
            <span aria-hidden="true"><InstagramIcon /></span>
            Instagram
            <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </div>
        <nav className="site-footer__navigation" aria-labelledby="footer-explore-heading">
          <h2 className="site-footer__heading" id="footer-explore-heading">Explore</h2>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={link.external ? "site-footer__external" : undefined}
                  aria-label={link.external ? `${link.label} (external booking site)` : undefined}
                >
                  {link.label}
                  {link.external && <span aria-hidden="true">{"\u2197"}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {locations.map((location) => (
          <section
            className="site-footer__location"
            aria-labelledby={`footer-${location.id}-heading`}
            key={location.id}
          >
            <h2 className="site-footer__heading" id={`footer-${location.id}-heading`}>
              {location.name}
            </h2>
            <address>
              <a
                href={location.map}
                aria-label={`Get directions to Overtime Sports PT in ${location.name}: ${location.street}, ${location.city}`}
              >
                <span>{location.street}</span>
                <span>{location.city}</span>
                <span className="site-footer__directions">
                  Get Directions <span aria-hidden="true">{"\u2197"}</span>
                </span>
              </a>
            </address>
          </section>
        ))}
      </div>
      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Overtime Sports PT. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

import { motion, useReducedMotion } from "framer-motion";

import { NFLLogo } from "../assets/logos/NFLLogo";
import { NBALogo } from "../assets/logos/NBALogo";
import { MLBLogo } from "../assets/logos/MLBLogo";
import { USATFLogo } from "../assets/logos/USATFLogo";
import { FIFALogo } from "../assets/logos/FIFALogo";
import { CrossFitLogo } from "../assets/logos/CrossFitLogo";
import "../styles/Audience.css";

const audiences = [
  {
    title: "Competitive athletes",
    description: "We take pride in treating high school, collegiate, and professional athletes.",
  },
  {
    title: "Active adults",
    description: "Personalized rehab and performance training for active adults and weekend warriors.",
  },
  {
    title: "Tactical athletes",
    description: "We also support tactical athletes and military personnel returning to work duties.",
  },
];

const leagues = [
  { name: "NFL", Logo: NFLLogo },
  { name: "NBA", Logo: NBALogo },
  { name: "MLB", Logo: MLBLogo },
  { name: "CrossFit", Logo: CrossFitLogo },
  { name: "USATF", Logo: USATFLogo },
  { name: "FIFA", Logo: FIFALogo },
];

export const Brands = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="audience-section" aria-labelledby="audience-heading">
      <div className="audience-section__inner">
        <header className="audience-section__header">
          <p className="block-subtitle">Who we work with</p>
          <h2 id="audience-heading">Built for athletes. Here for you.</h2>
          <p className="audience-section__intro">
            Whether you are a high school athlete, active adult, or weekend warrior,
            we will develop a personalized plan to help you reach your goals.
          </p>
          <p className="audience-section__area">Serving Centennial, Highlands Ranch, and the greater Denver metro area.</p>
        </header>
        <ul className="audience-section__groups" role="list">
          {audiences.map((audience, index) => (
            <motion.li
              key={audience.title}
              initial={reduceMotion ? false : { y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
            >
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </motion.li>
          ))}
        </ul>
        <a className="audience-section__services" href="/services">
          Explore our services <span aria-hidden="true">{"\u2192"}</span>
        </a>
        <div className="audience-section__experience">
          <p>Our clinicians have worked with athletes competing in:</p>
          <div className="brand-logos audience-section__logos" role="list" aria-label="Athlete competition experience">
            {leagues.map(({ name, Logo }) => (
              <div key={name} role="listitem">
                <span className="sr-only">{name}</span>
                <span aria-hidden="true"><Logo /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

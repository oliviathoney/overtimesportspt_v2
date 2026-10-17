import { motion } from "framer-motion";
import { getImage } from "astro:assets";

import "../styles/Practice.css";
import gym from "../assets/images/overtime-gym.jpg";
const optGym = await getImage({ src: gym })

export const AboutOurPractice = () => {
  return (
    <section className="practice-section bg-bgDark2" aria-labelledby="practice-heading">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgNight fill-bgNight"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark2 fill-bgDark2"
          ></path>
        </svg>
      </div>
      <motion.div
        className="practice-section__inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="practice-overview">
          <div>
            <span className="block-subtitle">Built around you</span>
            <h2 id="practice-heading" className="practice-overview__heading">
              About Our Practice
            </h2>
            <div className="space-y-4 text-secondaryText leading-loose">
              <p>
                OVERTIME Sports PT + Performance helps athletes and active individuals recover from injury, build strength, and return to the activities they love.
              </p>
              <p>
                Our physical therapists combine hands-on care with individualized rehab and performance training, giving you the tools to move confidently and stay in the game.
              </p>
              <p>
                Visit our clinics in Centennial and Highlands Ranch, serving the greater Denver metro area.
              </p>
            </div>
          </div>
          <img
            src={optGym.src}
            width={optGym.width}
            height={optGym.height}
            alt="The OVERTIME Sports PT gym with strength equipment and a turf training area."
            className="practice-overview__photo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <section className="practice-locations" aria-labelledby="locations-heading">
          <header className="practice-locations__header">
            <p className="block-subtitle">Visit us</p>
            <h3 id="locations-heading">Our locations</h3>
          </header>
          <div className="practice-locations__layout">
            <div className="practice-locations__cards">
              <a
                className="practice-location"
                href="https://maps.app.goo.gl/Ng3fLwf8KgRr15k29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Centennial</h4>
                <address>327 South Inverness Dr<br />Centennial, CO 80112</address>
                <span className="practice-location__directions">Get directions <span aria-hidden="true">{"\u2197"}</span></span>
              </a>
              <a
                className="practice-location"
                href="https://maps.app.goo.gl/fQELNxp2jEhLMJP6A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Highlands Ranch</h4>
                <address>8955 S Ridgeline Blvd #800<br />Highlands Ranch, CO 80129</address>
                <span className="practice-location__directions">Get directions <span aria-hidden="true">{"\u2197"}</span></span>
              </a>
            </div>
            <iframe
              src="https://snazzymaps.com/embed/704402"
              title="Map of OVERTIME Sports PT clinic locations"
              className="practice-locations__map"
              loading="lazy"
              width="100%"
              height="360"
            />
          </div>
        </section>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgNight fill-bgNight"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark2 fill-bgDark2"
          ></path>
        </svg>
      </div>
    </section>
  );
};

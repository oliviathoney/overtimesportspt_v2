import { useState } from "react";
import { motion } from "framer-motion";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import runnerHome from "../assets/images/runner-home.jpg";
import basketballHome from "../assets/images/basketball-home.png";


const optRunner = await getImage({ src: runnerHome })
const optBasketball = await getImage({
  src: basketballHome,
  width: 800,
  widths: [320, 480, 800],
  format: "webp",
});

export const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-bgDark2 pt-16 pb-8 lg:pt-24 sm:pb-12 z-10"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="home-introduction__layout">
          <div className="min-w-0">
            <div>
              <span className="block-subtitle">Maximize your potential</span>
              <h2 className="mb-3 text-base lg:text-base block-big-title font-Inter">
                Sports Rehab. Recovery. Performance.
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Whether you're recovering from an injury, staying healthy through your season, or pushing toward your next level, Overtime provides individualized sports physical therapy and performance training designed to help you move better, feel better, and stay better.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Sports Injury Rehab</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Injury Prevention and Recovery</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Objective Strength and Movement Testing</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Hands-On Manual Therapy</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Return-to-Sport Testing</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                className="contained-button w-full sm:w-auto min-h-12 px-6 py-3"
                onClick={() => setIsModalOpen(true)}
              >
                TALK TO OUR SPORTS PT
              </button>
            </div>
          </div>
          <div className="home-introduction__photos">
            <img
              src={optRunner.src}
              width={optRunner.width}
              height={optRunner.height}
              alt="A runner competing in a race for their school."
              loading="lazy"
              decoding="async"
            />
            <img
              src={optBasketball.src}
              srcSet={optBasketball.srcSet.attribute}
              sizes="(min-width: 1024px) 22vw, 45vw"
              width={optBasketball.options.width}
              height={optBasketball.options.height}
              alt="A basketball player taking a jump shot while a defender contests."
              style={{ objectPosition: "center top" }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <ConsultationModal source="introduction" setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

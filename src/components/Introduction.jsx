import { useState } from "react";
import { motion } from "framer-motion";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import runnerHome from "../assets/images/runner-home.jpg";
import soccerHome from "../assets/images/soccer-home.jpg";


const optRunner = await getImage({ src: runnerHome })
const optSoccer = await getImage({ src: soccerHome })

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
                SPORTS REHAB. RECOVERY. PERFORMANCE.
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                At Overtime, our Doctor of Physical Therapy offers a unique blend of manual therapy and corrective exercise. Whether you are injured, looking to stay healthy throughout the season or your day-to-day life, or want to take your performance to the next level, we are here to support you throughout your journey! <a className="text-secondaryText block-subtitle" id="address" href="/about">Want to learn more?</a>
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Rehabilitation and recovery</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Injury prevention</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Performance training</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span><a id="address" href="/services">And more!</a></span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button
                className="contained-button w-full sm:w-auto min-h-12 px-6 py-3"
                onClick={() => setIsModalOpen(true)}
                aria-label="Request"
              >
                BOOK A FREE CONSULTATION
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
              src={optSoccer.src}
              width={optSoccer.width}
              height={optSoccer.height}
              alt="A soccer player about to kick the ball to his teammates."
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

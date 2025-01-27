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
      className="w-full bg-bgDark2 -mt-48 mb-8 pt-24 xl:pt-10 sm:mb-24 2xl:-mt-32 z-10"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-8 xl:pl-8">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Maximize your potential</span>
              <h2 className="mb-3 text-base lg:text-base block-big-title font-NotoSerif">
                Rehab, Recover, Perform
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                At OVERTIME Sports Physical Therapy and Performance, our Doctor of Physical Therapy offers a unique approach to health and wellness. Whether you are injured, looking to stay healthy throughout the season or your day-to-day life, or wanting to take your performance to the next level, we are here to support you throughout your journey. <a className="text-secondaryText block-subtitle" id="address" href="/about">Want to learn more?</a>
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
            <div className="flex flex-col gap-2 sm:flex-row mt-8 px-16 justify-center">
              <button
                className="contained-button w-full sm:w-full h-12 mr-0"
                onClick={() => setIsModalOpen(true)}
                aria-label="Request"
              >
                BOOK A FREE CONSULTATION
              </button>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:pl-4">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={optRunner.src}
                  alt="A runner competeing in a race for their school."
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={optSoccer.src}
                  alt="A soccer player about to kick the ball to his teammates."
                  className="rounded-xl  main-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

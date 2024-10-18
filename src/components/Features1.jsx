import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import runnerHome from "../assets/images/runner-home.jpg";
import soccerHome from "../assets/images/soccer-home.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-bgDark2 pt-24 mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-24"
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
              <h2 className="mt-6 mb-3 text-base lg:text-base block-big-title font-NotoSerif">
                Rehab, Recover, Perform
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                At OVERTIME Sports Physical Therapy and Performance, our Doctor of Physical Therapy offers a unique approach to health and wellness.Whether you are injured, looking to stay healthy throughout the season, or wanting to take your game to the next level, we are here to support you throughout your journey.
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
              </ul>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row mt-8 px-16 justify-center">
              <button
                className="contained-button w-full sm:w-full h-12 mr-0"
                onClick={() => setIsModalOpen(true)}
                aria-label="Request"
              >
                Get Started
              </button>
              {/* <button
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
                onClick={() => setIsModalOpen(true)}
                aria-label="Live demo"
              >
                Live demo
              </button> */}
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:pl-4">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={runnerHome.src}
                  alt="Feature image 1"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 1"
                />
              </div>
              {/* <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2.src}
                  alt="Feature image 2"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 2"
                />
              </div> */}
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              {/* <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3.src}
                  alt="Feature image 3"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 3"
                />
              </div> */}
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={soccerHome.src}
                  alt="Feature image 4"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

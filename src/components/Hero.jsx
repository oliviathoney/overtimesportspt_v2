import { useState } from "react";
import { motion } from "framer-motion";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import gym2 from "../assets/images/gym-2.jpg";
import background from "../assets/images/background.jpg";

const optGym = await getImage({ src: gym2 })
const optBG = await getImage({ src: background })

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
      style={{ backgroundImage: `url(${optBG.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div
        className="w-full md:w-[1500px] xl:w-[1500px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold uppercase">
            Discover a new you
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-wide font-NotoSerif uppercase text-primaryText sm:px-8 md:px-2 lg:px-2">
            <h1 className="lg:hidden">DISCOVER</h1>
            <h1 className="lg:hidden">OPTIMIZE</h1>
            <h1 className="lg:hidden">PERFORM</h1>
            <h1 className="hidden lg:inline">Discover <span>&#183;</span> Optimize <span>&#183;</span> Perform</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Bridging the gap between physical therapy and sports performance.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={optGym.src}
              alt="A picture of the OVERTIME Sports Physical Therapy gym containing multiple types of equipment such as dumbells, benches, squat racks and a turf area."
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

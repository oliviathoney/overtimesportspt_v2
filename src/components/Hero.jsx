import { useState } from "react";
import { motion } from "framer-motion";
import { getImage } from "astro:assets";
import DelayedModal from "./DelayedModal";

import { ConsultationModal } from "./ConsultationModal";
import gym2 from "../assets/images/gym-2.jpg";
import background from "../assets/images/background.jpg";
import OT from "../assets/images/OT-9-copy.jpg";
import OTcp from "../assets/images/OT-9.jpg";

const optGym = await getImage({ src: gym2 })
const optBG = await getImage({ src: background })
const optOT = await getImage({ src: OT })
const optOTcp = await getImage({ src: OTcp })

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section
        className="hidden lg:flex w-screen justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
        id="home"
        style={{ backgroundImage: `url(${optOT.src})`, backgroundSize: "fit", backgroundRepeat: "no-repeat" }}
      >
        <div
          className="w-screen flex flex-col justify-left items-start pt-16 md:pt-16 lg:pt-20 text-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondaryColor text-sm sm:text-sm  mb-6 sm:mt-24 mt-12 p-5 pl-20 font-bold uppercase backdrop-blur-lg rounded-lg" style={{ backgroundColor: "#4D734F30" }}>
              THE BEST PHYSICAL THERAPY IN CENTENNIAL / HIGHLANDS RANCH, CO.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="md:w-1/2 xl:w-2/5 text-5xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold uppercase tracking-wide font-LeagueSpartan text-primaryText sm:px-8 md:px-20 lg:px-20">
              <h1>Bridging the gap between physical therapy and sports performance: <br></br><br></br>
                We help people feel better, and stay better.
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-2 px-12 sm:px-20 ">
              DISCOVER - OPTIMIZE - PERFORM
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="w-full mt-10 mb-24 sm:mb-40 justify-center">
              <button
                className="contained-button w-full sm:w-full h-16 mx-20"
                onClick={() => setIsModalOpen(true)}
                aria-label="Get started"
              >
                BOOK A FREE CONSULTATION
              </button>
            </div>
          </motion.div>

          <div className="relative w-screen flex justify-center ">
            <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-8 md:mt-10 lg:mt-30 xl:mt-30 hidden lg:block">
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
        <DelayedModal />
      </section>


      <section
        className="flex lg:hidden w-full justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-0"
        id="home"
        style={{ backgroundImage: `url(${optOTcp.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: "80%", backgroundPositionX: "50%" }}
      >
        <div
          className="w-full backdrop-blur-sm flex flex-col justify-left items-start pt-16 md:pt-16 lg:pt-20 text-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="w-screen text-secondaryColor text-center text-md mt-[75px] p-5 font-bold uppercase backdrop-blur-lg" style={{ backgroundColor: "#4D734F30" }}>
              THE BEST PHYSICAL THERAPY IN CENTENNIAL / HIGHLANDS RANCH, CO.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="w-full text-center text-primaryText py-24">
              <h1 className="font-bold text-5xl tracking-wide  uppercase mx-5">Bridging the gap between physical therapy and sports performance: <br></br><br></br>
                We help people feel better, and stay better.
              </h1>
              <h2 className="text-primaryText text-sm mt-10 px-12 text-center ">
                DISCOVER - OPTIMIZE - PERFORM
              </h2>
              <button
                className="contained-button h-16 mx-auto mt-10 p-10"
                onClick={() => setIsModalOpen(true)}
                aria-label="Get started"
              >
                BOOK A FREE CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
        {isModalOpen && (
          <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
        <DelayedModal />

      </section>
    </div>
  );
};

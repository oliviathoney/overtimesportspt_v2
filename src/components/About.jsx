import { motion } from "framer-motion";
import { useState } from "react";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import gym from "../assets/images/overtime-gym.jpg";
const optGym = await getImage({ src: gym })

export const AboutOurPractice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Where We Are</span>
            <h2 className="mt-2 mb-8 text-5xl lg:text-6xl block-big-title font-NotoSerif">
              About Our Practice
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
              At OVERTIME Sports Physical Therapy and Performance, our commitment to your health and wellness goes beyond the conventional. Led by our experienced Doctor of Physical Therapy, we offer a distinctive and personalized approach to your well-being. Our comprehensive suite of services encompasses not only rehabilitation and recovery but also injury prevention and performance training. Whether you're on the path to recovery, striving to maintain peak health throughout the season, or looking to elevate your athletic performance, we are your dedicated partners throughout this journey.
              <br></br>
              <br></br>
              At OVERTIME, we take immense pride not just in getting you back to your desired activity but also in providing you with the knowledge and tools for sustained well-being. We go the extra mile by educating you on practices that increase longevity, minimize the risk of future injuries, and keep you at the top of your game. Your success is our success, and we're here to empower you with the holistic care and expertise you deserve. Welcome to a new dimension of health and athletic achievement at OVERTIME Sports Physical Therapy and Performance.
              <br></br>
              <br></br>
              OVERTIME Sports PT and Performance services anyone in the Denver metro area, including Highlands Ranch, Centennial, Greenwood Village, Castle Pines, Littleton, Englewood, Cherry Creek, Glendale, Cherry Hills and Castle Rock.

            </p>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 justify-center mx-auto">
            <img
              src={optGym.src}
              alt="A picture of the OVERTIME Sports PT gym containing multiple types of equipement such as dumbells, benches, squat racks and a turf area."
              className="rounded-xl  main-border-gray"
            />
            <div className="pt-16">
              <iframe
                src="https://snazzymaps.com/embed/704402"
                width="100%"
                height="400px"
                className="rounded-xl  main-border-gray"
              >
              </iframe>
              <div className="pt-16 justify-center mx-auto">
                <span className="block-subtitle">VISIT US AT:</span>
                <p className="text-secondaryText leading-loose"><a id="address" href="https://maps.app.goo.gl/Ng3fLwf8KgRr15k29"
                  target="_blank">327 South Inverness Dr, Centennial, CO 80112</a></p>
              </div>
            </div>
          </div>
          {/* <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal.src}
              alt="Feature image"
              className="rounded-xl  main-border-gray"
            />
          </div> */}
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

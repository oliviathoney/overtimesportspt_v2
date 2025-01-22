import { useState } from "react";
import { motion } from "framer-motion";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

import pt from "../assets/images/PT Home.jpg"
import performance from "../assets/images/Performance Home.jpg";
import recovery from "../assets/images/Recovery Home.jpg";

const optPT = await getImage({ src: pt })
const optPerformance = await getImage({ src: performance })
const optRecovery = await getImage({ src: recovery })

export const ServicePreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="w-full flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Get Your Perfect Treatment</span>
              <h2 className="mt-6 mb-6 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
                Services We Offer
              </h2>
              <p className="mb-6 text-secondaryText">
                OVERTIME offers the best cutting-edge techniques to get you to your best self.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-2 mb-8 lg:mb-0">
                <div className="p-4 bg-bgDark3 rounded-3xl">
                  <h3 className="p-4 mb-2 text-xl font-bold font-heading text-primaryText text-center">
                    Physical Therapy
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="rounded">
                      <img
                        src={optPT.src}
                        alt="Dr. Benitez works with a young woman to improve lower body strength through physical therapy."
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                      />
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Physical therapy ensures both short-term recovery and long-term success in
                    an athlete's journey towards peak performance.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Optimize strength, flexibility, and mobility</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Enhance performance while preventing setbacks</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Gain insight into proper techniques for sustained physical health</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-2 mb-8 lg:mb-0">
                <div className="p-4 bg-bgDark3 rounded-3xl">
                  <h3 className="p-4 mb-2 text-xl font-bold font-heading text-primaryText text-center">
                    Performance Training
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="rounded">
                      <img
                        src={optPerformance.src}
                        alt="Dr. Benitez monitors a client performing weighted deadlifts in the OVERTIME gym."
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                      />
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    With a focus on injury prevention and personalized guidance, athletes gain a competitive
                    edge, unlocking their full potential and achieving new heights in their sports.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Tailored workouts</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Enhance strength, agility, and sport-specific skills</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Optimize athletic potential, improve endurance, speed, and overall performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-2 mb-8 lg:mb-0">
                <div className="p-4 bg-bgDark3 rounded-3xl">
                  <h3 className="p-4 mb-2 text-xl font-bold font-heading text-primaryText text-center">
                    Recovery
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="rounded">
                      <img
                        src={optRecovery.src}
                        alt="Dr. Benitez massages a client's shoulder to assist in muscular recovery."
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                      />
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Prioritizing recovery is a strategic investment for athletes, ensuring
                    sustained peak performance and long-term success in their sports.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Accelerated muscle repair, reduced fatigue, and injury prevention</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Enhance focus and resilience</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Optimize physical healing and mental well-being</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 justify-center mx-auto">
                <p className="text-secondaryText block-subtitle leading-loose">
                  <a id="address" href="/services">View More</a>
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

import pt from "../assets/images/PT Home.jpg"
import performance from "../assets/images/Performance Home.jpg";
import recovery from "../assets/images/Recovery Home.jpg";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export const Pricing = () => {
  // const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleChange = () => {
  //   setIsMonthly(!isMonthly);
  // };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
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
              {/* <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Yearly</div>
                </div>
              </label> */}
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
                        src={pt.src}
                        alt="Feature image 1"
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                        aria-label="Feature image 1"
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


                  {/* <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button> */}
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
                        src={performance.src}
                        alt="Feature image 1"
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                        aria-label="Feature image 1"
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
                  {/* <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button> */}
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
                        src={recovery.src}
                        alt="Feature image 1"
                        className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                        aria-label="Feature image 1"
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
                  {/* <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button> */}
                </div>
              </div>
              {/* <a className="pt-8 mx-auto justify-center block-subtitle text-secondaryColor" id="address" href="/about">View More</a> */}
              <div className="pt-8 justify-center mx-auto">
                <p className="text-secondaryText block-subtitle leading-loose">
                  <a id="address" href="/about">View More</a>
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

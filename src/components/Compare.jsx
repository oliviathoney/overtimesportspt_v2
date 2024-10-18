import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

import dryneedling from "../assets/images/Dry Needling.jpeg";
import performance from "../assets/images/Performance.jpg";
import recovery from "../assets/images/Recovery.jpeg";

export const Compare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <span className="block-subtitle">Traditional PT VS. OVERTIME PT</span>
              <h2 className="mt-2 mb-6 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
                See The Difference
              </h2>
              <p className="mb-6 text-secondaryText">
                So many physical therapy clinics, why choose OVERTIME?
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/2 px-2 mb-8 lg:mb-0">
                <div className="p-4 bg-bgDark3 rounded-3xl">
                  <h3 className="p-4 mb-2 text-2xl font-bold font-heading text-primaryText text-center font-NotoSerif">
                    Traditional Physical Therapy
                  </h3>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        30-minute sessions with a technician or assistant with minimal to no discussion with the doctor
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        You are 1 out of 4 patients seen simultaneously
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        One size fits all treatment approach
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        Insurance dictates your treatment approach
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        Insurance caps the number of sessions you are allowed with PT
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/2 px-2 mb-8 lg:mb-0">
                <div className="p-4 bg-primaryColor rounded-3xl">
                  <h3 className="p-4 mb-2 text-2xl font-bold font-heading text-primaryText text-center font-NotoSerif">
                    OVERTIME Physical Therapy
                  </h3>


                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        One on one sessions with a Doctor of Physical Therapy
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        Sport Physical Therapist specializing in athletes to allow for an appropriate return to sport plan of care
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        Long term results
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        You and your physical therapist develop your plan of care
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        Performance and Recovery sessions to keep you at the top of your game all season and year long
                      </span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>
                        You and your goals are the priority
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 pt-32">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryColor font-NotoSerif uppercase">
                DISCOVER
              </h2>
              <p className="mb-6 text-secondaryText">
                During your first appointment, we will conduct a thorough sport specific assessment to DISCOVER functional movement dysfunctions and impairments looking at the body globally.
              </p>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryColor font-NotoSerif uppercase">
                OPTIMIZE
              </h2>
              <p className="mb-6 text-secondaryText">
                We will correct and OPTIMIZE dysfunctions, injuries and impairments with experienced physical therapists using evidence-based rehabilitation.
              </p>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryColor font-NotoSerif uppercase">
                PERFORM
              </h2>
              <p className="mb-6 text-secondaryText">
                Return to sport or activity pain free using our individualized plan tailored for you to PERFORM and exceed peak performance in your sport or activity.
              </p>
            </div>
          </div>
        </motion.div>
      </div >
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section >
  );
};

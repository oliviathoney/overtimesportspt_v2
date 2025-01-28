import { useState } from "react";
import { motion } from "framer-motion";

import { ConsultationModal } from "./ConsultationModal";


export const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="w-full flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
                Get Started at the Best Physical Therapy Facility in South Denver
              </h2>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <ol className="items-center sm:flex mx-auto w-4/5 lg:w-full">
                <li className="relative mb-6 sm:mb-0 lg:w-1/3 h-[250px]">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-highlightColor sm:ring-8 ring-gray-900 shrink-0">
                      <h1 className="text-primaryText font-NotoSerif text-4xl">01</h1>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-5 sm:pe-8">
                    <h3 className="block-subtitle">Schedule a Free Consultation</h3>
                    <p className="text-gray-400">Book a no pressure consultation to discuss your goals, challenges and needs.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0 lg:w-1/3 h-[250px]">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-highlightColor sm:ring-8 ring-gray-900 shrink-0">
                      <h1 className="text-primaryText font-NotoSerif text-4xl">02</h1>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-5 sm:pe-8">
                    <h3 className="block-subtitle">Get Your Personalized Assessment</h3>
                    <p className="text-gray-400">Our Doctor of Physical Therapy will help uncover the root cause of your pain, injury, or performance issue.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0 lg:w-1/3 h-[250px]">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-highlightColor sm:ring-8 ring-gray-900 shrink-0">
                      <h1 className="text-primaryText font-NotoSerif text-4xl">03</h1>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>

                  </div>
                  <div className="mt-5 sm:pe-8">
                    <h3 className="block-subtitle">Start Your Custom Program</h3>
                    <p className="text-gray-400"> Experience tailored solutions designed to help you move better, feel better and stay better.
                    </p>
                  </div>
                </li>
              </ol>
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

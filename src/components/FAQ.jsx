import { useState } from "react";
import { motion } from "framer-motion";

import { ConsultationModal } from "./ConsultationModal";

const FAQData = [
  {
    question: "Do I need physical therapy?",
    answer:
      `
       If you are an athlete or an active individual who has been injured before or wants to take your
      game to the next level, you will benefit from physical therapy. At OVERTIME Sports PT +
      Performance we take pride in not only making you feel better and return to sport, but also
      excelling in your sport. Athletes can benefit from PT all year round, to make sure we are
      addressing any strength impairments, mobility, asymmetries to minimize the risk of injury. So
      whether you need sports rehabilitation to help you with your injury, recovery to make sure you 
      are ready to go for your big event this weekend, or performance to excel your skill, PT at 
      OVERTIME Sports PT + Performance is for you.
      `
  },
  {
    question: "What should I expect in my first session?",
    answer:
      `
      Our Physical Therapists will take you through a comprehensive initial evaluation that will
      consist of a sport specific movement assessment and special tests to get to the root of your
      injuries or impairments. Then we will discuss findings and together we will develop a plan of
      care to get you back to your sport as soon and as safely as possible. We may perform manual
      therapy techniques and corrective therapeutic interventions as well.
      `
  },
  {
    question: "What are our sessions like?",
    answer:
      `
      We will always start with an initial discussion to hear your wins and sticks. At OVERTIME, we
      value assessments. We will assess and reassess so we can celebrate the wins. Typically, we will
      start with hands-on/manual therapy techniques consisting of various tools that we have on site.
      We will then follow up with corrective exercises and movements to address impairments and get
      you back stronger.
      `
  },
  {
    question: "What should I wear?",
    answer:
      "Please wear comfortable and/or athletic clothing.",
  },
  {
    question: "Do you take insurance?",
    answer:
      `
      At OVERTIME Sports PT + Performance we do not accept insurance. If you would like to submit for
      out-of-network benefits, we will provide you with a superbill with the documentation needed for
      reimbursement, based on your insurance provider. Please note that reimbursement rates vary, and
      reimbursement is not guaranteed.
      `
  },
  {
    question: "What type of payments do you accept?",
    answer:
      `
      We accept cash, check, debit card and credit card. We also accept Health Savings Account (HSA)
      payments. We are happy to discuss payment plan options as
      well. It is our policy that payment is made at the time of service.
      `
  },
  {
    question: "Do you only work with athletes?",
    answer:
      `
      At OVERTIME Sports PT + Performance, everyone is an athlete. We would love to work with you
      whether you are a high level athlete or just getting started in your active journey.
      `
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      `
      Please feel free to call or text (469) 274-0232, email us at info@overtimesportspt.com, or use
      the form below.
      `
  },
];

export const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full bg-bgDark2 mb-12 lg:mb-24 pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
          <div className="md:max-w-4xl mx-auto">
            <p className="mb-2 mt-32 block-subtitle text-center">Have any questions?</p>
            <h2 className="mb-16 block-big-title text-center font-NotoSerif">
              Frequently Asked Questions
            </h2>
            <div className="mb-11 flex flex-wrap -m-1">
              {FAQData.map((item, index) => (
                <div className="w-full p-1" key={`${item.question}-${index}`}>
                  <FAQBox
                    title={item.question}
                    content={item.answer}
                    key={`${item.question}-${item.answer}`}
                    defaultOpen={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
};

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

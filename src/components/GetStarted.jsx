import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

const steps = [
  {
    title: "Let's talk.",
    description:
      "Tell us about your goals, challenges, and needs during a free, no-pressure consultation.",
  },
  {
    title: "Find the starting point.",
    description:
      "Work one-on-one with our Doctor of Physical Therapy to understand what's holding you back.",
  },
  {
    title: "Build your comeback.",
    description:
      "Follow a personalized rehab and performance plan built around your life and sport.",
  },
];

export const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="home-roadmap" aria-labelledby="get-started-heading">
      <div className="absolute -top-16" id="pricing" />
      <div className="home-roadmap__inner">
        <div className="home-roadmap__intro">
          <p className="block-subtitle">Three simple steps</p>
          <h2 id="get-started-heading">Your comeback starts here.</h2>
        </div>
        <ol className="home-roadmap__steps" role="list">
          {steps.map((step, index) => (
            <li className="home-roadmap__card" key={step.title}>
              <span className="home-roadmap__number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <span className="home-roadmap__connector" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="home-roadmap__action">
          <button
            type="button"
            className="home-roadmap__button"
            onClick={() => setIsModalOpen(true)}
          >
            Book a free consultation
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";
import "../styles/AboutConsultation.css";

export const AboutConsultation = ({
  heading = "Let's build your comeback.",
  buttonText = "BOOK A FREE CONSULTATION",
  source = "about_cta",
  headingId = "about-consultation-heading",
  description = "Tell us about your goals and what's holding you back. Start with a free, no-pressure consultation.",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="about-consultation" aria-labelledby={headingId}>
        <div className="about-consultation__inner">
          <div>
            <p className="block-subtitle">Your next step</p>
            <h2 id={headingId}>{heading}</h2>
            <p className="about-consultation__description">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="contained-button about-consultation__button"
            onClick={() => setIsModalOpen(true)}
          >
            {buttonText}
          </button>
        </div>
      </section>
      {isModalOpen && (
        <ConsultationModal source={source} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};

import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";
import "../styles/AboutConsultation.css";

export const AboutConsultation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="about-consultation" aria-labelledby="about-consultation-heading">
        <div className="about-consultation__inner">
          <div>
            <p className="block-subtitle">Your next step</p>
            <h2 id="about-consultation-heading">Let's build your comeback.</h2>
            <p className="about-consultation__description">
              Tell us about your goals and what's holding you back. Start with a free, no-pressure consultation.
            </p>
          </div>
          <button
            type="button"
            className="contained-button about-consultation__button"
            onClick={() => setIsModalOpen(true)}
          >
            BOOK A FREE CONSULTATION
          </button>
        </div>
      </section>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};

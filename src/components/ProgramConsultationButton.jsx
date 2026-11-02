import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export const ProgramConsultationButton = ({ label, source, variant = "primary" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`program-button program-button--${variant}`}
        aria-haspopup="dialog"
        onClick={() => setIsOpen(true)}
      >
        {label}
        <span aria-hidden="true">{"\u2197"}</span>
      </button>
      {isOpen && <ConsultationModal source={source} setIsOpen={setIsOpen} />}
    </>
  );
};

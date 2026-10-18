import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "../assets/icons/CloseIcon";
import "../styles/Consultation.css";

export const ConsultationModal = ({ setIsOpen, source = "other" }) => {
  const dialogRef = useRef(null);
  const headingRef = useRef(null);
  const opened = useRef(false);
  const started = useRef(false);
  const submitting = useRef(false);
  const redirectTimer = useRef(null);
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const track = (event) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, {
        cta_source: source,
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    headingRef.current.focus();
    if (!opened.current) {
      track("consultation_opened");
      opened.current = true;
    }
    return () => {
      clearTimeout(redirectTimer.current);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  const close = () => {
    if (!submitting.current) setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const phone = values.get("phone").trim();
    const digits = phone.replace(/\D/g, "");
    const validPhone = /^\+?[\d\s().-]+$/.test(phone) &&
      (/^\d{10}$/.test(digits) || /^1\d{10}$/.test(digits));
    form.elements.phone.setCustomValidity(
      validPhone ? "" : "Enter a 10-digit phone number, with an optional +1 country code.",
    );
    if (!form.reportValidity()) return;

    submitting.current = true;
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/sendConsultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: values.get("firstname").trim(),
          lastname: values.get("lastname").trim(),
          email: values.get("email").trim(),
          phone,
          message: values.get("message").trim(),
          form: "consultation",
          deal: false,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Your request could not be sent. Please try again or call (720) 771-9677.");
      }
    } catch (submissionError) {
      console.error("Consultation submission failed:", submissionError);
      setError("Your request could not be confirmed. Please try again or call (720) 771-9677.");
      submitting.current = false;
      setIsSubmitting(false);
      return;
    }

    track("consultation_submitted");
    let redirected = false;
    const navigate = () => {
      if (redirected) return;
      redirected = true;
      window.location.assign("/thank-you/");
    };
    // Allow the existing Ads conversion to send, without blocking on analytics.
    redirectTimer.current = window.setTimeout(navigate, 1500);
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17580190165/QZyqCIudr98cENXT8b5B",
        event_callback: navigate,
        event_timeout: 1200,
        transport_type: "beacon",
      });
    } else {
      navigate();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="consultation-dialog"
      aria-labelledby={`${id}-heading`}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="consultation-dialog__toolbar">
        <button
          type="button"
          className="consultation-dialog__close"
          aria-label="Close consultation form"
          onClick={close}
          disabled={isSubmitting}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="consultation-dialog__inner">
        <div className="consultation-dialog__intro">
          <p className="consultation-dialog__eyebrow">Your next step</p>
          <h2 id={`${id}-heading`} ref={headingRef} tabIndex={-1}>Let's Talk About Your Goals</h2>
          <p className="consultation-dialog__summary">
            Start with a free, 15-minute phone consultation with a Sports PT.
          </p>
          <ol className="consultation-dialog__steps">
            <li>
              <strong>15-minute phone consultation</strong>
              <span>Talk with a Sports PT about you and your goals.</span>
            </li>
            <li>
              <strong>Initial evaluation</strong>
              <span>Schedule a one-on-one evaluation with a Doctor of Physical Therapy.</span>
            </li>
            <li>
              <strong>Begin your health journey</strong>
              <span>Start your personalized plan.</span>
            </li>
          </ol>
        </div>
        <form
          className="consultation-form"
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          onChange={() => {
            if (!started.current) {
              track("consultation_started");
              started.current = true;
            }
          }}
        >
          <p className="consultation-form__intro">Request your free consultation. All fields are required except your message.</p>
          <fieldset disabled={isSubmitting}>
            <legend className="sr-only">Your contact details</legend>
            <div className="consultation-form__names">
              <div>
                <label htmlFor={`${id}-firstname`}>First name</label>
                <input id={`${id}-firstname`} name="firstname" autoComplete="given-name" maxLength={100} required pattern=".*\S.*" />
              </div>
              <div>
                <label htmlFor={`${id}-lastname`}>Last name</label>
                <input id={`${id}-lastname`} name="lastname" autoComplete="family-name" maxLength={100} required pattern=".*\S.*" />
              </div>
            </div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={254} required />
            <label htmlFor={`${id}-phone`}>Phone</label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              required
              onChange={(event) => event.target.setCustomValidity("")}
            />
            <label htmlFor={`${id}-message`}>Tell us about your goals, injury, or pain <span>(optional)</span></label>
            <textarea id={`${id}-message`} name="message" rows={3} maxLength={2000} aria-describedby={`${id}-privacy`} />
            <p id={`${id}-privacy`} className="consultation-form__privacy">
              Share only what you're comfortable sending through this form. Please don't include detailed medical records. <a href="/privacy-policy">Privacy policy</a>
            </p>
          </fieldset>
          {error && <p className="consultation-form__error" role="alert">{error}</p>}
          <button type="submit" className="consultation-form__submit" disabled={isSubmitting}>
            {isSubmitting ? "SENDING YOUR REQUEST..." : "REQUEST MY FREE CONSULTATION"}
          </button>
          <p className="consultation-form__note" role="status">
            {isSubmitting ? "Please wait while we confirm your request." : "This requests a consultation; it does not reserve an appointment."}
          </p>
        </form>
      </div>
    </dialog>
  );
};

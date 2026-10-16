import { useState } from "react";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import OT from "../assets/images/OT-9-copy.jpg";
import OTcp from "../assets/images/OT-9.jpg";

const optOT = await getImage({ src: OT, quality: 95 });
const optOTcp = await getImage({ src: OTcp, quality: 95 });

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="home-hero" id="home" aria-labelledby="hero-heading">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              Physical therapy in Centennial / Highlands Ranch, CO.
            </p>
            <h1 id="hero-heading">True Sports Physical Therapy. Driven by Data. Defined by Detail.</h1>
            <p className="home-hero__description">
              Individualized sports rehabilitation and performance training built around objective testing, expert clinical care, and the demands of your sport.
            </p>
            <p className="home-hero__tagline">Discover - Optimize - Perform</p>
            <div className="home-hero__actions">
              <button
                type="button"
                className="home-hero__consult"
                onClick={() => setIsModalOpen(true)}
              >
                Book a free consultation
              </button>
              <a className="home-hero__call" href="tel:+17207719677">
                Call (720) 771-9677
              </a>
            </div>
            <a
              className="home-hero__reviews"
              href="https://maps.app.goo.gl/Ng3fLwf8KgRr15k29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="home-hero__stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" fill="currentColor">
                    <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
                  </svg>
                ))}
              </span>
              <span>5.0 &middot; 192+ Google reviews</span>
            </a>
          </div>
        </div>
        <picture className="home-hero__photo">
          <source media="(min-width: 1024px)" srcSet={optOT.src} />
          <img
            src={optOTcp.src}
            width={optOTcp.width}
            height={optOTcp.height}
            alt="An Overtime physical therapist guiding an athlete through a resistance-band exercise."
            fetchPriority="high"
          />
        </picture>
      </section>
      <div className="home-mobile-bar" role="group" aria-label="Quick contact">
        <button
          type="button"
          className="home-hero__consult"
          onClick={() => setIsModalOpen(true)}
        >
          Free consult
        </button>
        <a className="home-hero__call" href="tel:+17207719677">
          Call
        </a>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};

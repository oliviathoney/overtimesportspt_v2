import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import edward from "../assets/images/edward.JPG";
import manualtherapy from "../assets/images/manualtherapy.jpeg";

export const MeetTheTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-bgDark2 mb-12 lg:mb-24 pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                <img
                  src={edward.src}
                  alt="Dr. Edward Profile Pic"
                  className="rounded-xl  main-border-gray"
                />
              </div>
              {/* <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={manualtherapy.src}
                alt="Manual Therapy"
                className="rounded-xl main-border-gray"
              />
            </div> */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto mt-5 lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">About Our Practice</span>
              <h2 className="mt-2 mb-8 text-5xl lg:text-6xl block-big-title font-NotoSerif">
                Meet The Team
              </h2>
              <p className="mb-12 text-secondaryText leading-loose">
                Dr. Edward Benitez PT, DPT is originally from Dallas, Texas. Edward played various sports throughout his life at a competitive level. He became interested in physical therapy after experiencing the positive results he received throughout his personal injury rehabilitation.
                <br></br>
                <br></br>
                With a unique blend of manual therapy and strength training, Edward has been able to elevate athletic performance by addressing injury and movement dysfunction. He continues to develop a passion for sports medicine and enjoys helping athletes of all ages through their rehabilitation process.
                <br></br>
                <br></br>
                Edward received a Bachelor of Science degree in Exercise Science with a Minor in Psychology from The University of Texas at Arlington. He continued his education at the University of Colorado - Anschutz Medical Campus and received his Doctorate of Physical Therapy.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row mt-8 px-16 justify-center">
              <button
                className="contained-button w-full sm:w-full h-12 mr-0"
              >
                <a href="/resources/#request">
                  Request Appointment with Dr. Benitez
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {
        isModalOpen && (
          <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )
      }
    </section >
  );
}

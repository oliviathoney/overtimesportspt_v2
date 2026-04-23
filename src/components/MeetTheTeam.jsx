import { motion } from "framer-motion";
import { useState } from "react";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import edward from "../assets/images/edward.JPG";
import john_b from "../assets/images/john_b.jpeg"

const profiles = [
  {
    id: 0,
    image: await getImage({ src: edward }),
    name: 'Edward Benitez',
    position: 'Founder, Physical Therapist',
    bio: `Dr. Edward Benitez is originally from Dallas, Texas. Edward played various sports throughout his life at a competitive level. He became interested in physical therapy after experiencing the positive results he received throughout his personal injury rehabilitation.

With a unique blend of manual therapy and strength training, Edward has been able to help individuals return to their sport and athletic performance by addressing athletic injury and movement dysfunction. He continues to develop a passion for sports medicine and enjoys helping athletes of all ages throughout their rehabilitation process. He has worked with professional athletes in the NFL, MLB, NBA, XFL, SRA, USATF, Pro Crossfit, and military personnel.

Edward received a Bachelor of Science degree in Exercise Science with a Minor in Psychology from The University of Texas at Arlington. He continued his education at the University of Colorado - Anschutz Medical Campus and received his Doctorate of Physical Therapy.

`
  },
  {
    id: 1,
    image: await getImage({ src: john_b }),
    name: 'John Bunnell',
    position: 'Physical Therapist',
    bio: `John is originally from San Diego, California, and earned his Doctorate of Physical Therapy from Midwestern University. He has experience working with athletes at all levels, including professional (NFL, MLB, NBA), Division I, and youth athletes across a variety of sports.
John specializes in ACL rehabilitation, with a focus on restoring confidence and helping athletes safely and successfully return to sport. He utilizes a data-driven approach, incorporating force plate and sport science testing, and is certified in running gait analysis to guide individualized treatment and performance progression.

In addition to his clinical work, John has a strong background in strength and conditioning. He has developed sport-specific and in-season training programs, including for a nationally ranked high school lacrosse team. As a former track and field and soccer athlete, he understands the demands of sport firsthand and continues to train with a focus on strength, speed, and power development.`
  },
]

export const MeetTheTeam = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full bg-bgDark2 mb-12 lg:mb-24 pt-32">
      <p className="block-subtitle mx-auto text-center pt-16">About Our Practice</p>
      <h2 className="mt-2 text-5xl lg:text-6xl block-big-title font-NotoSerif text-center">
        Meet The Team
      </h2>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="flex overflow-x-auto gap-12 p-6 mx-auto items-center">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex-shrink-0 w-64 cursor-pointer rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center p-4">
                <img
                  src={profile.image.src}
                  alt={profile.name}
                  className={`w-52 h-52 rounded-full mb-3 ${expandedId === profile.id && 'border-8 border-primaryColor'
                    }`}
                />
                <h2 className="text-xl font-semibold text-gray-100">{profile.name}</h2>
                <p className="text-gray-400">{profile.position}</p>
                <button
                  className={` w-1/2 mt-2 h-8 ${expandedId === profile.id ? 'contained-button-reverse-clicked' : 'contained-button-reverse'}`}
                  aria-label="Learn More"
                  onClick={() => handleCardClick(profile.id)}
                >
                  <a href="#" className="text-xs">Learn More</a>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="hidden lg:flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        {expandedId != null &&
          <p className="w-2/3 mx-auto text-secondaryText leading-loose text-center bg-gradient-to-br from-[#7274F320] from-25% to-[#7274F305] to-90% rounded-lg p-5">
            {profiles[expandedId].bio}
          </p>
        }
      </div>
      {/* MOBILE VERSION */}
      <div className="lg:hidden items-center mx-auto">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex-shrink-0 cursor-pointer rounded-2xl transition-all duration-300 mx-auto"
          >
            <div className="flex flex-col items-center text-center py-4">
              <img
                src={profile.image.src}
                alt={profile.name}
                className={`w-52 h-52 rounded-full mb-3 ${expandedId === profile.id && 'border-8 border-primaryColor'
                  }`}
              />
              <h2 className="text-xl font-semibold text-gray-100">{profile.name}</h2>
              <p className="text-gray-400">{profile.position}</p>
              <button
                className={` w-1/2 mt-2 h-8 ${expandedId === profile.id ? 'contained-button-reverse-clicked' : 'contained-button-reverse'}`}
                aria-label="Learn More"
                onClick={() => handleCardClick(profile.id)}
              >
                <a href="#" className="text-xs">Learn More</a>
              </button>
              {expandedId === profile.id &&
                <p className="w-11/12 mx-auto p-2 text-secondaryText leading-loose text-center mt-5 bg-gradient-to-br from-[#7274F320] from-25% to-[#7274F305] to-90% rounded-lg">
                  {profiles[expandedId].bio}
                </p>
              }
            </div>
          </div>
        ))}
      </div>
    </section >
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import { getImage } from "astro:assets";

import { ConsultationModal } from "./ConsultationModal";
import edward from "../assets/images/edward.JPG";
import macy from "../assets/images/macy.jpg";
import evelyn from "../assets/images/evelyn.jpeg";

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
    image: await getImage({ src: macy }),
    name: 'Macy Scanlan',
    position: 'Physical Therapist',
    bio: `Dr. Macy Scanlan, PT, DPT is from Tampa, Florida, where she did a variety of sports including cross country, track, gymnastics, cheer, dance and lacrosse. Macy is excited to blend her past sports experience with personalized rehabilitation treatments including manual therapy, movement re-education, and activity-focused training to achieve the best optimal outcomes for patients tailored towards their own goals. She is certified in Dry Needling, passionate about strength and conditioning, and experienced with providing care and education to patients of all ages.

    Macy is a “Double Gator” - she graduated  from the University of Florida with her Doctorate of Physical Therapy Degree and a Bachelor of Science Degree in Applied Physiology and Kinesiology with a specialization in exercise physiology. `
  },
  {
    id: 2,
    image: await getImage({ src: evelyn }),
    name: 'Evelyn Brindl',
    position: 'Office Manager',
    bio: `Evelyn (Evie) Brindl is a clinical exercise physiologist with a strong focus on sports rehabilitation and performance optimization, shaped by her background in competitive volleyball. 

    Her experience includes inpatient trauma rehab at Denver Health Hospital, where she worked with spinal cord injuries, traumatic brain injuries, and post-surgical recovery, as well as outpatient therapy at Colorado State University Health Network, assisting in orthopedic care and therapeutic modalities.

    Outside of work, Evelyn loves running with her pup, Red, and hiking in Golden Gate Canyon State Park. She is an avid hockey fan and has recently been immersed in the world of the professional women's hockey league (PWHL).

    Evie will help us with making sure that everything is running smoothly on your end and ours. She has a tremendous amount of experience in health and wellness and brings in such an energetic personality to our team!`
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

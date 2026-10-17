import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { getImage } from "astro:assets";

import "../styles/Team.css";
import edward from "../assets/images/edward.JPG";
import john_b from "../assets/images/john_b.jpeg"
import emily from "../assets/images/emily.jpg"
import kendall from "../assets/images/kendall.jpg"

const profiles = [
  {
    id: 'edward-benitez',
    image: await getImage({ src: edward }),
    imagePosition: 'center top',
    name: 'Edward Benitez',
    position: 'Founder, Physical Therapist',
    bio: `Dr. Edward Benitez is originally from Dallas, Texas. Edward played various sports throughout his life at a competitive level. He became interested in physical therapy after experiencing the positive results he received throughout his personal injury rehabilitation.

With a unique blend of manual therapy and strength training, Edward has been able to help individuals return to their sport and athletic performance by addressing athletic injury and movement dysfunction. He continues to develop a passion for sports medicine and enjoys helping athletes of all ages throughout their rehabilitation process. He has worked with professional athletes in the NFL, MLB, NBA, XFL, SRA, USATF, Pro Crossfit, and military personnel.

Edward received a Bachelor of Science degree in Exercise Science with a Minor in Psychology from The University of Texas at Arlington. He continued his education at the University of Colorado - Anschutz Medical Campus and received his Doctorate of Physical Therapy.

`
  },
  {
    id: 'john-bunnell',
    image: await getImage({ src: john_b }),
    name: 'John Bunnell',
    position: 'Physical Therapist',
    bio: `John is originally from San Diego, California, and earned his Doctorate of Physical Therapy from Midwestern University. He has experience working with athletes at all levels, including professional (NFL, MLB, NBA), Division I, and youth athletes across a variety of sports.
John specializes in ACL rehabilitation, with a focus on restoring confidence and helping athletes safely and successfully return to sport. He utilizes a data-driven approach, incorporating force plate and sport science testing, and is certified in running gait analysis to guide individualized treatment and performance progression.

In addition to his clinical work, John has a strong background in strength and conditioning. He has developed sport-specific and in-season training programs, including for a nationally ranked high school lacrosse team. As a former track and field and soccer athlete, he understands the demands of sport firsthand and continues to train with a focus on strength, speed, and power development.`
  },
  {
    id: 'emily-tully',
    image: await getImage({ src: emily }),
    name: 'Emily Tully',
    position: 'Physical Therapist',
    bio: `Emily is originally from Charlotte, North Carolina. She earned her Bachelor of Science in Human Biology with a minor in Sports Science from North Carolina State University prior to receiving her Doctorate of Physical Therapy from the University of Colorado, Anschutz Medical Campus.

Emily is passionate about helping athletes and active individuals return to the activities they love through individualized, evidence-based rehabilitation. As a former competitive soccer player, she understands the physical and mental demands of injury recovery and returning to sport.

She enjoys helping athletes build confidence throughout the rehabilitation process while optimizing movement, strength, and performance to reduce future injury risk.

Emily has a special interest in working with youth and adolescent athletes and is dedicated to creating an encouraging environment where patients feel empowered to achieve their goals.`
  },
  {
    id: 'kendall-crepeau',
    image: await getImage({ src: kendall }),
    name: 'Kendall Crepeau',
    position: 'Clinic Manager',
    bio: `Kendall is a Colorado native, and went to Colorado State for undergrad in Health and Exercise Science. Growing up, she mostly played soccer and also played softball, basketball, and track & field. Currently, Kendall works for the City of Aurora, overseeing youth programs in recreation centers. In her free time, she enjoys anything outdoors; camping, hiking, and skiing are at the top of my list. She also loves cooking and baking! She is so excited to join the Overtime Family and help Overtime continue to run smoothly to give you an awesome experience. `
  },
]

export const MeetTheTeam = () => {
  const [expandedId, setExpandedId] = useState(null);
  const reduceMotion = useReducedMotion();
  const selectedProfile = profiles.find((profile) => profile.id === expandedId);

  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="team-section__inner">
        <header className="team-section__header">
          <p className="block-subtitle">About our practice</p>
          <h1 id="team-heading">Meet the team.</h1>
          <p className="team-section__intro">
            Get to know the people behind your rehab, recovery, and performance.
          </p>
        </header>
        <div className="team-grid" style={{ "--team-count": profiles.length }}>
          {profiles.map((profile, index) => (
            <motion.article
              key={profile.id}
              className={`team-card${expandedId === profile.id ? " team-card--selected" : ""}`}
              initial={reduceMotion ? false : { y: 14 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : (index % 4) * 0.06 }}
            >
              <button
                type="button"
                className="team-card__button"
                id={`team-trigger-${profile.id}`}
                aria-expanded={expandedId === profile.id}
                aria-controls={expandedId === profile.id ? `team-bio-${profile.id}` : undefined}
                aria-label={`${expandedId === profile.id ? "Close" : "Read"} ${profile.name}'s bio`}
                onClick={() => setExpandedId((current) => current === profile.id ? null : profile.id)}
              >
                <span className="team-card__portrait">
                  <img
                    src={profile.image.src}
                    width={profile.image.width}
                    height={profile.image.height}
                    alt={profile.name}
                    style={{ objectPosition: profile.imagePosition }}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </span>
                <span className="team-card__info">
                  <span className="team-card__name">{profile.name}</span>
                  <span className="team-card__role">{profile.position}</span>
                  <span className="team-card__action">
                    {expandedId === profile.id ? "Close bio" : "Read bio"}
                    <span className="team-card__symbol" aria-hidden="true">
                      {expandedId === profile.id ? "\u2212" : "+"}
                    </span>
                  </span>
                </span>
              </button>
            </motion.article>
          ))}
        </div>
        <AnimatePresence initial={false} mode="wait">
          {selectedProfile && (
            <motion.div
              key={selectedProfile.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              className="team-bio-wrap"
            >
              <section
                className="team-bio"
                id={`team-bio-${selectedProfile.id}`}
                aria-labelledby={`team-bio-heading-${selectedProfile.id}`}
              >
                <div className="team-bio__heading">
                  <p className="block-subtitle">Behind the care</p>
                  <h2 id={`team-bio-heading-${selectedProfile.id}`}>{selectedProfile.name}</h2>
                  <p>{selectedProfile.position}</p>
                </div>
                <div className="team-bio__copy">
                  {selectedProfile.bio.trim().split(/\n\s*\n/).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

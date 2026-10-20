import { motion, useReducedMotion } from "framer-motion";

import "../styles/AboutDifference.css";

const benefits = [
  {
    title: "One-on-One Care",
    description: "Dedicated 60-minute sessions with a Doctor of Physical Therapy.",
    icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM3 21v-2a7 7 0 0 1 11-5.7M16 19l2 2 4-4",
  },
  {
    title: "Objective Testing",
    description: "Measure progress with data\u2014not guesswork\u2014to guide your next step.",
    icon: "M4 20v-5M9 20v-8M14 20v-5M19 20V9M3 11l6-6 5 4 7-7",
  },
  {
    title: "Built for Your Sport",
    description: "Rehab and training tailored to the demands of your sport and your goals.",
    icon: "M7 5H4v14h3V5ZM20 5h-3v14h3V5ZM4 9H2v6h2M20 9h2v6h-2M7 12h10",
  },
  {
    title: "A Team That Knows You",
    description: "Personalized attention, clear communication, and a plan built with you.",
    icon: "M12 21S3 15 3 8.5a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1C21 15 12 21 12 21ZM8 12l2.5 2.5L16 9",
  },
];

const steps = [
  {
    title: "Discover",
    subtitle: "Understand the Athlete.",
    description: "We start with your goals, injury history, and the demands of your sport. Movement assessment and objective testing identify limitations and establish your starting point.",
  },
  {
    title: "Optimize",
    subtitle: "Build With Purpose.",
    description: "Hands-on treatment, progressive strength training, and individualized rehab address limitations, restore function, and prepare your body for the demands ahead.",
  },
  {
    title: "Perform",
    subtitle: "Return With Confidence.",
    description: "Objective reassessments and sport-specific training measure your progress, guide your return to activity, and help you perform at your best.",
  },
];

export const TraditionalVOvertime = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full flex justify-center bg-bgNight relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="about-difference-layout pb-20 pt-12">
        <section className="about-difference" aria-labelledby="about-difference-heading">
          <header className="about-difference__header">
            <p className="block-subtitle">The Overtime approach</p>
            <h2 id="about-difference-heading">See the Difference</h2>
          </header>
          <ul className="about-difference__grid" role="list">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit.title}
                className="about-difference__card"
                initial={reduceMotion ? false : { y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d={benefit.icon} />
                </svg>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.li>
            ))}
          </ul>
        </section>
        <section className="about-journey" aria-labelledby="about-journey-heading">
          <header className="about-journey__header">
            <p className="block-subtitle">Your path forward</p>
            <h2 id="about-journey-heading">Discover. Optimize. Perform.</h2>
            <p className="about-journey__intro">
              A personalized, data-driven approach to sports rehabilitation and performance, built around your goals and the demands of your sport.
            </p>
          </header>
          <ol className="about-journey__steps" role="list">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="about-journey__step"
                initial={reduceMotion ? false : { y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <span className="about-journey__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="about-journey__copy">
                  <h3>{step.title}</h3>
                  <p className="about-journey__subtitle">{step.subtitle}</p>
                  <p>{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>
      </div >
    </section >
  );
};

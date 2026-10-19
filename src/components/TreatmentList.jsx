import { motion, useReducedMotion } from "framer-motion";
import "../styles/Treatments.css";

const categories = [
  {
    title: "Sports Injury Rehab",
    icon: "M8 3h8v5h5v8h-5v5H8v-5H3V8h5V3Z",
    conditions: ["Muscle Strains and Ligament Sprains", "Joint Pain and Dislocations", "Cartilage Pathology"],
  },
  {
    title: "Post Surgical Rehab",
    icon: "M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4ZM12 8v8M8 12h8",
    conditions: ["ACL Reconstruction", "Meniscus Repairs", "Spine, Shoulder, Hip, Ankle and Knee Rehab"],
  },
  {
    title: "Running and Overuse Injuries",
    icon: "M16 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 11l5-3 5 3 5 1M9 8l-2 7 5 2-2 5M7 15l-4 6M14 11l-2 5",
    conditions: ["Runner\u2019s Knee", "Shin Splints", "Bone Stress Reactions and Fractures", "Tendon Pain"],
  },
  {
    title: "Pain and Movement Rehab",
    icon: "M12 3v18M8 5h8M7 9h10M7 13h10M8 17h8M9 21h6",
    conditions: ["Neck and Back Pain", "Joint Pain", "Flexibility and Mobility Restrictions"],
  },
  {
    title: "Athletic Performance",
    icon: "M7 5H4v14h3V5ZM20 5h-3v14h3V5ZM4 9H2v6h2M20 9h2v6h-2M7 12h10",
    conditions: ["Return-to-sport testing & conditioning", "Strength development & imbalances", "Running gait analysis", "Sport-specific training"],
  },
  {
    title: "Movement & Injury Prevention",
    icon: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7.5 12l3 3 6-6",
    conditions: ["Biomechanical & functional movement assessments", "Athletic screening", "Injury prevention"],
  },
];

export const TreatmentList = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="treatments-section" aria-labelledby="treatments-heading">
      <div className="treatments-section__inner">
        <header className="treatments-section__header">
          <p className="block-subtitle">We're here to help</p>
          <h2 id="treatments-heading">What We Treat</h2>
        </header>
        <ul className="treatments-grid" role="list">
          {categories.map((category, index) => (
            <motion.li
              key={category.title}
              className="treatment-card"
              initial={reduceMotion ? false : { y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : (index % 3) * 0.06 }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={category.icon} />
              </svg>
              <h3>{category.title}</h3>
              <ul className="treatment-card__conditions" role="list">
                {category.conditions.map((condition) => <li key={condition}>{condition}</li>)}
              </ul>
            </motion.li>
          ))}
        </ul>
        <aside className="treatments-concussion" aria-labelledby="concussion-heading">
          <span className="treatments-concussion__mark" aria-hidden="true">+</span>
          <div>
            <h3 id="concussion-heading">Concussion management</h3>
            <p>Support for sports-related concussion recovery and a guided return to play.</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

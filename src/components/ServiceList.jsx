import { getImage } from "astro:assets";
import pt from "../assets/images/services/PT.jpg";
import recovery from "../assets/images/services/Recovery.jpg";
import performance from "../assets/images/services/Performance.jpg";
import forcePlates from "../assets/images/services/Force Plates.jpg";
import dryNeedling from "../assets/images/services/Dry Needling.jpg";
import alterG from "../assets/images/services/alterG.png";
import "../styles/Services.css";

const imageOptions = { width: 1000, widths: [320, 480, 800, 1000], format: "webp", quality: 85 };

const services = [
  {
    id: "physical-therapy",
    title: "Sports Physical Therapy",
    description: "Personalized rehab for injury, pain, and post-surgical recovery.",
    image: await getImage({ src: pt, ...imageOptions }),
    alt: "An Overtime physical therapist guiding an athlete through a knee rehabilitation exercise.",
    note: "Education is part of your care: understand your plan, learn how to manage your symptoms, and build confidence beyond your appointments.",
  },
  {
    id: "performance",
    title: "Performance Training",
    description: "Build strength, improve movement, and prepare for the demands of your sport.",
    image: await getImage({ src: performance, ...imageOptions }),
    alt: "An athlete working on strength and performance in the Overtime gym.",
    note: "Individualized training connects your goals with the strength and movement skills your sport requires.",
  },
  {
    id: "recovery",
    title: "Recovery",
    description: "Support your recovery between training sessions and throughout your rehab.",
    image: await getImage({ src: recovery, ...imageOptions }),
    alt: "An Overtime physical therapist working with an athlete on recovery.",
    note: "A tailored approach helps you manage training demands and supports your return to activity.",
  },
];

const groups = [
  {
    id: "testing",
    title: "Objective Testing",
    description: "Know your starting point. Measure your progress.",
    image: await getImage({ src: forcePlates, ...imageOptions }),
    alt: "An athlete jumping above VALD force plates while an Overtime physical therapist observes.",
    caption: "VALD force plate testing",
    imagePosition: "center 75%",
    tools: [
      {
        title: "VALD Force Plates",
        benefit: "Measure how you produce and absorb force.",
        description: "Assess jumping, landing, and side-to-side differences to help guide training and track rehabilitation progress.",
      },
      {
        title: "Dynamo Strength Testing",
        benefit: "Understand your strength beyond how it feels.",
        description: "Measure muscle strength, identify imbalances, and compare results over time to guide your personalized rehab or training plan.",
      },
    ],
  },
  {
    id: "hands-on",
    title: "Hands-On Treatment",
    description: "Targeted support for pain, stiffness, and movement.",
    image: await getImage({ src: dryNeedling, ...imageOptions }),
    alt: "Dry needling with electrical stimulation applied around an athlete's knee.",
    caption: "Functional dry needling",
    imagePosition: "center",
    tools: [
      {
        title: "Functional Dry Needling",
        benefit: "Address muscle tension as part of your rehab.",
        description: "Fine needles target selected muscles to help manage pain and movement limitations. Your physical therapist assesses whether dry needling fits your needs.",
      },
      {
        title: "Joint Manipulation",
        benefit: "Hands-on care for joint stiffness.",
        description: "Targeted manual techniques address joint restrictions and support mobility alongside exercise and your broader treatment plan.",
      },
      {
        title: "Cupping",
        benefit: "Support soft tissue mobility.",
        description: "Suction cups are applied to selected areas as part of hands-on treatment to help address muscle tension and movement restrictions.",
      },
      {
        title: "Instrument-Assisted Soft Tissue Mobilization",
        benefit: "Focused treatment for soft tissue restrictions.",
        description: "Instrument-assisted soft tissue mobilization (IASTM) uses specialized tools to work on areas of soft tissue restriction and support comfortable movement.",
      },
    ],
  },
  {
    id: "movement-recovery",
    title: "Movement & Recovery Support",
    description: "Build capacity with the right level of support.",
    image: await getImage({ src: alterG, ...imageOptions }),
    alt: "An AlterG anti-gravity treadmill with its body-weight support enclosure.",
    caption: "AlterG anti-gravity treadmill",
    imagePosition: "center",
    tools: [
      {
        title: "AlterG Anti-Gravity Treadmill",
        benefit: "Walk or run with less body-weight loading.",
        description: "Adjustable body-weight support reduces the load during walking and running, helping your clinician gradually progress activity after injury or surgery.",
      },
      {
        title: "Blood Flow Restriction Training",
        benefit: "Work on strength with lighter loads.",
        description: "Blood flow restriction (BFR) uses controlled cuff pressure during selected exercises to support strength training when heavier loads are not appropriate. Your clinician screens for suitability and supervises its use.",
      },
      {
        title: "Mobility",
        benefit: "Improve the movement your activities require.",
        description: "Targeted mobility exercises address range-of-motion limitations and help you build control through the movements used in daily life and sport.",
      },
      {
        title: "Compression Therapy",
        benefit: "Support recovery between efforts.",
        description: "Pneumatic compression boots apply controlled pressure to the legs as part of a recovery plan to help manage post-activity soreness and swelling.",
      },
    ],
  },
];

export const ServiceList = () => (
  <>
    <section className="services-overview" aria-labelledby="services-heading">
      <div className="services-container">
        <header className="services-overview__intro">
          <p className="block-subtitle">Centennial &amp; Highlands Ranch, CO</p>
          <h1 id="services-heading">Sports Physical Therapy. Built Around Your Goals.</h1>
          <p className="services-overview__description">
            Recover from injury, build strength, and return to the activities you love
            with individualized sports physical therapy and objective testing.
          </p>
          <p className="services-overview__local">
            Sports rehab, performance training, and recovery for athletes and active adults
            in Centennial, Highlands Ranch, and the Denver metro area.{" "}
            <a href="/about#locations-heading">Find our locations.</a>
          </p>
        </header>
        <ul className="services-overview__cards" aria-label="Ways we can help">
          {services.map((service) => (
            <li key={service.id}>
              <article className="services-card" aria-labelledby={`${service.id}-heading`}>
                <img
                  src={service.image.src}
                  srcSet={service.image.srcSet.attribute}
                  sizes="(min-width: 1200px) 370px, (min-width: 768px) calc((100vw - 88px) / 3), calc(100vw - 32px)"
                  width={service.image.options.width}
                  height={service.image.options.height}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="services-card__body">
                  <h2 id={`${service.id}-heading`}>{service.title}</h2>
                  <p className="services-card__description">{service.description}</p>
                  <p className="services-card__note">{service.note}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section className="services-tools" aria-labelledby="services-tools-heading">
      <div className="services-container">
        <header className="services-tools__intro">
          <p className="block-subtitle">Personalized Care. Purposeful Treatment.</p>
          <h2 id="services-tools-heading">The Tools Behind Your Progress.</h2>
          <p>
            Your plan may combine several approaches. We select the tools that fit
            your needs. You don't have to choose a treatment before getting started.
          </p>
          <p className="services-tools__hint">Explore a treatment to learn more.</p>
        </header>
        <div className="services-tools__groups">
          {groups.map((group) => (
            <section className="services-tool-group" key={group.id} aria-labelledby={`${group.id}-heading`}>
              <figure className="services-tool-group__photo">
                <img
                  src={group.image.src}
                  srcSet={group.image.srcSet.attribute}
                  sizes="(min-width: 1200px) 370px, (min-width: 1024px) calc((100vw - 88px) / 3), calc(100vw - 32px)"
                  width={group.image.options.width}
                  height={group.image.options.height}
                  alt={group.alt}
                  style={{ objectPosition: group.imagePosition }}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{group.caption}</figcaption>
              </figure>
              <header className="services-tool-group__header">
                <h3 id={`${group.id}-heading`}>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              {group.tools.map((tool) => (
                <details className="services-tool" key={tool.title}>
                  <summary>
                    <span>
                      <strong>{tool.title}</strong>
                      <span className="services-tool__benefit">{tool.benefit}</span>
                    </span>
                    <svg className="services-tool__toggle" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5v14" />
                    </svg>
                  </summary>
                  <div className="services-tool__detail"><p>{tool.description}</p></div>
                </details>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  </>
);

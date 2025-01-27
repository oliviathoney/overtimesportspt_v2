import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import { getImage } from "astro:assets";
import { useState } from "react";

import { ConsultationModal } from "./ConsultationModal";

import pt from "../assets/images/services/PT.jpg"
import recovery from "../assets/images/services/Recovery.jpg"
import performance from "../assets/images/services/Performance.jpg"
import mobility from "../assets/images/services/Mobility.jpg"
import dryneedling from "../assets/images/services/Dry Needling.jpg"
import vfp from "../assets/images/services/Force Plates.jpg"
import manipulation from "../assets/images/services/Manipulation.jpg"
import cupping from "../assets/images/services/Cupping.jpg"
import stm from "../assets/images/services/IASTM.jpg"
import bfr from "../assets/images/services/BFR.jpg"
import ni from "../assets/images/services/Near Infrared.jpg"
import education from "../assets/images/services/Education.jpg"
import dst from "../assets/images/services/Dynamo Strength Testing.jpg"
import compression from "../assets/images/services/Compression Therapy.jpg"


const services = [
  {
    'image': await getImage({ src: pt }),
    'desc': 'Physical therapy offers numerous benefits, including pain relief and improved mobility, for individuals recovering from injuries or surgeries. Physical therapy plays a crucial role in preventing future injuries by addressing underlying musculoskeletal imbalances and promoting proper body mechanics. By providing personalized treatment plans and education, physical therapists empower individuals to actively participate in their recovery and achieve long-term health and wellness goals.',
    'title': 'Physical Therapy',
    'alt': "Dr. Benitez works with a physical therapy client."
  },
  {
    'image': await getImage({ src: recovery }),
    'desc': 'Proper recovery is essential for athletes and individuals engaged in physical activities, promoting faster healing and reducing the risk of future injuries. It allows muscles and tissues to repair and regenerate, leading to improved overall physical function.',
    'title': 'Recovery',
    'alt': "Dr. Benitez works with a client to improve muscle recovery."
  },
  {
    'image': await getImage({ src: performance }),
    'desc': 'Performance therapy provides athletes with targeted interventions to optimize their physical capabilities and enhance overall athletic performance. It goes beyond traditional rehabilitation, focusing on improving strength, agility, and sport-specific skills. Additionally, performance therapy emphasizes injury prevention strategies, ensuring athletes can sustain peak performance levels and longevity in their respective sports.',
    'title': 'Performance Training',
    'alt': "Dr. Benitez works in the OVERTIME Sports gym to improve a client's performance levels."
  },

  {
    'image': await getImage({ src: mobility }),
    'desc': 'Mobility exercises help prevent injuries by promoting proper movement patterns and ensuring joints function optimally. Additionally, increased mobility facilitates efficient athletic performance, enabling athletes to reach their full potential in terms of strength, speed, and agility.',
    'title': 'Mobility',
    'alt': "Dr. Benitez works with a client to improve mobility."
  },
  {
    'image': await getImage({ src: dryneedling }),
    'desc': 'Functional dry needling can enhance blood flow to the targeted muscles, promoting the delivery of nutrients and oxygen for optimal healing. Many individuals experience reduced pain and improved mobility after undergoing functional dry needling sessions, making it a valuable adjunct to comprehensive physical therapy interventions.',
    'title': 'Functional Dry Needling',
    'alt': "An athlete relaxes while undergoing dry needle therapy."
  },
  {
    'image': await getImage({ src: vfp }),
    'desc': 'Utilizing VALD force plates in biomechanical assessments provides precise and detailed insights into an individual\'s movement patterns, allowing for a thorough analysis of forces exerted during physical activities. These force plates offer accurate data on ground reaction forces, helping identify potential issues in weight distribution and balance. Individuals can receive targeted training programs to enhance performance, prevent injuries, and optimize overall biomechanical efficiency.',
    'title': 'VALD Force Plates',
    'alt': "An athlete jumps on the VALD force plates while Dr. Benitez monitors him."
  },
  {
    'image': await getImage({ src: dst }),
    'desc': 'Dynamo strength testing provides precise measurements of a patient\'s muscle strength, allowing therapists to assess imbalances, track progress, and tailor rehabilitation programs.This objective data ensures targeted treatment, optimizes recovery, and helps prevent re- injury by addressing specific weaknesses.',
    'title': 'Dynamo Strength Testing',
    'alt': "Dr. Benitez shows a client how to perform Dyanamo strength testing."
  },
  {
    'image': await getImage({ src: manipulation }),
    'desc': 'Manipulation, performed by skilled physical therapists, involves hands-on techniques to manipulate joints and soft tissues, providing immediate relief from pain and stiffness. This approach improves joint mobility, reduces muscle tension, and enhances overall flexibility. PT manipulation is particularly effective in treating musculoskeletal conditions such as back pain, neck pain, and joint restrictions.',
    'title': 'Manipulation',
    'alt': "Dr. Benitez performs manipulation therapy on a client to improve shoulder pain."
  },
  {
    'image': await getImage({ src: cupping }),
    'desc': 'This technique is known to alleviate muscle tension, reduce inflammation, and enhance overall circulation. Cupping is often used to relieve pain associated with musculoskeletal conditions, promoting faster recovery from injuries or overuse.',
    'title': 'Cupping',
    'alt': "A client relaxes while receiving cupping therapy."
  },
  {
    'image': await getImage({ src: stm }),
    'desc': 'This technique enhances blood flow to the targeted areas, facilitating the body\'s natural healing process. IASTM is particularly beneficial for athletes and individuals recovering from injuries, as it can improve range of motion, flexibility, and overall tissue health. By addressing soft tissue restrictions, IASTM contributes to pain relief and improved functional movement, making it a valuable adjunct to physical therapy and rehabilitation programs.',
    'title': 'Instrument-Assisted STM',
    'alt': "A client relaxes while receiving Instrument-Assisted STM therapy."
  },
  {
    'image': await getImage({ src: bfr }),
    'desc': 'This technique involves using cuffs or bands to partially restrict blood flow during exercise, leading to increased metabolic stress and muscle growth. BFR has been shown to enhance muscle hypertrophy and strength, making it a time-efficient and effective method for rehabilitation and performance improvement.',
    'title': 'Blood Flow Restriction',
    'alt': "A client performs physical therapy with a band to partial restrict blood flow."
  },
  {
    'image': await getImage({ src: ni }),
    'desc': 'Near-infrared (NIR) technology benefits athlete recovery by penetrating deep into muscles and tissues to enhance blood flow, reduce inflammation, and stimulate cellular repair at the mitochondrial level. This process accelerates healing, alleviates soreness and reduces recovery time, enabling athletes to perform at their best more consistently.',
    'title': 'Near Infrared',
    'alt': "A client relaxes while receiving near infrared therapy."
  },
  {
    'image': await getImage({ src: education }),
    'desc': 'Education empowers physical therapy patients by helping them understand their condition, treatment plan, and the importance of proper movement techniques. This knowledge fosters active participation, reduces the risk of re-injury, and enhances long-term outcomes by encouraging patients to take ownership of their rehab and recovery process.',
    'title': 'Education',
    'alt': "A client looks at a screen showing a human skeleton highlighting different areas of the spine."
  },
  {
    'image': await getImage({ src: compression }),
    'desc': 'This technique enhances circulation by applying controlled pressure to limbs, reducing swelling, improving oxygen delivery, and flushing out metabolic waste. This accelerates recovery, decreases muscle soreness, and supports overall performance and healing for athletes.',
    'title': 'Compression Therapy',
    'alt': "A client relaxes while receiving compression therapy withy Normatec boots."
  },
];

export const ServiceList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full flex justify-center bg-bgDark2 relative pt-32">
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-4">
              <span className="block-subtitle">Get Your Perfect Treatment</span>
              <h2 className="mt-2 mb-6 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
                Services We Offer
              </h2>
              <p className=" text-secondaryText">
                OVERTIME offers the best cutting-edge techniques to get you to your best self.
              </p>
            </div>
            {services.map((service, i) => (
              <div className="w-100 py-3" key={i}>
                <Card
                  className="!max-w-full bg-bgDark1 main-border-gray shadow-lg"
                  renderImage={() => <img width={400} src={service.image.src} alt={service.alt} className="rounded-lg" />}
                  horizontal
                  key={i}
                >
                  <h3 className="text-3xl font-bold  text-secondaryColor font-NotoSerif">
                    {service.title}
                  </h3>
                  <p className="font-normal text-gray-400">
                    {service.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

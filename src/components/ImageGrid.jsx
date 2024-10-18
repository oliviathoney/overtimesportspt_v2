import { motion } from "framer-motion";
import { Card } from "flowbite-react";

import dryneedling from "../assets/images/Dry Needling.jpeg";
import pt from "../assets/images/Physical Therapy.JPG";
import performance from "../assets/images/Performance.jpg";
import recovery from "../assets/images/Recovery.jpeg";
import mobility from "../assets/images/Mobility.JPG";
import vfp from "../assets/images/force-plates.png"
import manipulation from "../assets/images/Manipulation.JPG"
import cupping from "../assets/images/Cupping.jpeg"
import stm from "../assets/images/Instrument ASTM.JPG"
import bfr from "../assets/images/Blood Flow Rest.jpeg"


const services = [
  {
    'image': pt.src,
    'desc': 'Physical therapy offers numerous benefits, including pain relief and improved mobility, for individuals recovering from injuries or surgeries. Physical therapy plays a crucial role in preventing future injuries by addressing underlying musculoskeletal imbalances and promoting proper body mechanics. By providing personalized treatment plans and education, physical therapists empower individuals to actively participate in their recovery and achieve long-term health and wellness goals.',
    'title': 'Physical Therapy',
  },
  {
    'image': performance.src,
    'desc': 'Performance therapy provides athletes with targeted interventions to optimize their physical capabilities and enhance overall athletic performance. It goes beyond traditional rehabilitation, focusing on improving strength, agility, and sport-specific skills. Additionally, performance therapy emphasizes injury prevention strategies, ensuring athletes can sustain peak performance levels and longevity in their respective sports.',
    'title': 'Performance Training',
  },
  {
    'image': recovery.src,
    'desc': 'Proper recovery is essential for athletes and individuals engaged in physical activities, promoting faster healing and reducing the risk of future injuries. It allows muscles and tissues to repair and regenerate, leading to improved overall physical function.',
    'title': 'Recovery',
  },
  {
    'image': mobility.src,
    'desc': 'Mobility exercises help prevent injuries by promoting proper movement patterns and ensuring joints function optimally. Additionally, increased mobility facilitates efficient athletic performance, enabling athletes to reach their full potential in terms of strength, speed, and agility.',
    'title': 'Mobility',
  },
  {
    'image': dryneedling.src,
    'desc': 'Functional dry needling can enhance blood flow to the targeted muscles, promoting the delivery of nutrients and oxygen for optimal healing. Many individuals experience reduced pain and improved mobility after undergoing functional dry needling sessions, making it a valuable adjunct to comprehensive physical therapy interventions.',
    'title': 'Functional Dry Needling',
    'display': 'none'
  },
  {
    'image': vfp.src,
    'desc': 'Utilizing VALD force plates in biomechanical assessments provides precise and detailed insights into an individual\'s movement patterns, allowing for a thorough analysis of forces exerted during physical activities. These force plates offer accurate data on ground reaction forces, helping identify potential issues in weight distribution and balance. Individuals can receive targeted training programs to enhance performance, prevent injuries, and optimize overall biomechanical efficiency.',
    'title': 'VALD Force Plates',
    'display': 'none'
  },
  {
    'image': manipulation.src,
    'desc': 'Manipulation, performed by skilled physical therapists, involves hands-on techniques to manipulate joints and soft tissues, providing immediate relief from pain and stiffness. This approach improves joint mobility, reduces muscle tension, and enhances overall flexibility. PT manipulation is particularly effective in treating musculoskeletal conditions such as back pain, neck pain, and joint restrictions.',
    'title': 'Manipulation',
    'display': 'none'
  },
  {
    'image': cupping.src,
    'desc': 'This technique is known to alleviate muscle tension, reduce inflammation, and enhance overall circulation. Cupping is often used to relieve pain associated with musculoskeletal conditions, promoting faster recovery from injuries or overuse.',
    'title': 'Cupping',
    'display': 'none'
  },
  {
    'image': stm.src,
    'desc': 'This technique enhances blood flow to the targeted areas, facilitating the body\'s natural healing process. IASTM is particularly beneficial for athletes and individuals recovering from injuries, as it can improve range of motion, flexibility, and overall tissue health. By addressing soft tissue restrictions, IASTM contributes to pain relief and improved functional movement, making it a valuable adjunct to physical therapy and rehabilitation programs.',
    'title': 'Instrument-Assisted STM',
    'display': 'none'
  },
  {
    'image': bfr.src,
    'desc': 'This technique involves using cuffs or bands to partially restrict blood flow during exercise, leading to increased metabolic stress and muscle growth. BFR has been shown to enhance muscle hypertrophy and strength, making it a time-efficient and effective method for rehabilitation and performance improvement.',
    'title': 'Blood Flow Restriction',
    'display': 'none'
  },
];

export const ImageGrid = () => {
  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative pt-32">
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
            {services.map(service => (
              <div className="w-100 py-3">
                <Card
                  className="!max-w-full bg-bgDark1 main-border-gray shadow-lg"
                  renderImage={() => <img width={400} src={service.image} className="rounded-lg" />}
                  horizontal
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
    </section>
  );
};

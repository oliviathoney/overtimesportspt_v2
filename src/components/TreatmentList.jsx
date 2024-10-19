import { motion } from "framer-motion";

const items = [
  {
    name: 'Muscle Strains and Sprains',
    desc: 'Addressing injuries to muscles, tendons, and ligaments commonly experienced in sports activities.',
  },
  {
    name: 'Joint Injuries',
    desc: 'Rehabilitation for joint injuries such as ligament tears, dislocations, or cartilage damage. ',
  },
  {
    name: 'Post-Surgery Rehabilitation',
    desc: 'Assisting athletes in recovering from orthopedic surgeries, such as ACL reconstruction or joint arthroscopy. '
  },
  {
    name: 'Overuse Injuries',
    desc: 'Managing injuries caused by repetitive strain, common in athletes engaged in high-intensity training. ',
  },
  {
    name: 'Tendonitis and Tendinopathy',
    desc: 'Treating inflammation or degeneration of tendons often seen in athletes due to repetitive motions. ',
  },
  {
    name: 'Stress Fractures',
    desc: 'Rehabilitation and prevention strategies for stress fractures, which can result from repetitive impact activities. ',
  },
  {
    name: 'Concussion Management',
    desc: 'Implementing protocols for safe return-to-play after a sports-related concussion. ',
  },
  {
    name: 'Biomechanical Assessment',
    desc: ' Analyzing and correcting movement patterns to enhance performance and prevent injuries. ',
  },
  {
    name: 'Flexibility and Mobility Issues',
    desc: 'Addressing limitations in range of motion and developing strategies for improvement. ',
  },
  {
    name: 'Strength Imbalances',
    desc: 'Designing targeted strength training programs to correct muscle imbalances and enhance overall performance. ',
  },
  {
    name: 'Neck and Back Pain',
    desc: 'Providing interventions for athletes experiencing pain or discomfort in the spine. ',
  },
  {
    name: 'Sports-Specific Rehabilitation',
    desc: 'Tailoring rehabilitation programs to meet the demands of specific sports and activities. ',
  },
  {
    name: 'Preventive Strategies',
    desc: 'Educating athletes on injury prevention techniques, warm-up routines, and proper body mechanics. ',
  },
  {
    name: 'Running Injuries',
    desc: 'Managing and preventing injuries associated with running, such as shin splints or runner\'s knee. ',
  },
  {
    name: 'Performance Enhancement Programs',
    desc: 'Designing and implementing training regimens to optimize an athlete\'s physical capabilities. ',
  },
  {
    name: 'Return-to-Sport Conditioning',
    desc: 'Gradual progression and conditioning programs to ensure a safe return to sports after an injury. ',
  },
  {
    name: 'Athletic Screening',
    desc: 'Conducting assessments to identify potential injury risks and areas for improvement. ',
  },
  {
    name: 'Functional Movement Assessment',
    desc: 'Evaluating an athlete\'s movement patterns to identify areas of weakness or dysfunction.',
  },
  {
    name: 'Nutrition and Hydration Guidance',
    desc: 'Providing advice on proper nutrition and hydration to support optimal athletic performance and recovery. ',
  },
  {
    name: 'Mind-Body Techniques',
    desc: 'Incorporating mental and emotional well-being strategies to enhance overall athletic performance. ',
  },
]

export const TreatmentList = () => {
  return (
    <section className=" bg-bgDark1 w-full lg:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      ></motion.div>
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="w-full mx-auto text-center">
          <span className="block-subtitle">We're Here to Help</span>
          <h2 className="mb-12 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
            What We Treat
          </h2>
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <ul role="list" className="divide-y divide-gray-100">
              {items.map((item) => (
                <li className="flex justify-between gap-x-2 py-5">
                  <div className="flex min-w-0 gap-x-2">
                    <div className="min-w-0 flex-auto">
                      <p className="text-md font-semibold leading-6 text-secondaryColor">{item.name}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 md:flex md:flex-col md:items-end">
                    <p className="text-md leading-6 text-secondaryText">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div >
      </div >
    </section>
  )
}

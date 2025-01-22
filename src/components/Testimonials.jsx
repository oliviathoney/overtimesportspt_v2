import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData = [
  {
    customerName: "Elizabeth P.",
    customerTitle: "Marathoner",
    content:
      "Edward is an incredible PT and I'm so grateful I discovered Overtime Sports! While trying to increase mileage postpartum, I started having Achilles and calf issues. After taking some time off running, and the pain not subsiding, I reached out to Edward. Within 4 weeks, I'm back to running and am able to train for a marathon. I recognize that some injuries require time off, but not all do. I'm thankful I found a PT whose goal was to get me back to my sport as quickly and safely as possible.",
  },
  {
    customerName: "Blaise R.",
    customerTitle: "Collegiate Soccer Athlete",
    content:
      "This past March, I partially tore one of my MCL's. I was struggling to find quality PTs, when out of the blue Edward reached out to me on instagram DM's. This was a blessing in disguise. I went to see him, and instantly could tell that he knew what he was doing. Every exercise we performed had a detailed explanation behind why we were doing it, and the progress that I saw was truly amazing. I am now completely healthy and feeling great, and I credit a lot of that to Edward. But, my favorite part has been getting to know him personally. I have truly loved getting to know him and all the laughs shared. He truly cares about your journey both as an athlete as well as a person, and I am grateful to have met him. He still can’t beat me in cross bar challenge though:)"
  },
  {
    customerName: "Joe R.",
    customerTitle: "Bodybuilder",
    content:
      "I was suffering with shoulder and biceps pain from heavy weight training. I can't speak to how great Edward was from the start of the process- evaluating what I was dealing with, to pin pointing the potential issue and how it happened, to developing a game plan for a path forward. After working with Edward, I have noticed substantial improvement in my range of motion and pain. Edward’s knowledge and expertise coupled with his personal approach is what makes him one of the best PTs out there.",
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonials</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48 font-NotoSerif">
          Athletes like you love OVERTIME
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full pt-8 text-center mx-auto">
          <p className="text-secondaryText block-subtitle leading-loose">
            <a id="address" href="/resources/#request">Book Now</a>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

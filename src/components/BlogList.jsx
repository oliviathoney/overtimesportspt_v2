import { motion } from "framer-motion";
import { Card } from "flowbite-react";

import SignsYou from "../assets/images/blog/signs-you.jpg";
import SoccerInjuries from "../assets/images/blog/soccer-injuries.jpg";

const blogData = [
  {
    title: "The 5 Most Common Soccer Injuries and How to Prevent Them",
    subtitle: "Soccer is an exhilarating sport, known for its fast pace, thrilling goals, and incredible athleticism. However, like all physical activities, it comes with its risks. Injuries are a part of the game, and understanding...",
    image: SoccerInjuries.src,
    slug: "/blog/the-5-most-common-soccer-injuries"
  },
  {
    title: "5 Signs You Need A New PT",
    subtitle:
      "Choosing the right physical therapist can be overwhelming, especially when dealing with pain or injury. It's important to feel comfortable, heard, and confident in the care you're receiving. Here are 5 signs that it might be time to find a new PT...",
    image: SignsYou.src,
    slug: "/blog/5-signs-you-need-a-new-pt"
  },

];

export const BlogList = () => (
  <section className="w-full flex justify-center bg-bgDark2 relative pt-32">
    <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-start mb-16 px-8">
            <span className="block-subtitle">Our Blog</span>
            <h2 className="mt-2 mb-6 text-5xl lg:text-6xl font-bold font-heading text-primaryText font-NotoSerif">
              Latest Insights
            </h2>
            <p className=" text-secondaryText">
              Hear more from our Doctor of Physical Therapy about latest insights and trends in the industry. We are determined to stay on the cutting-edge and keep our patients up-to-date.
            </p>
          </div>
          {blogData.map((blog, i) => (
            <div className="w-100 py-3 px-5" key={i}>
              <Card
                className="blogPost !max-w-full bg-bgDark1 main-border-gray shadow-lg"
                renderImage={() => <img width={500} src={blog.image} alt={blog.title} className="rounded-lg" />}
                horizontal
                key={i}
              >
                <h3 className="text-3xl font-bold  text-secondaryColor font-NotoSerif">
                  {blog.title}
                </h3>
                <p className="font-normal text-gray-400">
                  {blog.subtitle}
                </p>
                <a href={blog.slug} class="inline-flex font-medium items-center text-highlightColor hover:underline">
                  Read more
                </a>
              </Card>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

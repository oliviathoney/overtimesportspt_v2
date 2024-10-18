import { motion } from "framer-motion";

import { NFLLogo } from "../assets/logos/NFLLogo";
import { NBALogo } from "../assets/logos/NBALogo";
import { MLBLogo } from "../assets/logos/MLBLogo";
import { XFLLogo } from "../assets/logos/XFLLogo";
import { USATFLogo } from "../assets/logos/USATFLogo";
import { FIFALogo } from "../assets/logos/FIFALogo";
import { CrossFitLogo } from "../assets/logos/CrossFitLogo";

export const Brands = () => (
  <section className=" bg-bgDark1 w-full  lg:pt-32">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-12">
            <div className="flex flex-col">
              <h2 className="mb-2  text-5xl sm:text-6xl 2xl:text-7xl font-bold tracking-normal text-primaryText font-NotoSerif">
                Serving
              </h2>
              <h2 className=" text-5xl  sm:text-6xl 2xl:text-7xl font-bold tracking-normal text-secondaryColor font-NotoSerif">
                Denver Metro
              </h2>
              <p class="text-secondaryText mt-3">
                Whether you are an active adult, body builder, or weekend warrior, we will develop a personalized to you help you reach your goals.
                <br></br>
                <br></br>
                We take pride in treating a variety of collegiate and professional athletes. In addition we also support tactical athletes and miliatry personnel returning to work duties.
              </p>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <NFLLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <NBALogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <MLBLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <CrossFitLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <USATFLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <FIFALogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

import { motion } from "framer-motion";

import { NFLLogo } from "../assets/logos/NFLLogo";
import { NBALogo } from "../assets/logos/NBALogo";
import { MLBLogo } from "../assets/logos/MLBLogo";
import { XFLLogo } from "../assets/logos/XFLLogo";
import { USATFLogo } from "../assets/logos/USATFLogo";
import { FIFALogo } from "../assets/logos/FIFALogo";

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
              <p class="text-secondaryText">
                Our physical therapists have extensive experience treating high level athletes from middle to high school to collegiate level as well as professional athletes ranging from a variety of sports including the NFL, NBA, MLB, XFL, USATF, FIFA, SRA, CrossFit and IFBB Pro. We also take pride in helping the tactical athlete and military personnel return to work duties.
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
                <XFLLogo />
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

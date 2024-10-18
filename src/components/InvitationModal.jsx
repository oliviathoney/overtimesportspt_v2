import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import logo from "../assets/images/logo.png"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


export const InvitationModal = ({ setIsOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full  bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText">
                  Request a Free Consultation
                </h2>
                {/* <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
                Free Consultation
              </h2> */}

                <ul className="mb-6 text-primaryText mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>15 minute phone consultation</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Talk with a physical therapist about your treatment</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Schedule a full appointment</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex lg:hidden justify-start items-center grow basis-0 mb-8">
                  <div className="text-white font-['Inter'] font-bold text-3xl">
                    <h2>
                      Request a Free Consultation
                    </h2>
                  </div>
                </div>

                <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                  Rehab, Recover, Perform
                </h3>
                <form action="/actions/send-consult-confirm" method="POST">
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full sm:w-4/5 p-2 mx-auto">
                      <input
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="recipient_email"
                        type="text"
                        name="recipient_email"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="w-full sm:w-4/5 p-2 mx-auto">
                      <input
                        type="text"
                        id="phone"
                        aria-describedby="helper-text-explanation"
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone (123-456-7890) - optional"
                        name="recipient_phone"
                      />
                    </div>
                    <div className="hidden">
                      <input
                        type="text"
                        name="image"
                        value={logo.src}
                      />
                    </div>
                    <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                      <input
                        type="submit"
                        className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                        aria-label="Request"
                        value="Request Consultation"
                      />
                    </div>

                  </div>
                </form>
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div >
      </motion.div >
    </AnimatePresence >
  );
};

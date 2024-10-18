import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";

export const AppointmentForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1" id="request">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative !justify-center items-center z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
          <div className="md:max-w-4xl mx-auto text-center">
            <span className="block-subtitle text-center">We're Excited to meet you</span>
            <h2 className="mt-2 mb-8 text-5xl lg:text-6xl block-big-title font-NotoSerif text-center">
              Request an Appointment
            </h2>
            <p className="w-full mb-2  text-secondaryText leading-loose">
              Fill out the form below what you're hoping to accomplish at OVERTIME
            </p>
            <p className="w-1/2 flex mx-auto text-center mb-8 block-subtitle !text-primaryColor leading-loose">
              Did you know that we offer special discounts for MILITARY PERSONNEL and FIRST RESPONDERS? Simply ask our team about our exclusive offers.
            </p>
          </div>
          <div className="mb-11 flex flex-wrap -m-1">
            <form className="w-full" action="/actions/send-appointment-confirm" method="POST">
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="sm:col-span-3">
                    <label htmlFor="name" className="block-subtitle">
                      Name
                    </label>
                    <div className="mt-1 mb-3">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label htmlFor="phone" className="block-subtitle">
                      Phone Number
                    </label>
                    <div className="relative mt-1 mb-3">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                          <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-full">
                    <label htmlFor="email" className="block-subtitle">
                      Email address
                    </label>
                    <div className="mt-1 mb-3">
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="about" className="block-subtitle">
                      Comments
                    </label>
                    <div className="mt-1 mb-3">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send Request
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="md:max-w-4xl mx-auto text-center">
              <span className="block-subtitle text-center">Or Schedule Now</span>
              <h2 className="mt-2 mb-8 text-5xl lg:text-6xl block-big-title font-NotoSerif text-center">
                Schedule An Appointment
              </h2>
              <button
                className="contained-button w-full flex"
              >
                <a href="https://overtimesportspt.janeapp.com/" target="_blank" className="flex py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  Schedule Appointment
                </a>
              </button>

            </div>
          </div>
        </div>
      </motion.div >
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {
        isModalOpen && (
          <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )
      }
    </section >
  );
};

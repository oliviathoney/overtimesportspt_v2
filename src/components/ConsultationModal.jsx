import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";


export const ConsultationModal = ({ setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/sendConsultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, phone: phone, firstname: firstname, lastname: lastname }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success, e.g., display a success message
      console.log('Form submitted successfully!');
      setIsOpen(false)
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error submitting form:', error);
    }
    // alert(`Name: ${name}, Email: ${email}, Phone: ${phone}, About: ${about}`)
  }


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
                  REQUEST A FREE CONSULTATION
                </h2>
                {/* <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
                Free Consultation
              </h2> */}

                <ul className="mb-6 text-primaryText mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span><b className="text-secondaryColor">STEP 1:</b> 15 minute phone consultation to discuss your goals, challenges, needs.</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span><b className="text-secondaryColor">STEP 2:</b> Schedule your first initial evaluation with our doctor of physical therapy.</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span><b className="text-secondaryColor">STEP 3:</b> Begin your health journey.</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex lg:hidden text-center lg:justify-start items-center grow basis-0 mb-8">
                  <div className="text-white font-['Inter'] font-bold text-3xl">
                    <h2>
                      Request a Free Consultation
                    </h2>
                  </div>
                </div>

                <h3 className="mb-7 text-lg lg:text-2xl text-primaryText font-bold leading-snug text-center">
                  REHAB - RECOVER - PERFORM
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full sm:w-2/5 p-2 ml-auto">
                      <input
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="recipient_firstname"
                        type="text"
                        name="recipient_firstname"
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                          setIsOpen(true)
                        }
                        }
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-2/5 p-2 mr-auto">
                      <input
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="recipient_lastname"
                        type="text"
                        name="recipient_lastname"
                        value={lastname}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          setIsOpen(true)
                        }
                        }
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-4/5 p-2 mx-auto">
                      <input
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="recipient_email"
                        type="text"
                        name="recipient_email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setIsOpen(true)
                        }
                        }
                        placeholder="Your email address"
                        required
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
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setIsOpen(true)
                        }
                        }
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

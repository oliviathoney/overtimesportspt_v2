import { useState } from "react";
import { motion } from "framer-motion";

import { ConsultationModal } from "./ConsultationModal";


export const SignOff = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <section className="w-screen justify-center lg:justify-normal flex bg-gradient-to-b to-bgDark1 from-primaryColor relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >


                <div className="w-screen flex flex-col gap-10 lg:flex-row items-center lg:items-normal">
                    <div
                        className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-4/5 flex flex-col justify-start lg:pl-20 py-10"
                    >
                        <div className="block-subtitle text-center lg:text-start mb-6 bg-[#26272B40] py-2 lg:py-5 rounded-md px-2 lg:px-5">GET STARTED AT THE BEST PHYSICAL THERAPY FACILITY IN CENTENNIAL, CO.
                        </div>
                        <div className="block-big-title text-center lg:text-start -mb-12 lg:mb-5 font-NotoSerif">
                            Take the first step, we'll help you with the rest.
                        </div>
                    </div>
                    <div
                        className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/2 flex flex-col justify-end lg:mr-20"
                    >
                        <button
                            className="contained-button-reverse w-full h-12 mx-auto px-5 mb-5 lg:mb-auto"
                            onClick={() => setIsModalOpen(true)}
                            aria-label="Request"
                        >
                            BOOK FREE CONSULTATION
                        </button>
                    </div>
                </div>
            </motion.div>
            {
                isModalOpen && (
                    <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                )
            }
        </section >
    );
};

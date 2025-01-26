import { getImage } from "astro:assets";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

import logo from "../assets/images/logo.png";
const optLogo = await getImage({ src: logo })

const footerData = [
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "resources/#request" },
      { name: "Our Services", href: "/services" }
    ],
  },
  {
    title: "Important Links",
    items: [
      "Schedule Appointment",
      { name: "Scheule Appointment", href: "resources/#request" },
      { name: "Frequently Asked Questions", href: "/resources" },
    ],
  },
];

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img
                    src={optLogo.src}
                    alt="eOVERTIME Sports Physical Therapy and Performance Logo"
                    className="w-4/5 mb-6"
                  />
                </div>

              </div>
              <div className="w-full mx-auto lg:mx-0 mb-4 sm:text-xs">
                <p
                  className="text-gray-400 text-sm sm:text-base"
                >
                  info@overtimesportspt.com | 469-274-0232
                </p>
              </div>
              <div className="w-full mx-auto lg:mx-0 mb-4 sm:text-xs">
                <a
                  className="text-gray-400 text-sm sm:text-base"
                  href="https://maps.app.goo.gl/Ng3fLwf8KgRr15k29"
                  aria-label="Google Maps"
                >
                  8085 South Chester St. #240, Centennial, CO 80112
                </a>
              </div>
              <div className="w-full mx-auto lg:mx-0 mb-4 sm:text-xs">
                <p
                  className="text-gray-400 text-sm sm:text-base"
                >
                  © 2024 OVERTIMESportsPT.com All rights reserved.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:pl-16 hidden lg:flex flex-wrap justify-end">
              <div className="w-full md:w-1/2 lg:w-auto mb-16 mr-12 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText font-NotoSerif">Company</h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText font-NotoSerif">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Company</h3>
                <ul>
                  {footerData[2].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {
        isModalOpen && (
          <ConsultationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )
      }
    </footer>
  );
};

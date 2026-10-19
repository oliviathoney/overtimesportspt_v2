import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImage } from "astro:assets";

import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { ConsultationModal } from "./ConsultationModal";
import logo from "../assets/images/logo.png";
const optLogo = await getImage({ src: logo })

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "About", href: "/about", ariaLabel: "About" },
  { label: "Services", href: "/services", ariaLabel: "Services" },
  { label: "FAQ", href: "/resources", ariaLabel: "FAQ" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
];

export const Navbar = ({ hero = false }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldHide = isHidden && !isOpen && !isConsultationOpen;

  const openConsultation = () => {
    setIsOpen(false);
    setIsConsultationOpen(true);
  };

  useEffect(() => {
    const scrollPosition = () => Math.max(
      0,
      Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight),
    );
    let previousY = scrollPosition();
    let direction = 0;
    let distance = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const currentY = scrollPosition();
      const delta = currentY - previousY;
      previousY = currentY;
      setIsScrolled(currentY > 32);

      if (
        currentY <= 200 ||
        isOpen ||
        isConsultationOpen ||
        (
          navRef.current?.contains(document.activeElement) &&
          document.activeElement.matches(":focus-visible")
        )
      ) {
        setIsHidden(false);
        direction = 0;
        distance = 0;
        return;
      }

      if (delta === 0) return;
      const nextDirection = delta > 0 ? 1 : -1;
      if (nextDirection !== direction) {
        direction = nextDirection;
        distance = 0;
      }
      distance += Math.abs(delta);
      if (distance >= 12) {
        setIsHidden(nextDirection === 1);
        distance = 0;
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen, isConsultationOpen]);

  return (
    <>
    <nav
      ref={navRef}
      className={`site-nav w-full h-28 flex flex-col justify-center items-center fixed z-40 ${hero ? "home-nav" : "bg-bgNight lg:bg-bgNight/90 lg:backdrop-blur-xl"}`}
      aria-label="Main navigation"
      aria-hidden={shouldHide || undefined}
      inert={shouldHide ? "" : undefined}
      data-hidden={shouldHide}
      data-scrolled={isScrolled}
      onFocusCapture={() => setIsHidden(false)}
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-6xl">
                <img
                  src={optLogo.src}
                  alt="OVERTIME Sports Physical Therpay and Performance logo"
                  className={`site-logo ${hero ? "home-nav__logo" : "site-nav__logo"}`}
                />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          className={hero ? "hidden lg:block" : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-4 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-primaryText lg:text-base text-2xl leading-6 mx-2 2xl:mx-4 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={hero ? "hidden lg:block" : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex m-auto">
            <a
              className="items-center pt-2.5"
              href="https://www.instagram.com/overtimesportspt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <button
              type="button"
              className="contained-button w-64 sm:w-52 h-10 ml-4"
              aria-haspopup="dialog"
              onClick={openConsultation}
            >
              Get Started
            </button>
          </div>
        </motion.div>
        {hero && (
          <button
            type="button"
            className="home-nav__consult lg:hidden"
            aria-haspopup="dialog"
            onClick={openConsultation}
          >
            Get Started
          </button>
        )}
        <button
          type="button"
          className="lg:hidden flex flex-col shrink-0 min-w-11 min-h-11 items-center justify-center px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </button>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              id="mobile-navigation"
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgNight z-50 w-full
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-primaryText lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                className="contained-button w-64 sm:w-52 h-10 ml-4"
                aria-haspopup="dialog"
                onClick={openConsultation}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    {isConsultationOpen && (
      <ConsultationModal source="navigation" setIsOpen={setIsConsultationOpen} />
    )}
    </>
  );
};

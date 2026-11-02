import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImage } from "astro:assets";

import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { ConsultationModal } from "./ConsultationModal";
import { programLinks } from "../data/programs";
import logo from "../assets/images/logo.png";
import "../styles/Navigation.css";
const optLogo = await getImage({ src: logo })

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "About", href: "/about", ariaLabel: "About" },
  { label: "Services", href: "/services", ariaLabel: "Services" },
  { label: "Programs", children: programLinks },
  { label: "FAQ", href: "/resources", ariaLabel: "FAQ" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
];

export const Navbar = ({ hero = false }) => {
  const navRef = useRef(null);
  const desktopProgramsRef = useRef(null);
  const mobileProgramsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldHide = isHidden && !isOpen && !isProgramsOpen && !isConsultationOpen;

  const closeNavigation = () => {
    setIsOpen(false);
    setIsProgramsOpen(false);
  };

  const openConsultation = () => {
    closeNavigation();
    setIsConsultationOpen(true);
  };

  useEffect(() => {
    if (!isProgramsOpen) return;
    const dismissOutside = (event) => {
      if (
        !desktopProgramsRef.current?.contains(event.target) &&
        !mobileProgramsRef.current?.contains(event.target)
      ) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [isProgramsOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeMenus = () => {
      setIsOpen(false);
      setIsProgramsOpen(false);
    };
    desktop.addEventListener("change", closeMenus);
    return () => desktop.removeEventListener("change", closeMenus);
  }, []);

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
        isProgramsOpen ||
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
  }, [isOpen, isProgramsOpen, isConsultationOpen]);

  const renderPrograms = (mobile = false) => (
    <div
      key="Programs"
      ref={mobile ? mobileProgramsRef : desktopProgramsRef}
      className={`program-nav ${mobile ? "program-nav--mobile" : ""}`}
      onPointerEnter={(event) => {
        if (!mobile && event.pointerType === "mouse") setIsProgramsOpen(true);
      }}
      onPointerLeave={(event) => {
        if (!mobile && !event.currentTarget.contains(document.activeElement)) {
          setIsProgramsOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsProgramsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          setIsProgramsOpen(false);
          event.currentTarget.querySelector("button")?.focus();
        } else if (event.key === "ArrowDown" && event.target.tagName === "BUTTON") {
          event.preventDefault();
          setIsProgramsOpen(true);
          const container = event.currentTarget;
          window.requestAnimationFrame(() => container.querySelector("a")?.focus());
        }
      }}
    >
      <button
        type="button"
        className="program-nav__trigger"
        aria-expanded={isProgramsOpen}
        aria-controls={`programs-${mobile ? "mobile" : "desktop"}-links`}
        onClick={() => setIsProgramsOpen((open) => !open)}
      >
        Programs
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <ul
        id={`programs-${mobile ? "mobile" : "desktop"}-links`}
        className="program-nav__links"
        hidden={!isProgramsOpen}
      >
        {programLinks.map(({ label, href }) => (
          <li key={href}><a href={href} onClick={closeNavigation}>{label}</a></li>
        ))}
      </ul>
    </div>
  );

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
          <div className="site-nav__links hidden lg:flex h-full">
            {navbarLinks.map(({ href, label, ariaLabel, children }) => children ? renderPrograms() : (
              <a
                className="site-nav__link"
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
          onClick={() => {
            setIsOpen(!isOpen);
            setIsProgramsOpen(false);
          }}
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
              {navbarLinks.map(({ label, href, ariaLabel, children }) => children ? renderPrograms(true) : (
                <a
                  key={href}
                  className="text-primaryText lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={closeNavigation}
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

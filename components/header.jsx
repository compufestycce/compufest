import React, { useState } from "react";
import Link from "next/link";
import CountDown from "./countdown";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scroll = () => {
    if (window.scrollY > window.screen.height / 2) setScrolledDown(true);
    else setScrolledDown(false);
  };
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <header className="fixed w-full top-0 z-10 text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex gap-5 lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="#events">
            <a className="hover:text-white transition-colors">Events</a>
          </Link>
          <Link href="#schedule">
            <a className="hover:text-white transition-colors">Schedule</a>
          </Link>
          <Link href="#messages">
            <a className="hidden sm:block  hover:text-white transition-colors">
              Messages
            </a>
          </Link>
          <Link href="#about">
            <a className="hover:text-white transition-colors">About</a>
          </Link>
          <Link href="/teams">
            <a className="hover:text-white transition-colors">Team</a>
          </Link>
        </nav>
        <a
          onClick={scrollToTop}
          className="hover:cursor-pointer flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img alt="logo" src="/assets/logo.svg" className="h-10" />
          <AnimatePresence>
            {scrolledDown && (
              <motion.span
                className="ml-1 text-3xl font-head"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="hidden">C</span>OMPUFEST
              </motion.span>
            )}
          </AnimatePresence>
        </a>
        <div></div>
        <div className="lg:w-2/5 inline-flex lg:justify-end">
          <AnimatePresence>
            {windowWidth < 1024 ? (
              !scrolledDown ? (
                <CountDown />
              ) : null
            ) : (
              <CountDown />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;

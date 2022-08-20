import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SplineComponent from "./SplineComponent";
const heroLogoVariants = {
  hidden: {
    x: "calc(100vw - 85vw)",
    opacity: 0,
    rotate: -360,
    originX: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};

const heroTextVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imgsVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    yoyo: Infinity,
    delay: 2,
    duration: 1,
    type: "Inertia",
  },
};

const Hero = () => {
  const [animateStart, setAnimateStart] = useState(true);
  React.useState(() => {
    setTimeout(() => setAnimateStart(true), 1000);
  }, []);
  return (
    <div className="min-h-screen pt-24 flex flex-col justify-center relative">
      <div className="absolute z-10 w-full">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex justify-center items-center"
      >
        <motion.img
          initial={imgsVariants.initial}
          animate={{ ...imgsVariants.animate, x: 2, y: 2 }}
          transition={imgsVariants.transition}
          alt="laptop1"
          className="hidden xl:block absolute left-2/5 h-1/4 left-40 bottom-1/2 flex-shrink-0 w-24 object-contain object-center"
          src="/assets/imgs/hero/minLaptop1.png"
        />
        <motion.img
          initial={imgsVariants.initial}
          animate={{ ...imgsVariants.animate, x: -2, y: 2 }}
          transition={imgsVariants.transition}
          alt="laptop2"
          className="absolute left-2/5 h-1/4 pb-8 xl:pb-0 right-2/5 xl:right-40 bottom-1/2 xl:top-1/2 flex-shrink-0 w-24 object-contain object-center"
          src="/assets/imgs/hero/minLaptop4.png"
        />
        <motion.img
          alt="laptop3"
          className="hidden xl:block absolute left-2/5 h-1/4 left-40 top-2/3 flex-shrink-0 w-24 object-contain object-center"
          src="/assets/imgs/hero/minLaptop3.png"
        />
        <motion.img
          alt="laptop4"
          className="hidden xl:block absolute left-2/5 h-1/4 right-40 bottom-2/3 flex-shrink-0 w-24 object-contain object-center"
          src="/assets/imgs/hero/minLaptop2.png"
        />
      </motion.div> */}
      
      <div className="flex flex-col items-center py-4 mt-10 xl:mt-0">
        <div className="flex justify-center items-center">
          <motion.img
            alt="main logo"
            src="/assets/logo.svg"
            initial="hidden"
            animate="visible"
            variants={heroLogoVariants}
            transition={{ type: "spring", stiffness: 20 }}
            className="h-12 md:h-24"
          />
          <AnimatePresence>
            {animateStart ? (
              <motion.div
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.8,
                  duration: 0.1,
                  type: "spring",
                  stiffness: 20,
                }}
                className="font-head text-4xl md:text-7xl text-gray-50 ml-1 relative"
              >
                {" "}
                OMPUFEST
                <span className="block absolute -bottom-10 right-4 text-3xl font-bold">
                  2K22
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center"
        > 
          <p className="mt-12 font-medium text-lg">
            A National Level Technical Fest
            <span className="block mt-2 text-gray-300 text-lg md:text-2xl font-medium">
              Department of Computer Technology
            </span>
            <span className="block text-gray-300 text-lg md:text-3xl font-bold">
              Yeshwantrao Chavan College of Engineering
            </span>
          </p>
        </motion.div>
      </div>
      </div>

      <div className="z-0 absolute w-full h-full top-0 left-0 bg-bg_custom"> <SplineComponent /></div> 
    </div>
  );
};

export default Hero;

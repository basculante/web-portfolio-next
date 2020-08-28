import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const variants = {
  enter: () => {
    return {
      x: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      x: -300,
      opacity: 0,
    };
  },
};

const Landing: React.SFC = () => {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", mass: 0.5, damping: 1000, stiffness: 500 },
        opacity: { duration: 0.2 },
      }}
    >
      <Navbar />
      <div className="landing-page">
        <div className="landing-container">
          <div className="section-title landing">
            <div>VICTOR</div>
            <div>JOH</div>
          </div>
          <div className="landing-subtitle">
            [ Front-End Developer/ React / Node.js / Javascript / Typescript ]
          </div>
          <div className="next-btn-container">
            <Link href="/about" passHref>
              <a className="next-btn" href="#">
                <div>Next</div>
                <div style={{ marginRight: "0.8rem" }}>
                  <img
                    src="./assets/logos/arrow.svg"
                    id="next-arrow-logo"
                  ></img>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;

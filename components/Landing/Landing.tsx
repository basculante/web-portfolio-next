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
            [Web Developer - React - Node.Js - Javascript - Typescript]
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
        <style jsx>{`
          .next-button {
            border: var(--neumorphic-border);
            border-radius: 1rem;
            box-shadow: var(--neumorphic-top-left-box-shadow),
              var(--neumorphic-bottom-right-box-shadow);
            padding: 0.8rem;
          }
          .landing-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            word-break: break-word;
            padding: 2rem;
            height: calc(97vh - 2.4rem);
          }
          .landing-container {
            width: 75%;
            padding: 4.8rem;
            background: var(--neumorphic-background-color);
            background: url("./assets/avatar-2.png");
            background-position: 85% 50%;
            background-size: 25%;
            background-repeat: no-repeat;
            border: var(--neumorphic-border);
            border-radius: var(--neumorphic-border-radius);
            box-shadow: var(--neumorphic-top-left-box-shadow),
              var(--neumorphic-bottom-right-box-shadow);
          }
          .section-title.landing {
            font-size: 8.4rem;
            text-decoration: none;
            text-align: left;
            color: var(--atomic-tangerine-color);
          }
          .landing-subtitle {
            font-size: 2.4rem;
            color: #585858;
          }
          .next-btn-container {
            margin-top: 2.4rem;
          }
          .next-btn {
            padding: 0.4rem;
            font-size: 1.6rem;
          }
          .next-btn div {
            display: inline-block;
            margin-left: 0.8rem;
            vertical-align: middle;
          }
          #next-arrow-logo {
            vertical-align: text-bottom;
          }
          // Large devices (desktops, less than 1200px)
          @media only screen and (max-width: 75em) {
            .landing-container {
              background-size: 25%;
            }
          }

          // Medium devices (tablets, less than 900px)
          @media only screen and (max-width: 56.25em) {
            .landing-container {
              background-position: 98% 10%;
            }
            .section-title.landing {
              font-size: 5.6rem;
            }
            .landing-subtitle {
              font-size: 2.4rem;
            }
          }

          //Small devices (phones, less than 600px)
          @media only screen and (max-width: 37.5em) {
            .landing-container {
              padding: 4rem;
              background-size: 25%;
            }
            .section-title.landing {
              font-size: 4.8rem;
            }
            .landing-subtitle {
              font-size: 2rem;
            }
            .next-btn-container {
              position: relative;
            }
          }

          //Extra large devices (desktops, more than 1800px)
          @media only screen and (min-width: 112.5em) {
            .landing-container {
              background-size: 20%;
            }
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default Landing;

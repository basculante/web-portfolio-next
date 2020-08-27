import React, { useState } from "react";
import WorkCards from "../components/Work/WorkCards";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const variants = {
  enter: (isNextClicked: boolean) => {
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
  exit: (isNextClicked: boolean) => {
    return {
      zIndex: 0,
      x: isNextClicked ? -300 : 300,
      opacity: 0,
    };
  },
};

const Work: React.SFC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>Victor Joh - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        custom={isNextClicked}
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
        <div>
          <div className="work-section">
            <div className="work-section-container">
              <div className="section-title work">
                <div>
                  <Link href="/about" passHref>
                    <a
                      className="next-btn"
                      onClick={() => {
                        setIsButtonClicked(true);
                      }}
                      href="#"
                    >
                      <img
                        src="./assets/logos/prev-arrow.svg"
                        alt="prev-arrow"
                        height={12}
                      />
                    </a>
                  </Link>
                </div>
                <div>Work</div>
                <div>
                  <Link href="/resume" passHref>
                    <a
                      className="next-btn"
                      onClick={() => {
                        setIsNextClicked(true);
                        setIsButtonClicked(true);
                      }}
                      href="#"
                    >
                      <img
                        src="./assets/logos/next-arrow.svg"
                        alt="next-arrow"
                        height={12}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <WorkCards />
            </div>
            <style jsx>
              {`
                .work-section {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  min-height: calc(97vh - 2rem);
                  word-break: break-word;
                  padding: 2rem;
                  text-align: center;
                }
                .work-section-container {
                  margin-top: 1.6rem;
                  width: 75%;
                  padding: 4.8rem;
                  background: var(--neumorphic-background-color);
                  border: var(--neumorphic-border);
                  border-radius: var(--neumorphic-border-radius);
                  box-shadow: var(--neumorphic-top-left-box-shadow),
                    var(--neumorphic-bottom-right-box-shadow);
                }
                .section-title.work {
                  margin-bottom: 4rem;
                  display: flex;
                  justify-content: space-between;
                }
                .section-title.work a > img {
                  display: flex;
                  padding: 1rem 1.6rem 1rem 1.6rem;
                }
                //Small devices (phones, less than 600px)
                @media only screen and (max-width: 37.5em) {
                  .work-section {
                    padding: 2.4rem;
                  }
                }
              `}
            </style>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;

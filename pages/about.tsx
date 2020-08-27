import React, { useState } from "react";
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

const AboutPage: React.SFC = () => {
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>Victor Joh - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        custom={isNextClicked}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {
            type: "spring",
            mass: 0.5,
            damping: 1000,
            stiffness: 500,
            duration: 0.5,
          },
          opacity: { duration: 0.2 },
        }}
      >
        <Navbar />
        <div className="about-section">
          <div className="about-section-container">
            <div className="section-title about">
              <div>
                <Link href="/">
                  <a className="next-btn" href="#">
                    <img
                      src="./assets/logos/prev-arrow.svg"
                      alt="prev-arrow"
                      height={12}
                    />
                  </a>
                </Link>
              </div>
              <div>About</div>
              <div>
                <Link href="/work">
                  <a
                    className="next-btn"
                    onClick={() => setIsNextClicked(true)}
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
            <div className="about-content">
              <div className="about-photo">
                <img
                  src={require("../public/assets/photos/my-photo-2.jpg")}
                  alt="about-photo-1"
                  id="photo-1"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = require("../public/assets/photos/my-photo-1.jpg"))
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = require("../public/assets/photos/my-photo-2.jpg"))
                  }
                />
              </div>
              <div className="about-text">
                <p style={{ margin: 0 }}>
                  <span style={{ fontSize: "4rem" }}>M</span>y name is Victor
                  Joh, and I am currently a front-end developer at{" "}
                  <a href="https://www.voicegain.ai">Voicegain</a>, a startup in
                  Dallas providing a speech-to-text platform using deep neural
                  networks for bots, IVR, speech analytics, transcription, and
                  more. I graduated with a B.A. in Chemistry from NYU, and I
                  enjoy combining both an analytical approach with a creative
                  mindset to build products that I hope will help solve a
                  problem.
                </p>
                <p>
                  When I'm not developing applications for work or creating
                  projects for myself, I enjoy taking a nice break from life
                  with a good cigar. I also hope to travel and see more of the
                  world in the near future!
                </p>
                <div>Current Stack</div>
                <div className="tech-stack-container">
                  <div>
                    <img
                      src={require("../public/assets/logos/react.svg")}
                      alt="react-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/redux.svg")}
                      alt="redux-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/typescript.svg")}
                      alt="ts-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/javascript.svg")}
                      alt="js-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/html-5.svg")}
                      alt="html-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/css-3.svg")}
                      alt="css-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/nodejs.svg")}
                      alt="node-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/postgresql.svg")}
                      alt="postgresql-logo"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../public/assets/logos/mongodb.svg")}
                      alt="mongo-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .about-section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                min-height: calc(97vh - 2rem);
                word-break: break-word;
                padding: 2rem;
                font-size: 2rem;
                text-align: center;
                margin: 0 auto;
                color: black;
              }
              .about-section-container {
                margin-top: 1.6rem;
                width: 75%;
                padding: 4.8rem;
                background: var(--neumorphic-background-color);
                border: var(--neumorphic-border);
                border-radius: var(--neumorphic-border-radius);
                box-shadow: var(--neumorphic-top-left-box-shadow),
                  var(--neumorphic-bottom-right-box-shadow);
              }
              .section-title.about {
                margin-bottom: 3.2rem;
                display: flex;
                justify-content: space-between;
              }
              .section-title.about a > img {
                display: flex;
                padding: 1rem 1.6rem 1rem 1.6rem;
              }
              .about-content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
              }
              .about-text {
                text-align: start;
                width: 50%;
                padding: 1.6rem;
                line-height: 3.6rem;
              }
              .about-text a:link {
                color: var(--atomic-tangerine-color);
              }
              .about-photo {
                width: 35rem;
                margin-right: 1.6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
              }
              .about-photo img {
                width: 100%;
                border-radius: 1rem;
                -webkit-box-shadow: 15px 30px 86px -12px rgba(176, 160, 160, 1);
                -moz-box-shadow: 15px 30px 86px -12px rgba(176, 160, 160, 1);
                box-shadow: 15px 30px 86px -12px rgba(176, 160, 160, 1);
              }
              .tech-stack-container {
                display: flex;
                flex-wrap: wrap;
                margin-top: 1.6rem;
              }
              .tech-stack-container div {
                width: 10%;
              }
              .tech-stack-container img {
                height: 3.2rem;
                margin: 1vw;
              }
              // Large devices (desktops, less than 1200px)
              @media only screen and (max-width: 75em) {
                .about-text {
                  width: 80%;
                }
                .about-photo {
                  width: 30rem;
                  margin-bottom: 2.4rem;
                }
                .tech-stack-container div {
                  width: 10%;
                }
              }

              // Medium devices (tablets, less than 900px)
              @media only screen and (max-width: 56.25em) {
                .about-text {
                  width: 80%;
                }
              }
              //Small devices (phones, less than 600px)
              @media only screen and (max-width: 37.5em) {
                .about-section {
                  padding: 2.4rem;
                }
                .about-text {
                  width: 100%;
                }
                .tech-stack-container div {
                  width: 20%;
                }
                .tech-stack-container img {
                  height: 2.8rem;
                }
              }
              //Extra large devices (desktops, more than 1800px)
              @media only screen and (min-width: 112.5em) {
                .about-photo {
                  width: 32rem;
                }
              }
            `}
          </style>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;

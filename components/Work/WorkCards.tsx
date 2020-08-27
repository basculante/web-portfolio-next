import React, { useState } from "react";
import { WorkData } from "./WorkData";
import Link from "next/link";
import { motion } from "framer-motion";

const postVariants = {
  initial: { x: 0, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    x: -300,
    y: 0,
    opacity: 0,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const WorkCards: React.SFC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="work-cards-container">
        {WorkData.map((work, index) => (
          <div
            className="work-card-motion-container"
            onClick={() => setSelectedIndex(index)}
            key={`${work.name} - ${index}`}
          >
            <motion.div
              variants={selectedIndex === index ? postVariants : null}
            >
              <Link
                href={"/projects/[project]"}
                as={`/projects/${work.name}`}
                scroll={false}
                passHref
              >
                <div className="work-card">
                  <div className="work-card-image-container">
                    <a href="#">
                      <div
                        className="work-image"
                        style={{
                          backgroundImage: `url(${work.cardImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </a>
                    <div className="work-image-overlay">
                      <div className="work-title">{work.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}

        <style jsx>{`
          .work-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .work-card-motion-container {
            width: 30%;
          }
          .work-card {
            margin-bottom: 4.8rem;

            width: 100%;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .work-card:hover {
            transform: scale(1.02);
          }
          .work-card-image-container {
            text-align: center;
            padding: 0.8rem;
            position: relative;
            height: 25rem;
          }
          .work-card-image-container.work-image-overlay {
            opacity: 0.7;
          }
          .work-image {
            border-radius: 0.8rem;
            width: 100%;
            display: block;
            height: 25rem;
            background-position: center;
          }
          .work-image-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            opacity: 1;
            transition: 0.5s ease;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 0.8rem;
          }
          .work-title {
            color: white;
            font-weight: 400;
            font-size: 4.8rem;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            word-break: keep-all;
          }
          .work-icons-container {
            color: black;
            font-size: 3rem;
            margin-top: 0.8rem;
          }
          .work-icon {
            margin-right: 1.6rem;
            height: 2.4rem;
          }
          //Extra large devices (desktops, less than 1600px)
          @media only screen and (max-width: 100em) {
            .work-card-motion-container {
              width: 47%;
            }
            .work-title {
              font-size: 3.2rem;
            }
          }
          // Large devices (desktops, less than 1200px)
          @media only screen and (max-width: 75em) {
            .work-card-image-container {
              height: 25rem;
            }
            .work-image {
              height: 25rem;
            }
            .work-card-motion-container {
              width: 47%;
            }
            .work-title {
              font-size: 3.2rem;
            }
          }

          // Medium devices (tablets, less than 900px)
          @media only screen and (max-width: 56.25em) {
            .work-card-motion-container {
              width: 47%;
            }
            .work-title {
              font-size: 3.2rem;
            }
          }
          //Small devices (phones, less than 600px)
          @media only screen and (max-width: 37.5em) {
            .work-card-motion-container {
              width: 100%;
            }
            .work-card-image-container {
              height: 25rem;
            }
            .work-image {
              height: 25rem;
            }
            .work-title {
              top: 50%;
              font-size: 3.2rem;
            }
            .work-icon {
              height: 2.4rem;
            }
            .work-image {
            }
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default WorkCards;

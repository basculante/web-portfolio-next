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
        {WorkData.map((work, index) => {
          return (
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
                  scroll={true}
                  passHref
                >
                  <div className="work-card">
                    <div className="work-card-image-container">
                      <a href="#">
                        <div
                          className={`work-image ${work.name}`}
                          // style={{
                          //   backgroundSize: "cover",
                          //   backgroundRepeat: "no-repeat",
                          // }}
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
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkCards;

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { WorkData, IWorkData } from "../../components/Work/WorkData";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import { GetStaticProps, GetStaticPaths } from "next";
import ModalImage from "react-modal-image";

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

interface IProjectPageProps {
  project: IWorkData;
}

const ProjectPage: React.SFC<IProjectPageProps> = ({ project }) => {
  return (
    <div>
      <Head>
        <title>Victor Joh - {project[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <div className="project-section">
          <div className="project-section-container">
            <div className="section-title project">
              <div>
                <Link href="/work">
                  <a className="next-btn project" href="#">
                    <img
                      src="../assets/logos/prev-arrow.svg"
                      alt="prev-arrow"
                      height={12}
                    />
                  </a>
                </Link>
              </div>
              <div style={{ wordBreak: "normal" }}>{project[0].name}</div>
              <div style={{ visibility: "hidden" }}>
                <a className="next-btn" href="#">
                  <img
                    src="../assets/logos/next-arrow.svg"
                    alt="next-arrow"
                    height={12}
                  />
                </a>
              </div>
            </div>
            <div className="project-section-info">
              {project[0].liveSite && (
                <div>
                  <a href={project[0].liveSite}>Live Site</a>
                </div>
              )}
              {project[0].github && (
                <div>
                  <a href={project[0].github}>Github</a>
                </div>
              )}
              <div className="project-stack-container">
                {project[0].svgIcons.map((icon) => (
                  <div key={icon}>
                    <img
                      src={icon}
                      alt={`${icon}-logo`}
                      className="project-stack-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="project-section-content">
              {project[0].secondaryImages.map((image, index) => (
                <div className="project-content-container" key={image.image}>
                  <div className="project-image-container">
                    {/* <ModalImage small={image.image} large={image.image} /> */}
                    <img src={image.image} alt={`project-photo-${index}`} />
                  </div>
                  <div className="project-text-container">
                    {image.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>
        {`
          .project-section {
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
          .project-section-container {
            margin-top: 1.6rem;
            width: 75%;
            padding: 4.8rem;
            background: var(--neumorphic-background-color);
            border: var(--neumorphic-border);
            border-radius: var(--neumorphic-border-radius);
            box-shadow: var(--neumorphic-top-left-box-shadow),
              var(--neumorphic-bottom-right-box-shadow);
          }
          .section-title.project {
            margin-bottom: 3.2rem;
            display: flex;
            justify-content: space-between;
          }
          .next-btn.project {
            margin-right: 1.6rem;
          }
          .section-title.project a > img {
            display: flex;
            padding: 1rem 1.6rem 1rem 1.6rem;
          }
          .project-section-info {
            display: flex;
            flex-wrap: wrap;
          }
          .project-section a:link {
            color: var(--atomic-tangerine-color);
          }
          .project-stack-container {
            display: flex;
            margin-left: auto;
          }
          .project-stack-container div:last-child {
            margin: 0;
          }
          .project-stack-logo {
            height: 2rem;
            vertical-align: sub;
            margin: 0 1rem 0 1rem;
          }
          .project-content-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 4rem 0 4rem 0;
          }
          .project-image-container {
            width: 80%;
            overflow: hidden;
          }
          .project-image-container img {
            max-width: 100%;
            object-fit: cover;
            border-radius: 0.4rem;
          }
          .project-text-container {
            width: 80%;
            text-align: start;
          }
          // Large devices (desktops, less than 1200px)
          @media only screen and (max-width: 75em) {
            .section-title.project {
              font-size: 2.4rem;
            }
          }

          // Medium devices (tablets, less than 900px)
          @media only screen and (max-width: 56.25em) {
            .project-image-container {
              width: 95%;
            }
            .project-text-container {
              width: 95%;
            }
          }
          //Small devices (phones, less than 600px)
          @media only screen and (max-width: 37.5em) {
            .section-title.project a > img {
              padding: 1rem 0.8rem 1rem 0.8rem;
            }
            .section-title.project {
              font-size: 1.8rem;
            }
            .project-stack-container {
              margin-left: initial;
            }
          }
          //Extra large devices (desktops, more than 1800px)
          @media only screen and (min-width: 112.5em) {
            .project-image-container {
              width: 70%;
            }
            .project-text-container {
              width: 70%;
            }
            .project-stack-logo {
              height: 2.4rem;
            }
          }
        `}
      </style>
    </div>
  );
};

//Create paths that will be used
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = WorkData.map((work) => ({
    params: {
      project: work.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = WorkData.filter(
    (work) => work.name === context.params.project
  );
  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;

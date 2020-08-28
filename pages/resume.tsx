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

const Resume: React.SFC = () => {
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>Victor Joh - Resume</title>
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
        <div className="resume-section">
          <div className="resume-section-container">
            <div className="section-title resume">
              <div>
                <Link href="/work" passHref>
                  <a className="next-btn" href="#">
                    <img
                      src="./assets/logos/prev-arrow.svg"
                      alt="prev-arrow"
                      height={12}
                    />
                  </a>
                </Link>
              </div>
              <div>Resume</div>
              <div>
                <Link href="/contact" passHref>
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
            <div className="view-resume-container">
              <a href="./resume.pdf">View Resume</a>
            </div>
            <div className="resume-text">
              <div>
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                  <ul className="timeline timeline-split">
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>August, 2019</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-title-container">
                          <div>
                            <h3 className="timeline-title">Voicegain</h3>
                          </div>
                          <div className="break"></div>
                          <div
                            className="timeline-company-logo voicegain"
                            style={{
                              backgroundImage:
                                'url("./assets/logos/voicegain-logo.png/")',
                            }}
                          ></div>
                        </div>
                        <div
                          className="timeline-job-position"
                          style={{ marginBottom: "1.6rem" }}
                        >
                          <h4>Front-End Developer</h4>
                        </div>
                        <div style={{ marginBottom: "1.6rem" }}>
                          <p style={{ margin: "0", fontStyle: "italic" }}>
                            Voicegain ACP Web Portal (React, Redux, Typescript,
                            Ant Design)
                          </p>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Speech Analytics - Create speech analytics interface
                            to upload audio recordings (calls, web meetings,
                            voicemails, etc.) for transcription and analysis
                            using AI. Inspect both audio and transcript to
                            extract sentiment plus other metrics.
                          </div>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Speech-to-Text - Invoke both offline and real-time
                            STT over HTTP, gRPC, and WebSockets using speech
                            grammars as language models or large vocabulary
                            models. Create transcription review interface with
                            full playback features as well as custom acoustic
                            decibel waveform interface. Implement real-time
                            streaming using microphone capture over WebSockets
                            for audio transcription. Implement interface for
                            creating language models as well as uploading corpus
                            data for training acoustic models.
                          </div>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            RTC Callback - Enable backend web developers to
                            build interactive voice as (Voice Bot, Seech IVR,
                            phone system). Establish single realtime session and
                            interact using JSON commands and callbacks. Support
                            telophony using SIP/RTP and browser using WebRTC
                            (Freeswitch/Verto). Implement interface for
                            purchasing phone numbers using Voicegain's
                            integrated SIP provider, invoking commands to
                            answer/make calls, play prompts, and transfers of
                            calls.
                          </div>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Transcription & Captioning - Real-time transcription
                            of audio streamed using Voicegain web APIs. Used for
                            live streamed events, instant transcription of
                            lectures, talks, etc. Download transcription in
                            multiple formats (JSON, TXT, SRT, VTT, TTML).
                            Offline-transcription of recorded audio with full
                            transcription review using the transcription review
                            tool. Ability to add new words to custom vocabulary
                            language models to train acoustic models. Integrate
                            CC application for viewing of live streamed
                            transcriptions into ACP portal.
                          </div>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            MRCP ASR - Real-time speech recognition engine for
                            VoiceXML based IVR applications. Supports grammars
                            using GRXML & JSGF and provides n-best results.
                            Provides results from large vocabulary model for
                            utterances that are out of Grammar (OOG) or have low
                            confidence results. Develop GREG interface to create
                            experiments with importing of grammars to analyze,
                            tune, test, and optimize speech grammars.
                          </div>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Voicegain ACP Edge - Develop edge deployment
                            (client's machine) of ACP Web Portal.
                          </div>
                        </div>
                        <div style={{ marginBottom: "1.6rem" }}>
                          <p style={{ margin: "0", fontStyle: "italic" }}>
                            Voicegain Speechworks (React, Redux, Typescript, Ant
                            Design)
                          </p>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                              fontStyle: "normal",
                            }}
                          >
                            Develop voicegain web app for uploading audio for
                            offline transcription and transcription review with
                            custom decibel waveform data and ability to edit
                            transcriptions. Upload or create custom vocabulary
                            models, or select one of Voicegain's built-in models
                            to improve transcription results.
                          </div>
                        </div>
                        <div style={{ marginBottom: "1.6rem" }}>
                          <p style={{ margin: "0", fontStyle: "italic" }}>
                            Voicegain Single-Sign-On (React, Redux, Typescript,
                            Ant Design)
                          </p>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Develop Voicegain SSO for authentication of all of
                            voicegain's web applications.
                          </div>
                        </div>
                        <div>
                          <p style={{ margin: "0", fontStyle: "italic" }}>
                            Voicegain Customer Management Portal (React, Redux,
                            Typescript, Ant Design)
                          </p>
                          <div
                            style={{
                              marginLeft: "1rem",
                              marginBottom: "0.6rem",
                            }}
                          >
                            Develop admin portal for managing all of Voicegain's
                            customers. View various accounts and users under
                            accounts to access client information and make any
                            changes invoking Voicegain's API.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item period">
                      <div className="timeline-info"></div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h2 className="timeline-title">2019</h2>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>November 2018</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-title-container">
                          <div>
                            <h3 className="timeline-title">
                              Samsung Austin Semiconductors
                            </h3>
                          </div>
                          <div className="break"></div>
                          <div
                            className="timeline-company-logo sas"
                            style={{
                              backgroundImage:
                                'url("./assets/logos/sas-logo.png/")',
                            }}
                          ></div>
                        </div>
                        <div className="timeline-job-position">
                          <h4>QA Analyst</h4>
                        </div>
                        <p>
                          Manage participants in User Trial program with setting
                          up and testing proto-type Samsung devices.
                        </p>
                        <p>
                          Evaluate end-user reported defects to Samsung's
                          internal defect registration system providing support
                          and feedback to R&D in an effort to minimize risk
                          involving hardware related defects.
                        </p>
                        <p>
                          Coordinate with User Trial project engineers at remote
                          site locations to collect additional information
                          and/or feedback from end-users for defects requiring
                          further review.
                        </p>
                        <p>
                          Recruit users for assigned project based on the
                          specific needs and provide appropriate on-site
                          training to participants.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>July 2018</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-title-container">
                          <div>
                            <h3 className="timeline-title">
                              Cypress Semiconductors
                            </h3>
                          </div>
                          <div className="break"></div>
                          <div
                            className="timeline-company-logo cypress"
                            style={{
                              backgroundImage:
                                'url("./assets/logos/cypress-logo.png/")',
                            }}
                          ></div>
                        </div>
                        <div className="timeline-job-position">
                          <h4>Semi-Fab Test Operator</h4>
                        </div>
                        <p>
                          Operate Sort-8 prober machines in semi-fab testing
                          lab.
                        </p>
                        <p>
                          Utilize wafer test metrology equipment to verify that
                          wafers have not been damaged in previous processing
                          steps before they are packaged and shipped to clients.
                        </p>
                        <p>
                          Work with test engineers to help operate the test
                          programs required for wafer prober machines.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item period">
                      <div className="timeline-info"></div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h2 className="timeline-title">2018</h2>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>September 2015</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-title-container">
                          <div>
                            <h3 className="timeline-title">
                              Citizens Crime Commission of NYC
                            </h3>
                          </div>
                          <div className="break"></div>
                          <div
                            className="timeline-company-logo ccc"
                            style={{
                              backgroundImage:
                                'url("./assets/logos/ccc-logo.png/")',
                            }}
                          ></div>
                        </div>
                        <div className="timeline-job-position">
                          <h4>Predictive Prevention Lab Intern</h4>
                        </div>
                        <p>
                          Help develop and launch predictive prevention lab
                          initiative to promote safe cybersecurity practices.
                        </p>
                        <p>
                          Coordinate with Fordham University to create new
                          curriculum about cyber security. Reach out to
                          educational institutions to also collaborate in
                          implementing predictive prevention lab.
                        </p>
                        <p>
                          Develop idea for Impossible Passwords game, a
                          data-driven game in Unity 3D to enhance effective
                          learning in strong password protection.
                        </p>
                        <p>
                          Design infographics used to teach basic cyber security
                          practices.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item period">
                      <div className="timeline-info"></div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h2 className="timeline-title">2015</h2>
                      </div>
                    </li>

                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>September 2011</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-title-container">
                          <div>
                            <h3 className="timeline-title">
                              New York University
                            </h3>
                          </div>
                          <div className="break"></div>
                          <div
                            className="timeline-company-logo nyu"
                            style={{
                              backgroundImage:
                                'url("./assets/logos/nyu-logo.png/")',
                            }}
                          ></div>
                        </div>
                        <div className="timeline-job-position">
                          <h4>B.A. Chemistry</h4>
                        </div>
                        <p>
                          Graduate from NYU with a Bachelor of Arts in chemistry
                          (2011-2016).
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item period">
                      <div className="timeline-info"></div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h2 className="timeline-title">2011</h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .resume-section {
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
              .resume-section-container {
                margin-top: 1.6rem;
                width: 75%;
                padding: 4.8rem;
                background: #efeeee;
                border: var(--neumorphic-border);
                border-radius: var(--neumorphic-border-radius);
                box-shadow: var(--neumorphic-top-left-box-shadow),
                  var(--neumorphic-bottom-right-box-shadow);
              }
              .section-title.resume {
                margin-bottom: 3.2rem;
                display: flex;
                justify-content: space-between;
              }
              .section-title.resume a > img {
                display: flex;
                padding: 1rem 1.6rem 1rem 1.6rem;
              }
              .view-resume-container {
                text-align: start;
                margin-bottom: 1.6rem;
              }
              .view-resume-container a:link {
                color: var(--atomic-tangerine-color);
              }
              .resume-text {
                text-align: start;
              }
              .timeline {
                line-height: 1.4em;
                list-style: none;
                margin: 0;
                padding: 0;
                width: 100%;
              }
              .timeline h1,
              .timeline h2,
              .timeline h3,
              .timeline h4,
              .timeline h5,
              .timeline h6 {
                line-height: inherit;
              }

              /*----- TIMELINE ITEM -----*/
              .timeline-item {
                padding-left: 40px;
                position: relative;
              }
              .timeline-item:last-child {
                padding-bottom: 0;
              }
              .timeline-title-container {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
              }
              .timeline-job-position h4 {
                padding: 0;
                margin: 0;
              }
              .timeline-company-logo {
                height: 4rem;
                width: 4rem;
                margin-left: 1.6rem;
                border-radius: 50%;
                background: var(--gray-background-color);
                display: inline-block;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                vertical-align: middle;
              }

              /*----- TIMELINE INFO -----*/
              .timeline-info {
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 3px;
                margin: 0 0 0.5em 0;
                text-transform: uppercase;
                white-space: nowrap;
              }

              /*----- TIMELINE MARKER -----*/
              .timeline-marker {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 15px;
              }
              .timeline-marker:before {
                background: var(--light-coral-color);
                border: 3px solid transparent;
                border-radius: 10%;
                content: "";
                display: block;
                height: 15px;
                position: absolute;
                top: 1px;
                left: 0;
                width: 15px;
                transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
              }
              .timeline-marker:after {
                content: "";
                width: 3px;
                background: #ccd5db;
                display: block;
                position: absolute;
                top: 24px;
                bottom: 0;
                left: 6px;
              }
              .timeline-item:last-child .timeline-marker:after {
                content: none;
              }

              .timeline-item:not(.period):hover .timeline-marker:before {
                background: transparent;
                border: 3px solid #ff6b6b;
              }

              /*----- TIMELINE CONTENT -----*/
              .timeline-content {
                padding-bottom: 40px;
              }
              .timeline-content p:last-child {
                margin-bottom: 0;
              }

              /*----- TIMELINE PERIOD -----*/
              .period {
                padding: 0;
              }
              .period .timeline-info {
                display: none;
              }
              .period .timeline-marker:before {
                background: transparent;
                content: "";
                width: 15px;
                height: auto;
                border: none;
                border-radius: 0;
                top: 0;
                bottom: 30px;
                position: absolute;
                border-top: 3px solid #ccd5db;
                border-bottom: 3px solid #ccd5db;
              }
              .period .timeline-marker:after {
                content: "";
                height: 32px;
                top: auto;
              }
              .period .timeline-content {
                padding: 40px 0 70px;
              }
              .period .timeline-title {
                margin: 0;
              }

              /*----------------------------------------------
                  MOD: TIMELINE SPLIT
              ----------------------------------------------*/
              @media (min-width: 768px) {
                .timeline-split .timeline,
                .timeline-centered .timeline {
                  display: table;
                }
                .timeline-split .timeline-item,
                .timeline-centered .timeline-item {
                  display: table-row;
                  padding: 0;
                }
                .timeline-split .timeline-info,
                .timeline-centered .timeline-info,
                .timeline-split .timeline-marker,
                .timeline-centered .timeline-marker,
                .timeline-split .timeline-content,
                .timeline-centered .timeline-content,
                .timeline-split .period .timeline-info,
                .timeline-centered .period .timeline-info {
                  display: table-cell;
                  vertical-align: top;
                }
                .timeline-split .timeline-marker,
                .timeline-centered .timeline-marker {
                  position: relative;
                }
                .timeline-split .timeline-content,
                .timeline-centered .timeline-content {
                  padding-left: 30px;
                }
                .timeline-split .timeline-info,
                .timeline-centered .timeline-info {
                  padding-right: 30px;
                }
                .timeline-split .period .timeline-title,
                .timeline-centered .period .timeline-title {
                  position: relative;
                  left: -45px;
                }
              }

              //Small devices (phones, less than 600px)
              @media only screen and (max-width: 37.5em) {
                .resume-section {
                  padding: 2.4rem;
                }
              }
              //xSmall devices (phones, less than 450px)
              @media only screen and (max-width: 28.125em) {
                .break {
                  flex-basis: 100%;
                  height: 0;
                }
                .timeline-company-logo {
                  margin-bottom: 1.6rem;
                }
              }
            `}
          </style>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;

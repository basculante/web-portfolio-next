import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

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
      x: 300,
      opacity: 0,
    };
  },
};

const Resume: React.SFC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showNameError, setShowNameError] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const [sendMessageSuccess, setSendMessageSuccess] = useState<boolean>(false);
  const [sendMessageError, setSendMessageError] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowNameError(false);
    setShowEmailError(false);
    setShowMessageError(false);
    if (name === "") setShowNameError(true);
    if (email === "") setShowEmailError(true);
    if (message === "") setShowMessageError(true);
    if (name !== "" && email !== "" && message !== "") {
      try {
        let sendEmailResponse = await fetch("api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (sendEmailResponse.ok) {
          setSendMessageSuccess(true);
        } else throw new Error(sendEmailResponse.statusText);
      } catch (err) {
        setSendMessageError(true);
        console.log(err.message);
      }
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Head>
        <title>Victor Joh - Contact</title>
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
        <div className="contact-section">
          <div className="contact-section-container">
            <div className="section-title contact">
              <div>
                <Link href="/resume" passHref>
                  <a className="next-btn" href="#">
                    <img
                      src="./assets/logos/prev-arrow.svg"
                      alt="prev-arrow"
                      height={12}
                    />
                  </a>
                </Link>
              </div>
              <div>Contact</div>
              <div style={{ visibility: "hidden" }}>
                <a className="next-btn" href="#">
                  <img
                    src="./assets/logos/next-arrow.svg"
                    alt="next-arrow"
                    height={12}
                  />
                </a>
              </div>
            </div>
            {!sendMessageError && !sendMessageSuccess && (
              <div className="contact-form-container">
                <form onSubmit={onSubmit}>
                  <div className="input-container">
                    <div className="label-container">
                      <label htmlFor="name">Name</label>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      className="contact-input"
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                    />
                    {showNameError && (
                      <div className="contact-input-error">
                        What should I call you?
                      </div>
                    )}
                  </div>
                  <div className="input-container">
                    <div className="label-container">
                      <label htmlFor="email">Email</label>
                    </div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      className="contact-input"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    {showEmailError && (
                      <div className="contact-input-error">
                        How do I reach you?
                      </div>
                    )}
                  </div>
                  <div className="input-container">
                    <div className="label-container">
                      <label htmlFor="message">Message</label>
                    </div>
                    <textarea
                      rows={8}
                      name="message"
                      placeholder="Write a message"
                      className="contact-input"
                      onChange={(event) => setMessage(event.target.value)}
                      value={message}
                    />
                    {showMessageError && (
                      <div className="contact-input-error">
                        Don't be shy. Say hi.
                      </div>
                    )}
                  </div>
                  <div
                    className="input-container"
                    style={{ textAlign: "center" }}
                  >
                    <button type="submit" className="submit-btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            )}
            {sendMessageSuccess && (
              <div>
                <div>
                  <img
                    src="./assets/logos/happy-speech-bubble.svg"
                    alt="message-success-icon"
                    id="message-success-icon"
                    height={250}
                  />
                </div>
                <div>
                  Message has been sent! I'll get back to you as soon as
                  possible.
                </div>
                <div style={{ marginTop: "1.6rem" }}>
                  <button
                    className="submit-btn"
                    style={{ padding: "0.4rem 1rem 0.4rem 1rem" }}
                    onClick={() => {
                      clearInputs();
                      setSendMessageSuccess(false);
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            )}
            {sendMessageError && (
              <div>
                <div>
                  <img
                    src="./assets/logos/error-speech-bubble.svg"
                    alt="message-success-icon"
                    id="message-success-icon"
                    height={150}
                  />
                </div>
                <div>
                  Uh oh! There was an error sending the message. Go back and try
                  again.
                </div>
                <div style={{ marginTop: "1.6rem" }}>
                  <button
                    className="submit-btn"
                    style={{ padding: "0.4rem 1rem 0.4rem 1rem" }}
                    onClick={() => setSendMessageError(false)}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            )}
          </div>
          <style jsx>
            {`
              .contact-section {
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
              .contact-section-container {
                margin-top: 1.6rem;
                width: 75%;
                padding: 4.8rem;
                background: var(--neumorphic-background-color);
                border: var(--neumorphic-border);
                border-radius: var(--neumorphic-border-radius);
                box-shadow: var(--neumorphic-top-left-box-shadow),
                  var(--neumorphic-bottom-right-box-shadow);
              }
              .section-title.contact {
                margin-bottom: 3.2rem;
                display: flex;
                justify-content: space-between;
              }
              .section-title.contact a > img {
                display: flex;
                padding: 1rem 1.6rem 1rem 1.6rem;
              }
              .contact-form-container {
                max-width: 50rem;
                margin: 0 auto;
                text-align: start;
              }
              .label-container {
                margin-bottom: 0.8rem;
              }
              .contact-input {
                width: 100%;
                font-family: "Open Sans Condensed", sans-serif;
                font-size: 1.6rem;
                margin-bottom: 1.6rem;
                border: none;
                outline: none;
                background: none;
                font-size: 18px;
                color: #555;
                padding: 1.6rem;
                border-radius: 1.6rem;
                box-shadow: inset 8px 8px 8px #cbced1,
                  inset -8px -8px 8px #ffffff;
              }
              .contact-input:focus {
                border: solid;
                border-width: 0.2rem;
                border-color: var(--atomic-tangerine-color);
              }
              .contact-input-error {
                font-size: 1.6rem;
                color: var(--atomic-tangerine-color);
                margin-bottom: 1.6rem;
              }
              .submit-btn {
                font-size: 2rem;
                background-color: var(--atomic-tangerine-color);
                -webkit-border-radius: 60px;
                border-radius: 1rem;
                border: none;
                color: var(--baby-powder-white-color);
                cursor: pointer;
                font-family: "Open Sans Condensed", sans-serif;
                transition: transform 0.05s;
              }
              .submit-btn:active {
                transform: scale(1.1);
                background-color: var(--light-coral-color);
              }
              .submit-btn:focus {
                outline: none;
                box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.4);
              }
              .submit-btn:hover {
                background-color: var(--light-coral-color);
              }
              .contact-form-container .submit-btn {
                width: 20rem;
              }
              //Small devices (phones, less than 600px)
              @media only screen and (max-width: 37.5em) {
                .contact-section {
                  padding: 2.4rem;
                }
                .contact-input {
                  width: 90%;
                }
                #message-success-icon {
                  height: 12.8rem;
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

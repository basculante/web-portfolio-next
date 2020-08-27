import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.SFC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenu = (event) => {
    event.preventDefault();
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navbar-container">
      <a className="navigation-button" onClick={toggleMenu} href="#">
        <span className="strikethrough menu">Menu</span>
      </a>
      <div
        className="overlay"
        style={{
          width: isMenuVisible ? "100%" : "0%",
          visibility: isMenuVisible ? "visible" : "hidden",
        }}
      >
        <div className="overlay-content">
          <a href="#" onClick={toggleMenu} className="closebtn">
            <img src="../assets/logos/close-icon.svg" alt="close-icon" />
          </a>
          <Link href={"/"}>
            <a className="navigation-link">
              <span className="strikethrough">Home</span>
            </a>
          </Link>
          <Link href={"/about"}>
            <a className="navigation-link">
              <span className="strikethrough">About</span>
            </a>
          </Link>
          <Link href="/work">
            <a className="navigation-link">
              <span className="strikethrough">Work</span>
            </a>
          </Link>
          <Link href="/resume">
            <a className="navigation-link">
              <span className="strikethrough">Resume</span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="navigation-link">
              <span className="strikethrough">Contact</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="social-logos-container">
        <span>
          <a href="https://github.com/basculante">
            <img
              className="social-logo"
              src="../assets/logos/github.svg"
              alt="github-logo"
              height="35"
            />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/victor-wan-teak-joh-924203ba">
            <img
              className="social-logo"
              src="../assets/logos/linkedin.svg"
              alt="linkedin-logo"
              height="35"
            />
          </a>
        </span>
      </div>
      <style jsx>
        {`
          .navigation-button {
            position: fixed;
            transform: rotate(-90deg);
            height: auto;
            margin-top: 2.4rem;
            color: var(--black-text-color);
            font-family: "Orbitron", sans-serif;
            cursor: pointer;
          }
          .overlay {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: rgb(0, 0, 0);
            background-color: rgba(255, 141, 92, 0.9);
            overflow-x: hidden;
            transition: 0.5s;
          }
          .overlay-content {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .closebtn {
            position: absolute;
            top: 0;
            right: 0;
            margin: 2.4rem;
          }
          .navigation-link {
            margin: 1rem;
          }
          .strikethrough {
            display: inline-block;
            position: relative;
            transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
            font-size: 2.4rem;
          }
          .strikethrough:after {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            box-shadow: 0 1px rgba(255, 255, 255, 0.6);
            margin-top: -0.9em;
            background: white;
            transform-origin: center left;
            transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
          }
          .strikethrough:hover {
            color: rgba(200, 0, 0, 1);
            background: rgba(255, 189, 182, 0.3);
          }
          .strikethrough:hover:after {
            transform: scaleX(0);
            transform-origin: center right;
          }
          .strikethrough.menu {
            font-size: 1.6rem;
          }
          .strikethrough.menu:after {
            width: 0%;
            height: 0px;
          }
          .strikethrough.menu:hover {
            transform: scale(1.1);
          }
          @keyframes strikethrough {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          .navigation-link {
            font-size: 3rem;
            color: var(--baby-powder-white-color);
            text-decoration: none;
            text-transform: uppercase;
            font-family: "Orbitron", sans-serif;
            transition: all 0.4s;
          }
          .social-logos-container {
            position: absolute;
            right: 0;
            padding: 1.6rem;
          }
          .social-logo {
            cursor: pointer;
            margin-left: 0.4rem;
            margin-right: 0.4rem;
            transition: transform 0.2s;
          }
          .social-logo:hover {
            transform: scale(1.1);
          }
          // Large devices (desktops, less than 1200px)
          @media only screen and (max-width: 75em) {
          }

          // Medium devices (tablets, less than 900px)
          @media only screen and (max-width: 56.25em) {
          }

          //Small devices (phones, less than 600px)
          @media only screen and (max-width: 37.5em) {
            .social-logo {
              height: 3.2rem;
            }
            .navigation-link {
              margin: 0.4rem;
            }
          }

          //Extra large devices (desktops, more than 1800px)
          @media only screen and (min-width: 112.5em) {
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

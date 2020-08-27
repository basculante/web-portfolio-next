import React from "react";
import Head from "next/head";

const Layout: React.SFC = (props) => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Orbitron:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/207f533c53.js"></script>
      </Head>
      {props.children}
      <style jsx global>{`
        :root {
          --atomic-tangerine-color: #ff8d5c;
          --dark-blue-gray-color: #5b5f97;
          --baby-powder-white-color: #fffffb;
          --light-coral-color: #ff6b6c;
          --wild-blue-yonder-color: #b8b8d1;
          --title-font-size: 3rem;
          --gray-background-color: #dcdcdc;
          --neumorphic-background-color: #efeeee;
          --black-text-color: #585858;
          --neumorphic-top-left-box-shadow: 23px 23px 46px #cbcaca;
          --neumorphic-bottom-right-box-shadow: -23px -23px 46px #ffffff;
          --neumorphic-border: 1px solid rgba(255, 255, 255, 0.2);
          --neumorphic-border-radius: 5rem;
        }
        html {
          font-size: 62.5%;
        }
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Open Sans Condensed", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.8;
          color: var(--black-text-color);
          background: var(--neumorphic-background-color);
          z-index: 0;
          position: relative;
          overflow-x: hidden;
        }
        .section-title {
          color: var(--atomic-tangerine-color);
          font-size: var(--title-font-size);
          font-family: "Orbitron", sans-serif;
          text-transform: uppercase;
        }
        .next-btn {
          background-color: var(--atomic-tangerine-color);
          -webkit-border-radius: 60px;
          border-radius: 1rem;
          border: none;
          color: #eeeeee;
          cursor: pointer;
          display: inline-block;
          text-align: center;
          text-decoration: none;
          font-family: "Open Sans Condensed", sans-serif;
          transition: transform 0.05s;
        }
        .next-btn:focus {
          outline: grooved;
          box-shadow: none;
        }
        .next-btn:active {
          transform: scale(1.1);
        }
        @keyframes glowing {
          0% {
            background-color: var(--atomic-tangerine-color);
            box-shadow: 0 0 5px var(--atomic-tangerine-color);
          }
          50% {
            background-color: var(--light-coral-color);
            box-shadow: 0 0 10px var(--light-coral-color);
          }
          100% {
            background-color: var(--atomic-tangerine-color);
            box-shadow: 0 0 5px var(--atomic-tangerine-color);
          }
        }
        .next-btn {
          animation: glowing 2000ms infinite;
        }
        // Large devices (desktops, less than 1200px)
        @media only screen and (max-width: 75em) {
          html {
            font-size: 56.25%; // 1rem = 9px, 9/16 = 56.25%
          }
        }

        // Medium devices (tablets, less than 900px)
        @media only screen and (max-width: 56.25em) {
          html {
            font-size: 50%; // 1rem = 10px, 10px/16px = 62.5%
          }
        }

        //Small devices (phones, less than 600px)
        @media only screen and (max-width: 37.5em) {
          html {
            font-size: 50%; // 1rem = 10px, 10px/16px = 62.5%
          }
          .section-title {
            font-size: 2.4rem;
          }
        }

        //Extra large devices (desktops, more than 1800px)
        @media only screen and (min-width: 112.5em) {
          html {
            font-size: 75%; // 1rem = 12px, 12/16 = 75%
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

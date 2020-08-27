import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";

const MyApp: React.SFC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;

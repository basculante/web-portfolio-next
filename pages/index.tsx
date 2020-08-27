import Head from "next/head";
import Landing from "../components/Landing/Landing";

const Home: React.SFC = () => {
  return (
    <div className="home-page">
      <Head>
        <title>Victor Joh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <style jsx>{`
        .home-page {
        }
      `}</style>
    </div>
  );
};

export default Home;

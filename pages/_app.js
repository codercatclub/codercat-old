import "../styles/globals.css";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codercat</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="center-container">
        <Menu />
        <Component {...pageProps} />
        <SocialIcons />
      </div>
    </>
  );
}

export default MyApp;

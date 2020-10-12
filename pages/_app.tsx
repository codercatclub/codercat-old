import React, { FC } from 'react';
import "../styles/globals.css";
import SocialIcons from "../components/SocialIcons";
import Head from "next/head";

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: string[];
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Codercat</title>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="center-container">
        <Component {...pageProps} />
        <SocialIcons />
      </div>
    </>
  );
}

export default MyApp;

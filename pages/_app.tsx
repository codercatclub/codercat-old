import React, { FC } from "react";
import "../styles/globals.css";
import Head from "next/head";

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: string[];
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Codercat Studio</title>

        {/* Primary meta tags */}
        <meta name="title" content="Codercat Studio" />
        <meta
          name="description"
          content="Codercat is collective of engineers and artist who strive to make a positive social impact trough the power of modern technology and art."
        />
        <meta
          name="keywords"
          content="art, webgl, programming, activism, 3d, graphics, threejs, aframe, code, gallery, vr, webvr, virtual reality, shaders, houdinifx, visual effects, group, collective"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Codercat Studio" />
        <meta
          property="og:description"
          content="Codercat is collective of engineers and artist who strive to make a positive social impact trough the power of modern technology and art."
        />
        <meta
          property="og:image"
          content="https://codercat.tk/img/social.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Codercat Studio" />
        <meta
          property="twitter:description"
          content="Codercat is collective of engineers and artist who strive to make a positive social impact trough the power of modern technology and art."
        />
        <meta
          property="twitter:image"
          content="https://codercat.tk/img/social.jpg"
        />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="center-container">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;

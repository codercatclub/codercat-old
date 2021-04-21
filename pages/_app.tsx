import React, { FC } from 'react';
import "../styles/globals.css";
import SocialIcons from "../components/SocialIcons";
import Head from "next/head";

type MyAppProps = {
  Component: typeof React.Component;
  pageProps: string[];
};

const socialIconsUsers = [
  {
    name: 'kirill',
    github: 'https://github.com/kif11',
    instagram: 'https://instagram.com/kif11',
    twitter: 'https://twitter.com/kovalewskiy',
  },
  {
    name: 'sneha',
    github: 'https://github.com/sneha-belkhale',
    instagram: 'https://www.instagram.com/snayss/',
    twitter: 'https://twitter.com/snayyss',
  },
];

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Codercat Studio</title>

        <meta name="description" content="Codercat is collective of engineers and artist who strive to make a positive social impact trough the power of modern technology and art." />
        <meta name="keywords" content="art, webgl, programming, activism, 3d, graphics, threejs, aframe, code, gallery, vr, webvr, virtual reality, shaders, houdinifx, visual effects, group, collective" />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="center-container">
        <Component {...pageProps} />
        <SocialIcons users={socialIconsUsers} />
      </div>
    </>
  );
}

export default MyApp;

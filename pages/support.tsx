import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";

const Support = () => (
  <>
    <div className="center-container">
      <Head>
        <title>Codercat | Support Us</title>
      </Head>
      <Menu currentRoute="/support" />
      <div className="support-container">
        <p>We are independent artists and we appreciate any donation to support our work.</p>
        <a href="https://www.patreon.com/codercat" target="_blank">
          Patreon
        </a>
        <h3>BTC</h3>
        <p>bc1qu8ws3cwznyg79hxlp22kgrjn9pkqdqsew7rdu9</p>
        <img style={{ width: "150px", height: "150px" }} src="img/btc-qr.png" alt="btc-qr" />
      </div>
      <SocialIcons users={socialIconsUsers} />
    </div>
  </>
);

export default Support;

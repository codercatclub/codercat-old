import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";

const Contacts = () => (
  <>
    <div className="center-container">
      <Head>
        <title>Codercat Contact</title>
      </Head>
      <Menu currentRoute="/contact" />
      <div className="contact-container">
        <p>For collaboration, feedback or commercial enquiries contact us at</p>
        <span>
          <div>Email:</div> <b>codercatclub@gmail.com</b>
        </span>
        <span>
          <div>Telegram:</div>{" "}
          <a href="https://t.me/codercatstudio" target="_blank">
            <b>@codercatstudio</b>
          </a>
        </span>
      </div>
      <SocialIcons users={socialIconsUsers} />
    </div>
  </>
);

export default Contacts;

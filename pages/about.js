import React from "react";
import Menu from "../components/Menu";
import s from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Menu currentRoute="/about" />

      <div className={s.aboutContainer}>
        <div className={s.avatars}>
          <img
            className={s.img}
            src="img/sneha_avatar.jpg"
            alt="sneha avatar"
          />
          <img
            className={s.img}
            src="img/kirill_avatar.jpg"
            alt="kirill avatar"
          />
        </div>
        <p>
          We are a group of Computer Graphic enthusiasts, building experiences
          in cutting edge fields ranging from Virtual and Augmented Reality to
          WebVR and procedural animations and generation. Our goal is to bring
          new perspectives on social issues by using technology and art.
          <br />
          <br />
          Contact us for any collaborations.
        </p>
      </div>
    </>
  );
}

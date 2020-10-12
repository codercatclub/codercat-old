import React from "react";
import Menu from "../components/Menu";

export default function About() {
  return (
    <>
      <Menu currentRoute="/about" />
      <div className="view" id="about-view">
        <div className="main-container" id="about-container">
          <h1>About</h1>
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
      </div>
    </>
  );
}

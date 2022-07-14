import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";
import { css } from "@emotion/css";

const reel = css`
  width: 100%;
`

const link = css`
  color: #f00573;

  :visited {
    color: #b50356;
  }
`

const list = css`
  padding: 0 30% 0 0;

  * {
    margin: 12px 0 12px 0;
  }

  @media (max-width: 420px) {
    padding: 10px;
    margin: 10px;
  }
`

const leilaniInsta = "https://www.instagram.com/helloleilanifranco/";

const Reel = () => (
  <>
    <div className="center-container">
      <Head>
        <title>Codercat Reel</title>
      </Head>
      <Menu currentRoute="/reel" />
      <div>
        <video className={reel} src="video/reel.mp4" controls poster="img/reel_thumbnail.jpg" />

        <ol className={list}>
          <li><b>00:01</b> <a className={link} href="/mars-simulation-0">Mars Simulation 0</a> - Web 3D gallery experience showcasing our cyborg work from 2021 <a className={link} href="https://mars.college">Mars Collage</a> residency.</li>
          <li><b>00:20</b> <a className={link} href="/neither-ever">Neither Ever, Nor Never</a> - Live projection performance made with motion captured choreography, in collaboration with <a className={link} href={leilaniInsta}>Leilani Franco</a>.</li>
          <li><b>00:42</b> <a className={link} href="TODO">Torn</a> - Collaboration with <a className={link} href={leilaniInsta}>Leilani Franco</a> utilizing real time motion capture with Rokoko and Unity.</li>
          <li><b>00:48</b> <a className={link} href="/too-late-show">Too Late Show</a> - Collaboration with <a className={link} href="https://www.imdb.com/name/nm2972222/">Dmitry Milkin</a>. Web base promo for a TV show made with ThreeJS, HoudinitFX and Blender.</li>
          <li><b>00:55</b> <a className={link} href="https://codercat.tk/monster-within.html">Monster Within</a> - short interactive Virtual Reality experience about the unpredictable nature of social acceptance. Made with Unity and HoudiniFX.</li>
          <li><b>00:58</b> <a className={link} href="https://tenderclaws.com/vvr2">Virtual Virtual Reality 2</a> - shaders, custom Unity Render Pipeline, flying headset mechanics and more.</li>
          <li><b>01:12</b> <a className={link} href="/dream-demon">Dream Demon</a> - Web 3D experience inspired by <a className={link} href="https://www.instagram.com/dreamdemonhouse/">physical installation</a> at Bombay Beach.</li>
          <li><b>01:29</b> <a className={link} href="/another-space/">Another Space</a> - Web virtual reality gallery that highlights works of 43 artist from around the world.</li>
          <li><b>01:32</b> <a className={link} href="https://sidequestvr.com/app/226">Alchemy Painter</a> - VR color alchemy experience. Mix dynamic fluids in an intuitive and novel way using a virtual syringe.</li>
          <li><b>01:41</b> <a className={link} href="/dying-to-find">Dying to Find</a> - A moody WebVR exploration, where you find yourself stranded in the residues and routines of a past civilization. Available for Unity and Web VR.</li>
        </ol>
      </div>
      <SocialIcons users={socialIconsUsers} />
    </div>
  </>
);

export default Reel

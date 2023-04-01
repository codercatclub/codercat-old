import React, { FC } from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";
import { css } from "@emotion/css";
import { log } from "console";

const reel = css`
  width: 100%;
`

const ttl = css`
  /* font-weight: bold; */
`

const section = css`
  margin: 60px 0 60px 0;
`

const ln = css`
  color: #f00573;

  :visited {
    color: #b50356;
  }
`

const timeLink = css`
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
  :visited {
    color: #5a5a5a;
  }
`

const list = css`
  padding: 0 20% 0 0;

  * {
    margin: 12px 0 12px 0;
  }

  @media (max-width: 420px) {
    padding: 10px;
    margin: 10px;
  }
`

const leilaniInsta = "https://www.instagram.com/helloleilanifranco/";

interface TimeLinkProps {
  time: string;
  title: string;
  link?: string;
  children: JSX.Element
  videoRef: React.RefObject<HTMLVideoElement> 
}

const TimeLink: FC<TimeLinkProps> = ({time, title, link, children, videoRef}) => {
  return <li>
      <b className={timeLink} onClick={(e) => {
        const target = e.target as HTMLDivElement
        const parts = target.innerText.split(":").map(parseFloat)

        if (videoRef.current && parts.length === 2) {
          videoRef.current.currentTime = parts[0] * 60 + parts[1];
        }
      }}>{time}</b> {link ? <a className={ln} href={link} target="_blank">{title}</a> : <span className={ttl}>{title}</span>}
      {children}
    </li>
}

const Reel = () => {
  const v1 = React.createRef<HTMLVideoElement>();
  const v2 = React.createRef<HTMLVideoElement>();

  const kikiYago = <a className={ln} href="https://www.instagram.com/kiki_yago/" target="_blank">Kiki Yago</a>;

  return <>
    <div className="center-container">
      <Head>
        <title>Codercat Reel</title>
      </Head>
      <Menu currentRoute="/reel" />

      <div className={section}>
        <video className={reel} src="video/cc_reel_2023_web.mp4" controls poster="img/reel_2023_thumbnail.jpg" ref={v2} />
        <ol className={list}>
          <TimeLink time="00:01" title="Terrestrial" videoRef={v2}>
              <span> - Environment concept for Sci-Fi serries made in UE5</span>
          </TimeLink>
          <TimeLink time="00:05" title="Mother Taiga" link="https://vimeo.com/793712067" videoRef={v2}>
              <span> - Music video for {kikiYago}</span>
          </TimeLink>
          <TimeLink time="00:19" title="Stream" link="https://vimeo.com/793708930" videoRef={v2}>
              <span> - Music video for {kikiYago} made in UE5</span>
          </TimeLink>
          <TimeLink time="00:39" title="Siroiha" link="https://vimeo.com/793687207" videoRef={v2}>
              <span> - Music video for {kikiYago} using Metahuman, UE5 and HoudiniFX</span>
          </TimeLink>
          <TimeLink time="00:56" title="Torn" link="/torn" videoRef={v2}>
              <span>  - Collaboration with <a className={ln} href={leilaniInsta}>Leilani Franco</a> utilizing real time motion capture with Rokoko and Unity.</span>
          </TimeLink>
          <TimeLink time="01:06" title="Neither Ever, Nor Never" link="/neither-ever" videoRef={v2}>
              <span>  - Live projection performance made with motion captured choreography, in collaboration with <a className={ln} href={leilaniInsta} target="_blank">Leilani Franco</a></span>
          </TimeLink>
          <TimeLink time="01:13" title="Kiki Live" link="/kiki-yago-live" videoRef={v2}>
              <span> - Series of live performances in Tbilisi, Georgia for KikiYago featuring her real-time virtual avatar.</span>
          </TimeLink>
          <TimeLink time="01:38" title="Transfer at 3rd and C street" link="https://vimeo.com/794382951" videoRef={v2}>
              <span> - Exploration of VFX techniques using HoudiniFX</span>
          </TimeLink>
          <TimeLink time="01:44" title="Virtual Meditation" videoRef={v2}>
              <span> - Collaboration with Kiki on series of virtual meditation vignettes. Made with Unreal Engine.</span>
          </TimeLink>
          <TimeLink time="01:48" title="Metahuman Puppeteering" videoRef={v2}>
              <span> - Live performance using procedurally driven Metahuman rig for <a className={ln} href="https://mars.college/" target="_blank">Mars College</a></span>
          </TimeLink>
        </ol>
        Soundtrack by <a className={ln} href="https://www.youtube.com/@kostadism" target="_blank">KOSTADIS MICHAIL</a>
      </div>

      <div className={section}>
        <video className={reel} src="video/reel.mp4" controls poster="img/reel_thumbnail.jpg" ref={v1} />

        <ol className={list}>
          <TimeLink time="00:01" title="Mars Simulation 0" link="/mars-simulation-0" videoRef={v1}>
            <span> - Web 3D gallery experience showcasing our cyborg work from 2021 <a className={ln} href="https://mars.college" target="_blank">Mars Collage</a> residency.</span>
          </TimeLink>
          <TimeLink time="00:20" title="Neither Ever, Nor Never" link="/neither-ever" videoRef={v1}>
            <span>  - Live projection performance made with motion captured choreography, in collaboration with <a className={ln} href={leilaniInsta} target="_blank">Leilani Franco</a></span>
          </TimeLink>
          <TimeLink time="00:42" title="Torn" link="/torn" videoRef={v1}>
            <span>  - Collaboration with <a className={ln} href={leilaniInsta}>Leilani Franco</a> utilizing real time motion capture with Rokoko and Unity.</span>
          </TimeLink>
          <TimeLink time="00:48" title="Too Late Show" link="/too-late-show" videoRef={v1}>
            <span>  - Collaboration with <a className={ln} href="https://www.imdb.com/name/nm2972222/" target="_blank">Dmitry Milkin</a>. Web base promo for a TV show made with ThreeJS, HoudinitFX and Blender.</span>
          </TimeLink>
          <TimeLink time="00:55" title="Monster Within" link="/monster-within.html" videoRef={v1}>
            <span>  - short interactive Virtual Reality experience about the unpredictable nature of social acceptance. Made with Unity and HoudiniFX.</span>
          </TimeLink>
          <TimeLink time="00:58" title="Virtual Virtual Reality 2" link="https://tenderclaws.com/vvr2" videoRef={v1}>
            <span>  - shaders, custom Unity Render Pipeline, flying headset mechanics and more.</span>
          </TimeLink>
          <TimeLink time="01:12" title="Dream Demon" link="/dream-demon" videoRef={v1}>
            <span>  - Web 3D experience inspired by <a className={ln} href="https://www.instagram.com/dreamdemonhouse/" target="_blank">physical installation</a> at Bombay Beach.</span>
          </TimeLink>
          <TimeLink time="01:29" title="Another Space" link="/another-space" videoRef={v1}>
            <span>  - Web virtual reality gallery that highlights works of 43 artist from around the world.</span>
          </TimeLink>
          <TimeLink time="01:32" title="Alchemy Painter" link="https://sidequestvr.com/app/226" videoRef={v1}>
            <span>  - VR color alchemy experience. Mix dynamic fluids in an intuitive and novel way using a virtual syringe.</span>
          </TimeLink>
          <TimeLink time="01:41" title="Dying to Find" link="/dying-to-find" videoRef={v1}>
            <span>  - A moody WebVR exploration, where you find yourself stranded in the residues and routines of a past civilization. Available for Unity and Web VR.</span>
          </TimeLink>
        </ol>
      </div>

      <SocialIcons users={socialIconsUsers} />
    </div>
  </>
};

export default Reel

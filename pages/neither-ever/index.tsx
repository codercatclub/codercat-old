import { css, cx } from '@emotion/css'
import { useState } from 'react';
import {
  bg,
  title,
  titleContainer,
  h1,
  vid,
  secVid,
  about,
  par,
  ln,
  credits,
} from "../../css";

export default function Leilani() {
  const [muted, setMuted] = useState(true);

  return (
    <div className={bg}>
      <div className={titleContainer}>
        <h1 className={title}>.neither ever, nor never</h1>
      </div>
      <video className={vid} autoPlay muted={muted} playsInline loop controls>
        <source src="leilani/leilani.mp4" type="video/mp4"></source>
      </video>
      <div className={about}>
        <h1 className={h1}>About</h1>

        <p className={par}>
          Neither ever, nor never, a live performance piece done at <a className={ln} href='https://mars.college/' target='_blank'>Mars College</a>,
          exploring story telling through
          motion capture choreography, motion graphics, and projection mapping.
        </p>

        <p className={par}>
          We met <a className={ln} href='https://www.instagram.com/helloleilanifranco/' target='_blank'>Leilani Franco</a> at <a className={ln} href='https://mars.college/' target='_blank'>Mars College</a>,
          a 3 month long art/tech residency
          in Bombay Beach. Leilani is a crazy body contortionist who decided to bring herself into the metaverse
          with motion capture and her own Rokoko suit. We were so excited to collaborate with her, since we had
          been researching AI based motion capture and playing around with funky <a className={ln} href='https://codercat.tk/lora.html' target='_blank'>contortion avatars</a> ourselves.
        </p>

        <p className={par}>
          We wanted to create something together that would fit naturally into the architecture of Mars College,
          which is how the 5 room / 5 girl structure came about. Leilani and I wanted to tell a story of being
          trapped in emotional phases, shown through the choreography and visual effects. We were also super
          excited by the idea of her dancing live and interacting with the characters during the projection.
        </p>

        <p className={par}>
          Leilani choreographed the rooms, and then recorded the 5 rooms separately into FBX files with her
          motion capture suit. She sent them to me, and I did some quick test renders for her so that she could
          see how they all moved together.
        </p>

        <video className={secVid} src="leilani/5girl.mp4" title="Video of 5 rooms with Lora character" controls></video>

        <p className={par}>
          I was so amazed by how the individual sequences lined up perfectly, she said she just had timed it
          to the music :) I then took these files and added specific effects we had discussed together to each
          room, with some VEX wizardry in HoudiniFX.
        </p>

        <video className={secVid} src="leilani/blood.mp4" title="Single room dance render" controls></video>
        <video className={secVid} src="leilani/tentacle_flip.mp4" title="Viewport render of wire effect" controls></video>

        <p className={par}>
          We did a few iterations of motion capture recording and vfx touchups until we arrived at the final picture.
          Then I handed it off to <a className={ln} href="https://www.instagram.com/kif11/" target='_blank'>Kif</a> who beautifully
          designed the backlit lighting scheme and rendered the piece. It took 6 hours on both of our computers to
          render this 2 minute piece!
        </p>

        <p className={par}>
          On the day of performance, we gave the video to Vincent and he mapped the video to the buildings surface.
          After staring at the visuals on my computer screen for hours that week, it was amazing to see them projected
          on the wall of our "Air" building, and Leilani's live movements emotional and perfectly in sync with the graphics.
        </p>
        <h1 className={h1}>Credits</h1>
        <div className={credits}>
          <div className={par}><a className={ln} href="https://www.instagram.com/snayss/" target='_blank'>@snayss</a> - 3D effects</div>
          <div className={par}><a className={ln} href="https://www.instagram.com/helloleilanifranco/" target='_blank'>@helloleilanifranco</a> - dance, motion capture and choreography</div>
          <div className={par}><a className={ln} href="https://www.instagram.com/drmbt/" target='_blank'>@drmbt</a> - projection mapping</div>
          <div className={par}><a className={ln} href="https://www.instagram.com/kif11/" target='_blank'>@kif11</a> - lighting and rendering</div>
          <div className={par}><a className={ln} href="https://mars.college/" target='_blank'>@mars.college</a> - venue</div>
        </div>
      </div>
    </div>
  );
}

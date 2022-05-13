import { css, cx } from '@emotion/css'
import { useState } from 'react';

const bg = css`
  display: flex;
  flex-direction: column;
  background-color: #0b0b0bfc;
`;

const title = css`
  font-size: 20px;
  color: #fff;
  z-index: 1;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

const titleContainer = css`
  position: absolute;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 30px;
`

const h1 = css`
  color: #ece9e9;
  margin: 32px 0 32px 0;
`;

const vid = css`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const secVid = css`
  max-width: 100%;
  margin: 10px 0 10px 0;
`;

const about = css`
  color: #ffffffed;
  width: 50%;
  margin: 30px auto 30px auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const par = css`
  color: #ece9e9;
  line-height: 18px;
`

const ln = css`
  color: #d06dcf;
  text-decoration: underline;
`

const credits = css`
  display: flex;
  flex-direction: column;
`

export default function Leilani() {
  const [muted, setMuted] = useState(true);

  return (
    <div className={bg}>
      <div className={titleContainer}>
      <h1 className={title}>[TORN] a Realtime Mocap Performance for the Bombay Beach Biennale</h1>
      </div>
      <video className={vid} autoPlay muted={muted} playsInline loop controls>
        <source src="leilani/mocap1.mp4" type="video/mp4"></source>
      </video>
      <div className={about}>
        <h1 className={h1}>About</h1>

        <p className={par}>
          TORN, a realtime looping mocap performance piece done at <a className={ln} href='https://mars.college/' target='_blank'>Mars College</a>,
          exploring a looping system made in Unity, where our friend and contortionist <a className={ln} href='https://www.instagram.com/helloleilanifranco/' target='_blank'>Leilani Franco</a>, was able to loop and playback her motions on avatars live while wearing the Rokoko motion capture suit.
        </p>
        <img className={secVid} src="leilani/workshop.JPG"></img>

        <p className={par}>
          We had just finished working on <a className={ln} href='https://codercat.tk/neither-ever' target='_blank'>Neither Ever Nor Never</a> and were ready for the challenge of using live motion capture data in the performance, instead of making a video using pre-recorded animations. After getting the basic setup of live streaming Rokoko motion to Unity, we started thinking about ways in which Leilani could play with the avatars and her own motions.
        </p>
        <p className={par}>
          We decided on a looping controller, like the ones <a className={ln} href='https://www.youtube.com/watch?v=FJ5XUw4qHZo' target='_blank'>lone wizard musicians</a> use, for looping motion instead of audio. When she gave me a hand signal, I would stop/start recording her motions into an array of bone transforms. Once the recording period ended, the avatar would get stuck in a loop 
          of the recorded animations. We placed two of these avatars in the scene, one that she looped with her right hand, and one with her left. From there, she was able to separately control the two Avatars movements, and juxtapose it with her own live movements to create a dimensional story of conflicting internal emotions. 
        </p>
        <video className={secVid} src="leilani/mocap2.mp4" title="Live Looping Mocap Controller" controls></video>

        <p className={par}>
          We had a lot of fun recording together in the workshop with this initial setup... and decided to make an entire Army for Leilani to control, playing with different army formations and delay effects. 
        </p>
        <video className={secVid} src="leilani/mocap3.mp4" title="Live Looping Army" controls></video>

        <p className={par}>
          I programmed a 6 minute sequence in Unity hooking up a soundtrack and some visual scene transitions, and after a few rehearsals we were so excited to play it live at the <a className={ln} href='http://www.bombaybeachbiennale.org/' target='_blank'>Bombay Beach Biennale</a>. Our location was remote, 
          on top of a shipping container, so we took about one week of figuring out logistics, making sure all devices were able to connect to each other without internet, and making sure we had our own reliable power supply, lighting, projector, and speakers at the location.
          At the end of all this preparation, we had a traveling Golf Cart that was fully equipped to project live performed mocap at a location near you:)  
        </p>
        <img className={secVid} src="leilani/golfcart.JPG" title="Fully Functional"></img>
        <img className={secVid} src="leilani/behindthescene.JPG" title="Fully Functional"></img>
        <img className={secVid} src="leilani/pose1.JPG"></img>
        <img className={secVid} src="leilani/pose2.JPG"></img>

        <h1 className={h1}>Credits</h1>
        <p className={credits}>
          <div><a className={ln} href="https://www.instagram.com/snayss/" target='_blank'>@snayss</a> - Realtime Unity and graphics dev</div>
          <div><a className={ln} href="https://www.instagram.com/helloleilanifranco/" target='_blank'>@helloleilanifranco</a> - Dance, realtime motion capture and choreography</div>
          <div><a className={ln} href="https://www.instagram.com/kif11/" target='_blank'>@kif11</a> - Environment artist and on-set director</div>
          <div><a className={ln} href="https://goo.gl/maps/PrHoiPLQ7RHfkK8s6" target='_blank'>Bombay Beach Drive-In</a> - venue</div>
        </p>
      </div>
    </div>
  );
}

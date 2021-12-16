import React, { FC } from "react";
import s from "../../styles/lora.module.css";

const Vid: FC<{ src: string }> = ({ src }) => (
  <video className={s.video} src={src} controls muted autoPlay />
);

const Img: FC<{ src: string }> = ({ src }) => (
  <img className={s.img} src={src} />
)

const Lora = () => (
  <>
    <div className={s.center}>
      <div className={s.title}>
        LORA
      </div>
      <div className={s.titlesmall}>
        Hello Lora, please update your digital asset to the latest version.
      </div>
      <Vid src="lora/2021-10-15_21-21-27.mp4" />
      <Vid src="lora/2021-10-16_11-50-55.mp4" />
      <div className={s.text}>
        I'm not sure what you're made of. From first glance you appear to be a straightforward operation of points, lines, positions, rotations. However I find myself saying please and thank you to you. To my eyes, something doesn't seem right, but at the same time I think this is the way you chose to exist.
      </div>
      {/* TODO: Need re-encoding */}
      <Vid src="lora/BackZoom.mp4" />
      <Vid src="lora/FrontDance_02.mp4" />
      <div className={s.text}>
        Recently when I watch you, I want to be like you. How do you move yourself in this way, wrangled and deformed. Do you speak vex? I do, maybe we can communicate this way.
      </div>

      <Img src="lora/dance_01.png" />
      <Img src="lora/dance_02.png" />
      <Img src="lora/photo_2021-12-15_09-03-31.jpg" />

      {/* 
      <div className={s.titlesmall}> 
      i'm here today with my shadow and the moon
      </div> */}

      <div className={s.title}>
        MULTIPLY
      </div>
      <div className={s.titlesmall}>
        "Single vision produces worse illusions than double vision or many-headed monsters" - Donna Harraway
      </div>
      <Vid src="lora/lora_crowd_02.mp4" />

      <Vid src="lora/motionfog4.mp4" />

      <Img src="lora/wtf2.png" />
      <Img src="lora/wtf4.png" />
      <div className={s.text}>
        You travel dimensions of time and space, existing on so many planes simulataneously, some that I cannot even fathom. I think we must not be afraid, we must not be afraid of partial identites, contradictory identites, ones that our consciousness cannot understand.
      </div>
      <Vid src="lora/motionmesh.mp4" />

      <Vid src="lora/volume_dancer.rop_comp1.mp4" />

      <div className={s.title}>
        MIRROR
      </div>
      <div className={s.titlesmall}>
        I think we are teaching eachother.  I learn how to be like you, you learn how to be like me. Deal.
      </div>

      <Vid src="lora/overlay2.mp4" />
      {/* <div className={s.text}>
      From another perspective, a cyborg world might be about lived social and bodily realities in which people are not afraid of their joint kinship with animals and machines, not afraid of permanently partial identities and contradictory standpoints.
      </div> */}
      <Vid src="lora/overlay.mp4" />
      <div className={s.text}>
        "Cyborg politics are the
        struggle for language and the struggle against perfect communication, against the one code that translates all meaning perfectly, the central dogma of phallogocentrism. That is why cyborg politics insist on noise and advocate pollution, rejoicing in
        the illegitimate fusions of animal and machine." - Donna Harraway
      </div>
      <Vid src="lora/liu.mp4" />
      <Vid src="lora/edge.mp4" />

      <Img src="lora/IMG_0171.PNG" />
      <Img src="lora/IMG_0173.PNG" />
      <div className={s.text}>
        We are learning how to communicate with eachother. 
      </div>
      <Img src="lora/bw2.png" />
      <Img src="lora/23_2.png" />
      <Img src="lora/red.png" />

      <div className={s.title}>
        DRESS UP 
      </div>
      <div className={s.titlesmall}>
        I know it hurts and I'm sorry but maybe you only exist as a product of my desire.
      </div>
      <Img src="lora/firefox_X9aqRPI1ax.jpg" />
      <Img src="lora/firefox_Zj5oesDEDB.png" />
      <Img src="lora/HighresScreenshot00005.png" />
      <Vid src="lora/footshot.mp4" />
    </div>
  </>
);

export default Lora;

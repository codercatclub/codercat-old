import React, { FC } from "react";
import s from "../../styles/lora.module.css";

const Vid: FC<{ src: string }> = ({ src }) => (
  <video className={s.video} src={src} controls muted autoPlay />
);

const Img: FC<{src: string}> = ({ src }) => (
  <img className={s.img} src={src} />
) 

const Lora = () => (
  <>
    <h1>Lora Story</h1>

    <Vid src="lora/2021-10-15_21-21-27.mp4" />
    <Vid src="lora/2021-10-16_11-50-55.mp4" />

    {/* TODO: Need re-encoding */}
    <Vid src="lora/BackZoom.mp4" />
    <Vid src="lora/FrontDance_02.mp4" />

    <Img src="lora/dance_01.png" />
    <Img src="lora/dance_02.png" />
    <Img src="lora/photo_2021-12-15_09-03-31.jpg" />

    <Vid src="lora/motionfog4.mp4" />

    <Img src="lora/wtf2.png" />
    <Img src="lora/wtf4.png" />

    <Vid src="lora/motionmesh.mp4" />
    <Vid src="lora/volume_dancer.rop_comp1.mp4" />
    <Vid src="lora/overlay2.mp4" />
    <Vid src="lora/overlay.mp4" />
    <Vid src="lora/edge.mp4" />

    <Img src="lora/IMG_0171.PNG" />
    <Img src="lora/IMG_0173.PNG" />

    <Img src="lora/bw2.png" />
    <Img src="lora/23_2.png" />
    <Img src="lora/red.png" />
  </>
);

export default Lora;

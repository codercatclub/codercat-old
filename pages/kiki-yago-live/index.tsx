import { css, cx } from "@emotion/css";
import { useState } from "react";
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
  caption
} from "../../css";

export default function KikiYago() {
  const [muted, setMuted] = useState(true);

  return (
    <div className={bg}>
      <div className={titleContainer}>
        <h1 className={title}>
          [Kiki Yago Live] a Realtime Face Capture/Musical Performance, Physical x Metaverse, Tbilisi 2022
        </h1>
      </div>
      <video className={vid} autoPlay muted={muted} playsInline loop controls>
        <source src="kikiyago/reel.mp4" type="video/mp4"></source>
      </video>
      <div className={about}>
        <h1 className={h1}>About</h1>

        <div className={par}>
          Kiki Yago Live, a realtime face capture and musical performance that was exhibited in 5 different venues in Tbilisi.
          We explored live stage visuals in Unreal Engine 5, bringing a metahuman to life with the facial expressions of the live performing
          {" "}<a
            className={ln}
            href="https://www.instagram.com/xenofontova_dasha/"
            target="_blank"
          >
            Xenofontova Dasha
          </a>{" "}.
        </div>


        <div className={par}>
          Over the previous 6 months, Dasha and Codercat had been developing the Kiki Yago project. Kiki Yago is a poetess, who creates music and
          casts high speed spells to actively use the multidimensionality of our mind. She presents the feeling of being uploaded to the Metaverse
          and recieving every fragment of information in just a few milliseconds.
          <br></br>
          <video
            className={secVid}
            src="kikiyago/Meditation3.mp4"
            title="kikiyago"
            controls
          ></video>
          <div className={caption}>
            Clip from Kiki Yago's meditation series, wisdom from UE5.
          </div>
          <br></br>
          We expanded on her story and desires by creating music videos and meditation clips. Dasha would record herself
          singing her tracks rapidly using a Face Capture application on her iPhone, and send the motion data via Telegram for us to then transfer to the metahuman Kiki Yago.
          If you are curious about the details, check out this blog post I wrote about our first music video{" "}

          <a
            className={ln}
            href="https://medium.com/@snayss/on-set-with-a-metahuman-95ed59e55a63"
            target="_blank"
          >
            here
          </a>!

        </div>

        <video
          className={secVid}
          src="kikiyago/rehearsals.mp4"
          title="kikiyago"
          controls
        ></video>
        <div className={caption}>
          Dasha and Kiki meet in person for the first time, at Cyber Camp in Tbilisi.
        </div>
        <br></br>
        <div className={par}>
          After 6 months of collaborating remotely, we were overwhelmed with excitement when
          Dasha said she would come stay with us in Tbilisi Georgia, for a 3 month cyber camp! The idea was to spend 3 months living, creating, playing, and working together -- with a focus on developing the first live
          concert/performance of Kiki Yago!
          <br></br>
          We started planning for the show by creating a track list --  Dasha arranged the songs starting with the
          slow, vitalizing, birthing moment "Mother Taiga", transitioning into the becoming of self with "Ya Kiki",
          then into the rapid lyrical madness of "Siroiha" and "Koni", and ending with dance beats like "Utro" to make the crowd get up and (gabber).
          <img
            className={secVid}
            src="kikiyago/screen.png"
            title="Fully Functional"
          ></img>
          <div className={caption}>
            Screenshot from our Unreal Engine live stage visual setup, we projected straight from play mode at the show.
          </div>
          <br></br>
          Then Codercat matched this progression with a series of visual concepts from previous music videos and new works that could run
          in a realtime Unreal Engine scene at atleast 30FPS (this quickly eliminated our forest scene from
          {" "}
          <a
            className={ln}
            href="https://www.youtube.com/watch?v=nM1e2lYzPbk"
            target="_blank"
          >
            "STR3AM"
          </a>{" "}
          ).
          <br></br>
          After we came up with a scene list, we started to build a live
          VJ setup in Unreal Engine. We duplicated the chosen scenes from pre-existing videos and refactored them into
          scenes that could be used live. We built a few controls to VJ live during the show, such as switching scenes, changing camera angles, lighting
          scenarios, IK Controls, and shader effects.
          <img
            className={secVid}
            src="kikiyago/hackspace.jpg"
            title="Fully Functional"
          ></img>
          <div className={caption}>
            One of our first rehearsals at F0RTHSP4CE. Testing sound, visuals, and face capture in different lighting settings.
          </div>
          <br></br>
          At the end of this first iteration, we set up our first rehearsal in a local hackerspace,

          {" "}
          <a
            className={ln}
            href="https://f0rth.space/"
            target="_blank"
          >
            F0RTHSP4CE
          </a>{" "}

          just a few minutes from the house.
          The hackerspace had an awesome basement with sound equipment and a empty white wall for our projection visuals.
          <br></br>
          This was our moment to rehearse the face capture in a dark club environment. We set up a selfie tripod ( which we somehow manifested on
          the streets of Tbilisi ), and attached some lights so that Dasha's face would stay lit and trackable.
          Originally we thought to have Dasha and Kiki both center stage, but weird recursive things happened when
          the face capture application would see the projection of Kiki and detect it as a face.. :)

          <img
            className={secVid}
            src="kikiyago/kikistuck.jpg"
            title="Fully Functional"
          ></img>
          <div className={caption}>
            The face of Kiki Yago when she looks at herself through the face capture application.
          </div>
          <br></br>
          Our amazing musician friend and Kiki Yago Collaborator, She Monkey, joined the Team as a DJ / sound mixer -- and we ran through the whole set!
          With some iterations on placement, lighting, and network issues, the live face
          capture seemed to be working pretty smoothly and synced to Dasha's vocals! And of course, hearing Dasha sing these songs that we had
          been working with, live, was really exciting and energizing.

          <video
            className={secVid}
            src="kikiyago/mouthonly.mp4"
            title="Fully"
            controls
          ></video>
          <div className={caption}>
            Testing testing testing.
          </div>
          <br></br>
          After two weeks of rehearsals and building on our VJ setup, we were ready to hit the venues of Tbilisi:) We played 5 shows, some under bridges, some in basements,
          and some in strange party houses far away from the city. We cheers with some cha-cha, and brought our energy to each show. Best team ever, and we can't wait to reunite:)
        </div>

        <img className={secVid} src="kikiyago/stage.jpg"></img>
        <div className={caption}>
          Stage info from the organizor of Secret Place
        </div>
        <br></br>
        <img className={secVid} src="kikiyago/stage2.jpg"></img>
        <div className={caption}>
          Stage placement ideas for the organizor of Monkey Radio x WAP Point
        </div>
        <br></br>
        <img className={secVid} src="kikiyago/codercat.jpg"></img>
        <div className={caption}>
          Codercat wearing Kiki Merch, flying away after a beautiful 3 months with the Kiki Yago team.
        </div>
        <br></br>
        <h1 className={h1}>Credits</h1>
        <div className={credits}>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/snayss/"
              target="_blank"
            >
              @snayss
            </a>{" "}
            - Realtime Unreal Engine and graphics dev
          </div>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/xenofontova_dasha/"
              target="_blank"
            >
              @xenofontova_dasha
            </a>{" "}
            - Vocals, realtime face capture
          </div>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/kif11/"
              target="_blank"
            >
              @kif11
            </a>{" "}
            - Environment artist and on-set director
          </div>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/destroyer4destroyer/"
              target="_blank"
            >
              @destroyer4destroyer
            </a>{" "}
            - DJ, sound mixer
          </div>
        </div>
      </div>
    </div>
  );
}

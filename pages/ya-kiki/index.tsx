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
} from "../../css";

export default function YaKiki() {
  const [muted, setMuted] = useState(true);

  return (
    <div className={bg}>
      <div className={titleContainer}>
        <h1 className={title}>
        </h1>
      </div>
      <video className={vid} autoPlay muted={muted} playsInline loop controls>
        <source src="https://codercat.tk/yakiki.mp4" type="video/mp4"></source>
      </video>
      <div className={about}>
        <h1 className={h1}>About</h1>

        <p className={par}>
          Above is a music video for the single YA KIKI, by the Poetess//Princessa//Gadgetessa {" "}
          <a className={ln} href="https://open.spotify.com/artist/737sId8WV5FusGceSA5gws" target="_blank">
            Kiki Yago
          </a>
          . A Metahuman whispering cyber mantras to you from the digital realities of Unreal Engine 5. Come closer my friend with a sweet face, touch her feathers, she wants to tell you something about herself.
        </p>
        <h1 className={h1}>Credits</h1>
        <div className={credits}>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/kiki_yago/"
              target="_blank"
            >
              @kiki_yago
            </a>{" "}
            - Musician and Actress
          </div>
          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/snayss/"
              target="_blank"
            >
              @snayss
            </a>{" "}
            - Unreal Engine Development
          </div>

          <div className={par}>
            <a
              className={ln}
              href="https://www.instagram.com/kif11/"
              target="_blank"
            >
              @kif11
            </a>{" "}
            - Editor
          </div>
          <div className={par}>
            <a
              className={ln}
              href="https://www.unrealengine.com/"
              target="_blank"
            >
              Unreal Engine 5
            </a>{" "}
            - Venue
          </div>
        </div>
      </div>
    </div>
  );
}

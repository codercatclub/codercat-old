import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import path from "path";
import fs from "fs";
import { pipe, flow, identity } from "fp-ts/function";
import * as D from "io-ts/Decoder";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import * as N from "fp-ts/number";

const gridElementSize = "256px";

const container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${gridElementSize}, 1fr));
`;

const item = css`
  overflow: hidden;
  position: relative;
  background-color: red;
  width: 100%;
  height: ${gridElementSize};
`;

const popupStyle = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: white;
  object-fit: contain;
`;

interface Props {
  images: Image[];
}

const MediaItem: FC<{ uri: string; fit: string }> = ({ uri, fit }) => {
  const image = css`
    display: block;
    max-width: 100%;
    object-fit: ${fit};
    width: 100%;
    height: 100%;
  `;

  switch (uri.split(".").pop()) {
    case "webp":
    case "jpg":
      return <img src={uri} alt={uri} className={image} />;

    case "mp4":
      return <video src={uri} className={image} controls />;

    default:
      return <video src={uri} className={image} controls />;
  }
};

const Gallery: FC<Props> = ({ images }) => {
  const [popup, setPopup] = useState(false);
  const [popupURI, setPopupURI] = useState("");

  const imagesEl = images.map((i, idx) => (
    <div
      className={item}
      key={idx}
      onClick={() => {
        setPopup((prev) => !prev);
        setPopupURI(i.uri);
      }}
    >
      <MediaItem uri={i.uri} fit={"cover"} />
    </div>
  ));

  return (
    <>
      {popup ? (
        <div
          className={popupStyle}
          onClick={() => {
            setPopup((prev) => !prev);
            setPopupURI("");
          }}
        >
          <MediaItem uri={popupURI} fit={"contain"} />
        </div>
      ) : null}
      <div className={container}>{imagesEl}</div>
    </>
  );
};

export const Posts = D.array(
  D.struct({
    media: D.array(
      D.struct({
        uri: D.string,
        creation_timestamp: D.number,
      })
    ),
  })
);

export type Posts = D.TypeOf<typeof Posts>;

interface Image {
  uri: string;
  created: number;
  year: number;
}

const basePath = "instagram";

const readAndDecode = (path: fs.PathOrFileDescriptor): E.Either<D.DecodeError, Posts> =>
  pipe(
    fs.readFileSync(path).toString(),
    JSON.parse, // Need safe JSON.parse for some reason J.parse doesn't work
    Posts.decode
  );

const postsToImages = (posts: Posts) =>
  posts.reduce(
    (prev, cur) => [
      ...prev,
      ...cur.media.map((i) => ({
        uri: path.join("/", basePath, i.uri),
        created: i.creation_timestamp,
        year: yearFromPath(i.uri),
      })),
    ],
    [] as Image[]
  );

const filterByYear = (year: string) => (i: Image[]) => i.filter((a) => a.year == parseInt(year));
const sortChronological = (i: Image[]) => [...i].sort((a, b) => (a.created > b.created ? -1 : 0));

const yearFromPath = (filePath: string): number => {
  const parts = filePath.split("/");
  if (parts.length < 2) {
    return 0;
  }

  return parseInt(parts[2].slice(0, 4));
};

const postPath = path.join("/Users/kif/pr/codercat/public/instagram", "content/posts_1.json");

export async function getStaticProps({ params }: { params: { year: string } }) {
  const images = pipe(
    readAndDecode(postPath),
    E.map(flow(postsToImages, filterByYear(params.year), sortChronological)),
    E.foldW(console.log, identity)
  );

  return {
    props: {
      images,
    },
  };
}

export async function getStaticPaths() {
  const paths = pipe(
    readAndDecode(postPath),
    E.map(
      flow(
        postsToImages,
        A.map((i) => i.year),
        A.uniq(N.Eq),
        A.map((i) => ({ params: { year: i.toString() } }))
      )
    ),
    E.foldW(console.log, identity)
  );

  return {
    paths,
    fallback: false,
  };
}

export default Gallery;

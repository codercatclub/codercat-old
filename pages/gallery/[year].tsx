import React, { FC } from "react";
import { css } from "@emotion/css";
import { pipe, flow } from "fp-ts/function";
import { Image, readAndDecode, sortChronological, filterByYear, postsToImages, postPath } from "../../utils/server";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import * as N from "fp-ts/number";
import MediaItem from "../../components/Gallery/MediaItem";
import { idFromUri } from "./post/[id]";

const gridElementSize = "256px";

const container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${gridElementSize}, 1fr));
  grid-gap: 2px;
`;

const item = css`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const popupStyle = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  object-fit: contain;
`;

interface Props {
  images: Image[];
}

const Gallery: FC<Props> = ({ images }) => {
  const imagesEl = images.map((i, idx) => (
    <div className={item} key={idx}>
      <a href={"post/" + idFromUri(i.uri)}>
        <MediaItem uri={i.uri} title={i.title} fit={"cover"} />
      </a>
    </div>
  ));

  return (
    <div>
      <div className={container}>{imagesEl}</div>
    </div>
  );
};

export async function getStaticProps({ params }: { params: { year: string } }) {
  const images = pipe(
    readAndDecode(postPath),
    E.map(flow(postsToImages, filterByYear(params.year), sortChronological)),
    E.getOrElse(() => [] as Image[])
  );

  return {
    props: {
      images,
    },
  };
}

interface StaticPaths {
  params: { year: string };
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
    E.getOrElse((e) => {
      console.log("[-] Error: ", e);
      return [] as StaticPaths[];
    })
  );

  return {
    paths,
    fallback: false,
  };
}

export default Gallery;
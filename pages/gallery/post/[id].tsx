import React, { FC } from "react";
import { css } from "@emotion/css";
import { pipe, flow, identity } from "fp-ts/function";
import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as E from "fp-ts/Either";
import * as S from "fp-ts/string";
import { Image, readAndDecode, sortChronological, filterByYear, postsToImages, postPath } from "../utils";
import MediaItem from "../../../components/Gallery/MediaItem";

interface Props {
  image: Image;
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Post: FC<Props> = ({ image }) => {
  return (
    <div className={container}>
      <MediaItem uri={image.uri} fit={"contain"} title={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

interface StaticProps {
  params: { id: string };
}

export async function getStaticProps({ params }: StaticProps) {
  const image = pipe(
    readAndDecode(postPath),
    E.map(
      flow(
        postsToImages,
        A.findFirst((i) => i.uri.endsWith(params.id.replace("-", "/"))),
        O.foldW(
          () => "no result", // onNone handler
          (head) => head
        )
      )
    ),
    E.foldW(console.log, identity)
  );

  return {
    props: {
      image,
    },
  };
}

export async function getStaticPaths() {
  const paths = pipe(
    readAndDecode(postPath),
    E.map(
      flow(
        postsToImages,
        A.map((i) => {
          const id = i.uri.split("/").slice(-2).join("-");
          return id || "";
        }),
        A.uniq(S.Eq),
        A.map((i) => ({ params: { id: i } }))
      )
    ),
    E.foldW(console.log, identity)
  );

  return {
    paths,
    fallback: false,
  };
}

export default Post;

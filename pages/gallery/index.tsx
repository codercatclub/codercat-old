import React, { FC } from "react";
import { css } from "@emotion/css";
import { pipe, flow } from "fp-ts/function";
import { readAndDecode, postsToImages, postPath } from "../../utils/server";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import * as N from "fp-ts/number";

const gridElementSize = "256px";

const container = css``;

const item = css`
  margin: 8px;
`;

type Countable = [string, number];

interface Props {
  years: Countable[];
}

const GalleryHome: FC<Props> = ({ years }) => {
  const links = years.map((i, idx) => (
    <div className={item}>
      <a href={"gallery/" + i[0]}>
        {i[0]} - {i[1]} photos
      </a>
    </div>
  ));

  return <div className={container}>{links}</div>;
};

export async function getStaticProps() {
  const allYears = pipe(
    readAndDecode(postPath),
    E.map(
      flow(
        postsToImages,
        A.map((i) => i.year),
        A.sort(N.Ord),
        A.map((i) => i.toString())
      )
    ),
    E.getOrElse((e) => {
      console.log("[-] Error: ", e);
      return [] as string[];
    })
  );

  const years: Countable[] = pipe(
    allYears.reduce<Map<string, number>>((a, b) => a.set(b, (a.get(b) || 1) + 1), new Map()),
    (i) => i.entries(),
    (i) => Array.from<Countable>(i),
  )

  return {
    props: {
      years,
    },
  };
}

export default GalleryHome;

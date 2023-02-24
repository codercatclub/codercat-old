import path from "path";
import fs from "fs";
import * as D from "io-ts/Decoder";
import * as E from "fp-ts/Either";
import * as A from "fp-ts/Array";
import * as S from "fp-ts/String";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { ReadonlyNonEmptyArray } from "fp-ts/lib/ReadonlyNonEmptyArray";

export const basePath = "instagram";
export const postPath = path.join("/Users/kif/pr/codercat/public/instagram", "content/posts_1.json");

export type Post = D.TypeOf<typeof Post>;
export type Posts = D.TypeOf<typeof Posts>;

export interface Image {
  title: string;
  uri: string;
  created: number;
  year: number;
}

export const defaultImage: Image = {
  title: "",
  uri: "",
  created: 0,
  year: 0,
};

const Post = D.struct({
  uri: D.string,
  creation_timestamp: D.number,
  title: D.string,
});

export const Posts = D.array(
  D.struct({
    media: D.array(Post),
  })
);

const checkError = (e: unknown) => (e instanceof Error ? e : new Error("unknown error"));
const readFile = (path: string) => E.tryCatch(() => fs.readFileSync(path).toString(), checkError);
const decodeJSON = (s: string) => E.tryCatch(() => JSON.parse(s), checkError);
export const readAndDecode = (path: string) => pipe(path, readFile, E.chain(decodeJSON), E.chainW(Posts.decode));

export const postsToImages: (p: Posts) => Image[] = A.reduce([] as Image[], (acc, cur) => [
  ...acc,
  ...pipe(
    cur.media, // This could fail but can not figure out how to deal with Option
    A.map((i) => ({
      uri: path.join("/", basePath, i.uri),
      created: i.creation_timestamp,
      year: yearFromPath2(i.uri),
      title: i.title,
    }))
  ),
]);

export const filterByYear = (year: string) => (i: Image[]) => i.filter((a) => a.year == parseInt(year));
export const sortChronological = (i: Image[]) => [...i].sort((a, b) => (a.created > b.created ? -1 : 0));

const valueAtIndex = (idx: number) => (arr: ReadonlyNonEmptyArray<string>): O.Option<string> => {
  return O.fromNullable(arr[idx]);
}

const yearFromPath2 = (filePath: string): number => {
  return pipe(
    filePath,
    S.split("/"),
    valueAtIndex(2),
    O.map(i => i.slice(0, 4)),
    O.map(i => parseInt(i)),
    O.getOrElse(() => 0)
  );
};

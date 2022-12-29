import path from "path";
import fs from "fs";
import * as D from "io-ts/Decoder";
import { pipe } from "fp-ts/function";

export const basePath = "instagram";
export const postPath = path.join("/Users/kif/pr/codercat/public/instagram", "content/posts_1.json");

export type Posts = D.TypeOf<typeof Posts>;

export interface Image {
  title: string;
  uri: string;
  created: number;
  year: number;
}

export const Posts = D.array(
  D.struct({
    media: D.array(
      D.struct({
        uri: D.string,
        creation_timestamp: D.number,
        title: D.string,
      })
    ),
  })
);

export const readAndDecode = (path: fs.PathOrFileDescriptor): E.Either<D.DecodeError, Posts> =>
  pipe(
    fs.readFileSync(path).toString(),
    JSON.parse, // Need safe JSON.parse for some reason J.parse doesn't work
    Posts.decode
  );

export const postsToImages = (posts: Posts) =>
  posts.reduce(
    (prev, cur) => [
      ...prev,
      ...cur.media.map((i) => ({
        uri: path.join("/", basePath, i.uri),
        created: i.creation_timestamp,
        year: yearFromPath(i.uri),
        title: i.title,
      })),
    ],
    [] as Image[]
  );

export const filterByYear = (year: string) => (i: Image[]) => i.filter((a) => a.year == parseInt(year));
export const sortChronological = (i: Image[]) => [...i].sort((a, b) => (a.created > b.created ? -1 : 0));

const yearFromPath = (filePath: string): number => {
  const parts = filePath.split("/");
  if (parts.length < 2) {
    return 0;
  }

  return parseInt(parts[2].slice(0, 4));
};

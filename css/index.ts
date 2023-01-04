import { css, cx } from "@emotion/css";

export const bg = css`
  display: flex;
  flex-direction: column;
  background-color: #0b0b0bfc;
`;

export const title = css`
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  z-index: 1;
`;

export const titleContainer = css`
  position: absolute;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 30px;
`;

export const h1 = css`
  color: #ece9e9;
  margin: 32px 0 32px 0;
  line-height: 24px;
`;

export const vid = css`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const secVid = css`
  max-width: 100%;
  margin: 10px 0 10px 0;
`;

export const about = css`
  color: #ffffffed;
  width: 50%;
  margin: 30px auto 30px auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
export const caption = css`
  color: grey;
  width: 50%;
  font-size: 16px;
  margin: 1px auto 1px auto;
  text-align: center;
`;
export const par = css`
  color: #ece9e9;
  line-height: 24px;
  font-size: 18px;
`;

export const ln = css`
  color: #d06dcf;
  text-decoration: underline;
`;

export const credits = css`
  display: flex;
  flex-direction: column;
`;

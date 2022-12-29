import React, { FC, useState } from "react";
import { css } from "@emotion/css";

interface MediaItemProps {
  uri: string;
  title: string;
  fit: string;
  onImageClick?: () => void;
}

const MediaItem: FC<MediaItemProps> = ({ title, uri, fit, onImageClick }) => {
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
      return <img title={title} src={uri} alt={uri} className={image} onClick={onImageClick} />;

    case "mp4":
      return <video src={uri} className={image} controls />;

    default:
      return <video src={uri} className={image} controls />;
  }
};

export default MediaItem;

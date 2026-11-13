import { ImageLoader } from "next/image";
const imageLoader: ImageLoader = ({ src, width, quality }) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}w=${width}&q=${quality || 85}`;
};

export default imageLoader;

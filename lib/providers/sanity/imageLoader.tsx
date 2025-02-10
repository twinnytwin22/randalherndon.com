import { ImageLoader } from "next/image";
const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};

export default imageLoader;

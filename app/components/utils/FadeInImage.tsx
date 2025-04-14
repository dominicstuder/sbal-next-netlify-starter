import React, { useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "./ObserverHook"; // Adjust the path to your hook
import styles from "./FadeInImage.module.css";

interface FadeInImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  rootMargin?: string;
  datacursor: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  src,
  alt,
  width,
  height,
  rootMargin = "-50px",
  datacursor,
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(imgRef, rootMargin);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Set "hasBeenVisible" to true when the image is first seen
  if (isVisible && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  return (
    <div
      ref={imgRef}
      // className={`${styles.imageWrapper} ${hasBeenVisible ? styles.visible : ""} grayscale scale-[.7] hover:grayscale-0 hover:scale-[.8] `}
      className={`${styles.imageWrapper} ${hasBeenVisible ? styles.visible : ""}  `}

      data-cursor={datacursor} // ✅ Keeps the datacursor attribute
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default FadeInImage;

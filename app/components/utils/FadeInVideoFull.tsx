import React, { useRef } from 'react';
import { useInView } from './ObserverHook'; // Adjust the path to your hook
import styles from './FadeInVideoFull.module.css';

interface FadeInVideoProps {
  src: string;
  width: number;
  height: number;
  rootMargin?: string;
}

const FadeInVideoFull: React.FC<FadeInVideoProps> = ({ src, rootMargin = '-50px' }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(imgRef, rootMargin);

  return (
    <div
      ref={imgRef}
      className={`${styles.videoWrapper} ${isVisible ? styles.visible : ''}`}
    >
    <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        // poster="/images/video-fallback.jpg" // Static fallback image
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
  
export default FadeInVideoFull;

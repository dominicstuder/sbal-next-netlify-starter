import React from 'react';
import styles from './FlowrclubVideoTwo.module.css';


interface FadeInVideoProps {
  src: string;

}

const FlowrclubVideoTwo: React.FC<FadeInVideoProps> = ({ src}) => {
  return (
    <div className={styles.videoContainer}>
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

export default FlowrclubVideoTwo;


import React from 'react';
import styles from './FlowrclubVideo.module.css';

const FlowrclubVideo = () => {
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
        <source src="/flowrclub_cs_site_01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default FlowrclubVideo;


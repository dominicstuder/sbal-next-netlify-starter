'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import styles from './carousel.module.css';

const Carousel = () => {
  const slides = [
    { id: 1, content: <Image src="/mata-design-6.webp" fill style={{ objectFit: "cover"  }}     quality={100}
    loading="lazy" alt="Slide 1" /> },
    { id: 2, content: <Image src="/bwr_feature_slider3.webp" fill style={{ objectFit: "cover" }}     quality={100}
    loading="lazy" alt="Slide 2" /> },
    { id: 3, content: <Image src="/mint_3.webp" fill style={{ objectFit: "cover" }}     quality={100}
    loading="lazy" alt="Slide 3" /> },
    { id: 4, content: <Image src="/sbal2025-ps-1.webp" fill style={{ objectFit: "cover" }}    quality={100}
    loading="lazy"  alt="Slide 4" /> },
    { id: 5, content: <Image src="/flowrclub-colour.webp" fill style={{ objectFit: "cover" }}     quality={100}
    loading="lazy" alt="Slide 5" /> },
    { id: 6, content: <Image src="/mata_slider_bw.webp" fill style={{ objectFit: "cover" }}     quality={100}
    loading="lazy" alt="Slide 6" className='max-w-xl h-[80vh]! left-1/2! absolute slide6' /> },
  ];




  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });


  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  const [hoveredButton, setHoveredButton] = useState<"Previous" | "Next" | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    buttonType: "Previous" | "Next"
  ) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    setHoveredButton(buttonType);
  };
  

  const handleMouseLeave = () => setHoveredButton(null);



  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically go to the next slide
    }, 1500); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Restart interval when currentIndex changes


  return (
    <div className='relative w-full h-full flex justify-center content-center'>
      <div className={styles.slides}>
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index === (currentIndex - 1 + slides.length) % slides.length;

          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${isActive ? styles.active : ''} ${isPrevious ? styles.previous : ''}`}
            >
              {slide.content}
            </div>
          );
        })}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        onMouseMove={(e) => handleMouseMove(e, "Previous")}
        onMouseLeave={handleMouseLeave}
        className="h-[80vh] absolute top-0 left-0 w-3/6 z-10 md:h-full bg-transparent"
      ></button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        onMouseMove={(e) => handleMouseMove(e, "Next")}
        onMouseLeave={handleMouseLeave}
        className="h-[80vh] absolute top-0 right-0 w-3/6 z-10 md:h-full bg-transparent"
      ></button>

      {/* Custom Cursor Text */}
      {hoveredButton && (
        <div
          className="invisible slider-button fixed pointer-events-none text-white text-sm  px-4 py-2 rounded-md transition-opacity duration-200 lg:visible"
          style={{
            top: cursorPos.y + 30, // Offset to prevent overlap with cursor
            left: cursorPos.x + 30,
            transform: "translate(-50%, -50%)",
          }}
        >
          {hoveredButton}
        </div>
      )}
    </div>
  );
};

export default Carousel;

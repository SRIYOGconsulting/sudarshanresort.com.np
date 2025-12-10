import React, { useState } from 'react';
import img1 from '../../assets/gallery_images/twinbed/twinbed1.jpg';
import img2 from '../../assets/gallery_images/twinbed/twinbed2.jpg';
import img3 from '../../assets/gallery_images/twinbed/twinbed3.jpg';
import img4 from '../../assets/gallery_images/twinbed/twinbed4.jpg';
import img5 from '../../assets/gallery_images/twinbed/twinbed5.jpg';
import img6 from '../../assets/gallery_images/twinbed/twinbed6.jpg';
import img7 from '../../assets/gallery_images/twinbed/twinbed7.jpg';
import img8 from '../../assets/gallery_images/twinbed/twinbed8.jpg';
import style from './twin_bed_cards.module.css';
import { SquareArrowOutUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const TwinBedCards = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={style.container}>
        {images.map((img, index) => (
          <div className={style.imgcontainer} key={index}>
            <img src={img} alt="img" />
            <div className={style.overlay}>
              <SquareArrowOutUpRight
                className={style.bookbtn}
                color="white"
                onClick={() => openFullscreen(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && images[currentIndex] && (
        <div className={style.fullscreenOverlay}>
          <X className={style.closeBtn} color="white" size={30}   onClick={(e) => {
    e.stopPropagation();
    closeFullscreen();
  }} />
          <ChevronLeft
            className={`${style.navBtn} ${style.leftNav}`}
            color="white"
            size={40}
             onClick={(e) => {
    e.stopPropagation(); // prevent bubbling
    prevImage();
  }}
          />
          <img src={images[currentIndex]} alt="fullscreen" className={style.fullscreenImg} />
          <ChevronRight
            className={`${style.navBtn} ${style.rightNav}`}
            color="white"
            size={40}
            
           onClick={(e) => {
    e.stopPropagation(); // prevent bubbling
    nextImage();
  }}
          />
        </div>
      )}
    </>
  );
};

export default TwinBedCards;

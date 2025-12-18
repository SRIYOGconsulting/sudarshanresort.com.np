import { useState } from 'react';

import style from './double_cards.module.css'
import { SquareArrowOutUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Doublebed_cards = () => {
    const images = [
      {id:1, img:"images/gallery/double_bed/doublebed1.jpg", size:"card1"},
      {id:2, img:"images/gallery/double_bed/doublebed2.jpg", size:"card2"},
      {id:3, img:"images/gallery/double_bed/doublebed3.jpg", size:"card3"},
      {id:4, img:"images/gallery/double_bed/doublebed4.jpg", size:"card4"},
      {id:5, img:"images/gallery/double_bed/doublebed5.jpg", size:"card5"},
      {id:6, img:"images/gallery/double_bed/doublebed6.jpg", size:"card6"}
      ];
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
        {images.map((item, index) => (
          <div className={`${style.imgcontainer} ${style[item.size]}`} key={index}>
            <img src={item.img} alt="img" />
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
    e.stopPropagation(); 
    prevImage();
  }}
          />
          <img src={images[currentIndex].img} alt="fullscreen" className={style.fullscreenImg} />
          <ChevronRight
            className={`${style.navBtn} ${style.rightNav}`}
            color="white"
            size={40}
            onClick={(e) => {
          e.stopPropagation();
          nextImage();
  }}
          />
        </div>
      )}
    </>
  )
}

export default Doublebed_cards

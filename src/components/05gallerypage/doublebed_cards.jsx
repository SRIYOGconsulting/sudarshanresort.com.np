import useState  from 'react';
// import React from 'react'
import img1 from '../../assets/gallery_images/doublebed/doublebed1.jpg'
import img2 from '../../assets/gallery_images/doublebed/doublebed2.jpg'
import img3 from '../../assets/gallery_images/doublebed/doublebed3.jpg'
import img4 from '../../assets/gallery_images/doublebed/doublebed4.jpg'
import img5 from '../../assets/gallery_images/doublebed/doublebed5.jpg'
import img6 from '../../assets/gallery_images/doublebed/doublebed6.jpg'

import style from './double_cards.module.css'
import { SquareArrowOutUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const doublebed_cards = () => {
    const images = [img1,img2,img3,img4,img5,img6];
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
  )
}

export default doublebed_cards

import React, { useState } from 'react'
import style from './allcards.module.css'
// import galleryData from "./public/small_images";

// import Img from '../../assets/gallery_images/small_images/1.jpg'

import Twin_bed from './twin_bed_cards.jsx'
import Doublebed_cards from './doublebed_cards';
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight, X } from 'lucide-react';
const Allcards = () => {
  const [all,setAll]=useState(false);
  const [twin,setTwin]=useState(false);
  const [double,setDouble]=useState(false);
  
  const clickhandle=()=>{
    setAll(true);
    setTwin(false)
    setDouble(false)
  }
   const twinhandler=()=>{
    setTwin(true);
    setAll(false)
    setDouble(false)
  }
   const doublehandler=()=>{
    setDouble(true);
    setTwin(false)
    setAll(false)
  }
  
  const galleryData = [
  { id: 1, img:"/small_images/1.jpg" },
  { id: 2, img:"/small_images/2.jpg" },
  { id: 3, img:"/small_images/3.jpg" },
  { id: 4, img:"/small_images/4.jpg" },
  // { id: 5, img:"/small_images/5.jpg" },
  { id: 6, img:"/small_images/6.jpg" },
  { id: 7, img:"/small_images/7.jpg" },
  { id: 8, img:"/small_images/8.jpg" },
  { id: 9, img:"/small_images/9.jpg" },
  { id: 10, img:"/small_images/10.jpg" },
  { id: 11, img:"/small_images/11.jpg" },
  { id: 12, img:"/small_images/12.jpg" },
  { id: 13, img:"/small_images/13.jpg" },
  { id: 14, img:"/small_images/14.jpg" },
  { id: 15, img:"/small_images/15.jpg" },
  { id: 16, img:"/small_images/16.jpg" },
  { id: 17, img:"/small_images/17.jpg" },
  // { id: 18, img:"/small_images/18.jpg" },
  // { id: 19, img:"/small_images/19.jpg" },
  { id: 20, img:"/small_images/20.jpg" },

];





   const [currentIndex, setCurrentIndex] = useState(null);
    
      const openFullscreen = (index) => {
        setCurrentIndex(index);
      };
    
      const closeFullscreen = () => {
        setCurrentIndex(null);
      };
    
      const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryData.length);
      };
    
      const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
      };











  return (
    <div className={style.main_container}>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={clickhandle}>All</button>
        <button className={style.btn} onClick={twinhandler}>Twin Bed</button>
        <button className={style.btn}  onClick={doublehandler}>Double Bed</button>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      <div className={style.container}>
        {galleryData.map((item, index) => (
          <div className={style.imgcontainer} key={index}>
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

      {currentIndex !== null && galleryData[currentIndex] && (
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
          <img src={galleryData[currentIndex]} alt="fullscreen" className={style.fullscreenImg} />
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
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {all &&
      <div className={style.condition_container}>
       <Twin_bed />
       <Doublebed_cards />
       </div>
       }
       
        {twin &&
      <div className={style.condition_container}>
       <Twin_bed />
       </div>
       }
       
        {double &&
      <div className={style.condition_container}>
       <Doublebed_cards />
       </div>
       }
       
       
    </div>
  )
}

export default Allcards

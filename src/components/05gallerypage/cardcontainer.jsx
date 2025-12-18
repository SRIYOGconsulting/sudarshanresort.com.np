// import React from 'react'
import style from "./cardcontainer.module.css";
import {
  ChevronLeft,
  ChevronRight,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import React, { useState } from "react";

const Cardcontainer = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const galleryData = [
    { id: 1, img: "/images/gallery/1.jpg", size: "card1" },
    { id: 2, img: "/images/gallery/2.jpg", size: "card2" },
    { id: 3, img: "/images/gallery/3.jpg", size: "card3" },
    { id: 4, img: "/images/gallery/4.jpg", size: "card4" },
    { id: 5, img: "/images/gallery/5.jpg", size: "card5" },
    { id: 6, img: "/images/gallery/6.jpg", size: "card6" },
    { id: 7, img: "/images/gallery/7.jpg", size: "card7" },
    { id: 8, img: "/images/gallery/8.jpg", size: "card8" },
    { id: 9, img: "/images/gallery/9.jpg", size: "card9" },
    { id: 10, img: "/images/gallery/10.jpg", size: "card10" },
    { id: 11, img: "/images/gallery/11.jpg", size: "card11" },
    { id: 12, img: "/images/gallery/12.jpg", size: "card12" },
    { id: 13, img: "/images/gallery/13.jpg", size: "card13" },
    { id: 14, img: "/images/gallery/14.jpg", size: "card14" },
    { id: 15, img: "/images/gallery/15.jpg", size: "card15" },
    { id: 16, img: "/images/gallery/16.jpg", size: "card16" },
    { id: 17, img: "/images/gallery/17.jpg", size: "card17" },
    { id: 18, img: "/images/gallery/18.jpg", size: "card18" },
    { id: 19, img: "/images/gallery/19.jpg", size: "card19" },
    { id: 20, img: "/images/gallery/20.jpg", size: "card20" },
    { id: 21, img: "/images/gallery/11.jpg", size: "card21" },
    { id: 22, img: "/images/gallery/12.jpg", size: "card22" },
  ];

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
    setCurrentIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );
  };
  return (
    <div>
      <div className={style.container}>
        {galleryData.map((item, index) => (
          <div
            className={`${style.imgcontainer} ${style[item.size]}`}
            key={item.index}
          >
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
          <X
            className={style.closeBtn}
            color="white"
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
          />
          <ChevronLeft
            className={`${style.navBtn} ${style.leftNav}`}
            color="white"
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          />
          <div className={style.fullimg_container}>
            <img
              src={galleryData[currentIndex].img}
              alt="fullscreen"
              className={style.fullscreenImg}
            />
          </div>
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
    </div>
  );
};

export default Cardcontainer;

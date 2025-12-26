import { useState } from "react";
import { X, ChevronLeft, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet.jsx";

import styleAll from "../components/gallery/cardWrapper/allCards.module.css";
import styleSmall from "../components/gallery/smallCards/smallCards.module.css";
import styleTwin from "../components/gallery/twinBedCards/twinBedCards.module.css";
import styleDouble from "../components/gallery/doubleBedCards/doubleBedCard.module.css";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);

  const smallCards = [
    { img: "/images/gallery/1.webp", size: "card1" },
    { img: "/images/gallery/2.webp", size: "card2" },
    { img: "/images/gallery/3.webp", size: "card3" },
    { img: "/images/gallery/4.webp", size: "card4" },
    { img: "/images/gallery/5.webp", size: "card5" },
  ];

  const twinBeds = [
    { img: "images/gallery/twin_bed/twinbed1.webp" },
    { img: "images/gallery/twin_bed/twinbed2.webp" },
    { img: "images/gallery/twin_bed/twinbed3.webp" },
  ];

  const doubleBeds = [
    { img: "images/gallery/double_bed/doublebed1.webp", size: "card1" },
    { img: "images/gallery/double_bed/doublebed2.webp", size: "card2" },
  ];

  const openFullscreen = (index, gallery) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
  };

  const closeFullscreen = () => setCurrentIndex(null);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);

  const renderGallery = (gallery, styleModule) =>
    gallery.map((item, index) => (
      <div
        key={index}
        className={`${styleModule.imgcontainer} ${styleModule[item.size] || ""}`}
      >
        <img src={item.img} alt="img" />
        <div className={styleModule.overlay}>
          <SquareArrowOutUpRight
            className={styleModule.bookbtn}
            color="white"
            onClick={() => openFullscreen(index, gallery)}
          />
        </div>
      </div>
    ));

  return (
    <div className={styleAll.main_container}>
      <SeoHelmet
        title="Gallery | Sudarshan Resort"
        description="Explore the gallery of Sudarshan Resort showcasing luxurious rooms, beautiful surroundings, modern facilities, and memorable experiences."
        image="/images/gallery/1.jpg"
        url="https://sudarshanresort.com/gallery"
      />

      {/* Tabs */}
      <div className={styleAll.btn_container}>
        <button
          className={`${styleAll.btn} ${activeTab === "all" ? styleAll.active : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`${styleAll.btn} ${activeTab === "twin" ? styleAll.active : ""}`}
          onClick={() => setActiveTab("twin")}
        >
          Twin Bed
        </button>
        <button
          className={`${styleAll.btn} ${activeTab === "double" ? styleAll.active : ""}`}
          onClick={() => setActiveTab("double")}
        >
          Double Bed
        </button>
      </div>

      {/* Gallery Sections */}
      <div className={styleAll.condition_container}>
        {activeTab === "all" && (
          <>
            <div className={styleAll.triangle_all}></div>
            {renderGallery(smallCards, styleSmall)}
            {renderGallery(twinBeds, styleTwin)}
            {renderGallery(doubleBeds, styleDouble)}
          </>
        )}
        {activeTab === "twin" && (
          <>
            <div className={styleAll.triangle_twin}></div>
            {renderGallery(twinBeds, styleTwin)}
          </>
        )}
        {activeTab === "double" && (
          <>
            <div className={styleAll.triangle_double}></div>
            {renderGallery(doubleBeds, styleDouble)}
          </>
        )}
      </div>

      {/* Fullscreen */}
      {currentIndex !== null && currentGallery[currentIndex] && (
        <div className={styleSmall.fullscreenOverlay}>
          <X
            className={styleSmall.closeBtn}
            color="white"
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
          />
          <ChevronLeft
            className={`${styleSmall.navBtn} ${styleSmall.leftNav}`}
            color="white"
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          />
          <img
            src={currentGallery[currentIndex].img}
            alt="fullscreen"
            className={styleSmall.fullscreenImg}
          />
          <ChevronRight
            className={`${styleSmall.navBtn} ${styleSmall.rightNav}`}
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

export default Gallery;

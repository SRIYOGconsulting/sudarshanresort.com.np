import { useState } from "react";
import {
  SquareArrowOutUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import allCardsStyle from "../styles/gallery/allCards.module.css";
import smallCardStyle from "../styles/gallery/smallCards.module.css";
import twinBedStyle from "../styles/gallery/twinBedCards.module.css";
import doubleBedStyle from "../styles/gallery/doubleBedCard.module.css";

import Herosection from "../components/Herosection";
import SeoHelmet from "../components/SeoHelmet";

const SmallCards = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const galleryData = Array.from({ length: 22 }, (_, i) => ({
    img: `/images/gallery/${i + 1}.webp`,
    size: `card${i + 1}`,
  }));

  return (
    <>
      <div className={smallCardStyle.container}>
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`${smallCardStyle.imgcontainer} ${smallCardStyle[item.size]}`}
          >
            <img src={item.img} alt="gallery" />
            <div className={smallCardStyle.overlay}>
              <SquareArrowOutUpRight
                className={smallCardStyle.bookbtn}
                color="white"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className={smallCardStyle.fullscreenOverlay}>
          <X
            className={smallCardStyle.closeBtn}
            color="white"
            size={30}
            onClick={() => setCurrentIndex(null)}
          />
          <ChevronLeft
            className={`${smallCardStyle.navBtn} ${smallCardStyle.leftNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + galleryData.length) % galleryData.length
              )
            }
          />
          <img
            src={galleryData[currentIndex].img}
            alt="fullscreen"
            className={smallCardStyle.fullscreenImg}
          />
          <ChevronRight
            className={`${smallCardStyle.navBtn} ${smallCardStyle.rightNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % galleryData.length)
            }
          />
        </div>
      )}
    </>
  );
};

/* ================= TWIN BED ================= */
const TwinBedCards = () => {
  const images = Array.from({ length: 8 }, (_, i) => ({
    img: `images/gallery/twin_bed/twinbed${i + 1}.webp`,
  }));

  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <>
      <div className={twinBedStyle.container}>
        {images.map((item, index) => (
          <div key={index} className={twinBedStyle.imgcontainer}>
            <img src={item.img} alt="twin bed" />
            <div className={twinBedStyle.overlay}>
              <SquareArrowOutUpRight
                className={twinBedStyle.bookbtn}
                color="white"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className={twinBedStyle.fullscreenOverlay}>
          <X
            className={twinBedStyle.closeBtn}
            color="white"
            size={30}
            onClick={() => setCurrentIndex(null)}
          />
          <ChevronLeft
            className={`${twinBedStyle.navBtn} ${twinBedStyle.leftNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          />
          <img
            src={images[currentIndex].img}
            alt="fullscreen"
            className={twinBedStyle.fullscreenImg}
          />
          <ChevronRight
            className={`${twinBedStyle.navBtn} ${twinBedStyle.rightNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
          />
        </div>
      )}
    </>
  );
};

/* ================= DOUBLE BED ================= */
const DoubleBedCards = () => {
  const images = Array.from({ length: 6 }, (_, i) => ({
    img: `images/gallery/double_bed/doublebed${i + 1}.webp`,
    size: `card${i + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <>
      <div className={doubleBedStyle.container}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`${doubleBedStyle.imgcontainer} ${doubleBedStyle[item.size]}`}
          >
            <img src={item.img} alt="double bed" />
            <div className={doubleBedStyle.overlay}>
              <SquareArrowOutUpRight
                className={doubleBedStyle.bookbtn}
                color="white"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className={doubleBedStyle.fullscreenOverlay}>
          <X
            className={doubleBedStyle.closeBtn}
            color="white"
            size={30}
            onClick={() => setCurrentIndex(null)}
          />
          <ChevronLeft
            className={`${doubleBedStyle.navBtn} ${doubleBedStyle.leftNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          />
          <img
            src={images[currentIndex].img}
            alt="fullscreen"
            className={doubleBedStyle.fullscreenImg}
          />
          <ChevronRight
            className={`${doubleBedStyle.navBtn} ${doubleBedStyle.rightNav}`}
            color="white"
            size={40}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
          />
        </div>
      )}
    </>
  );
};

/* ================= ALL CARDS ================= */
const AllCards = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={allCardsStyle.main_container}>
      <div className={allCardsStyle.btn_container}>
        {["all", "twin", "double"].map((tab) => (
          <button
            key={tab}
            className={`${allCardsStyle.btn} ${
              activeTab === tab ? allCardsStyle.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all"
              ? "All"
              : tab === "twin"
              ? "Twin Bed"
              : "Double Bed"}
          </button>
        ))}
      </div>

      <div className={allCardsStyle.condition_container}>
        {activeTab === "all" && (
          <>
            <div className={allCardsStyle.triangle_all}></div>
            <SmallCards />
            <TwinBedCards />
            <DoubleBedCards />
          </>
        )}

        {activeTab === "twin" && (
          <>
            <div className={allCardsStyle.triangle_twin}></div>
            <TwinBedCards />
          </>
        )}

        {activeTab === "double" && (
          <>
            <div className={allCardsStyle.triangle_double}></div>
            <DoubleBedCards />
          </>
        )}
      </div>
    </div>
  );
};

/* ================= MAIN GALLERY ================= */
const Gallery = () => {
  return (
    <div >
      <SeoHelmet
        title="Gallery | Sudarshan Resort"
        description="Explore the gallery of Sudarshan Resort showcasing luxurious rooms, beautiful surroundings, modern facilities, and memorable experiences."
        image="/images/gallery/1.jpg"
        url="https://sudarshanresort.com/gallery"
      />

      <Herosection
        h1="Gallery"
        tab="Home"
        p="Gallery"
        bg="images/background/1.webp"
      />
      <AllCards />
    </div>
  );
};

export default Gallery;

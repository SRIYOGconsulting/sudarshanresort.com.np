
import React, { useState,useEffect } from 'react';
import style from '../../../styles/Testimonials.module.css';
import Testimonials_Blog_cards from './Testimonials_Blog_cards';
import img1 from '../../../assets/team/Pracas.png';
import img2 from '../../../assets/team/Prakash.webp';
import img3 from '../../../assets/team/Hiring.webp';
import img4 from '../../../assets/team/Sakchyam.webp';
import img5 from '../../../assets/team/Aashma.webp';
import img6 from '../../../assets/team/Bitisha.webp';
import img7 from '../../../assets/team/Lasta.webp';
import img8 from '../../../assets/team/Milan.webp';
import img9 from '../../../assets/team/Prakrit.webp';
import img10 from '../../../assets/team/Priyanka.webp';
import img11 from '../../../assets/team/Sagar.webp';
import img12 from '../../../assets/team/Rahul.webp';
import img13 from '../../../assets/team/Sarad.webp';

const testimonialsData = [
  { name: "Pracas", img: img1, title: "C.T.O", description:  "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations." },
  { name: "Prakash", img: img2, title: "Project Manager", description: "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the	river was truly breathtaking" },
  { name: "Hiring", img: img3, title: "Information Manager", description: "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight." },
  { name: "Sakchyam", img: img4, title: "Flutter Developer", description:  "I had a wonderful time at Sudarsan Agro Resort. The tranquil atmosphere and eco-friendly amenities made me feel right at home. I can't wait to visit again!" },
   { name: "Aashma", img: img5, title: "Backend Developer", description:  "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations." },
   { name: "Bitisha", img: img6, title: "React JS Developer", description: "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight." },
   { name: "Lasta", img: img7, title: "React JS Developer", description: "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight." },
    { name: "Milan", img: img8, title: "UI/UX Designer", description:  "I had a wonderful time at Sudarsan Agro Resort. The tranquil atmosphere and eco-friendly amenities made me feel right at home. I can't wait to visit again!" },
   { name: "Prakrit", img: img9, title: "UI/UX Designer", description:  "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations." },
   { name: "Priyanka", img: img10, title: "React JS Developer", description: "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the	river was truly breathtaking" },
   { name: "Sagar", img: img11, title: "Web Developer", description:  "I had a wonderful time at Sudarsan Agro Resort. The tranquil atmosphere and eco-friendly amenities made me feel right at home. I can't wait to visit again!" },
   { name: "Rahul", img: img12, title: "React JS Developer", description:  "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations." },
   { name: "Sarad", img: img13, title: "React Native Developer", description: "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the	river was truly breathtaking" },
  
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const totalSlides = testimonialsData.length;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); 
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className={style.container}>
      <h3>Testimonials</h3>
      <div className={style.horizontal_line}></div>

      <div className={style.carousel}>
        <div
          className={style.blog}
          style={{ transform: `translateX(-${currentSlide * (350 + 120)}px)` }}

        >
          {testimonialsData.map((item, index) => (
            <Testimonials_Blog_cards
              key={index}
              name={item.name}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className={style.container_dot}>
        {Array(totalSlides).fill(0).map((_, i) => (
          <span
            key={i}
            className={`${style.dot} ${currentSlide === i ? style.active : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;








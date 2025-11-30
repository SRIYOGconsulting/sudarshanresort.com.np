import React, { useEffect, useState } from "react";
import "../styles/Content_Over_Img.css";

const Content_Over_Img = () => {
  
  const texts = [
    "Luxury Hotel & Resort",
    "Comfort Redefined",
    "Experience Calmness",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false); 
  const [blink, setBlink] = useState(true);

  useEffect(() => {
   
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (index === texts.length) return;

    const typingSpeed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      const currentText = texts[index];

      if (!deleting) {
        // typing
        setSubIndex(subIndex + 1);

        if (subIndex === currentText.length) {
          // wait before deleting
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        // deleting
        setSubIndex(subIndex - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % texts.length); 
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
     
      <div className="topcontainer">
     <p className="top">Luxury hotel & Resort Lifestyle</p>
     <div className="container">
    <div className="typing-container">
      <h1 className="comfort">Comfort</h1>
      <span className="typing-text">
        {texts[index].substring(0, subIndex)}
      </span>
      <span className={`cursor ${blink ? "blink" : ""}`}>|</span>
    </div>
    </div>
    <h1 className="for_your_vacation">for your Vacation</h1>
    <button className="book_now_btn">Book now</button>
   
   </div>
    
  );
};

export default Content_Over_Img;

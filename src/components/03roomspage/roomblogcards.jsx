import React from "react";
import style from "./roomblogcards.module.css";


const roomblogcards = (props) => {
  return (

     <div className={style.roomcard_container}>
       <div className={style.imageWrapper}>
      <img src={props.img} alt="" />
        <div className={style.overlay}>
        <button className={style.bookbtn}>Book Now</button>
        </div>
      </div>
      
      
      <div className={style.roomcard_content}>
      <h2>{props.bedtype}</h2>
      <div className={style.price_container}>
        <h1>{props.price}</h1>
        <p>{props.pernight}</p>
      </div>
      </div>
      </div>
    
  );
};

export default roomblogcards;

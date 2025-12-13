import React from "react";
import style from "./roomblogcards.module.css";
import img1 from "../../assets/rooms_images/room1.jpg";
import img2 from '../../assets/rooms_images/room2.jpg'
import Book from '../book_Now/book_now.jsx'
import { Link } from "react-router-dom";
const roomblogcards = () => {
  const roomcontent=[
    {img:img1,title:"Twin Bed",price:"2500", per:"/per night" },
    {img:img2,title:"Twin Bed",price:"2500", per:"/per night" },
  ]
  return (

     <div className={style.roomcard_container}>
      <div className={style.roo}>
      {roomcontent.map((get,id)=>(
        <div className={style.roomcard} key={id}>
       <div className={style.imageWrapper}>
      <img src={get.img} alt="" />
        <div className={style.overlay}>
        <Link to="/book" className={style.bookbtn}> Book Now </Link>
        </div>
      </div>

      <div className={style.roomcard_content}>
      <h2>{get.title}</h2>
      <div className={style.price_container}>
        <h1>{get.price}</h1>
        <p >{get.per}</p>
      </div>
      </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default roomblogcards;

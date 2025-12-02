import React from 'react'
import style from '../styles/Our_Accomodation.module.css'
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
const Our_Accomodation = () => {
  return (
    <div className={style.container_accomodation_top}>
      <div className={style.container_accomodation}>
        <div className={style.content_wrap}>
      <h1>Our Accomodation</h1>
      <div className={style.p_and_div}>
      <p>Pick a room that best suits your choice and budget 
        </p>
        <div className={style.line_horizontal}></div>
      </div>
      </div>
      
      <div>
        <button className={style.btn}>View all rooms</button>
      </div>
    
    </div>
    
       <div className={style.images_div}>
        <div className={style.img_wrap}>
        <img src={room1} alt="" />
        <p className={style.p1}>Twin Bedroom</p>
       <button className={style.start_price}>Starting from NPR 2500</button>
        <button className={style.book_now}>Book Now</button>
        </div>
        
        <div className={style.img_wrap}>
        <img src={room2} alt="" />
         <p className={style.p1}>King Bedroom</p>
         <button className={style.start_price}>Starting from NPR 2500</button>
        <button className={style.book_now}>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Our_Accomodation

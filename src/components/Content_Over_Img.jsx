import React from 'react'
import style from '../styles/Content_Over_Img.module.css'
const Content_Over_Img = () => {
  return (
    <div className={style.container}>
      <span>Luxury hotel & Resort Lifestyle</span>
      <h1 className={style.h1}>comfort</h1>
     <div className={style.paragraph_container}>
        <p>Luxury Resort</p>
        <p>Deluxe Rooms</p>
        <p>King Beds</p>
      </div>
      <h1>for your Vacation</h1>
    </div>
  )
}

export default Content_Over_Img

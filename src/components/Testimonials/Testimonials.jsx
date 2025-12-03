import React from 'react'
import style from '../../styles/Testimonials.module.css'
import Testimonials_Blog_cards from './Testimonials_Blog_cards'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
const Testimonials = () => {
  return (
    <div className={style.container}>
      <h1>Testimonials</h1>
      <div></div>
    <div className={style.blog}>
    <Testimonials_Blog_cards name="Rimesh Bhattrai" img={img1} title="Inaruwa / Sunsari" description="Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight."/>
    
    <Testimonials_Blog_cards name="Nirajan Dahal" img={img2}  title="Biratnagar / Morang" description= "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations."/>
    
    <Testimonials_Blog_cards name="Pramod Mehta" img={img3}  title="Barju / Sunsari" description= "I had a wonderful time at Sudarsan Agro Resort. The tranquil atmosphere and eco-friendly amenities made me feel right at home. I can't wait to visit again!"/>
    </div>
    </div>
  )
}

export default Testimonials

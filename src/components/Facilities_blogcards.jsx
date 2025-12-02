import React from 'react'

import Blogcards from './facilities_blogcard_container/Blogcards'
import img1 from '../assets/barbecue.png'
import img2 from '../assets/powerBackup.png'
import img3 from '../assets/parking.png'
import img4 from '../assets/resturant.png'
import style from '../styles/Facilities_blogcards.module.css'
const Facilities_blogcards = () => {
  return (
    <div className={style.container}>
        <h2>Facilities</h2>
        <div className={style.horizontal_line}></div>
    <div className={style.Facilities_blogcards}>
        
        <Blogcards img1={img1} h3="Barbecue" p="Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors."/>
        <Blogcards img1={img2} h3="Power Backups" p="Enjoy uninterrupted comfort with reliable power backup facilities, even during outages."/>
        <Blogcards img1={img3} h3="Free Parking" p="parking is complimentary , giving you peace of mind during your stay."/>
        <Blogcards img1={img4} h3="Riverside Resturant" p="At Sudarsan Agro Resort, enjoy riverside dining for a serene mealtime."/>
    </div>
     </div>
  
  )
}

export default Facilities_blogcards

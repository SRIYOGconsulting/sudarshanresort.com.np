import React from 'react'
import style from './room.module.css'
import Herosection from '../00herosection/herosection.jsx'
import Home_page from '../01homepage/Home_page'
import Nav_Bar from '../01homepage/Nav_Bar'
import Roomblogcards from './roomblogcards.jsx'

import img1 from "../../assets/rooms_images/room1.jpg";
import img2 from '../../assets/rooms_images/room2.jpg'
import Footer from '../01homepage/Footer.jsx'
const room = () => {
  return (
    <div className={style.room_container}>
     <Home_page />
      <Nav_Bar />
      <Herosection h1="Rooms" tab="Home" p="Rooms"/>
      <div className={style.roomblogcard}>
      <Roomblogcards img={img1} bedtype="Twin Bed" price="2500" pernight="/ per night"/>
      <Roomblogcards img={img2} bedtype="King Bed" price="2500" pernight="/ per night"/>
      </div>
      <Footer />
    </div>
  )
}

export default room




import img1 from '../../assets/about_images/aboutus/aboutus.jpg'
import Aboutpage from '../00herosection/herosection.jsx'
import style from './about.module.css'
import img2 from  '../../assets/about_images/promoting/1.jpg'
import img3 from '../../assets/about_images/promoting/2.jpg'
import img4 from '../../assets/about_images/promoting/3.jpg'
// import React from 'react'
const about = () => {
  const promoting=[
    {img:img1},
    {img:img2},
    {img:img3},
    {img:img4},
  ]
  return (
    <div>
      <Aboutpage h1="About" tab="Home" p="about"/>
      <div className={style.aboutus_container}>
        <h1>About Us</h1>
        <div className={style.line}></div>
        <div className={style.aboutus_content_and_img}>
          <div className={style.aboutus_content}>
          <p className={style.content_p}>Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences. </p>
            <p className={style.content_p}>
            At Sudarshan Park and Resort, we take pride in serving the finest traditional Nepali dishes at affordable prices.</p>
            </div>
          <img src={img1} className={style.img1} alt="aboutimg" />
        </div>
      </div>
      <div className={style.promoting_container}>
        <h1>"Promoting Tourism"</h1>
        <img src={promoting.img} alt="" />
      </div>
    </div>
  )
}

export default about
  
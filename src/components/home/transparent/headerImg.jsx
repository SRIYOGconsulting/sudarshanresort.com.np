import React from 'react'
// import SudarshanHome from '../../assets/SudarshanHome.jpg'
import Content_Over_Img from './headerContent.jsx'
import style from './headerImg.module.css'
const Header = () => {
  return (
    <div className={style.sudarshan_main_container}>
      <div className={style.sudarshan_img_container}>
        <img src="images/home/SudarshanHome.jpg" alt="" />
        <Content_Over_Img/>
      </div>
    </div>
  )
}

export default Header

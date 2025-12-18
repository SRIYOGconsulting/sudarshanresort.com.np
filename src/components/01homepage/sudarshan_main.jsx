import React from 'react'
// import SudarshanHome from '../../assets/SudarshanHome.jpg'
import Content_Over_Img from './Content_Over_Img'
import style from '../../styles/sudarshan_main.module.css'
const sudarshan_main = () => {
  return (
    <div className={style.sudarshan_main_container}>
      <div className={style.sudarshan_img_container}>
        <img src="images/home/SudarshanHome.jpg" alt="" />
        <Content_Over_Img/>
      </div>
    </div>
  )
}

export default sudarshan_main

import React from 'react'
import SudarshanHome from '../../assets/SudarshanHome.jpg'
import style from '../../styles/sudarshan_main.module.css'
const sudarshan_main = () => {
  return (
    <div className={style.sudarshan_main_container}>
      <div className={style.sudarshan_img_container}>
        <img src={SudarshanHome} alt="" />
      </div>
    </div>
  )
}

export default sudarshan_main

import React from 'react'
import startingimg from '../assets/starting_page_img.jpg'
import style from './Starting_Page.module.css'
const Starting_Page = () => {
  return (
    <div className={style.starting_container}>
       <button className={style.X}>X</button>
      <img className={style.starting_img} src={startingimg} alt="" />
    </div>
  )
}

export default Starting_Page

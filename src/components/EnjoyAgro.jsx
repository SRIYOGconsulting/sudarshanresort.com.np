import React from 'react'
import img1 from './../assets/enjoy_agro.jpg'
import style from '../styles/EnjoyArgo.module.css'
import { CirclePlay } from 'lucide-react';
const EnjoyAgro = () => {
  return (
    <div className={style.container}>
      <img src={img1} alt="" />
      <div className={style.EnjoyAgro_container}>
        <h1>Enjoy Agro Tourism</h1>
        <h2>#VisitKoshi2025</h2>
         <CirclePlay />
      </div>
    </div>
  )
}

export default EnjoyAgro

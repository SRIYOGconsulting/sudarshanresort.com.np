import React from 'react'
// import img1 from './../assets/enjoy_agro.jpg'
import style from '../../styles/EnjoyArgo.module.css'
import { CirclePlay } from 'lucide-react';

const EnjoyAgro = () => {
  return (
      <section className={style.hero}>
      <div className={style.overlay}>
        <h1>Enjoy Agro Tourism</h1>
        <h2>#VisitKoshi2025</h2>
        <CirclePlay size={85}/>
      </div>
    </section>
  );
  
  
}

export default EnjoyAgro

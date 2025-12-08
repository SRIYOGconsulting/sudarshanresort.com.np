import React from 'react'
import style from './about_enjoyagro.module.css'
import { CirclePlay } from 'lucide-react';

const about_enjoyagro_blog = () => {
  return (
       <section className={style.hero}>
      <div className={style.overlay}>
        <h1>Enjoy Agro Tourism</h1>
        <h2>#VisitKoshi2025</h2>
        <CirclePlay size={85}/>
      </div>
    </section>
  )
}

export default about_enjoyagro_blog

import React from 'react'
import { Star } from 'lucide-react'
import style from '../../styles/Testimonials_Blog_cards.module.css'

const Testimonials_Blog_cards = (props) => {
  return (
    <div className={style.container}>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <span>{props.title}</span>
        <div className={style.Rating_icon}>
        <Star size={15} color="yellow" fill="yellow" />
            <Star size={15} color="yellow" fill="yellow"/>
            <Star size={15} color="yellow" fill="yellow"/>
            <Star size={15} color="yellow" fill="yellow"/>
        </div>
        <p>{props.description} </p>
    </div>
  )
}

export default Testimonials_Blog_cards

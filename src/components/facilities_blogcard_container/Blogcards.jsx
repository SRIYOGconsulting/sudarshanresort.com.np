import React from 'react'
import style from '../../styles/Blogcards.module.css'
const Blogcards = (props) => {
  return (
     <div className={style.Blog_container}>
            <img src={props.img1} alt="" />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
      </div>
  )
}

export default Blogcards

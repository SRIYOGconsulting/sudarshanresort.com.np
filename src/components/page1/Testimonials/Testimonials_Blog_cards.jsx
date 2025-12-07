import React, { useState } from 'react';
import { Star } from 'lucide-react';
import style from '../../../styles/Testimonials_Blog_cards.module.css';

const Testimonials_Blog_cards = ({ name, img, title, description }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className={style.container}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <span>{title}</span>
        <div className={style.Rating_icon}>
            <Star size={15} color="orange" fill="orange" />
            <Star size={15} color="orange" fill="orange"/>
            <Star size={15} color="orange" fill="orange"/>
            <Star size={15} color="orange" fill="orange"/>
        </div>
        <p className={`${style.description} ${showMore ? style.expanded : ''}`}>
          {description}
        </p>
        <button className={style.seeMoreBtn} onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'See More'}
        </button>
    </div>
  )
}

export default Testimonials_Blog_cards;

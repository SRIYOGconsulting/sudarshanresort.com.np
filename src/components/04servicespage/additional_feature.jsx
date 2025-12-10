import React from 'react'
import style from '../04servicespage/Additional_feature.module.css'

import img1 from '../../assets/services_images/additionalfeatures/1.png'
import img2 from '../../assets/services_images/additionalfeatures/2.png'
import img3 from '../../assets/services_images/additionalfeatures/3.png'
import img4 from '../../assets/services_images/additionalfeatures/4.png'
import { Link } from 'react-router-dom'

const additional_feature = () => {
    const image=[
        {img:img1 ,title:'Photographer', description:'Photographers can capture stunning landscapes and unique moments with ease, thanks to our picturesque surroundings and dedicated photography spots'},
        {img:img2 ,title:'Trained Driver', description:'Our trained drivers ensure hassle-free excursions to nearby attractions, allowing you to relax and immerse yourself in the experience.'},
        {img:img3 ,title:'Laundry', description:'At Sudarsan Agro Resort, convenient laundry services keep you fresh and comfortable throughout your stay.ensuring a comfortable and worry-free stay.'},
        {img:img4 ,title:'Coffee Maker', description:'Elevate your stay with the convenience of in-room coffee makers, ensuring a perfect brew whenever you desire. Savor freshly brewed coffee anytime.'},
    ]
  return (
    <div className={style.container}>
        <div className={style.header}>
        <h1>Additonal Features</h1>
        <div className={style.line}></div>
        </div>
        <div className={style.img_content_wrap}>
        {image.map((item)=>(
            <div key={item.title} className={style.contentwrap}>
                <img className={style.img} src={item.img} alt={item.title} />
                <Link className={style.titlelink} onClick={() => window.scrollTo(0,0)}><h2>{item.title}</h2></Link>
                <p>{item.description}</p>
            </div>
        ))}
        </div>
    
    </div>
  )
}

export default additional_feature

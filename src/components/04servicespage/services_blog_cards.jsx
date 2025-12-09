import React from 'react'
import { Link } from 'react-router-dom'
import style from './services_blog_cards.module.css'

import img1  from '../../assets/services_images/offers/barbecue.png'
import img2  from '../../assets/services_images/offers/wifi.png'
import img3  from '../../assets/services_images/offers/kings-bed.png'
import img4  from '../../assets/services_images/offers/laundry.png'
import img5  from '../../assets/services_images/offers/drink.png'
import img6  from '../../assets/services_images/offers/farm-to-table.png'
import img7  from '../../assets/services_images/offers/riverside.png'
import img8  from '../../assets/services_images/offers/fishing1.png'
const services_blog_cards = () => {
    const services=[
        {img:img1, service_name: "Barbecue",  service_description:  "Experience the essence of summer with our BBQ shot!"},
        {img:img2, service_name: "Free wifi",  service_description:  "Enjoy complimentary WiFi access, staying connected seamlessly throughout your stay."},
        {img:img3, service_name: "King Beds",  service_description:  "Experience ultimate comfort with luxurious king beds in every room."},
        {img:img4, service_name: "Laundry",  service_description:  "Enjoy convenient laundry services for a hassle-free stay at your own ease."},
        {img:img5, service_name: "Drink",  service_description:  "Quench your thirst with our variety of beverage options available onsite."},
        {img:img6, service_name: "Farm-to-Table Dining",  service_description:  "We provide fresh, organic produce grown on-site or sourced locally. Guests often enjoy meals made from ingredients harvested directly from the resort's farm."},
        {img:img7, service_name: "Riverside",  service_description:  "Enjoy peaceful mornings by the water and unforgettable views from our balcony."},
        {img:img8, service_name: "Fishing",  service_description:  "Experience the joy of fishing in our resort, where relaxation meets adventure."}
    ]
  return (
    <div className={style.container_card}>
       <h1>What we offer</h1>
      <div className={style.line}></div>
      <div className={style.services}>
        {services.map((service)=>(
              <div className={style.service_card}>
                <img  src={service.img} alt="img" />
                
                <Link className={style.service_h1}> <h1 className={style.service_h1}>{service.service_name}</h1></Link>
                <p>{service.service_description}</p>
            </div>
        ))}
          
          
    
       
      </div>
    </div>
  )
}

export default services_blog_cards

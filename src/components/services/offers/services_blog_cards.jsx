
import { Link } from 'react-router-dom'
import style from './services_blog_cards.module.css'

const Offer_blog_cards = () => {
  
    const services=[
        {img:"images/services/barbecue.png", service_name: "Barbecue",  service_description:  "Experience the essence of summer with our BBQ shot!"},
        {img:"images/services/wifi.png", service_name: "Free wifi",  service_description:  "Enjoy complimentary WiFi access, staying connected seamlessly throughout your stay."},
        {img:"images/services/kings-bed.png", service_name: "King Beds",  service_description:  "Experience ultimate comfort with luxurious king beds in every room."},
        {img:"images/services/laundry.png", service_name: "Laundry",  service_description:  "Enjoy convenient laundry services for a hassle-free stay at your own ease."},
        {img:"images/services/drink.png", service_name: "Drink",  service_description:  "Quench your thirst with our variety of beverage options available onsite."},
        {img:"images/services/farm-to-table.png", service_name: "Farm-to-Table Dining",  service_description:  "We provide fresh, organic produce grown on-site or sourced locally. Guests often enjoy meals made from ingredients harvested directly from the resort's farm."},
        {img:"images/services/riverside.png", service_name: "Riverside",  service_description:  "Enjoy peaceful mornings by the water and unforgettable views from our balcony."},
        {img:"images/services/fishing1.png", service_name: "Fishing",  service_description:  "Experience the joy of fishing in our resort, where relaxation meets adventure."}
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

export default Offer_blog_cards

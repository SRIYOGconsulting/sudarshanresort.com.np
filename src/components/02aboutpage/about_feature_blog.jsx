import React from 'react'
import style from './about_feature_blog.module.css'
import featureimg from '../../assets/about_images/feature/1.jpg'
import wifi from '../../assets/about_images/feature/wifi.png'
import car from '../../assets/about_images/feature/car.png'
import utensils from '../../assets/about_images/feature/utensils.png'
// import React from 'react'
import { Check } from 'lucide-react'
const about_feature_blog = () => {
  return (
   <div className={style.feature_container}>
        
        <div>
        <img src={featureimg} alt="" />
        </div>
        
        <div className={style.feature_content}>
        <div className={style.feature_container_header}>
          <h1>Features</h1>
          <div className={style.line}></div>
          </div>
          
        <div className={style.feature_content_container}>
          <div className={style.list_container}>
            <ul>
              <div>
              <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>In Room Dinning</p>
              </li>
              
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Transport Service</p>
              </li>
              
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Facilities for the Disable</p>
              </li>
              </div>
              
              <div>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Pet Friendly Accomodation</p>
              </li>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Check In : 1.00 pm</p>
              </li>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Check out : 11.00 am</p>
              </li>
              </div>
            </ul>
          </div>
          
            <div className={style.line2}></div>
          <div className={style.feature_container_footer}>
            <div className={style.FooterIconContainer}>
                <img src={wifi} alt="wifi" />
                <h3>Free WiFi Access</h3>
                <div className={style.line3}></div>
            </div>
            <div className={style.FooterIconContainer}>
                <img src={utensils} alt="utensils" />
                <h3>Restaurant & Food Service</h3>
                <div className={style.line3}></div>
            </div>
            <div className={style.FooterIconContainer}>
                <img src={car} alt="car" />
                <h3>Free Parking</h3>
            </div>
          </div>
          
        </div>
        </div>
      </div>
  )
}

export default about_feature_blog

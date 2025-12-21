
import style from './aboutFeature.module.css'
import { Check } from 'lucide-react'
const about_feature_blog = () => {
  return (
   <div className={style.feature_container}>
        
        <div className={style.image_main_container}>
        <img src="images/about/feature/1.jpg" alt="" />
        </div>
        
        <div className={style.feature_content}>
        <div className={style.feature_container_header}>
          <h1>Features</h1>
          <div className={style.line}></div>
          </div>
          
        <div className={style.feature_content_container}>
          <div className={style.list_container}>
            <ul className={style.list_container_check}>
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
                <img src="images/about/feature/wifi.png" alt="wifi" />
                <h3>Free WiFi Access</h3>
                <div className={style.line3}></div>
            </div>
            <div className={style.FooterIconContainer}>
                <img src="images/about/feature/utensils.png" alt="utensils" />
                <h3>Restaurant & Food Service</h3>
                <div className={style.line3}></div>
            </div>
            <div className={style.FooterIconContainer}>
                <img src="images/about/feature/car.png" alt="car" />
                <h3>Free Parking</h3>
            </div>
          </div>
          
        </div>
        </div>
      </div>
  )
}

export default about_feature_blog

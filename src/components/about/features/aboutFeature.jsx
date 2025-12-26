
import style from './aboutFeature.module.css'
import { Check } from 'lucide-react'
const about_feature_blog = () => {
  const aboutFeature=[
    {img:"/images/about/feature/car.webp",
      h3:"Free WiFi Access",},
        {img:"images/about/feature/utensils.webp",
      h3:"Restaurant & Food Service",},
        {img:"images/about/feature/car.webp",
      h3:"Free Parking",},
  ]
  return (
   <div className={style.feature_container}>
        
        <div className={style.image_main_container}>
        <img src="images/about/feature/1.webp" alt="" />
        </div>
        
        <div className={style.feature_content}>
        <div className={style.feature_container_header}>
          <h1>Features</h1>
          <div className={style.line}></div>
          </div>
          
        <div className={style.feature_content_container}>
          <div className={style.list_container}>
            <ul className={style.list_container_check}>
              <div className={style.checklistAllwrapper}>
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
              
              <div className={style.checklistAllwrapper}>
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
            {aboutFeature.map((item,index)=>(
              <div key={index}>
                <div className={style.FooterIconContainer}>
                <img src={item.img} alt="img" />
                <h3>{item.h3}</h3>
                <div className={style.line3}></div>
                </div>
          
          
            </div>
            ))}
          
          </div>
          
        </div>
        </div>
      </div>
  )
}

export default about_feature_blog

import React from 'react'
import style from '../../styles/container2.module.css'
import Sudarshanabout from '../../assets/SudarshanAbout.jpg'
import { Link } from 'react-router-dom'
const container2 = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
          
           <div className={style.heading_container}>
          <h3>welcome to</h3>
          <div className={style.wrap_h1_p}>
            <h1>Sudarshan Agro Resort,</h1>
            <p>Agro Tourism Resort near Biratnagar.</p>
          </div>
        </div>
          
          
          <p className={style.para}>Welcome to Sudarshan Park and Resort! Here, peacefulness mixes with Nepali customs. Situated in lush greenery, our haven calls you to relax and enjoy Nepal's essence. Immerse yourself in our lively culture, enjoying real food and fun activities. With cozy rooms and fair prices, we promise your stay will be unforgettable. Come, relax, and immerse yourself in the beauty of Nepal, right here with us. Welcome to a unique getaway!</p>
          <Link to="/about" className={style.about_btn}>About</Link>
        </div>
       
        
        <div className={style.image_container}>
          <img className={style.sudarshanabout} src={Sudarshanabout} alt="sudarshanabout" />
        </div>
      
    </div>
  )
}

export default container2

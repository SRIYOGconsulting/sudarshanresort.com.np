
import style from './aboutUs.module.css'
const Aboutus = () => {
  return (
  
       <div className={style.aboutus_container}>
        <h1>About Us</h1>
        <div className={style.line}></div>
        <div className={style.aboutus_content_and_img}>
          <div className={style.aboutus_content}>
          <p className={style.content_p}>Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences. </p>
            <p className={style.content_p}>
            At Sudarshan Park and Resort, we take pride in serving the finest traditional Nepali dishes at affordable prices.</p>
            </div>
          <img src="images/about/SudarshanAbout.webp" className={style.img1} alt="aboutimg" />
        </div>
      </div>
    
  )
}

export default Aboutus

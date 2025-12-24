
import SeoHelmet from '../../seoHelmet'
import style from './aboutUs.module.css'
const Aboutus = () => {
  return (<>
       <SeoHelmet
        title="About | Sudarshan Resort"
        description="about and modern amenities."
        image="images/about/SudarshanAbout.webp"
        url="https://sudarshanresort.com/"
      />
    
       <section className={style.aboutus_container}  aria-labelledby="about-us-title">
       
        <div className={style.aboutus_content_and_img}>
          <div className={style.aboutus_content}>
            <h1 id="about-us-title">About Us</h1>
            <div className={style.line} aria-hidden="true"></div> 
            <p className={style.content_p}>Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences. </p>
            <p className={style.content_p}>
            At Sudarshan Park and Resort, we take pride in serving the finest traditional Nepali dishes at affordable prices.</p>
          </div>
          <img src="images/about/SudarshanAbout.webp" className={style.img1} alt="View of Sudarshan Park and Resort surrounded by greenery" loading="lazy"/>
        </div>
      </section>
      </>
    
  )
}

export default Aboutus





// import enjoy from '../../assets/about_images/enjoyagroresort/1.jpg'

import style from './about.module.css'

import Herosection from '../00herosection/herosection.jsx'
import About_feature_blog from './about_feature_blog.jsx'
import Testimonial from '../01homepage/Testimonials/Testimonials.jsx'
import EnjoyAgro from '../01homepage/EnjoyAgro.jsx'
import Footer from '../01homepage/Footer.jsx'
import Top from '../01homepage/top.jsx'
import Nav_Bar from '../01homepage/Nav_Bar'
 import { useEffect } from "react";
const About = () => {
  const promoting=[
    {img:"images/about/promoting/1.jpg"},
    {img:"images/about/promoting/2.jpg"},
    {img:"images/about/promoting/3.jpg"},
  ]
 
 useEffect(() => {
    document.title = "About | Sudarshan Resort";
  }, []);
  
  return (
    <div className={style.about}>
      <Top />
      <Nav_Bar />
      <Herosection h1="About" tab="Home" p="about"/>
      <div className={style.aboutus_container}>
        <h1>About Us</h1>
        <div className={style.line}></div>
        <div className={style.aboutus_content_and_img}>
          <div className={style.aboutus_content}>
          <p className={style.content_p}>Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences. </p>
            <p className={style.content_p}>
            At Sudarshan Park and Resort, we take pride in serving the finest traditional Nepali dishes at affordable prices.</p>
            </div>
          <img src="images/about/SudarshanAbout.jpg" className={style.img1} alt="aboutimg" />
        </div>
      </div>
      
      {/* promoting tourism blog */}
      <div className={style.promoting_container}>
        <h1>"Promoting Tourism"</h1>
        <div className={style.image_container}>
        {promoting.map((promote,index)=>(
          <img className={style.img_promote} key={index} src={promote.img} alt="" />
        ))}
        </div>
        
      </div>
      {/* Feature blog of about page */}
     <About_feature_blog/>
     <Testimonial/>
     <EnjoyAgro bg="images/about/transparentbg/1.jpg" />
     <Footer/>
    </div>
  )
}

export default About
  
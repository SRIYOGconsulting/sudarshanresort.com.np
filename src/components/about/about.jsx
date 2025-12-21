
import style from './about.module.css'

import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import AboutUs from './aboutUs/aboutUs.jsx'
import Promoting from './promotingTourism/promoting.jsx'
import AboutFeature from './features/aboutFeature.jsx'
import Testimonial from '../Testimonials.jsx'
import EnjoyAgro from '../EnjoyAgro.jsx'
import Footer from '../Footer.jsx'
 import { useEffect } from "react";

const About = () => {

 
 useEffect(() => {
    document.title = "About | Sudarshan Resort";
  }, []);
  
  return (
    <div className={style.about}>
      <Top />
      <Nav_Bar />
      <Herosection h1="About" tab="Home" p="about"/>
      <AboutUs />
      <Promoting/>
     <AboutFeature/>
     <Testimonial/>
     <EnjoyAgro bg="images/about/transparentbg/1.jpg" />
     <Footer/>
    </div>
  )
}

export default About
  
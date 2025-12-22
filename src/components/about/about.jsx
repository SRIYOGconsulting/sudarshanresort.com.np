
import style from './about.module.css'

import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import AboutUs from './aboutUs/aboutUs.jsx'
import Promoting from './promotingTourism/promoting.jsx'
import AboutFeature from './features/aboutFeature.jsx'

import EnjoyAgro from '../EnjoyAgro.jsx'
import Footer from '../Footer.jsx'

import SeoHelmet from '../seoHelmet.jsx'

const About = () => {

 

  
  return (
    <div className={style.about}>
         <SeoHelmet
        title="About | Sudarshan Resort"
        description="Learn about Sudarshan Resort, a peaceful agro resort offering comfortable stays, modern amenities, nature experiences, and warm hospitality."
        image="/images/about/SudarshanAbout.jpg"
        url="https://sudarshanresort.com/about"
      />
            
            
      <Top />
      <Nav_Bar />
      <Herosection h1="About" tab="Home" p="about"/>
      <AboutUs />
      <Promoting/>
     <AboutFeature/>
     <EnjoyAgro bg="images/about/transparentbg/1.jpg" />
     <Footer/>
    </div>
  )
}

export default About
  
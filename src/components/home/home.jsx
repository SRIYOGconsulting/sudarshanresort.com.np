
import Top  from '../top.jsx'
import NavBar from '../Nav_Bar.jsx'
import HeaderImg from './transparent/headerContent.jsx'
import HomeAbout from './about/homeAbout.jsx'
import Our_Accomodation from './ourAccomodation/ourAccomodation.jsx'
import Facilities_blogcards from './facilities/facilitiesBlogcards.jsx'
import EnjoyAgro from '../EnjoyAgro.jsx'
import Testimonials from '../Testimonials.jsx'
import Footer from '../Footer.jsx'
import Whatsapp_logo from '../whatsapp_logo.jsx'


import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.homecontainer}>
      <Top />
      <NavBar />
      <HeaderImg />
      <HomeAbout/>
      <Our_Accomodation/>
      <Facilities_blogcards/>
      <EnjoyAgro bg="images/home/transparentbg/1.jpg"/>
      <Testimonials/>
      <Footer />
      <Whatsapp_logo />
    </div>
  )
}

export default Home

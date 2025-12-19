
import Top  from '../01homepage/top.jsx'
import NavBar from '../01homepage/Nav_Bar.jsx'
import SudarshanHome from './transparent/headerImg.jsx'
import HomeAbout from './about/homeAbout.jsx'
import Our_Accomodation from './ourAccomodation/Our_Accomodation.jsx'
import Facilities_blogcards from './facilities/facilitiesBlogcards.jsx'
import EnjoyAgro from '../01homepage/EnjoyAgro.jsx'
import Testimonials from '../01homepage/Testimonials/Testimonials.jsx'
import Footer from '../01homepage/Footer.jsx'
import Whatsapp_logo from '../01homepage/whatsapp_logo.jsx'




const Home = () => {
  return (
    <div>
      <Top />
      <NavBar />
      <SudarshanHome />
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

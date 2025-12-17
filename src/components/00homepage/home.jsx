import React from 'react'
import Top  from '../01homepage/top.jsx'
import NavBar from '../../components/01homepage/Nav_Bar.jsx'
import SudarshanHome from '../../components/01homepage/sudarshan_main.jsx'
// import ContentOverImg from '../../components/01homepage/Content_Over_Img.jsx'
import Container2 from '../../components/01homepage/container2.jsx'
import Our_Accomodation from '../../components/01homepage/Our_Accomodation.jsx'
import Facilities_blogcards from '../../components/01homepage/facilities_blogcard_container/Facilities_blogcards.jsx'
import EnjoyAgro from '../../components/01homepage/EnjoyAgro.jsx'
import Testimonials from '../../components/01homepage/Testimonials/Testimonials.jsx'
import Footer from '../../components/01homepage/Footer.jsx'
import Whatsapp_logo from '../../components/01homepage/whatsapp_logo.jsx'

import enjoyagro from '../../assets/enjoy_agro.jpg'



const Home = () => {

 

  // return <h1>Home Page</h1>;



  return (
    <div>
       <Top />
      <NavBar />
      <SudarshanHome />
      {/* <ContentOverImg /> */}
      <Container2/>
      <Our_Accomodation/>
      <Facilities_blogcards/>
      <EnjoyAgro bg={enjoyagro}/>
      <Testimonials/>
      <Footer />
      <Whatsapp_logo />
    </div>
  )
}

export default Home

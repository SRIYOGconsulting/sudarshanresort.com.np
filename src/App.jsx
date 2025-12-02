import React from 'react'
// import Starting_Page from './components/Starting_Page.jsx'
import Homepage  from '../src/components/Home_page.jsx'
import NavBar from './components/Nav_Bar.jsx'
import SudarshanHome from './components/sudarshan_main.jsx'
import ContentOverImg from './components/Content_Over_Img.jsx'
import Container2 from './components/container2.jsx'
import Our_Accomodation from './components/Our_Accomodation.jsx'
import Facilities_blogcards from './components/Facilities_blogcards.jsx'
const App = () => {
  return (
    <div>
      {/* <Starting_Page/> */}
      <Homepage />
      <NavBar />
      <SudarshanHome />
      <ContentOverImg />
     <Container2/>
     <Our_Accomodation/>
     <Facilities_blogcards/>
    </div>
  )
}

export default App

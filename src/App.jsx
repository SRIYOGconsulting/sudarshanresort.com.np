import React from 'react'
// import Starting_Page from './components/Starting_Page.jsx'
import Homepage  from '../src/components/Home_page.jsx'
import NavBar from './components/Nav_Bar.jsx'
import SudarshanHome from './components/sudarshan_main.jsx'
import ContentOverImg from './components/Content_Over_Img.jsx'

const App = () => {
  return (
    <div>
      {/* <Starting_Page/> */}
      <Homepage />
      <NavBar />
      <SudarshanHome />
      <ContentOverImg />
     
    </div>
  )
}

export default App

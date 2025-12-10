import React from 'react'

import Herosection from '../00herosection/herosection.jsx'
import Top from '../01homepage/top.jsx'
import Nav_Bar from '../01homepage/Nav_Bar'
import Roomblogcards from './roomblogcards.jsx'


import Footer from '../01homepage/Footer.jsx'
const room = () => {
  return (
    <div>
     <Top />
      <Nav_Bar />
      <Herosection h1="Rooms" tab="Home" p="Rooms"/>
      <Roomblogcards />
      <Footer />
    </div>
  )
}

export default room

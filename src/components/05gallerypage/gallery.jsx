import React from 'react'
import Top from '../01homepage/top.jsx'
import Navbar from '../01homepage/Nav_Bar.jsx'
import Herosection from '../00herosection/herosection.jsx'
import Allcards from '../05gallerypage/allcards.jsx'
import Twinbed_cards from '../05gallerypage/twin_bed_cards.jsx'
import Doublebed_cards from '../05gallerypage/doublebed_cards.jsx'
const Gallery = () => {
  return (
    <div>
      <Top/>
      <Navbar/>
      <Herosection h1="Gallery" tab="Home" p="gallery"/>
      <Allcards/>
      {/* <Twinbed_cards />
      <Doublebed_cards/> */}
      
    </div>
  )
}

export default Gallery

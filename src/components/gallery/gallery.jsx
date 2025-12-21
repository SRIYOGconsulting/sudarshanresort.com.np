
import Top from '../top.jsx'
import Navbar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import Allcards from './cardWrapper/allCards.jsx'
import Footer from '../Footer.jsx'
 import { useEffect } from "react";
 
const Gallery = () => {
     useEffect(() => {
      document.title = "Gallery | Sudarshan Resort";
    }, []);
  return (
    <div>
      <Top/>
      <Navbar/>
      <Herosection h1="Gallery" tab="Home" p="gallery"/>
      <Allcards/>
      <Footer/>
      
    </div>
  )
}

export default Gallery

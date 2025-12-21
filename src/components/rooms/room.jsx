

import Herosection from '../herosection.jsx'
import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Roomcards from './rooms/roomCards.jsx'
 import { useEffect } from "react";

import Footer from '../Footer.jsx'
const Room = () => {
   useEffect(() => {
    document.title = "Rooms | Sudarshan Resort";
  }, []);
  return (
    <div>
     <Top />
      <Nav_Bar />
      <Herosection h1="Rooms" tab="Home" p="Rooms"/>
      <Roomcards />
      <Footer />
    </div>
  )
}

export default Room

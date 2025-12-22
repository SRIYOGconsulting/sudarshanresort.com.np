import SeoHelmet from '../seoHelmet.jsx'

  import Herosection from '../herosection.jsx'
  import Top from '../top.jsx'
  import Nav_Bar from '../Nav_Bar.jsx'
  import Roomcards from './rooms/roomCards.jsx'
  import Footer from '../Footer.jsx'
  const Room = () => {
   
    return (
      <div>
     <SeoHelmet
        title="Rooms | Sudarshan Resort"
        description="Discover luxurious rooms at Sudarshan Resort. Enjoy modern amenities, cozy interiors, and peaceful stays surrounded by nature. Book your stay now!"
        image="/images/rooms/room1.jpg"
        url="https://sudarshanresort.com/rooms"
      />

 

      <Top />
        <Nav_Bar />
        <Herosection h1="Rooms" tab="Home" p="Rooms"/>
        <Roomcards />
        <Footer />
      </div>
    )
  }

  export default Room

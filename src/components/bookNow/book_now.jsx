
import Top from '../top.jsx'
import Nav_bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Booking_Form from './form/booking_form.jsx'
import Footer from '../Footer.jsx'
import SeoHelmet from '../seoHelmet.jsx'

const Book_now = () => {
 
  return (
    <div>
        <SeoHelmet
        title="Booking Form | Sudarshan Resort"
        description="Book your stay at Sudarshan Resort easily with our online booking form. Choose your preferred room and dates for a memorable stay."
        image="/images/rooms/room1.jpg"
        url="https://sudarshanresort.com/booking"
      />
      <Top />
      <Nav_bar />
      <Hero h1="Booking" tab="Home" p="Booking"/>
      <Booking_Form />
      <Footer/>
    </div>
  )
}

export default Book_now

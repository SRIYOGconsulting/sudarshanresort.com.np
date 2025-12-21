
import style from './ourAccomodation.module.css'
import { Link} from 'react-router-dom'

const Our_Accomodation = () => {
  return (
    <div>
    <div className={style.container_accomodation_top}>
      <div className={style.container_accomodation}>
        <div className={style.content_wrap}>
      <h1>Our Accomodation</h1>
      <div className={style.p_and_div}>
      <p className={style.p_line_positioning}>Pick a room that best suits your choice and budget
        </p>
        <div className={style.line_horizontal}></div>
      </div>
      </div>
      
      <div>
        <Link to="/rooms" className={style.btn}>View all rooms</Link>
      </div>
    </div>
    
       <div className={style.images_div}>
        <div className={style.img_wrap}>
        <img src="images/rooms/room1.jpg" alt="img" />
        <p className={style.p1}>Twin Bedroom</p>
       <Link to="/rooms" className={style.start_price}>Starting from NPR 2500</Link>
        <Link to="/book" className={style.book_now}>Book Now</Link>
        </div>
        
        <div className={style.img_wrap}>
        <img src="images/rooms/room2.jpg" alt="img" />
         <p className={style.p1}>King Bedroom</p>
         <Link to="/rooms" className={style.start_price}>Starting from NPR 2500</Link>
        <Link to="/book"  className={style.book_now}>Book Now</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Our_Accomodation

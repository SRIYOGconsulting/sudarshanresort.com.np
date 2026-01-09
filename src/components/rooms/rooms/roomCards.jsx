
import { Link } from "react-router-dom";
import { BedDouble, IndianRupee, Star } from "lucide-react";
import style from "./roomCards.module.css";
import roomsData from "../roomdata.json";


const Roomblogcards = () => {
 
  return (

     <div className={style.roomcard_container}>

      <div className={style.roo}>
      {roomsData.map((room)=>(
        <div className={style.roomcard} key={room.id}>
          
       <div className={style.imageWrapper}>
      <img src={room.img} alt="" />
        <div className={style.overlay}>
        <Link to="/book" className={style.bookbtn}> Book Now </Link>
        </div>
      </div>

      <div className={style.roomcard_content}>
      <h2>{room.title}</h2>
      <div className={style.price_container}>

          <div className={style.details_room}>
            <IndianRupee size={15}/> 
            <p>{room.price} {room.per}</p>
          </div>
          <div className={style.details_room}>
            <BedDouble size={15}/> 
            <p>{room.bed}</p>
          </div>
          <div className={style.ratting_and_rating_number_wrapper}>
            <div className={style.stars_wrapper}>
              <Star size={15} color="green" fill="green" />
              <Star size={15} color="green" fill="green" />
              <Star size={15} color="green" fill="green" />
              <Star size={15} color="green" fill="green" />
              </div>
              <div className={style.rating_review_wrapper}>
                  <p className={style.rating}>4.8</p>
                  <p>10 reviews</p>
              </div>
          </div>
          <div className={style.line}></div>
          <div className={style.earthroom_plus_wrapper}>
            <p>{room.title} room features</p>
            <img  src="/images/rooms/icon/plus.webp" alt="plus" srcset="" />
          </div>
          <div className={style.choose_date_button_wrapper}>
            <Link to={`/rooms/viewmore/${room.id}`} className={style.choose_date_button} 
         
              >View More</Link>
          </div>
          
      </div>
      </div>
      </div>
        ))}
      </div>
      
      {/* popup booking date form */}
      

    </div>
  );
};

export default Roomblogcards;

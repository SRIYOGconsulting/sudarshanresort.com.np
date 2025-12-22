
import style from "./roomCards.module.css";
import { Link } from "react-router-dom";

const Roomblogcards = () => {
  const roomcontent=[
    {img:"images/rooms/room1.jpg",title:"Mercury",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.jpg",title:"Venus",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.jpg",title:"Earth",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.jpg",title:"Mars",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.jpg",title:"Jupiter",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.jpg",title:"Saturn",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.jpg",title:"Uranus",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.jpg",title:"Neptune",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.jpg",title:"Pluto",price:"2500", per:"/ per night" },
  ]
  return (

     <div className={style.roomcard_container}>
      
        
      
      <div className={style.roo}>
      {roomcontent.map((get,id)=>(
        <div className={style.roomcard} key={id}>
          
       <div className={style.imageWrapper}>
      <img src={get.img} alt="" />
        <div className={style.overlay}>
        <Link to="/book" className={style.bookbtn}> Book Now </Link>
        </div>
      </div>

      <div className={style.roomcard_content}>
      <h2>{get.title}</h2>
      <div className={style.price_container}>
        <h1>{get.price}</h1>
        <p >{get.per}</p>
      </div>
      </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Roomblogcards;

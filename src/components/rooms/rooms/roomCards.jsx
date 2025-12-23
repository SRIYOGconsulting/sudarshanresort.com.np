
import style from "./roomCards.module.css";
import { Link } from "react-router-dom";

const Roomblogcards = () => {
  const roomcontent=[
    {img:"images/rooms/room1.webp",title:"Mercury",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Venus",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Earth",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Mars",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Jupiter",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Saturn",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Uranus",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Neptune",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Pluto",price:"2500", per:"/ per night" },
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

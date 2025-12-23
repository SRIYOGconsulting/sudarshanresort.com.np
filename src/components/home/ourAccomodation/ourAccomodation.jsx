import style from './ourAccomodation.module.css';
import { Link } from 'react-router-dom';

const rooms = [
  {
    img: 'images/rooms/room1.webp',
    alt: 'Twin bedroom at Sudarshan Resort',
    name: 'Twin Bedroom',
    price: 'NPR 2500',
  },
  {
    img: 'images/rooms/room2.webp',
    alt: 'King bedroom at Sudarshan Resort',
    name: 'King Bedroom',
    price: 'NPR 2500',
  },
];

const Our_Accomodation = () => {
  return (
    <section className={style.container_accomodation_top} aria-labelledby="accommodation-heading">
      <div className={style.container_accomodation}>
        <div className={style.content_wrap}>
          <h2 id="accommodation-heading">Our Accommodation</h2>
          <div className={style.p_and_div}>
            <p className={style.p_line_positioning}>
              Pick a room that best suits your choice and budget
            </p>
            <div className={style.line_horizontal}></div>
          </div>
        </div>

        <Link to="/rooms" className={style.btn} aria-label="View all rooms">
          View all rooms
        </Link>
      </div>

      <div className={style.images_div}>
        {rooms.map((room, index) => (
          <article key={index} className={style.img_wrap}>
            <img
              src={room.img}
              alt={room.alt}
              width="600"
              height="400"
              loading="lazy"
            />
            <p className={style.p1}>{room.name}</p>
            <Link to="/rooms" className={style.start_price} aria-label={`Starting price for ${room.name} is ${room.price}`}>
              Starting from {room.price}
            </Link>
            <Link to="/book" className={style.book_now} aria-label={`Book ${room.name} now`}>
              Book Now
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Our_Accomodation;

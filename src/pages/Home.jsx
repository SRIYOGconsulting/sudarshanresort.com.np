import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../components/SeoHelmet.jsx";
import Whatsapp_logo from "../components/Whatsapp_logo.jsx";
import Menu from "../components/Menu.jsx";

import EnjoyAgro from "./EnjoyAgro.jsx";
import styleHome from "../styles/home/Home.module.css";
import styleHero from "../styles/home/homeHero.module.css";
import styleAbout from "../styles/home/homeAbout.module.css";
import styleFacilities from "../styles/home/facilitiesBlogcards.module.css";
import styleAccomodation from "../styles/home/ourAccomodation.module.css";
import styleTestimonials from "../styles/home/testimonials.module.css";

import { Check, Star } from "lucide-react";

// ----------------------- HomeHero -----------------------
const HomeHero = () => {
  const texts = ["Luxury Resort", "Deluxe Rooms", "King Beds"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => setBlink(true), 1500);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      const text = texts[index];
      if (!deleting) {
        setSubIndex((prev) => prev + 1);
        if (subIndex === text.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <section className={styleHero.sudarshan_main_container} aria-labelledby="hero-heading">
      <img
        src="/images/home/SudarshanHome.webp"
        alt="Sudarshan Resort luxury stay surrounded by nature"
        className={styleHero.heroImg}
        fetchpriority="high"
        decoding="async"
        width="1920"
        height="1080"
      />
      <div className={styleHero.overlay}></div>
      <div className={styleHero.topcontainer}>
        <p className={styleHero.top}>Luxury hotel & Resort Lifestyle</p>
        <div className={styleHero.typing_container}>
          <h1 className={styleHero.comfort}>Comfort</h1>
          <span className={styleHero.typing_text}>{texts[index].substring(0, subIndex)}</span>
          <span className={`${styleHero.cursor} ${blink ? styleHero.blink : ""}`}>|</span>
        </div>
        <div className={styleHero.h1_Link_btn_wrapper}>
          <h2 className={styleHero.for_your_vacation}>for your Vacation</h2>
          <Link
            to="/book"
            className={styleHero.book_now_btn}
            aria-label="Book a room at Sudarshan Resort"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
};

// ----------------------- HomeAbout -----------------------
const HomeAbout = () => (
  <section className={styleAbout.container} aria-labelledby="about-heading">
    <div className={styleAbout.content}>
      <header className={styleAbout.heading_container}>
        <h3>Welcome to</h3>
        <div className={styleAbout.wrap_h1_p}>
          <h1 id="about-heading">Sudarshan Agro Resort</h1>
          <p>Agro Tourism Resort near Biratnagar.</p>
        </div>
      </header>
      <div className={styleAbout.btn_and_text_container}>
        <p className={styleAbout.para}>
          Welcome to Sudarshan Park and Resort! Here, peacefulness blends with Nepali customs.
          Surrounded by lush greenery, our haven invites you to relax and enjoy the essence of Nepal.
          Immerse yourself in our vibrant culture, savor authentic cuisine, and enjoy engaging activities.
          With cozy rooms and fair prices, we promise your stay will be unforgettable. Come, relax, and
          experience the beauty of Nepal, right here with us!
        </p>
        <Link to="/about" className={styleAbout.about_btn} aria-label="Learn more about Sudarshan Agro Resort">
          About
        </Link>
      </div>
    </div>
    <div className={styleAbout.image_container}>
      <img
        className={styleAbout.sudarshanabout}
        src="images/home/SudarshanAbout.webp"
        alt="Sudarshan Agro Resort surrounded by lush greenery"
        loading="lazy"
        width="500"
        height="325"
      />
    </div>
  </section>
);

// ----------------------- FacilitiesBlogcards -----------------------
const FacilitiesBlogcards = () => {
  const facilities = [
    { img: "images/home/facilities/barbecue.webp", h3: "Barbecue", p: "Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors." },
    { img: "images/home/facilities/powerBackup.webp", h3: "Power Backups", p: "Enjoy uninterrupted comfort with reliable power backup facilities, even during outages." },
    { img: "images/home/facilities/parking.webp", h3: "Free Parking", p: "Parking is complimentary, giving you peace of mind during your stay." },
    { img: "images/home/facilities/resturant.webp", h3: "Riverside Restaurant", p: "At Sudarshan Agro Resort, enjoy riverside dining for a serene mealtime." },
  ];

  return (
    <section className={styleFacilities.container} aria-labelledby="facilities-heading">
      <h2 id="facilities-heading">Facilities</h2>
      <div className={styleFacilities.horizontal_line}></div>
      <div className={styleFacilities.Facilities_blogcards}>
        {facilities.map((item, index) => (
          <article key={index} className={styleFacilities.Blog_container}>
            <img src={item.img} alt={item.h3} loading="lazy" />
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

// ----------------------- OurAccommodation -----------------------
const OurAccommodation = () => {
  const rooms = [
    { img: "images/rooms/room1.webp", alt: "Twin bedroom at Sudarshan Resort", name: "Twin Bedroom", price: "NPR 2500" },
    { img: "images/rooms/room2.webp", alt: "King bedroom at Sudarshan Resort", name: "King Bedroom", price: "NPR 2500" },
  ];

  return (
    <section className={styleAccomodation.container_accomodation_top} aria-labelledby="accommodation-heading">
      <div className={styleAccomodation.container_accomodation}>
        <div className={styleAccomodation.content_wrap}>
          <h2 id="accommodation-heading">Our Accommodation</h2>
          <div className={styleAccomodation.p_and_div}>
            <p className={styleAccomodation.p_line_positioning}>Pick a room that best suits your choice and budget</p>
            <div className={styleAccomodation.line_horizontal}></div>
          </div>
        </div>
        <Link to="/rooms" className={styleAccomodation.btn} aria-label="View all rooms">View all rooms</Link>
      </div>
      <div className={styleAccomodation.images_div}>
        {rooms.map((room, index) => (
          <article key={index} className={styleAccomodation.img_wrap}>
            <img src={room.img} alt={room.alt} width="600" height="400" loading="lazy" />
            <p className={styleAccomodation.p1}>{room.name}</p>
            <Link to="/rooms" className={styleAccomodation.start_price}>Starting from {room.price}</Link>
            <Link to="/book" className={styleAccomodation.book_now}>Book Now</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

// ----------------------- Testimonials -----------------------
const Testimonials = () => {
  const testimonialsData = [
    { name: "Sakchyam", img: "images/testimonials/sakchyam.webp", title: "Bhaktapur, Nepal", description: "The eco-friendly design and sustainable practices at Sudarshan Agro Resort impressed..." },
    { name: "Aashma", img: "images/testimonials/aashma.webp", title: "Lalitpur, Nepal", description: "Sudarsan Agro Resort provided a wonderful escape from the hectic pace of daily life..." },
    { name: "Bitisha", img: "images/testimonials/bitisha.webp", title: "Biratnagar, Nepal", description: "The resort is a perfect blend of comfort and nature, providing an extraordinary experience..." },
  ];

  return (
    <section className={styleTestimonials.container} aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className={styleTestimonials.horizontal_line}></div>
      <div className={styleTestimonials.cards_row}>
        {testimonialsData.map((item, index) => (
          <div key={index} className={styleTestimonials.containerCard}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.title}</span>
            <div className={styleTestimonials.Rating_icon}>
              <Star size={15} color="orange" fill="orange" />
              <Star size={15} color="orange" fill="orange" />
              <Star size={15} color="orange" fill="orange" />
              <Star size={15} color="orange" fill="orange" />
            </div>
            <p className={styleTestimonials.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ----------------------- Main Home Component -----------------------
const Home = () => {
  useEffect(() => {
    document.title = "Home | Sudarshan Resort";
  }, []);

  return (
    <div className={styleHome.homecontainer}>
      <SeoHelmet
        title="Home | Sudarshan Resort"
        description="Welcome to Sudarshan Resort – a peaceful nature retreat offering luxury stays, agro experiences, and modern amenities."
        image="/images/home/SudarshanHome.jpg"
        url="https://sudarshanresort.com/"
      />
      <main id="main-content">
        <HomeHero />
        <HomeAbout />
        <OurAccommodation />
        <FacilitiesBlogcards />
        <EnjoyAgro bg="images/home/transparentbg/1.webp" headingId="agro-heading" />     
        <Testimonials />
      </main>
      <Menu />
      <Whatsapp_logo />
    </div>
  );
};

export default Home;

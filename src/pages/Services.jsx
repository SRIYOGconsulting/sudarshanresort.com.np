import { Link } from "react-router-dom";
import { useState } from "react";
import SeoHelmet from "../components/SeoHelmet.jsx";
import styleOffer from "../styles/services/services_blog_cards.module.css";
import styleAdditional from "../styles/services/Additional_feature.module.css";
import Herosection from "../components/Herosection.jsx";
import EnjoyAgro from "./EnjoyAgro.jsx";

// -------------------- Offer Blog Cards --------------------
const OfferBlogCards = () => {
  const services = [
    { id: 1, img: "images/services/barbecue.webp", service_name: "Barbecue", service_description: "Experience the essence of summer with our BBQ shot!" },
    { id: 2, img: "images/services/wifi.webp", service_name: "Free wifi", service_description: "Enjoy complimentary WiFi access, staying connected seamlessly throughout your stay." },
    { id: 3, img: "images/services/kings-bed.webp", service_name: "King Beds", service_description: "Experience ultimate comfort with luxurious king beds in every room." },
    { id: 4, img: "images/services/laundry.webp", service_name: "Laundry", service_description: "Enjoy convenient laundry services for a hassle-free stay at your own ease." },
    { id: 5, img: "images/services/drink.webp", service_name: "Drink", service_description: "Quench your thirst with our variety of beverage options available onsite." },
    { id: 6, img: "images/services/farm-to-table.webp", service_name: "Farm-to-Table Dining", service_description: "We provide fresh, organic produce grown on-site or sourced locally. Guests often enjoy meals made from ingredients harvested directly from the resort's farm." },
    { id: 7, img: "images/services/riverside.webp", service_name: "Riverside", service_description: "Enjoy peaceful mornings by the water and unforgettable views from our balcony." },
    { id: 8, img: "images/services/fishing1.webp", service_name: "Fishing", service_description: "Experience the joy of fishing in our resort, where relaxation meets adventure." },
  ];

  return (
    <div className={styleOffer.container_card}>
      <h1>What we offer</h1>
      <div className={styleOffer.line}></div>
      <div className={styleOffer.services}>
        {services.map((service) => (
          <div key={service.id} className={styleOffer.service_card}>
            <img src={service.img} alt={service.service_name} />
            <Link className={styleOffer.service_h1}>
              <h1>{service.service_name}</h1>
            </Link>
            <p>{service.service_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------- Additional Features --------------------
const AdditionalFeatures = () => {
  const features = [
    { img: "images/services/additional_feature/1.webp", title: "Photographer", description: "Photographers can capture stunning landscapes and unique moments with ease, thanks to our picturesque surroundings and dedicated photography spots" },
    { img: "images/services/additional_feature/2.webp", title: "Trained Driver", description: "Our trained drivers ensure hassle-free excursions to nearby attractions, allowing you to relax and immerse yourself in the experience." },
    { img: "images/services/additional_feature/3.webp", title: "Laundry", description: "At Sudarsan Agro Resort, convenient laundry services keep you fresh and comfortable throughout your stay. Ensuring a comfortable and worry-free stay." },
    { img: "images/services/additional_feature/4.webp", title: "Coffee Maker", description: "Elevate your stay with the convenience of in-room coffee makers, ensuring a perfect brew whenever you desire. Savor freshly brewed coffee anytime." },
  ];

  return (
    <div className={styleAdditional.container}>
      <div className={styleAdditional.header}>
        <h1>Additional Features</h1>
        <div className={styleAdditional.line}></div>
      </div>
      <div className={styleAdditional.img_content_wrap}>
        {features.map((item) => (
          <div key={item.title} className={styleAdditional.contentwrap}>
            <img className={styleAdditional.img} src={item.img} alt={item.title} />
            <Link
              className={styleAdditional.titlelink}
              onClick={() => window.scrollTo(0, 0)}
            >
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------- Main Services Page --------------------
const Services = () => (
  <div>
    <SeoHelmet
      title="Services | Sudarshan Resort"
      description="Explore the wide range of services at Sudarshan Resort including luxurious accommodations, agro experiences, modern amenities, and special offerings."
      image="/images/services/transparentbg/bg.jpg"
      url="https://sudarshanresort.com/services"
    />
    <Herosection h1="Services" tab="Home" p="Services" bg="images/background/1.webp" />
    <OfferBlogCards />
    <EnjoyAgro bg="images/services/transparentbg/bg.webp" />
    <AdditionalFeatures />
  </div>
);

export default Services;

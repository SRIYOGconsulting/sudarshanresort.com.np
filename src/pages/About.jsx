import { Check } from "lucide-react";

import aboutStyle from "../styles/about/about.module.css";
import aboutUsStyle from "../styles/about/aboutUs.module.css";
import featureStyle from "../styles/about/aboutFeature.module.css";
import promotingStyle from "../styles/about/promoting.module.css";

import Herosection from "../components/Herosection";
import SeoHelmet from "../components/SeoHelmet";
import EnjoyAgro from "./EnjoyAgro.jsx";

const AboutUs = () => {
  return (
    <div className={aboutUsStyle.aboutus_container}>
      <h1>About Us</h1>
      <div className={aboutUsStyle.line}></div>

      <div className={aboutUsStyle.aboutus_content_and_img}>
        <div className={aboutUsStyle.aboutus_content}>
          <p className={aboutUsStyle.content_p}>
            Welcome to Sudarshan Park and Resort, your ultimate destination for
            relaxation and cultural immersion in Nepali style. Nestled in the
            heart of lush greenery, our resort offers a serene escape where you
            can enjoy authentic Nepali cuisine, comfortable accommodations, and
            vibrant cultural experiences.
          </p>

          <p className={aboutUsStyle.content_p}>
            At Sudarshan Park and Resort, we take pride in serving the finest
            traditional Nepali dishes at affordable prices.
          </p>
        </div>

        <img
          src="images/about/SudarshanAbout.webp"
          className={aboutUsStyle.img1}
          alt="About Sudarshan Resort"
        />
      </div>
    </div>
  );
};

/* ================= ABOUT FEATURES ================= */
const AboutFeature = () => {
  const aboutFeature = [
    { img: "/images/about/feature/car.webp", h3: "Free WiFi Access" },
    { img: "images/about/feature/utensils.webp", h3: "Restaurant & Food Service" },
    { img: "/images/about/feature/car.webp", h3: "Free Parking" },
  ];

  return (
    <div className={featureStyle.feature_container}>
      <div className={featureStyle.image_main_container}>
        <img src="images/about/feature/1.webp" alt="Resort features" />
      </div>

      <div className={featureStyle.feature_content}>
        <div className={featureStyle.feature_container_header}>
          <h1>Features</h1>
          <div className={featureStyle.line}></div>
        </div>

        <div className={featureStyle.feature_content_container}>
          <div className={featureStyle.list_container}>
            <ul className={featureStyle.list_container_check}>
              <div>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>In Room Dining</p>
                </li>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>Transport Service</p>
                </li>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>Facilities for the Disabled</p>
                </li>
              </div>

              <div>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>Pet Friendly Accommodation</p>
                </li>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>Check In : 1.00 PM</p>
                </li>
                <li>
                  <Check color="#00ff33" strokeWidth={3} />
                  <p>Check Out : 11.00 AM</p>
                </li>
              </div>
            </ul>
          </div>

          <div className={featureStyle.line2}></div>

          <div className={featureStyle.feature_container_footer}>
            {aboutFeature.map((item, index) => (
              <div key={index} className={featureStyle.FooterIconContainer}>
                <img src={item.img} alt={item.h3} />
                <h3>{item.h3}</h3>
                <div className={featureStyle.line3}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= PROMOTING TOURISM ================= */
const Promoting = () => {
  const promotingImages = [
    { img: "images/about/promoting/1.webp" },
    { img: "images/about/promoting/2.webp" },
    { img: "images/about/promoting/3.webp" },
  ];

  return (
    <div className={promotingStyle.promoting_container}>
      <h1>"Promoting Tourism"</h1>

      <div className={promotingStyle.image_container}>
        {promotingImages.map((item, index) => (
          <img
            key={index}
            className={promotingStyle.img_promote}
            src={item.img}
            alt="Tourism promotion"
          />
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN ABOUT PAGE ================= */
const About = () => {
  return (
    <div className={aboutStyle.about}>
      <SeoHelmet
        title="About | Sudarshan Resort"
        description="Learn about Sudarshan Resort, a peaceful agro resort offering comfortable stays, modern amenities, nature experiences, and warm hospitality."
        image="/images/about/SudarshanAbout.jpg"
        url="https://sudarshanresort.com/about"
      />
      <Herosection
        h1="About"
        tab="Home"
        p="About"
        bg="images/background/1.webp"
      />

      <AboutUs />
      <Promoting />
      <AboutFeature />
      <EnjoyAgro bg="images/about/transparentbg/1.webp" />
    </div>
  );
};

export default About;

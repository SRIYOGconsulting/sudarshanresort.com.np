import style from './homeAbout.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className={style.container} aria-labelledby="about-heading">
      {/* Text Content */}
      <div className={style.content}>
        <header className={style.heading_container}>
          <h3>Welcome to</h3>
          <div className={style.wrap_h1_p}>
            <h1 id="about-heading">Sudarshan Agro Resort</h1>
            <p>Agro Tourism Resort near Biratnagar.</p>
          </div>
        </header>

        <div className={style.btn_and_text_container}>
          <p className={style.para}>
            Welcome to Sudarshan Park and Resort! Here, peacefulness blends with Nepali customs.
            Surrounded by lush greenery, our haven invites you to relax and enjoy the essence of Nepal.
            Immerse yourself in our vibrant culture, savor authentic cuisine, and enjoy engaging activities.
            With cozy rooms and fair prices, we promise your stay will be unforgettable. Come, relax, and
            experience the beauty of Nepal, right here with us!
          </p>
          <Link 
            to="/about" 
            className={style.about_btn} 
            aria-label="Learn more about Sudarshan Agro Resort"
          >
            About
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className={style.image_container}>
        <img
          className={style.sudarshanabout}
          src="images/home/SudarshanAbout.webp"
          alt="Sudarshan Agro Resort surrounded by lush greenery"
          loading="lazy"
          width="500"
          height="325"
        />
      </div>
    </section>
  );
};

export default About;

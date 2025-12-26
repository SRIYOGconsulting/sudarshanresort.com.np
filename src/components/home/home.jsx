import { useEffect, lazy, Suspense } from "react";
import NavBar from "../Nav_Bar.jsx";
import HomeHero from "./transparent/homeHero.jsx";
import HomeAbout from "./about/homeAbout.jsx";
import Footer from "../Footer.jsx";
import Whatsapp_logo from "../whatsapp_logo.jsx";
import SeoHelmet from "../seoHelmet.jsx";
import Menu from "../menu.jsx";

import style from "./Home.module.css";

// Lazy-loaded components
const Our_Accomodation = lazy(() => import("./ourAccomodation/ourAccomodation.jsx"));
const Facilities_blogcards = lazy(() => import("./facilities/facilitiesBlogcards.jsx"));
const EnjoyAgro = lazy(() => import("../EnjoyAgro.jsx"));
const Testimonials = lazy(() => import("./testimonials/Testimonials.jsx"));

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = "Home | Sudarshan Resort";
  }, []);

  return (
    <div className={style.homecontainer}>
    

      <SeoHelmet
        title="Home | Sudarshan Resort"
        description="Welcome to Sudarshan Resort – a peaceful nature retreat offering luxury stays, agro experiences, and modern amenities."
        image="/images/home/SudarshanHome.jpg"
        url="https://sudarshanresort.com/"
      />

      <header>
        <NavBar />
      </header>

      <main id="main-content">
        <HomeHero />

        <section aria-labelledby="about-heading">
          <HomeAbout headingId="about-heading" />
        </section>

        <Suspense fallback={<div>Loading Accommodation...</div>}>
          <section aria-labelledby="accommodation-heading">
            <Our_Accomodation headingId="accommodation-heading" />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Facilities...</div>}>
          <section aria-labelledby="facilities-heading">
            <Facilities_blogcards headingId="facilities-heading" />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Agro Experience...</div>}>
          <section aria-labelledby="agro-heading">
            <EnjoyAgro bg="images/home/transparentbg/1.webp" headingId="agro-heading" />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <section aria-labelledby="testimonials-heading">
            <Testimonials headingId="testimonials-heading" />
          </section>
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
      <Menu />
      <Whatsapp_logo />
    </div>
  );
};

export default Home;

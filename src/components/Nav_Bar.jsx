import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../styles/navBar.module.css";
import { Menu, Mail, PhoneCall, Facebook, Instagram, Linkedin } from "lucide-react";

const Nav_Bar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuhandler = () => setMenu(prev => !prev);

  return (
    <header>
      {/* Top Bar */}
      <div className={`${style.topBar} ${scroll ? style.top_hidden : ""}`}>
        <div className={style.topContent}>
          <div className={style.phone_mail_wrapper}>
          <div className={style.phoneContainer}>
            <PhoneCall color="white" size={20} />
            <p>+977 9852020058</p>
          </div>
          <div className={style.emailContainer}>
            <Mail color="white" size={20} />
            <p>booking@sudarshanagroresort.com.np</p>
          </div>
          </div>
          <div className={style.socialmediaIcon}>
            <Facebook color="white" size={20} cursor="pointer" />
            <Instagram color="white" size={20} cursor="pointer" />
            <Linkedin color="white" size={20} cursor="pointer" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`${style.navContainer} ${scroll ? style.navScroll : ""}`}>
        <div className={style.navLogo}>
          <img src="favicon/logo.webp" alt="logo" />
        </div>
        
       
        <div className={style.container_wrapper_bookingimg}>
        <ul className={style.navMenu}>
          <li><Link to="/" className={style.li}>Home</Link></li>
          <li><Link to="/about" className={style.li}>About</Link></li>
          <li><Link to="/rooms" className={style.li}>Rooms</Link></li>
          <li><Link to="/services" className={style.li}>Services</Link></li>
          <li><Link to="/gallery" className={style.li}>Gallery</Link></li>
          {/* added location */}
           {/* <li><Link to="/location" className={style.li}>location</Link></li> */}
          <li><Link to="/contact" className={style.li}>Contact</Link></li>
        </ul>
        <Link to="https://d.sriyog.com/sudarshanresort" target="_blank" className={style.linkBook} >
              <img src="/icons/booking.svg" alt="booking-svg" />
            </Link>

            </div>
        <Menu className={style.menu} onClick={menuhandler} size={35} color="white" />

       {/* Mobile Menu */}
      <div   className={`${style.mobileMenu} ${menu ? style.active : ""} $ ${scroll ? style.mobileScroll : ""} `}>
        
        <ul className={style.navMobile}>
          <li><Link to="/" onClick={() => setMenu(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenu(false)}>About</Link></li>
          <li><Link to="/rooms" onClick={() => setMenu(false)}>Rooms</Link></li>
          <li><Link to="/services" onClick={() => setMenu(false)}>Services</Link></li>
          <li><Link to="/gallery" onClick={() => setMenu(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
        </ul>
      </div>
      </nav>

     
    </header>
  );
};

export default Nav_Bar;

  import { useState, useEffect } from 'react'
  import { Link, } from 'react-router-dom'
  import style from '../styles/navBar.module.css'
  import { Menu } from 'lucide-react'
  
 import { Mail, PhoneCall,Facebook,Instagram,Linkedin } from 'lucide-react'
// import style  from '../styles/navBar.module.css'
  const Nav_Bar = () => {
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu]=useState(false)


    useEffect(() => {
      const onScroll = () => {
        setScroll(window.scrollY > 50);
      };
    

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    const menuhandler=()=>{
       setMenu(prev => !prev);
    }
    
    return (<>
    
    
       <div className={style.Container}>
      <div className={style.mainContainer}>
        <a href="tel:+9779852020058">
        <div className={style.phoneContainer}>
         <PhoneCall color='white' size={20}/>
         <p>+977 9852020058</p>
        </div>
        </a>
        
        <a href="mailto:booking@sudarshanagroresort.com.np">
        <div className={style.emailContainer} >
          <Mail color='white' size={20}/>
          <p>booking@sudarshanagroresort.com.np</p>
        </div>
        </a>
      </div>
      <div className={style.socialmediaIcon}>
        <a href="https://facebook.com" target='_blank'><Facebook color='white' size={20}  cursor="Pointer"/></a>
        <a href="https://instagram.com" target='_blank'><Instagram color='white' size={20} cursor="Pointer"/></a>
        <a href="https://linkedin.com" target='_blank'><Linkedin color='white' size={20} cursor="Pointer"/></a>
      </div>
   
     
     
    </div>
    
    {/* for nav bar */}
     <nav className={`${style.nav_container} ${scroll ? style.nav_scroll : ""}`}>
  <div className={style.nav_logo}>
    <img src="favicon/logo.webp" alt="logo" />
  </div>
  <div className={style.nav_button_both_container}>
    <ul className={style.nav_menu}>
      <li><Link to="/" className={style.li}>Home</Link></li>
      <li><Link to="/about" className={style.li}>About</Link></li>
      <li><Link to="/rooms" className={style.li}>Rooms</Link></li>
      <li><Link to="/services" className={style.li}>Services</Link></li>
      <li><Link to="/gallery" className={style.li}>Gallery</Link></li>
      <li><Link to="/contact" className={style.li}>Contact</Link></li>
    </ul>

    <Menu
      className={style.menu}
      onClick={menuhandler}
      size={35}
      color="white"
      tabIndex={0}
      aria-label="Toggle menu"
    />

    <Link
      to="https://d.sriyog.com/sudarshanresort"
      target="_blank"
      className={style.linkbook}
    >
      <img src="/icons/booking.svg" alt="booking-svg" />
    </Link>
  </div>
</nav>

<div className={`${style.mobile_menu} ${scroll ? style.mobile_scroll : ""} ${menu ? style.active : ""}`}>
  <ul className={style.nav_mobile}>
    <li><Link to="/" onClick={() => setMenu(false)}>Home</Link></li>
    <li><Link to="/about" onClick={() => setMenu(false)}>About</Link></li>
    <li><Link to="/rooms" onClick={() => setMenu(false)}>Rooms</Link></li>
    <li><Link to="/services" onClick={() => setMenu(false)}>Services</Link></li>
    <li><Link to="/gallery" onClick={() => setMenu(false)}>Gallery</Link></li>
    <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
  </ul>
</div>

      
      </>
    )
  }

  export default Nav_Bar

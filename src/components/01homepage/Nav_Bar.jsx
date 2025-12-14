  import React, { useState, useEffect } from 'react'
  import { Link } from 'react-router-dom'
  import logo from '../../assets/logo.png'
  import style from '../../styles/Nav_Bar.module.css'
  import Loading from '../loadingpage/loading'
  import { useNavigate } from "react-router-dom";

  const Nav_Bar = () => {
      const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [loading,setLoading]= useState(false)
     const handleNavigation = (path) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // loader duration (adjust)
  };

    useEffect(() => {
      const onScroll = () => {
        setScroll(window.scrollY > 50);
      };
    

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return (<>
      <nav className={`${style.nav_container} ${scroll ? style.nav_scroll : ""}`}>
        <div className={style.nav_logo}>
          <img src={logo} alt="logo" />
        </div>
      <div className={style.nav_button_both_container}>
        <ul className={style.nav_menu}>
   <Link  to={'/'}  className={style.li}>Home</Link>
  <li className={style.li} onClick={() => handleNavigation("/about")}>About</li>
  <li className={style.li} onClick={() => handleNavigation("/rooms")}>Rooms</li>
  <li className={style.li} onClick={() => handleNavigation("/services")}>Services</li>
  <li className={style.li} onClick={() => handleNavigation("/gallery")}>Gallery</li>
  <li className={style.li} onClick={() => handleNavigation("/contact")}>Contact</li>
</ul>

        
        <button  className={style.book_btn}><Link to={'/book'} className={style.linkbook}>Book Now</Link></button>
        </div>
      </nav>
      {loading && <div className={style.time_conatainer}>
        
        <Loading className={style.loading}/> </div>}
      
      </>
    )
  }

  export default Nav_Bar

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import style from '../../styles/Nav_Bar.module.css'
const Nav_Bar = () => {
  
   const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
     <nav className={`${style.nav_container} ${scroll ? style.nav_scroll : ""}`}>
      <div className={style.nav_logo}>
        <img src={logo} alt="logo" />
      </div>
    <div className={style.nav_button_both_container}>
      <ul className={style.nav_menu}>
        <Link to={'/'} class={style.li}>Home</Link>
        <Link to={'/about'} class={style.li}>About</Link>
        <Link to={'/rooms'} class={style.li}>Rooms</Link>
        <Link to={'/services'} class={style.li}>Services</Link>
        <Link to={'/gallery'} class={style.li}>Gallery</Link>
        <Link to={'/contact'} class={style.li}>Contact</Link>
      </ul>
      
      <button  className={style.book_btn}>BOOK NOW</button>
      </div>
    </nav>
  )
}

export default Nav_Bar

import React from 'react'
import logo from '../assets/logo.png'
import style from '../styles/Nav_Bar.module.css'
const Nav_Bar = () => {
  return (
     <nav className={style.nav_container}>
      <div className={style.nav_logo}>
        <img src={logo} alt="logo" />
      </div>
    <div className={style.nav_button_both_container}>
      <ul className={style.nav_menu}>
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

      <button className={style.book_btn}>BOOK NOW</button>
      </div>
    </nav>
  )
}

export default Nav_Bar

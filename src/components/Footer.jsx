
import { Link } from "react-router-dom";
import style from '../styles/footer.module.css'
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react'
const Footer = () => {
  return (
    <div className={style.container_footer}>
      <div className={style.footer_hero_container}>
      <div className={style.footer_header}>
        <h1>Sudarshan Agro Resort</h1>
        <p>Enjoy your recreational time with
          Sudarshan Park and Resort in a Nepali Style.
          We offer you the best hospitality for your golden memories.</p>
      <div className={style.social_media_icon_container}>
          <Facebook color='white' size={22}  cursor="Pointer"/>
        <Instagram color='white' size={22} cursor="Pointer"/>
        <Linkedin color='white' size={22} cursor="Pointer"/>
      </div>
       </div>
      
      <div className={style.footer_nav}>
        <h2>Quick Links</h2>
        <ul className={style.dash_list} >
            <li><Link className={style.nav_btn} to="/gallery">Gallery</Link> </li>
            <li><Link className={style.nav_btn} to="/contact">Contact</Link></li>
            <li> <Link className={style.nav_btn} to="/services">Services</Link></li>
            <li><Link className={style.nav_btn} to="/rooms">Rooms</Link></li>
        </ul>
      </div>
      
      <div className={style.container_contact_info}>
        <h2>Get in Touch</h2>
        <div className={style.location_container}>
          <MapPin className={style.mappin} color="white" size={20} />
          <p>Lalbhitti, Belbari-2, Morang, Nepal</p>
        </div>

        <div className={style.phone_container}>
          <PhoneCall className={style.mappin} color='white' size={20}/>
          <p>+977-9852020058</p>
        </div>

        <div className={style.mail_container}>
          <Mail className={style.mappin} color='white' size={20}/>
          <p>booking@sudarshanagroresort.com.np</p>
        </div>
      </div>
    </div>
    
      <div className={style.container_bottom}>
        <p>Copyright © 2025 Sudarshan Agro Resort. All rights reserved.</p>
        <p>Technology Partner : <Link className={style.pracas} to="/pracas.net">PRACAS</Link></p>
      </div>
      
    </div>
  )
}

export default Footer

import React from 'react'
import { MapPin, Mail, PhoneCall } from 'lucide-react'
import style from '../styles/contactInfo.module.css'
import SeoHelmet from '../components/SeoHelmet'
import Herosection from '../components/Herosection'


const Contact = () => {
  return (
    <div className={style.containerallwrap}>
        <SeoHelmet
                title="Contact | Sudarshan Resort"
                description="Get in touch with Sudarshan Resort for reservations, inquiries, or any assistance. We are here to make your stay memorable."
                image="/images/contact/whatsapplogo.webp"
                url="https://sudarshanresort.com/contact"
              />
            <Herosection h1="Contact" tab="Home" p="Contact" bg="images/background/1.webp"/>
        <div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6975542742957!2d87.40568227602424!3d26.6581644709823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef658a3db38a5d%3A0xbfd3187bf701d864!2sSudarshan%20Resort!5e0!3m2!1sen!2snp!4v1765362986957!5m2!1sen!2snp" 
           width="1000" 
           height="450" 
           style={{ border: 0 }}
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade">
           </iframe>
    </div>
     <div className={style.contentWrapper}>
        <div className={style.sudarshanresort_header_line_wrapper}>
        <h2 className={style.h2}>Sudarshan Agro Resort</h2>
        <div className={style.line}></div>
        </div>
        
        <div>
            <h2 className={style.h2}>Location</h2>
            <div className={style.icon_and_p_wrapper}>
            <MapPin className={style.icon} />
            <p>Lalbhitti, Belbari-2, Morang, Nepal</p>
            </div>
             <div className={style.line}></div>
        </div>
        
         <div>
            <h2 className={style.h2}>Email</h2>
            <div className={style.icon_and_p_wrapper}>
            <Mail className={style.icon} />
            <p>booking@sudarshanagroresort.com.np</p>
            </div>
             <div className={style.line}></div>
        </div>
        
         <div>
            <h2 className={style.h2}>Phone No.</h2>
            <div className={style.icon_and_p_wrapper}>
            <PhoneCall className={style.icon}  />
            <p>+977-9852020058</p>
            </div>
             <div className={style.line}></div>
        </div>
        
        
     </div>
     
    </div>
  )
}

export default Contact

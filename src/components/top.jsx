
import { Mail, PhoneCall,Facebook,Instagram,Linkedin } from 'lucide-react'
import style  from './top.module.css'


const Top = () => {
  return (
    <div className={style.Container}>
      <div className={style.mainContainer}>
        <div className={style.phoneContainer}>
         <PhoneCall color='white' size={20}/>
         <p>+977 9852020058</p>
        </div>
        
        
        <div className={style.emailContainer} >
          <Mail color='white' size={20}/>
          <p>booking@sudarshanagroresort.com.np</p>
        </div>
      </div>
      <div className={style.socialmediaIcon}>
        <Facebook color='white' size={20}  cursor="Pointer"/>
        <Instagram color='white' size={20} cursor="Pointer"/>
        <Linkedin color='white' size={20} cursor="Pointer"/>
      </div>
   
     
     
    </div>
  )
}

export default Top

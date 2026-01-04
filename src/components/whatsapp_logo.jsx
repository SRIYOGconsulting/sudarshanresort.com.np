
import { Link } from 'react-router-dom'
import style from '../styles/whatsappLogo.module.css'
const Whatsapp_logo = () => {
  return (
    <div className={style.container}>
      
      <Link to="https://d.sriyog.com/sudarshanresort" target="_blank"><img className={style.bookicon} src="og/bookinglogo.webp" alt="bookicon" aria-label='bookicon'/></Link>
      
      <Link to="https://web.whatsapp.com/" target="_blank"><img className={style.whatsapp} src="og/whatsapplogo.webp" alt="whatsapp" aria-label='whatsapp' /></Link>
      
    </div>
  )
}

export default Whatsapp_logo


import { Link } from 'react-router-dom'
import style from '../styles/whatsappLogo.module.css'
const Whatsapp_logo = () => {
  return (
    <div>
      <Link><img className={style.whatsapp} src="og/whatsapplogo.webp" alt="" /></Link>
    </div>
  )
}

export default Whatsapp_logo

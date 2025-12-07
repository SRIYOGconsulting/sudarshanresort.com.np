import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '../../assets/whatsapplogo.webp'
import style from '../../styles/Whatsapp_logo.module.css'
const whatsapp_logo = () => {
  return (
    <div>
      <Link><img className={style.whatsapp} src={whatsapp} alt="" /></Link>
    </div>
  )
}

export default whatsapp_logo

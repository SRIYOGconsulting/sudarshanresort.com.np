

import { Link } from 'react-router-dom'
import Home_page from '../01homepage/Home_page'
import Nav_Bar from '../01homepage/Nav_Bar'
import  style from './herosection.module.css'

const herosection = (props) => {
  return (
    <div className={style.Aboutcontainer}>
      <Home_page />
      <Nav_Bar />
      <div className={style.about_container}>
        <div className={style.header}>
        <h1>{props.h1}</h1>
        <div className={style.tab_container}>
        <Link to={'/'} className={style.navigation_link}>{props.tab}</Link>
        <p>  {`> ${props.p}`}</p>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default herosection
  
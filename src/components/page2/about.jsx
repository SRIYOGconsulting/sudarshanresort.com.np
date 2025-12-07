

import { Link } from 'react-router-dom'
import Home_page from '../page1/Home_page'
import Nav_Bar from '../page1/Nav_Bar'
import  style from './about.module.css'

const about = (props) => {
  return (
    <div className={style.Aboutcontainer}>
      <Home_page />
      <Nav_Bar />
      <div className={style.about_container}>
        <div className={style.header}>
        <h1>{props.h1}</h1>
        <div className={style.tab_container}>
        <Link className={style.navigation_link}>{props.tab}</Link>
        <p>  {`> ${props.p}`}</p>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default about
  
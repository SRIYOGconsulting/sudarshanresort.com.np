

import { Link } from 'react-router-dom'

import  style from './herosection.module.css'

const Herosection = (props) => {
  return (
    <div className={style.Aboutcontainer}>
      <div className={style.about_container}>
        <div className={style.header}>
        <h1>{props.h1}</h1>
        <div className={style.tab_container}>
        <Link to={'/'} className={style.navigation_link}>{props.tab}</Link>
        <p>{`> ${props.p}`}</p>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Herosection
  
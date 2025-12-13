import React, { useState } from 'react'
import style from './allcards.module.css'

import Twin_bed from './twin_bed_cards.jsx'
import Doublebed_cards from './doublebed_cards';
const Allcards = () => {
  const [all,setAll]=useState(false);
  const [twin,setTwin]=useState(false);
  const [double,setDouble]=useState(false);
  
  const clickhandle=()=>{
    setAll(true);
    setTwin(false)
    setDouble(false)
  }
   const twinhandler=()=>{
    setTwin(true);
    setAll(false)
    setDouble(false)
  }
   const doublehandler=()=>{
    setDouble(true);
    setTwin(false)
    setAll(false)
  }
  return (
    <div className={style.main_container}>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={clickhandle}>All</button> 
        <button className={style.btn} onClick={twinhandler}>Twin Bed</button>
        <button className={style.btn}  onClick={doublehandler}>Double Bed</button>
      </div>
      
      {all &&
      <div className={style.condition_container}>
       <Twin_bed />
       <Doublebed_cards />
       </div>
       }
       
        {twin &&
      <div className={style.condition_container}>
       <Twin_bed />
      
       </div>
       }
       
        {double &&
      <div className={style.condition_container}>
       {/* <Twin_bed /> */}
       <Doublebed_cards />
       </div>
       }
       
       
    </div>
  )
}

export default Allcards

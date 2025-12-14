import style from './allcards.module.css'
import React, { useState } from 'react';
import All from './cardcontainer.jsx'
import Twin_bed from './twin_bed_cards.jsx'
import Doublebed_cards from './doublebed_cards';


const Allcards = () => {
const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={style.main_container}>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={() => setActiveTab("all")}>All</button>
        <button className={style.btn} onClick={() => setActiveTab("twin")}>Twin Bed</button>
        <button className={style.btn}   onClick={() => setActiveTab("double")}>Double Bed</button>
      </div>
      
      
      {/* ALL → show everything */}
{activeTab === "all" && (
  <div className={style.condition_container}>
    <All/>
    <Twin_bed />
    <Doublebed_cards />
  </div>
)}

{/* TWIN ONLY */}
{activeTab === "twin" && (
  <div className={style.condition_container}>
    <Twin_bed />
  </div>
)}

{/* DOUBLE ONLY */}
{activeTab === "double" && (
  <div className={style.condition_container}>
    <Doublebed_cards />
  </div>
)}

    </div>
  )
}

export default Allcards

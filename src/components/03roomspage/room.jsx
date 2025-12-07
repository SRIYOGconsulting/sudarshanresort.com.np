import React from 'react'
import style from './room.module.css'
import Herosection from '../00herosection/herosection.jsx'
const room = () => {
  return (
    <div className={style.room_container}>
      <Herosection h1="Rooms" tab="Home" p="Rooms"/>
    </div>
  )
}

export default room

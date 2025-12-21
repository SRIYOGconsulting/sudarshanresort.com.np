import React, { useState } from 'react'
import style from './EnjoyArgo.module.css'
import { CirclePlay, X } from 'lucide-react';

const EnjoyAgro = ({bg}) => {
  const [video,setVideo]=useState(false)
  const videohandler=()=>{
    setVideo(true);
  }
  const cancle=()=>{
    setVideo(false)
  }
  return (
    <div className={style.hero_all_container}>
      <section className={style.hero} style={{ "--bgImage": `url(${bg})` }}>
      <div className={style.overlay}>
        <h1>Enjoy Agro Tourism</h1>
        <h2>#VisitKoshi2025</h2>
        <CirclePlay className={style.CirclePlay} onClick={videohandler}lik size={85}/>
      </div>
     </section>
      
      
      {/* extra popup added */}
      {video && (
      <div className={style.overlay5} > 
      <div className={style.frame_close_wrapper}>
      <iframe
     
      className={style.frame}
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
      <X size={35} className={style.cross}  onClick={cancle} style={{ cursor: "pointer",}} />
     </div>
      </div>
      )}
      </div>
  );
  

}

export default EnjoyAgro

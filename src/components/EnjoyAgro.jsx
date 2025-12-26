import { useState } from 'react'
import style from '../styles/enjoyAgro.module.css'
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
        <CirclePlay className={style.CirclePlay} onClick={videohandler} size={85}/>
      </div>
     </section>
      
      
      {/* extra popup added */}
      {video && (
      <div className={style.overlay5} > 
      <div className={style.frame_close_wrapper}>
     <iframe className={style.frame}  src="https://www.youtube.com/embed/-iARRuFU_FM?si=W3UsVtwnVxNdxdA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <X size={35} className={style.cross}  onClick={cancle} style={{ cursor: "pointer",}} />
     </div>
      </div>
      )}
      </div>
  );
  
 
}

export default EnjoyAgro

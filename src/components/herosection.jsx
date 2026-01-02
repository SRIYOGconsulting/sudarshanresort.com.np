import { Link } from 'react-router-dom'
import style from '../styles/heroSection.module.css'
import { useEffect, useState } from 'react';

const Herosection = ({ h1, tab, p,}) => {
    const dynamicimg=[
    {img:"/images/home/SudarshanHome.webp"},
    {img:"/images/gallery/1.webp"},
    {img:"/images/gallery/2.webp"},
     {img:"/images/gallery/3.webp"},
    {img:"/images/gallery/4.webp"},
    
  ]
   
    // dynamic image mapping
    const [currentImg, setCurrentImg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % dynamicimg.length);
    }, 2000); 
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className={style.Aboutcontainer}>
      {/* LCP IMAGE */}
      {dynamicimg.map((item, index)=>(
        <div key={index}>
            <img
        src={dynamicimg[currentImg].img}
        alt={h1}
        className={style.heroImg}
        loading="eager"
        fetchpriority="high"
        key={currentImg}
      />
        </div>
      ))}
      {/* <img
        src={bg}
        alt={h1}
        className={style.heroImg}
        loading="eager"
        fetchpriority="high"
      /> */}
      <div className={style.overlay}></div>
      
      <div className={style.about_container}>
        <div className={style.header}>
          <h1>{h1}</h1>
          <div className={style.tab_container}>
            <Link to="/" className={style.navigation_link}>{tab}</Link>
            <p>{`> ${p}`}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection

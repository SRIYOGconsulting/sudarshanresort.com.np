
import style from './Additional_feature.module.css'
import { Link } from 'react-router-dom'

const Additional_feature = () => {
    const image=[
        {img:"images/services/additional_feature/1.png" ,title:'Photographer', description:'Photographers can capture stunning landscapes and unique moments with ease, thanks to our picturesque surroundings and dedicated photography spots'},
        {img:"images/services/additional_feature/2.png",title:'Trained Driver', description:'Our trained drivers ensure hassle-free excursions to nearby attractions, allowing you to relax and immerse yourself in the experience.'},
        {img:"images/services/additional_feature/3.png" ,title:'Laundry', description:'At Sudarsan Agro Resort, convenient laundry services keep you fresh and comfortable throughout your stay.ensuring a comfortable and worry-free stay.'},
        {img:"images/services/additional_feature/4.png" ,title:'Coffee Maker', description:'Elevate your stay with the convenience of in-room coffee makers, ensuring a perfect brew whenever you desire. Savor freshly brewed coffee anytime.'},
    ]
  return (
    <div className={style.container}>
        <div className={style.header}>
        <h1>Additonal Features</h1>
        <div className={style.line}></div>
        </div>
        <div className={style.img_content_wrap}>
        {image.map((item)=>(
            <div key={item.title} className={style.contentwrap}>
                <img className={style.img} src={item.img} alt={item.title} />
                <Link className={style.titlelink} onClick={() => window.scrollTo(0,0)}><h2>{item.title}</h2></Link>
                <p>{item.description}</p>
            </div>
        ))}
        </div>
    
    </div>
  )
}

export default Additional_feature

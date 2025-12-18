import Blogcards from './Blogcards'
import style from '../../../styles/Facilities_blogcards.module.css'
const Facilities_blogcards = () => {
  return (
    <div className={style.container}>
        <h2>Facilities</h2>
        <div className={style.horizontal_line}></div>
    <div className={style.Facilities_blogcards}>
        <Blogcards img1="images/home/facilities/barbecue.png" h3="Barbecue" p="Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors."/>
        <Blogcards img1="images/home/facilities/powerBackup.png" h3="Power Backups" p="Enjoy uninterrupted comfort with reliable power backup facilities, even during outages."/>
        <Blogcards img1="images/home/facilities/parking.png" h3="Free Parking" p="parking is complimentary , giving you peace of mind during your stay."/>
        <Blogcards img1="images/home/facilities/resturant.png" h3="Riverside Resturant" p="At Sudarsan Agro Resort, enjoy riverside dining for a serene mealtime."/>
    </div>
     </div>
  
  )
}

export default Facilities_blogcards

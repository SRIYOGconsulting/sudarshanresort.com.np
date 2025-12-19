
import style from "./facilitiesBlogcards.module.css";
const Facilities_blogcards = () => {
  const image = [
    {
      img: "images/home/facilities/barbecue.png",
      h3: "Barbecue",
      p: "Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors.",
    },

    {
      img: "images/home/facilities/powerBackup.png",
      h3: "Power Backups",
      p: "Enjoy uninterrupted comfort with reliable power backup facilities, even during outages.",
    },

    {
      img: "images/home/facilities/parking.png",
      h3: "Free Parking",
      p: "parking is complimentary , giving you peace of mind during your stay.",
    },

    {
      img: "images/home/facilities/resturant.png",
      h3: "Riverside Resturant",
      p: "At Sudarsan Agro Resort, enjoy riverside dining for a serene mealtime.",
    },
  ];
  return (
    <div className={style.container}>
      <h2>Facilities</h2>
      <div className={style.horizontal_line}></div>
      <div className={style.Facilities_blogcards}>
        {image.map((item, index) => (
          <div key={index} className={style.Blog_container}>
            <img src={item.img} alt="image" />
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default Facilities_blogcards;

import style from "./facilitiesBlogcards.module.css";

const Facilities_blogcards = () => {
  const facilities = [
    {
      img: "images/home/facilities/barbecue.webp",
      h3: "Barbecue",
      p: "Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors.",
    },
    {
      img: "images/home/facilities/powerBackup.webp",
      h3: "Power Backups",
      p: "Enjoy uninterrupted comfort with reliable power backup facilities, even during outages.",
    },
    {
      img: "images/home/facilities/parking.webp",
      h3: "Free Parking",
      p: "Parking is complimentary, giving you peace of mind during your stay.",
    },
    {
      img: "images/home/facilities/resturant.webp",
      h3: "Riverside Restaurant",
      p: "At Sudarshan Agro Resort, enjoy riverside dining for a serene mealtime.",
    },
  ];

  return (
    <section className={style.container} aria-labelledby="facilities-heading">
      <h2 id="facilities-heading">Facilities</h2>
      <div className={style.horizontal_line}></div>
      <div className={style.Facilities_blogcards}>
        {facilities.map((item, index) => (
          <article key={index} className={style.Blog_container}>
            <img src={item.img} alt={item.h3} loading="lazy" />
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Facilities_blogcards;

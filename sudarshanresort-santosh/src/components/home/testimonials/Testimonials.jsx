
import style from './Testimonials.module.css';
import { Star } from 'lucide-react';


const testimonialsData = [
  
  { name: "Sakchyam", img: "images/testimonials/sakchyam.webp", title: "Bhaktapur, Nepal", description:  "The eco-friendly design and sustainable practices at Sudarshan Agro Resort impressed me immensely. From the moment I arrived, I could see how nature is thoughtfully integrated into every aspect of the resort, creating a calming and harmonious environment. The cottages are designed to blend seamlessly with the surrounding greenery, offering comfort without compromising sustainability. The staff were professional, courteous, and always ready to assist, making every interaction a pleasant experience. I particularly enjoyed the scenic nature walks, where the vibrant flora and gentle river sounds provided a sense of peace and relaxation. The meals, prepared with fresh ingredients from local farms, were not only delicious but also offered a true taste of the region’s flavors. The activities at the resort, from exploring the gardens to learning about eco-friendly farming practices, were educational yet fun. Sudarshan Agro Resort balances comfort, nature, and thoughtful experiences beautifully, ensuring that every moment of the stay is memorable. I left feeling rejuvenated, inspired, and fully connected with the natural environment. I highly recommend this resort to anyone seeking a peaceful, restorative retreat where nature, sustainability, and hospitality come together perfectly." },
  { name: "Aashma", img: "images/testimonials/aashma.webp", title: "Lalitpur, Nepal", description:  "Sudarsan Agro Resort provided a wonderful escape from the hectic pace of daily life. From the moment I arrived, the lush green surroundings, fresh air, and the gentle sounds of the flowing river created a serene and tranquil atmosphere. The cottages were cozy, well-maintained, and thoughtfully designed to provide both comfort and a connection with nature. I particularly enjoyed the spa treatments, which were rejuvenating and helped me unwind completely. The cooking classes featuring local cuisine were not only fun but also educational, giving me insight into authentic flavors and traditional cooking techniques. Every meal at the resort was freshly prepared, flavorful, and a delight for the senses. The staff were attentive, friendly, and always ready to assist, ensuring a seamless and enjoyable stay. I also loved taking leisurely walks through the scenic gardens and surrounding farmland, where I could fully immerse myself in the calm and peaceful environment. Sudarshan Agro Resort offers the perfect balance of relaxation, adventure, and cultural experiences. By the end of my stay, I felt refreshed, inspired, and completely rejuvenated. I would highly recommend it to anyone looking for a serene and revitalizing retreat away from the city." },
  { name: "Bitisha", img: "images/testimonials/bitisha.webp", title: "Biratnagar, Nepal", description: "The resort is a perfect blend of comfort and nature, providing an extraordinary experience for anyone looking to reconnect with the natural world. Each morning, I was greeted by the warm sunlight streaming over the river, creating a sense of peace and serenity. The cottages were beautifully designed, clean, and comfortable, offering a perfect place to relax after a day of exploration. The food at Sudarshan Agro Resort was exceptional, prepared with fresh ingredients and infused with traditional flavors that delighted every palate. The staff were attentive, friendly, and genuinely welcoming, ensuring that every aspect of my stay was seamless and enjoyable. I spent my days exploring the surrounding nature trails, walking along the riverside, and discovering the beautifully landscaped gardens. The resort provides a wonderful balance between relaxation and adventure, offering activities that are both engaging and soothing. From the serene environment to the thoughtfully planned experiences, every detail reflects care and attention. By the end of my visit, I felt fully rejuvenated and inspired, with a renewed sense of calm and connection to nature. Sudarshan Agro Resort is truly a haven for those seeking both comfort and tranquility in a natural setting." },
  
];

const Testimonials = () => {
  


  return (
    <section className={style.container} aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className={style.horizontal_line}></div>

      <div className={style.cards_row}>
        {testimonialsData.map((item, index) => (
  <div key={index} className={style.containerCard}>
    
    <img src={item.img} alt={item.name} />
    <h3>{item.name}</h3>
    <span>{item.title}</span>

    <div className={style.Rating_icon}>
      <Star size={15} color="orange" fill="orange" />
      <Star size={15} color="orange" fill="orange" />
      <Star size={15} color="orange" fill="orange" />
      <Star size={15} color="orange" fill="orange" />
    </div>

    <p
      className={style.description}
    >
      {item.description}
    </p>

 

  </div>
))}
      </div>
    </section>
  );
};

export default Testimonials;

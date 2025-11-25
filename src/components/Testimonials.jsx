// Testimonials component
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <img src="/src/assets/testimonials1.png" alt="Nirajan Dahal" className="testimonial-img" />
                    <h3>Nirajan Dahal</h3>
                    <p className="location">Biratnagar / Morang</p>
                    <p>"My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations."</p>
                    <div className="stars">★★★★★</div>
                </div>
                <div className="testimonial-item">
                    <img src="/src/assets/testimonials2.png" alt="Nabin Bhattarai" className="testimonial-img" />
                    <h3>Nabin Bhattarai</h3>
                    <p className="location">Biratnagar / Morang</p>
                    <p>"The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the river was truly breathtaking."</p>
                    <div className="stars">★★★★★</div>
                </div>
                <div className="testimonial-item">
                    <img src="/src/assets/testimonials3.png" alt="Rimesh Bhattarai" className="testimonial-img" />
                    <h3>Rimesh Bhattarai</h3>
                    <p className="location">Inaruwa / Sunsari</p>
                    <p>"Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight."</p>
                    <div className="stars">★★★★★</div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

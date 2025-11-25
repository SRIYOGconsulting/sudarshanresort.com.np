// Facilities component
import React from 'react';
import './Facilities.css';

const Facilities = () => {
    return (
        <section className="facilities">
            <h2>Facilities</h2>
            <div className="facility-list">
                <div className="facility-item">
                    <img src="/src/assets/facility1.png" alt="Barbecue" />
                    <h3>Barbecue</h3>
                    <p>Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors.</p>
                </div>
                <div className="facility-item">
                    <img src="/src/assets/facility2.png" alt="Power Backups" />
                    <h3>Power Backups</h3>
                    <p>Enjoy uninterrupted comfort with reliable power backup facilities, even during outages.</p>
                </div>
                <div className="facility-item">
                    <img src="/src/assets/facility3.png" alt="Free Parking" />
                    <h3>Free Parking</h3>
                    <p>Parking is complimentary, giving you peace of mind during your stay.</p>
                </div>
                <div className="facility-item">
                    <img src="/src/assets/facility4.png" alt="Riverside Restaurant" />
                    <h3>Riverside Restaurant</h3>
                    <p>At Sudarsan Agro Resort, enjoy riverside dining for a serene mealtime.</p>
                </div>
            </div>
            <div className="tourism-section">
                <h2>Enjoy Agro Tourism</h2>
                <h3>#VisitKoshi2025</h3>
                <button className="play-button">▶</button>
            </div>
        </section>
    );
};

export default Facilities;

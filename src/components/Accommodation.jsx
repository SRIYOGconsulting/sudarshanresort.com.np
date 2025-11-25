// Accommodation component
import React from 'react';
import './Accommodation.css';

const Accommodation = () => {
    return (
        <section className="accommodation">
            <h2>Our Accommodation</h2>
            <p>Pick a room that best suits your choice and budget</p>
            <button className="view-rooms">View all rooms</button>
            <div className="room-list">
                <div className="room-item">
                    <img src="/src/assets/room1.jpg" alt="Twin Bedroom" className="room-img" />
                    <div className="room-info">
                        <h3>Twin Bedroom</h3>
                        <p>Starting from NPR 2500</p>
                    </div>
                </div>
                <div className="room-item">
                    <img src="/src/assets/room2.jpg" alt="King Bedroom" className="room-img" />
                    <div className="room-info">
                        <h3>King Bedroom</h3>
                        <p>Starting from NPR 2500</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Accommodation;

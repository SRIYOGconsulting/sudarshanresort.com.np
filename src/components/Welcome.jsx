// Welcome component
import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome-text">
                <h2>Welcome to</h2>
                <h1>Sudarsan Agro Resort,</h1>
                <h3>Agro Tourism Resort near Biratnagar.</h3>
                <p>Welcome to Sudarshan Park and Resort! Here, peacefulness mixes with Nepali customs. Situated in lush greenery, our haven calls you to relax and enjoy Nepal's essence. Immerse yourself in our lively culture, enjoying real food and fun activities. With cozy rooms and fair prices, we promise your stay will be unforgettable. Come, relax, and immerse yourself in the beauty of Nepal, right here with us. Welcome to a unique getaway!</p>
                <button className="about-button">About</button>
            </div>
            <div className="welcome-image">
                <img src="/src/assets/SudarshanAbout.jpg" alt="Sudarshan Agro Resort" />
            </div>
        </section>
    );
};

export default Welcome;

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="contact-info">
                    <span>+977 9852020058</span>
                    <span>booking@sudarshanagroresort.com.np</span>
                </div>
                <div className="social-icons">
                    <img src="/src/assets/facebook.png" alt="Facebook" />
                    <img src="/src/assets/instagram.png" alt="Instagram" />
                    <img src="/src/assets/linkedin.png" alt="LinkedIn" />
                </div>
            </div>
            <nav className="navbar">
                <img src="/src/assets/logo.png" alt="Logo" className="logo" />
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Rooms</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="hero-content">
                <h1>Luxury Hotel & Resort Lifestyle</h1>
                <h2>Comfort Deluxe Rooms for your Vacation</h2>
                <button className="book-now">Book Now</button>
            </div>
        </header>
    );
};

export default Header;
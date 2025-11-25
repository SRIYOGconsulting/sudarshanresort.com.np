// Home page component
import React from 'react';
import Header from '../components/Header';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Accommodation from '../components/Accommodation';
import Welcome from '../components/Welcome';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <div className="hero">
                    <h2>Luxury Hotel & Resort Lifestyle</h2>
                    <h1>Comfort <span className="highlight">Deluxe Rooms</span> for your Vacation</h1>
                    <button className="book-now">Book now</button>
                </div>
                <Welcome />
                <Accommodation />
                <Facilities />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

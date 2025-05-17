
import React, { useState } from 'react';
import './Services.css';
const images = [
    "https://www.shutterstock.com/image-photo/demo-text-message-magnifying-glass-600nw-2491336635.jpg",
    "https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=",
    "https://c8.alamy.com/comp/EYGAW3/website-business-internet-and-web-concept-with-demo-word-and-sign-EYGAW3.jpg",
    "https://thumbs.dreamstime.com/b/demo-red-rubber-stamp-over-white-background-88003515.jpg",
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImages = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImages = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="service-page">
            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-text">
                        <h2>Vintage Service for Music Enthusiasts</h2>
                        <p>
                            Welcome into our best vintage-inspired music website! Discover the timeless charm of guitar and keyboard melodies that transport you back in time.
                        </p>
                        <button className="explore-btn">Explore all services</button>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <h1 className="section-title">Services we offer</h1>
                    <div className="services-container">
                        <div className="service-card">
                            <img src="https://t3.ftcdn.net/jpg/01/22/45/42/360_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg" alt="Guitar Classes" />
                            <p><b>Guitar classes</b></p>
                        </div>
                        <div className="service-card offset-card">
                            <img src="https://t3.ftcdn.net/jpg/01/22/45/42/360_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg" alt="Drums Classes" />
                            <p><b>Drums class</b></p>
                        </div>
                        <div className="service-card">
                            <img src="https://t3.ftcdn.net/jpg/01/22/45/42/360_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg" alt="Piano Classes" />
                            <p><b>Piano classes</b></p>
                        </div>
                    </div>
                </section>

                {/* Offerings Section */}
                <section className="offerings-section">
                    <h1>Our Offerings</h1>
                    <div className="offerings-content">
                        <img
                            src="https://www.shutterstock.com/image-photo/demo-text-message-magnifying-glass-600nw-2491336635.jpg"
                            alt="Our Offerings"
                            className="offerings-image"
                        />
                        <p className="offerings-text">
                            <h2><b>Theory Lessons</b></h2><br></br>
                            Here is a brief description of our offerings. We provide a range of services tailored to meet your needs. Explore our diverse offerings and find what best suits you.
                            <br></br> <button className="offer-btn">Explore Now</button>
                        </p>

                    </div>
                </section>

                <section className="reversed-offerings-section">
                    <div className="reversed-content">
                        <p className="reversed-text">
                            <h2><b>Keyboard Lessons</b></h2><br></br>
                            Discover the unique benefits of our services. We are dedicated to providing the highest quality experience tailored just for you. Learn more about how we stand out from the rest.
                            <br></br> <button className="offer-btn">Explore Now</button>
                        </p>
                        <img
                            src="https://www.shutterstock.com/image-photo/demo-text-message-magnifying-glass-600nw-2491336635.jpg"
                            alt="Why Choose Us"
                            className="reversed-image"
                        />
                    </div>
                </section>
                <div className="orange-line"> <br></br></div>
                <h1 className='text-center'>Have a look into our next sessions!</h1>

                <div className="slider-container">
                    <button className="arrow left-arrow" onClick={prevImages}>
                        &#10094; {/* Left Arrow */}
                    </button>
                    <div className="image-container">
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
                        <img src={images[(currentIndex + 1) % images.length]} alt={`Slide ${(currentIndex + 1) % images.length + 1}`} className="slide-image" />
                    </div>
                    <button className="arrow right-arrow" onClick={nextImages}>
                        &#10095; {/* Right Arrow */}
                    </button>
                </div>
                <div className="orange-line"> <br></br></div>

            </main>

            <footer className="footer">
                <p>&copy; 2024 Keys & Strings Music School. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Services;

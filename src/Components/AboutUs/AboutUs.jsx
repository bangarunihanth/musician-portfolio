import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import backgroundImage from '../../Assets/About Us/img5.jpg';
import instructorImage from '../../Assets/About Us/img6.png';
import classImage from '../../Assets/About Us/img7.png';
import musicImage1 from '../../Assets/About Us/img8.png';
import musicImage2 from '../../Assets/About Us/img9.png';
import musicImage3 from '../../Assets/About Us/img10.png';
import teamImage1 from '../../Assets/About Us/img1.png';
import teamImage2 from '../../Assets/About Us/img2.png';
import teamImage3 from '../../Assets/About Us/img3.png';


function AboutUs() {
    return (
        <div className="aboutus-page">
            <div className="aboutus-section container-fluid p-0">
                <div
                    className="d-flex align-items-center justify-content-center text-center vh-100 position-relative"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                    <div className="position-relative text-white p-4">
                        <h1 className="display-4 fw-bold">Where Passion Meets Music</h1>
                        <p className="lead mb-4">Our mission is to inspire, educate, and empower individuals through the power of music.</p>
                        <a href="#learn-more" className="btn btn-dark btn-lg">Learn more</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: 'black' }}>
                <h2 className="text-center text-warning mb-4">Welcome to Keys&strings!</h2>

                <div className="container my-5">
                    <div className="row align-items-center mb-5 position-relative">
                        <div className="col-lg-6 text-center">
                            <img
                                src={instructorImage}
                                className="img-fluid rounded shadow"
                                style={{ border: '2px solid #FFD700' }}
                                alt="Instructor"
                            />
                        </div>
                        <div className="col-lg-6 text-center text-white">
                            <h3 className="text-warning">Meet Our Talented Instructors</h3>
                            <p>We are a team of passionate musicians dedicated to sharing our love of music with aspiring guitarists and pianists. With years of experience and a deep understanding of music theory and performance.</p>
                            <a href="#learn-more" className="btn btn-warning">Learn more</a>
                        </div>
                    </div>

                    <div className="row align-items-center position-relative">
                        <div className="col-lg-6 order-lg-2 text-center">
                            <img
                                src={classImage}
                                className="img-fluid rounded shadow"
                                style={{ border: '2px solid #FFD700' }}
                                alt="Class"
                            />
                        </div>
                        <div className="col-lg-6 text-center text-white order-lg-1 position-relative">
                            <h3 className="text-warning">Sharing Our Skill</h3>
                            <p>At our music school, we believe that everyone has the ability to become a skilled musician. Our experienced instructors are committed to guiding you through a personalized learning journey.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: 'black' }}>
                <h2 className="text-center text-warning mb-4">How we differ from others</h2>
                <div className="container my-5">
                    <div className="row text-center text-white">
                        <div className="col-lg-4 mb-4">
                            <div className="card bg-dark border-warning h-100">
                                <img src={musicImage1} className="card-img-top" alt="Music 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-warning">Discover the Joy of Music</h5>
                                    <p className="card-text text-white">Unlock Your Musical Potential with our Experienced Instructors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card bg-dark border-warning h-100">
                                <img src={musicImage2} className="card-img-top" alt="Music 2" />
                                <div className="card-body">
                                    <h5 className="card-title text-warning">Discover the Joy of Music</h5>
                                    <p className="card-text text-white">Unlock Your Musical Potential with our Experienced Instructors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card bg-dark border-warning h-100">
                                <img src={musicImage3} className="card-img-top" alt="Music 3" />
                                <div className="card-body">
                                    <h5 className="card-title text-warning">Discover the Joy of Music</h5>
                                    <p className="card-text text-white">Unlock Your Musical Potential with our Experienced Instructors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5 text-center">
                    <h2 className="text-warning mb-4">Our Team</h2>
                    <p className="text-white">Our team is dedicated to providing exceptional music education and fostering a supportive, inspiring environment for all our students. We believe in nurturing each individual's unique talents and helping them discover their true musical potential.</p>
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-4">
                            <img src={teamImage1} className="rounded-circle img-fluid" alt="Team 1" style={{ border: '2px solid #FFD700', width: '150px', height: '150px' }} />
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={teamImage2} className="rounded-circle img-fluid" alt="Team 2" style={{ border: '2px solid #FFD700', width: '150px', height: '150px' }} />
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={teamImage3} className="rounded-circle img-fluid" alt="Team 3" style={{ border: '2px solid #FFD700', width: '150px', height: '150px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

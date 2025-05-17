import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../Assets/About Us/img1.png';
import img2 from '../../Assets/About Us/img2.png';
import img3 from '../../Assets/About Us/img3.png';
import img4 from '../../Assets/About Us/img4.png';
import img5 from '../../Assets/About Us/img5.png';
import img6 from '../../Assets/About Us/img6.png';
import img7 from '../../Assets/About Us/img7.png';
import img8 from '../../Assets/About Us/img8.png';
import './AboutUs.css'

const AboutUs = () => {
    let navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#FFF7E6' }}>
            <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-7'>
                        <h1 className='heading text-center fw-lighter fs-1' style={{ fontSize: '4rem' }}>Meet Our Talented Instructors</h1>
                        <p className='text-secondary'>We are a team of passionate musicians dedicated to sharing our love of music with aspiring guitarists and pianists. With years of experience and a deep understanding of music theory and performance, we've helped countless students of all ages and skill levels unlock their potential.</p>
                        <button className='btn btn-dark mb-3' onClick={() => navigate('/keys-strings/contactus')} style={{ paddingLeft: '20px', paddingRight: '20px' }}>Discover Your Musical Journey</button>
                    </div>
                    <div className='col-md-5'>
                        <img className='img-fluid mx-auto d-block' src={img1} alt="Instructor" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='heading text-center fw-lighter fs-1' style={{ fontSize: '4rem' }}>Unlock Your Potential With Us</h1>
                        <div className='m-4 p-4 bg-dark text-white rounded-3'>
                            <p>We Are Passionate Musicians</p>
                            <h2 className='heading text-center fs-2' style={{ fontSize: '3rem' }}><p>Dedicated to </p><p>Sharing Our Skill</p></h2>
                            <p>At our music school, we believe that everyone has the ability to become a skilled musician. Our experienced instructors are committed to guiding you through a personalized learning journey</p>
                            <p>Unlock Your Musical Potential Today</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <img className='img-fluid rounded-2' src={img2} alt="Unlock Potential" />
                            </div>
                            <div className='col-6'>
                                <div className='bg-dark text-white p-3 rounded-2 mb-3'>
                                    <h3 className='heading'>Inspire Your Musical</h3>
                                    <p>Embrace the power of music</p>
                                </div>
                            </div>
                            <div className='bg-white m-3 p-3 rounded-2'>
                                <h3 className='heading'>Discover Your Potential</h3>
                                <p>At our music school, we understand that every student is unique, with their own learning style, goals, and aspirations. That's why we take a personalized approach to teaching</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-white py-5' style={{ backgroundColor: '#1B0951' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <h1 className='heading fs-1' style={{ fontSize: '4rem' }}>Embark on Your Transformation</h1>
                            <p>Our music school has been inspiring and empowering aspiring musicians for over a decade. Founded by a team of passionate musicians, we have dedicated ourselves to creating a nurturing and supportive environment where students of all ages and skill levels can unlock their musical potential</p>
                            <p>Unlock Your Musical Potential Today</p>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className='heading fs-1'>Discover Your Musical Passion</h4>
                            <p>Embrace the power<br />of music at Our studio</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='heading'>Unleash Your Musical</h1>
                        <div className='d-flex mb-4'>
                            <img className='rounded-circle me-3' src={img3} alt="Musical Talent" style={{ width: '4.8rem' }} />
                            <p className='m-1 flex-grow-1'>Our experienced instructors are not only skilled musicians but also dedicated educators who are passionate about</p>
                        </div>
                        <p>At our music school, we believe that every student has the potential to become a talented musician. Our personalized approach to teaching, combined with our expertise in music theory, performance, and pedagogy, allows us to guide each student on a transformative</p>
                        <br /><br />
                        <p>At our music school, we pride ourselves on our ability to provide a truly unique and enriching learning experience for our students. Our team of experienced and passionate instructors is dedicated to helping you unlock your musical potential, whether you're interested in mastering the guitar</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={img4} alt="Music" className='img-fluid mb-3' />
                    </div>
                </div>
                <div className='row'>
                <div className='col bg-dark text-white p-3 mb-3 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 d-flex'>
                    <div className=''>
                        <img className='img-fluid' src={img5} alt="Music" style={{ height: '12rem' }} />
                    </div>
                    <div className=''>
                        <h2 className='heading'>Unleash Your Potential</h2>
                        <p>Our music school has been a beacon of artistic excellence for over a decade, helping countless students of all ages and skill levels discover their passion for music and reach new heights.</p>
                    </div>
                </div>
                <div className='col row'>
                    <div className='col-6'>
                        <div className='bg-white p-3 rounded-3 mb-3'>
                            <h5>Explore Your Musical Potential</h5>
                            <p>At our music school, we understand that every student is unique, with their own learning style, goals, and aspirations</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='bg-white p-3 rounded-3 mb-3'>
                            <h5>Discover Your Musical Passion</h5>
                            <p>At our music school, we believe that the journey of becoming a musician is not just about mastering skills, but also about cultivating a deep appreciation.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div> */}

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <img className='img-fluid' src={img6} alt="Music" />
                        <h3 className='heading p-2'>Discover the Joy of Music</h3>
                        <p>Unlock Your Musical Potential with our Experienced Instructors</p>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <img className='img-fluid' src={img7} alt="Music" />
                        <h3 className='heading p-2'>Embrace the Power of Music</h3>
                        <p>Unleash Your Musical Talents with Our Guidance</p>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <img className='img-fluid' src={img8} alt="Music" />
                        <h3 className='heading p-2'>Explore the Art of Music</h3>
                        <p>Cultivate Your Musical Passion with Our Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

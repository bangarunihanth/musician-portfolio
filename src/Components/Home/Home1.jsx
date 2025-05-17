import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import img4 from '../../Assets/img4.png';
import backgroundImg from '../../Assets/img1.png';
import smallImg1 from '../../Assets/img3.png';
import smallImg2 from '../../Assets/img2.png';

function Home1() {
    return (
        <div className="home-section container-fluid py-5 bg-light">
            <div className="row align-items-center mb-5 px-4">
                <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                    <img 
                        src={img1} 
                        alt="Musician Playing Guitar" 
                        className="img-fluid rounded shadow-lg" 
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-start px-4">
                    <h1 className="display-6 fw-bold mb-3">Unleash the Artistry of Our Musician</h1>
                    <p className="lead mb-4 text-muted" style={{ textAlign: 'justify' }}>
                        Dive into the enchanting world of melodies and harmonies created by our artist, and let their music take you on a journey of emotion and imagination.
                    </p>
                </div>
            </div>

            <div className="row align-items-center px-4 mb-5">
                <div className="col-lg-8 col-md-12 text-center text-lg-start px-4">
                    <h2 className="display-6 fw-bold mb-3 mt-5">Immerse in the World of Music</h2>
                    <p className="lead mb-4 text-muted" style={{ textAlign: 'justify' }}>
                        Prepare to be transported by the emotive performances of our musician.
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                        <div className="col-md-4">
                            <img 
                                src={img2} 
                                alt="Musician Playing Guitar" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-4">
                            <img 
                                src={img3} 
                                alt="Musician at Piano" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-4">
                            <img 
                                src={img4} 
                                alt="Musician with Guitar" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 text-center mb-4 mb-lg-0">
                    <img 
                        src={img2} 
                        alt="Musician" 
                        className="img-fluid rounded shadow-lg" 
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="position-relative text-light my-5 py-5" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="display-5 fw-bold mb-4">Embark on a Musical Journey with Our Musician</h2>
                            <p className="lead mb-4" style={{ textAlign: 'justify' }}>
                                Prepare to be captivated by the virtuosic and emotive performances of our musician, whose mastery of both guitar and piano creates a truly spellbinding experience that transports audiences to new musical heights.
                            </p>
                            <p className="lead mb-4" style={{ textAlign: 'justify' }}>
                                From soulful ballads to upbeat melodies, our musician captivates audiences with a diverse repertoire that showcases their talent.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center">
                            <div className="mb-4 w-100">
                                <div className="card h-100 shadow-lg">
                                    <img src={smallImg1} className="card-img-top" alt="Small Image 1" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Discover the Captivating</h5>
                                        <p className="card-text">Witness the virtuosity of our talented musician.</p>
                                        <Link to="/gallery" className="btn btn-dark">Explore the Captivating World</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100">
                                <div className="card h-100 shadow-lg">
                                    <img src={smallImg2} className="card-img-top" alt="Small Image 2" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Immerse Yourself in the Mesmerizing</h5>
                                        <p className="card-text">Prepare to be transported by the seamless fusion of guitar and piano.</p>
                                        <Link to="/gallery" className="btn btn-dark">Witness the Captivating Artistry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="display-6 fw-bold mb-4 text-center">Latest Releases</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img2} className="card-img-top" alt="Release 1" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Album Title 1</h5>
                                <p className="card-text">A brief description of the latest release, highlighting the unique aspects of the music.</p>
                                <a href="#" className="btn btn-dark btn-sm rounded-pill">Listen Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img3} className="card-img-top" alt="Release 2" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Album Title 2</h5>
                                <p className="card-text">A brief description of the latest release, highlighting the unique aspects of the music.</p>
                                <a href="#" className="btn btn-dark btn-sm rounded-pill">Listen Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img4} className="card-img-top" alt="Release 3" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Album Title 3</h5>
                                <p className="card-text">A brief description of the latest release, highlighting the unique aspects of the music.</p>
                                <a href="#" className="btn btn-dark btn-sm rounded-pill">Listen Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="display-6 fw-bold mb-4 text-center">What People Are Saying</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">A.R. Rahman</h5>
                                <p className="card-text text-black">"An absolutely mesmerizing performance! The musician's talent and passion for music truly shine through in every note. Their ability to convey deep emotions through their music is unparalleled."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Shreya Ghoshal</h5>
                                <p className="card-text text-black">"A journey of pure musical bliss. The blend of guitar and piano was simply magical, leaving the audience in awe. The musical nuances and the heartfelt delivery of each performance are captivating."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">Arijit Singh</h5>
                                <p className="card-text text-black">"A truly captivating experience. The musician's versatility and emotional depth in their performances are unparalleled. Each song resonates deeply and leaves a lasting impression."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home1;
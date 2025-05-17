import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { IoMdStar } from "react-icons/io";
import img2 from '../../Assets/Home/2.png';
import img3 from '../../Assets/Home/3.png';
import img4 from '../../Assets/Home/4.png';
import img5 from '../../Assets/Home/5.png';
import img6 from '../../Assets/Home/6.png';
import img7 from '../../Assets/Home/7.png';
import img8 from '../../Assets/Home/8.png';
import img9 from '../../Assets/Home/9.png';
import img10 from '../../Assets/Home/10.png';
import img11 from '../../Assets/Home/11.png';
import img12 from '../../Assets/Home/12.png';
import "./Home.css"

function Home() {
    let [width,setWidth]=useState(false);
    setTimeout(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800) {
                setWidth(true)
            }
            else {
                setWidth(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, 100);
    return (
        <div>
            <div className='home-bg' style={{height: "80vh"}}>
                <div className={`row row-cols-sm-1 row-cols-md-2 p-${width?"2":"5"} home-bg-black`} style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: width ? "rgba(0, 0, 0, 0.5)" : "transparent" }}>
                    {!width&&<div className='col-5'>
                    </div>}
                    <div className={`col-7 ${!width&&"p-5"} ${width?"text-white":"text-black"}`} style={{ textAlign: "center" }}>
                        <h2>Unleash the Artistry of Our Musician</h2>
                        <p>Dive into the enchanting world of melodies and harmonies created by our artist, and let their music take you on a journey of emotion and imagination.</p>
                        <button className='btn bg-black' style={{ color: '#E3A242' }}><b>Join Now</b></button>
                    </div>
                </div>
            </div>
            <div className={`p-${width?"3":"5"} bg-black text-white`} style={{ marginRight: `${width?"5vh":"10vh"}`, border: "5px solid #E3A242", borderLeft: "0" }}>
                <div className={`p-${width?"3":"5"}`}>
                    <h2 className='text-center' style={{ color: "#E3A242" }}>What we do</h2>
                    <p className={`px-${width?"3":"5"} pb-5`}>We passionately share the joy of music through personalized lessons, guiding beginners and skilled musicians alike on their unique musical journeys.</p>
                    <div className={`${!width&&"row"} m-3`}>
                        <div className={`col${!width?"-5":""}`}>
                            <img className='d-block mx-auto' src={img2} style={{ width: "80%" }} />
                        </div>
                        <div className={`col${!width?"-7":""}`}>
                            <h3 className='text-center' style={{ color: "#E3A242" }}>Guitar Classes</h3>
                            <p className='text-center'>Master the guitar with our expert-led classes, perfo skill levels. Learn techniques, chords, and songs to confidence and creativity.</p>
                            <button className='btn bg-white p-2 px-5 d-block mx-auto' style={{ color: "#E3A242", boxShadow: "#E3A242 3px 3px 4px" }}><b>Join Now</b></button>
                        </div>
                    </div>
                    <div className={`${!width&&"row"} m-3`}>
                        {width&&<div className={`col${!width?"-5":""}`}>
                            <img className='d-block mx-auto' src={img3} style={{ width: "80%" }} />
                        </div>}
                        <div className='col'>
                            <h3 className='text-center' style={{ color: "#E3A242" }}>Piano Classes</h3>
                            <p className='text-center'>Master the piano with our expert-led classes, perfect for all skill levels. Learn techniques, chords, and songs to play with confidence and creativity.</p>
                            <button className='btn bg-white p-2 px-5 d-block mx-auto' style={{ color: "#E3A242", boxShadow: "#E3A242 3px 3px 4px" }}><b>Join Now</b></button>
                        </div>
                        {!width&&<div className='col m-3'>
                            <img src={img3} style={{ width: "80%" }} />
                        </div>}
                    </div>
                    <div className={`${!width&&"row"} m-3`}>
                        <div className='col'>
                            <img className='d-block mx-auto' src={img4} style={{ width: "80%" }} />
                        </div>
                        <div className='col'>
                            <h3 className='text-center' style={{ color: "#E3A242" }}>Piano Classes</h3>
                            <p className='text-center'>Master the piano with our expert-led classes, perfect for all skill levels. Learn techniques, chords, and songs to play with confidence and creativity.</p>
                            <button className='btn bg-white p-2 px-5 d-block mx-auto' style={{ color: "#E3A242", boxShadow: "#E3A242 3px 3px 4px" }}><b>Join Now</b></button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center' style={{ color: "#E3A242" }}>Immerse in the World of Music</h1>
                    <h4 className='px-5 pb-5 text-center'>Prepare to be transported by the emotive performances of our musician.</h4>
                    <div className='row'>
                        <div className="col">
                            <img className='rounded-4 d-block mx-auto' src={img5} style={{ height: '300px' }} />
                        </div>
                        <br/>
                        <div className="col">
                            <img className='rounded-4 d-block mx-auto' src={img6} style={{ height: '300px' }} />
                        </div>
                        <br/>
                        <div className="col">
                            <img className='rounded-4 d-block mx-auto' src={img7} style={{ height: '300px' }} />
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
            <div className={`mt-3 bg-black p-${width?"3":"5"}`} style={{ border: "5px solid #E3A242", borderRight: 0 }}>
                <h2 className='text-center' style={{ color: "#E3A242" }}>Why Chose Us</h2>
                <div className={`${!width&&"row"} row-cols-sm-1 row-cols-md-2`}>
                    <div className={`col p-${width?"2":"5"}`}>
                        <div className="bg-white p-3 rounded-4" style={{ border: "2px solid #E3A242", boxShadow: "#E3A242 3px 3px 4px" }}>
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-2">
                                    <img className='rounded-circle' src={img8} style={{ width: '100%' }} />
                                </div>
                                <div className="col-10">
                                    <h3 className='text-black'>Experienced Instructors</h3>
                                </div>
                            </div>
                            <p className='text-center mx-auto' style={{ color: "#E3A242", width: "75%", fontWeight: '500' }}>Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
                        </div>
                    </div>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4" style={{ border: "2px solid #E3A242", boxShadow: "#E3A242 3px 3px 4px"}}>
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-2">
                                    <img className='rounded-circle' src={img9} style={{ width: '100%' }} />
                                </div>
                                <div className="col-10">
                                    <h3 className='text-black'>Experienced Instructors</h3>
                                </div>
                            </div>
                            <p className='text-center mx-auto' style={{ color: "#E3A242", width: "75%", fontWeight: '500' }}>Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
                        </div>
                    </div>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4" style={{ border: "2px solid #E3A242", boxShadow: "#E3A242 3px 3px 4px" }}>
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-2">
                                    <img className='rounded-circle' src={img10} style={{ width: '100%' }} />
                                </div>
                                <div className="col-10">
                                    <h3 className='text-black'>Experienced Instructors</h3>
                                </div>
                            </div>
                            <p className='text-center mx-auto' style={{ color: "#E3A242", width: "75%", fontWeight: '500' }}>Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
                        </div>
                    </div>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4" style={{ border: "2px solid #E3A242", boxShadow: "#E3A242 3px 3px 4px" }}>
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-2">
                                    <img className='rounded-circle' src={img11} style={{ width: '100%' }} />
                                </div>
                                <div className="col-10">
                                    <h3 className='text-black'>Experienced Instructors</h3>
                                </div>
                            </div>
                            <p className='text-center mx-auto' style={{ color: "#E3A242", width: "75%", fontWeight: '500' }}>Our teachers are accomplished musicians with years of experience in both performing and teaching.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black p-5">
                <h2 className='text-center p-3' style={{ color: "#E3A242" }}>Why customer loves keys & strings</h2>
                <div className={`${!width&&"row"}`}>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4">
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-3">
                                    <img className='rounded-circle' src={img12} style={{ width: '100%' }} />
                                </div>
                                <div className="col-9">
                                    <h5 style={{ color: "#E3A242" ,marginBottom:'0'}}>Alex Cena</h5>
                                    <p style={{color:"#C9C9C9",marginBottom:'0'}}>Executive Produer</p>
                                </div>
                            </div>
                            <p className='text-center mx-auto text-black' style={{ width: "75%", fontWeight: '500' }}><b>sI've gone from knowing nothing about guitar to playing my favorite songs in just a few months!"</b></p>
                            <div className='mx-auto' style={{width:'100px'}}>
                                {[1, 2, 3, 4, 5].map(() => {
                                    return <IoMdStar style={{ color: "#E3A242", fontSize: '20px' }} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4">
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-3">
                                    <img className='rounded-circle' src={img12} style={{ width: '100%' }} />
                                </div>
                                <div className="col-9">
                                    <h5 style={{ color: "#E3A242" ,marginBottom:'0'}}>Alex Cena</h5>
                                    <p style={{color:"#C9C9C9",marginBottom:'0'}}>Executive Produer</p>
                                </div>
                            </div>
                            <p className='text-center mx-auto text-black' style={{  width: "75%", fontWeight: '500' }}><b>I've gone from knowing nothing about guitar to playing my favorite songs in just a few months!"</b></p>
                            <div className='mx-auto' style={{width:'100px'}}>
                                {[1, 2, 3, 4, 5].map(() => {
                                    return <IoMdStar style={{ color: "#E3A242", fontSize: '20px' }} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`col p-${width?"3":"5"}`}>
                        <div className="bg-white p-3 rounded-4">
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-3">
                                    <img className='rounded-circle' src={img12} style={{ width: '100%' }} />
                                </div>
                                <div className="col-9">
                                    <h5 style={{ color: "#E3A242" ,marginBottom:'0'}}>Alex Cena</h5>
                                    <p style={{color:"#C9C9C9",marginBottom:'0'}}>Executive Produer</p>
                                </div>
                            </div>
                            <p className='text-center mx-auto text-black' style={{  width: "75%"}}><b>I've gone from knowing nothing about guitar to playing my favorite songs in just a few months!"</b></p>
                            <div className='mx-auto' style={{width:'100px'}}>
                                {[1, 2, 3, 4, 5].map(() => {
                                    return <IoMdStar style={{ color: "#E3A242", fontSize: '20px' }} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home

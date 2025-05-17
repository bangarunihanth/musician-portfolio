import React,{useState} from 'react'
import logocropped from '../../Assets/logo-cropped.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
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
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }    
    return (
        <div className='row p-5' style={{backgroundColor:'black'}}>
            <div className={`col-${width?"7":"5"} text-white`}>
                <div className='p-2'>
                    <img className='rounded-3' style={{width:'60%'}} src={logocropped}/>
                </div>
                <h3 className={`p-3 px-${!width&&"5"}`}>Follow us on</h3>
                <div className='row' style={{color:'#E3A242',width:`${width?"100%":"60%"}`,fontSize:'20px'}}>
                    <FaFacebookSquare className='col'/>
                    <FaInstagramSquare className='col'/>
                    <FaLinkedin className='col'/>
                    <BsTwitterX className='col'/>
                </div>
            </div>
            <div className={`col-${width?"5":"7"}`} style={{textDecoration:'none'}}>
                <p onClick={scrollToTop}><Link to="" style={{textDecoration:'none',color:'white'}}>Home</Link></p>
                <p onClick={scrollToTop}><Link to="services" style={{textDecoration:'none',color:'white'}}>Services</Link></p>
                <p onClick={scrollToTop}><Link to="gallery" style={{textDecoration:'none',color:'white'}}>Gallery</Link></p>
                <p onClick={scrollToTop}><Link to="aboutus" style={{textDecoration:'none',color:'white'}}>About Us</Link></p>
                <p onClick={scrollToTop}><Link to="contactus" style={{textDecoration:'none',color:'white'}}>Contact Us</Link></p>
            </div>
        </div>
    )
}

export default Footer

// import React, { useEffect, useState } from 'react';
// import img1 from '../../Assets/Gallery/img1.png';
// import img2 from '../../Assets/Gallery/img2.png';
// import img3 from '../../Assets/Gallery/img3.png';
// import img4 from '../../Assets/Gallery/img4.png';
// import img5 from '../../Assets/Gallery/img5.png';
// import img6 from '../../Assets/Gallery/img6.png';

// function Gallery() {
//     let [isWidthSmall, setIsWidthSmall] = useState(false)

//     function handleResize() {
//         if (window.innerWidth < 700) {
//             setIsWidthSmall(true)
//         }
//         else {
//             setIsWidthSmall(false)
//         }
//     }
//     window.addEventListener("resize", () => handleResize);

//     useEffect(() => {
//         handleResize()
//     })
//     return (
//         <div className="container">
//             <div className="row py-5">
//                 <div className="col-lg-6 mb-4 mb-lg-0">
//                     <img className='img-fluid' src={img1} alt="Gallery Image 1" />
//                 </div>
//                 <div className="col-lg-6">
//                     <h1 className='heading' style={{ fontSize: '3rem' }}>Explore the artistry</h1>
//                     <p>Welcome to the portfolio of our talented musician, where you'll discover a captivating blend of guitar and piano performances.</p>
//                 </div>
//             </div>

//             <div className="row p-3 mb-3">
//                 {isWidthSmall&&<div className="col-md-6 mb-3">
//                     <img className='img-fluid' src={img2} alt="Gallery Image 2" />
//                 </div>}
//                 <div className="col-md-6 mb-4 mb-md-0">
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img3} alt="Gallery Image 3" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img6} alt="Gallery Image 6" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img5} alt="Gallery Image 5" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img4} alt="Gallery Image 4" />
//                         </div>
//                     </div>
//                 </div>
//                 {!isWidthSmall&&<div className="col-md-6">
//                     <img className='img-fluid' src={img2} alt="Gallery Image 2" />
//                 </div>}
//             </div>

//             <div className="row p-3 mb-3">
//                 <div className="col-md-6 mb-4 mb-md-0">
//                     <img className='img-fluid' src={img2} alt="Gallery Image 2" />
//                 </div>
//                 <div className="col-md-6">
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img3} alt="Gallery Image 3" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img6} alt="Gallery Image 6" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img5} alt="Gallery Image 5" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img4} alt="Gallery Image 4" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row p-3 mb-3">
//                 {isWidthSmall&&<div className="col-md-6 mb-3">
//                     <img className='img-fluid' src={img2} alt="Gallery Image 2" />
//                 </div>}
//                 <div className="col-md-6 mb-4 mb-md-0">
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img3} alt="Gallery Image 3" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img6} alt="Gallery Image 6" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img5} alt="Gallery Image 5" />
//                         </div>
//                         <div className="col-6 mb-3">
//                             <img className='img-fluid' src={img4} alt="Gallery Image 4" />
//                         </div>
//                     </div>
//                 </div>
//                 {!isWidthSmall&&<div className="col-md-6">
//                     <img className='img-fluid' src={img2} alt="Gallery Image 2" />
//                 </div>}
//             </div>
//         </div>
//     );
// }

// export default Gallery;

import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../Assets/Gallery/2.png';
import img2 from '../../Assets/Gallery/3.png';
import img3 from '../../Assets/Gallery/4.jpg';
import img4 from '../../Assets/Gallery/5.jpg';
import img5 from '../../Assets/Gallery/6.jpg';
import img6 from '../../Assets/Gallery/7.jpg';
import "./Gallery.css"

function Gallery() {
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
            <div className={`gallery-bg${width?"2":""}`}>
                <div className={`${!width&&"row"} p-5`} style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center",borderBottom:'5px solid #E3A242',backgroundColor:width&&'rgb(0,0,0,0.6'}}>
                    <div className={`${!width&&"col-5"} p-${width?"2":"5"} text-white`}>
                        <h2>Explore the artistry</h2>
                        <p>Welcome to the portfolio of our talented musician, where you'll discover a captivating blend of guitar and piano performances.</p>
                        <button className='btn bg-white' style={{ color: '#E3A242',boxShadow: '2px 2px 10px 2px #E3A242' }}><b>Explore Now</b></button>
                    </div>
                    {!width&&<div className='col-5'>
                    </div>}
                </div>
            </div>
            <div className={`p-${width?"0":"5"} bg-black text-white`}>
                <div className='p-5'>
                    <h2 className='text-center' style={{ color: "#E3A242" }}>Celebrating Our Students' Musical Journeys!</h2>
                    <p className={`px-${width?"0":"5"} pb-5 fs-5`}>A brief description welcoming visitors to explore images of students, events, and performances, showcasing the vibrant community at your music school.</p>        
                </div>
                <div className={`${!width&&"row"} mb-5`}>
                    {width&&<div className={`col-${width?"":"6"}`}>
                        <div style={{ position: 'relative', width: `${width?"100vw":"45vw"}`,paddingLeft:'15%' }}>
                            <img src={img1} className="rounded-5" style={{ width: '45%', border: '3px solid #E3A242' }} />
                            <img src={img2} style={{ position: 'absolute', top: '0px', left: '40%', width: '45%', border: '3px solid #E3A242',borderRadius:'25vw'}} />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>}
                    <div className={`col-${width?"":"6"}`}>
                        <h2 className='text-center' style={{color:'#E3A242'}}>"Featured Moments"</h2>
                        <br/>
                        <h2 className='text-center'>Dive into our vibrant gallery to explore the heart and soul of our music school.</h2>
                        <br/>
                        <button className='btn bg-white d-block mx-auto' style={{ color: '#E3A242',boxShadow: '2px 2px 10px 2px #E3A242' }}><b>view Performances</b></button>
                    </div>
                    {!width&&<div className="col-6">
                        <div style={{ position: 'relative', width: '45vw' }}>
                            <img src={img1} className="rounded-5" style={{ width: '45%', border: '3px solid #E3A242' }} />
                            <img src={img2} style={{ position: 'absolute', top: '0px', left: '40%', width: '45%', border: '3px solid #E3A242',borderRadius:'25vw'}} />
                        </div>
                    </div>}
                </div>
                <div className={`${!width&&"row"} mb-5`}>
                    {width&&<div className={`col-${width?"":"6"}`}>
                        <div style={{ position: 'relative', width: `${width?"100vw":"45vw"}`,paddingLeft:'15%' }}>
                            <img src={img3} className="rounded-5" style={{ width: '45%', border: '3px solid #E3A242' }} />
                            <img src={img4} style={{ position: 'absolute', top: '0px', left: '40%', width: '45%', border: '3px solid #E3A242',borderRadius:'25vw'}} />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>}
                    {!width&&<div className="col-6">
                        <div style={{ position: 'relative', width: '45vw' }}>
                            <img src={img3} className="rounded-5" style={{ width: '40%', border: '3px solid #E3A242' }} />
                            <img src={img4} style={{ position: 'absolute', top: '0px', left: '35%', width: '40%', border: '3px solid #E3A242',borderRadius:'25vw'}} />
                        </div>
                    </div>}
                    <div className={`col-${width?"":"6"} pt-5`}>
                        <h2 className='text-center' style={{color:'#E3A242'}}>"Student Performances"</h2>
                        <br/>
                        <h2 className='text-center'>From inspiring student achievements to memorable moments from our classes</h2>
                        <br/>
                        <button className='btn bg-white d-block mx-auto' style={{ color: '#E3A242',boxShadow: '2px 2px 10px 2px #E3A242' }}><b>view Performances</b></button>
                    </div>
                </div>
                <div className='p-5'>
                    <h2 className='text-center' style={{ color: "#E3A242" }}>Celebrating Our Students' Musical Journeys!</h2>
                    <p className='px-5 pb-5 fs-5 text-center'>A brief description welcoming visitors to explore images of students, events, and performances, showcasing the vibrant community at your music school.</p>
                    <br/>
                    <img src={img5} className='rounded-5' style={{width:'100%',border:'5px solid #E3A242'}}/> 
                </div>
                <div className='row'>
                    {width&&<div className="col">
                        <img src={img6} className="rounded-5 d-block mx-auto" style={{ width: "50%", border: '3px solid #E3A242' }} />
                    </div>}
                    <div className={`col-${!width&&"6"} pt-5`}>
                        <h2 className='text-center' style={{color:'#E3A242'}}>"Behind the Scenes"</h2>
                        <br/>
                        <h2 className='text-center'>Offer a glimpse into the preparation and setup for events, rehearsals, and daily activities at the music school.</h2>
                        <br/>
                        <button className='btn bg-white d-block mx-auto' style={{ color: '#E3A242',boxShadow: '2px 2px 10px 2px #E3A242' }}><b>View More</b></button>
                    </div>
                    {!width&&<div className="col-6">
                        <img src={img6} className="rounded-5 d-block mx-auto" style={{ width: "50%", border: '3px solid #E3A242' }} />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Gallery

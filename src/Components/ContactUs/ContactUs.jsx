// import React, { useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import { IoIosMail } from "react-icons/io";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import img from '../../Assets/img1.png'
// // #E3A242

// const ContactForm = () => {
//     let {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm()
//     let form = useRef(null)
//     function handleFormSubmit(contact) {
//         console.log(contact)
//     }
//     let [width, setWidth] = useState(false)

//     setTimeout(() => {
//         const handleScroll = () => {
//             if (window.innerWidth < 800) {
//                 setWidth(true)
//             }
//             else {
//                 setWidth(false)
//             }
//         }
//         window.addEventListener('scroll', handleScroll);
//         handleScroll();
//     }, 100);
//     return (
//         <div>
//             <div className='col-sm-8 col-md-6 col-md-4 bg-light border border-1 rounded-3 d-block mx-auto m-5'>
//                 <div className='mt-5 p-3'>
//                     <h1 className='mb-5'>Contact Us</h1>
//                     <div className='mb-5'>
//                         <form ref={form} className="mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
//                             <div className='row'>
//                                 <div className="col mb-3">
//                                     <label htmlFor="name" className="form-label">
//                                         Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         placeholder='Name'
//                                         className="form-control shadow-sm"
//                                         {...register("name", {
//                                             required: true,
//                                         })}
//                                     />
//                                     {errors.name?.type === "required" && (
//                                         <p className="text-danger">Name is required</p>
//                                     )}
//                                 </div>
//                                 <div className="col mb-3">
//                                     <label htmlFor="phoneno" className="form-label">
//                                         Phone Number
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="phoneno"
//                                         placeholder='Phone No'
//                                         className="form-control shadow-sm"
//                                         {...register("phoneno", {
//                                             required: true,
//                                             minLength: 10
//                                         })}
//                                     />
//                                     {errors.phoneno?.type === "required" && (
//                                         <p className="text-danger">Phone Number is required</p>
//                                     )}
//                                     {errors.contact_no?.type === "minLength" && (
//                                         <p className="text-danger">Minimum Length should be 10</p>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="mb-3">
//                                 <div>
//                                     <label className='form-label'>Services Required :</label>
//                                     <select className='form-control'
//                                         {...register("servicerequired", {
//                                             required: true
//                                         })}
//                                     >
//                                         <option value="Guitar Classes">Guitar Classes</option>
//                                         <option value="Piano Classes">Piano Classes</option>
//                                     </select>
//                                 </div>
//                                 {errors.servicerequired?.type === "required" && (
//                                     <p className="text-danger">Service is required</p>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="message" className="form-label">
//                                     Message
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="message"
//                                     placeholder='Message'
//                                     className="form-control shadow-sm"
//                                     {...register("message", {
//                                         required: true,
//                                     })}
//                                 />
//                                 {errors.message?.type === "required" && (
//                                     <p className="text-danger">Message is required</p>
//                                 )}
//                             </div>
//                             <button className="btn btn-success d-block mx-auto mb-3">Submit</button>
//                         </form>
//                     </div>
//                     <div>
//                         <div className="row row-cols-3 mx-auto" style={{ width: width ? '100%' : '50%' }}>
//                             <a className='col'
//                             //  href="mailto:globaltrader19@gmail.com"
//                             >
//                                 <IoIosMail className='d-block mx-auto' style={{ fontSize: width ? '11vw' : '4vw' }} />
//                             </a>
//                             <a className='col'
//                             // href="tel:8939169177"
//                             >
//                                 <FaPhoneAlt className='d-block mx-auto' style={{ fontSize: width ? '7.5vw' : '2.8vw', marginTop: width ? '1vw' : '0.5vw' }} />
//                             </a>
//                             <a className='col'
//                             // href="https://www.google.com/maps/place/13%C2%B003'42.5%22N+80%C2%B010'39.2%22E/@13.0618115,80.1749793,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0618115!4d80.1775542?entry=ttu"
//                             >
//                                 <FaLocationDot className='d-block mx-auto' style={{ fontSize: width ? '7.5vw' : '2.8vw', marginTop: width ? '1vw' : '0.5vw' }} />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;


import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const form = useRef(null);
    const [width, setWidth] = useState(false);

    function handleFormSubmit(contact) {
        console.log(contact);
    }

    setTimeout(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800) {
                setWidth(true);
            } else {
                setWidth(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, 100);

    return (
        <div style={{
            backgroundColor: 'black',
            minHeight: '100vh',
            paddingBottom: '50px',
            margin: '0',          
            paddingTop: '0'       
        }}> 
            <div
                className='col-sm-10 col-md-8 col-lg-6 bg-white border border-1 rounded-3 d-block mx-auto m-5 p-5'
                style={{ borderColor: '#E3A242', boxShadow: '0px 0px 15px 2px #E3A242' }}
            >
                <div className='mt-5 p-3'>
                    <h2 className='text-center mb-5 fw-bold' style={{ color: '#E3A242' }}>Let’s Connect Together</h2>
                    <form ref={form} className="mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className='mb-3'>
                            <label htmlFor="name" className="form-label fw-bold text-black">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="form-control border-0 border-bottom border-dark shadow-none"
                                style={{borderRadius:'0'}}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-danger">Name is required</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className="form-label fw-bold text-black">Your email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="form-control border-0 border-bottom border-dark shadow-none"
                                style={{borderRadius:'0'}}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-danger">Email is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneno" className="form-label fw-bold text-black">Your phone no</label>
                            <input
                                type="tel"
                                id="phoneno"
                                placeholder="Your phone no"
                                className="form-control border-0 border-bottom border-dark shadow-none"
                                style={{borderRadius:'0'}}
                                {...register("phoneno", { required: true, minLength: 10 })}
                            />
                            {errors.phoneno && <p className="text-danger">Phone number is required (min 10 digits)</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comments" className="form-label fw-bold text-black">Comments</label>
                            <textarea
                                id="comments"
                                placeholder="Any comments"
                                className="form-control border-0 border-bottom border-dark shadow-none"
                                style={{borderRadius:'0'}}
                                {...register("comments")}
                            />
                        </div>
                        <button className="btn btn-dark d-block mx-auto" style={{ backgroundColor: '#E3A242' }}>
                            Get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
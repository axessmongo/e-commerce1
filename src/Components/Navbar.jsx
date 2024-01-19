import React from 'react'
import watch1 from '../assets/images/watch1.png'

export default function Navbar() {
    return (
        <div>
            <section className='nav-banner'>
                <nav class="navbar navbar-expand-lg nav-banner" id='home'>
                    <div class="container-fluid navbanner">
                        <a class="navbar-brand heading1" href="#" style={{ fontFamily: "700", fontSize: "23px" }}>Time<span style={{ color: "#f81f1f ", }}>Zone</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'>Home</a>
                                </li>

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#aboutus">About Us</a>
                                </li>

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#portfolio">Portfolio</a>
                                </li>

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technical">Technical</a>
                                </li>

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#work">Work</a>
                                </li>

                                <li class="nav-item heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                                </li>

                                <li class="nav-item border-end heading1">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {/* Nav-End */}
            <section>


                <div className='container-fluid overflow-hidden'>
                    <div className="row d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "#f0f0f2" }} >

                        <div className="col-md-8  ">
                            <div className='text-center fs-5 fw-bold mt-2 py-2 '>
                                <h3 className='heading6'>    Select your New <br className='d-none d-lg-block'/> Perfect Style
                                </h3>

                               

                            </div>
                            <div className='text-center heading3 mt-3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, placeat.</p>

                            </div>
                            <div className=' text-center'>
                                <button className='btn1 heading3 mt-4  ' style={{borderRadius:"10px"}}>Shop now</button>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className=" mx-auto">
                                <div className='rounded-3 md-img-shadow mx-2 d-flex justify-content-center justify-content-lg-start' data-aos="fade-right" data-aos-duration="700" data-delay=".4s" data-animation="bounceIn"  >
                                    <img src={watch1} className='img-fluid w-50 heartbeat' alt="md-img" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



            </section>
        </div>
    )
}

import React from 'react'
import watch2 from '../assets/images/watch2.png'
import watch3 from '../assets/images/watch3.png'
import watch4 from '../assets/images/watch4.png'
import watch5 from '../assets/images/watch5.png'
import watch6 from '../assets/images/watch6.png'
import watch7 from '../assets/images/watch7.png'
import ReactPlayer from 'react-player';

export default function Items() {
    return (

        <scetion>
            <div className=''  style={{ backgroundColor: "#DCDCDC" }}>
                <div className='text-center mt-4 py-3'>
                    <h2 className='mb-4 heading4' > Popular Items</h2>
                    <p className='heading3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga.</p>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div class="col-md-4 mt-5 px-3">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch2} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2' >Add to cart</span>
                                    </div>

                                </div>
                                <div class="popular-caption">
                                    <h3><a href="#" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5 px-3 ">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch3} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2'>Add to cart</span>
                                    </div>

                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5 px-3">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch4} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2'>Add to cart</span>
                                    </div>
                                    <div class="favorit-items">
                                        <span class="flaticon-heart"></span>
                                    </div>
                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5 px-3">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch5} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2'>Add to cart</span>
                                    </div>
                                    <div class="favorit-items">
                                        <span class="flaticon-heart"></span>
                                    </div>
                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5 px-3">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch6} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2'>Add to cart</span>
                                    </div>
                                    <div class="favorit-items">
                                        <span class="flaticon-heart"></span>
                                    </div>
                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5 px-3">
                            <div class="single-popular-items mb-50 text-center">
                                <div class="popular-img">
                                    <img src={watch7} alt="" />
                                    <div class="img-cap">
                                        <span className='heading2'>Add to cart</span>
                                    </div>
                                    <div class="favorit-items">
                                        <span class="flaticon-heart"></span>
                                    </div>
                                </div>
                                <div class="popular-caption">
                                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className=''>
                        <a href='./More.jsx' style={{ textDecoration: "none" }}>
                            <button className='btn1 heading3'> View More Products</button>
                        </a>
                    </div>
                    <div className="video-area">
                        <div className="container-fluid videos  ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="video-wrap">
                                        <div className="play-btn">
                                            <a href="https://www.youtube.com/watch?v=KMc6DyEJp04" className='popup-video'>
                                                <i class="bi bi-play-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thumb-content-box">
                                <div class="thumb-content">
                                    <a href="https://www.youtube.com/watch?v=KMc6DyEJp04" style={{ textDecoration: "none" }} >
                                        Next Video


                                        <i class="bi bi-arrow-right"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </scetion>

    )
}

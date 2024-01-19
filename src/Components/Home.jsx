import React from 'react'
import watch1 from '../assets/images/watch1.png'
import watch2 from '../assets/images/watch2.png'
import watch3 from '../assets/images/watch3.png'
import watch4 from '../assets/images/watch4.png'
import watch5 from '../assets/images/watch5.png'
import watch6 from '../assets/images/watch6.png'
import watch7 from '../assets/images/watch7.png'
import Scroll from './Scroll'

export default function () {
  let gotoTop = (secID) => {
    const element = document.getElementById(secID);
    const navbarElement = document.querySelector('.navbar>.container-fluid');

    if (navbarElement) {
      var navHeight = navbarElement.clientHeight;
      // Use navHeight as needed
    }
    console.log(element)
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

    }

  }
  gotoTop();
  return (
    <div className='' >
      <section className='nav-banner'>
        <nav class="navbar navbar-expand-lg nav-banner" id='home'>
          <div class="container-fluid navbanner">
            <a class="navbar-brand heading1" href="#" style={{ fontFamily: "700", fontSize: "23px" }}>Time<span style={{ color: "#f81f1f ", }}>Zone</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-4  p-4 mb-lg-0 text-center ">

                <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                </li>

                <li class="nav-item heading1">
                  <a class="nav-link active px-3 " aria-current="page" id='name-nav' onClick={() => gotoTop('shop')}>Shop</a>
                </li>

                <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('about')} >About</a>
                </li>

                <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('latest')} >Latest</a>
                </li>

                <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('blogs')}>Blogs</a>
                </li>

                <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('pages')} >Pages</a>
                </li>

                <li class="nav-item border-end heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('pages')}>Contact</a>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section id='home' style={{ backgroundColor: "" }}>
        <div className='container-fluid overflow-hidden'>
          <div className="row d-flex align-items-center justify-content-center"
             >

            <div className="col-md-8  ">
              <div className='text-center fs-5 fw-bold mt-2 py-2 '>
                <h3 className='heading6'>    Select your New <br className='d-none d-lg-block' /> Perfect Style
                </h3>



              </div>
              <div className='text-center heading3 mt-3'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, placeat.</p>

              </div>
              <div className=' text-center'>
                <button className='btn1 heading3 mt-4  ' style={{ borderRadius: "10px" }}>Shop now</button>
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
      <section id='latest'>
        <div className='' style={{ backgroundColor: "#DCDCDC" }}>
          <div className='text-center py-3'>
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

      </section>

      <Scroll />
    </div>
  )
}

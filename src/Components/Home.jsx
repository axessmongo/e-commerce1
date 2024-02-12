import React from 'react'
import watch1 from '../assets/images/watch1.png'
import watch2 from '../assets/images/watch2.png'
import watch3 from '../assets/images/watch3.png'
import watch4 from '../assets/images/watch4.png'
import watch5 from '../assets/images/watch5.png'
import watch6 from '../assets/images/watch6.png'
import watch7 from '../assets/images/watch7.png'
import Scroll from './Scroll'
import arrival1 from '../assets/image/arrival-img/arrival-watch-1.webp'
import arrival2 from '../assets/image/arrival-img/arrival-watch-2.webp'
import arrival3 from '../assets/image/arrival-img/arrival-watch-3.webp'
import gallery1 from '../assets/image/arrival-img/gallery1.png'
import gallery2 from '../assets/image/arrival-img/gallery2.png'
import gallery3 from '../assets/image/arrival-img/gallery3.png'
import gallery4 from '../assets/image/arrival-img/gallery4.png'
import arrival4 from '../assets/image/arrival-img/arrival-1.avif'
import arrival5 from '../assets/image/arrival-img/arrival-2.avif'
import profiticon from '../assets/image/arrival-img/profits.png'
import dropicon from '../assets/image/arrival-img/drop-shipping.png'
import emiicon from '../assets/image/arrival-img/emi-payment.png'
import secureicon from '../assets/image/arrival-img/isecure-payment.png'
import customericon from '../assets/image/arrival-img/attention.png'
import footerimg from '../assets/image/arrival-img/World-Map.png'
import popular1 from '../assets/image/arrival-img/popular1.png.webp'
import popular2 from '../assets/image/arrival-img/popular2.png.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import fb from '../assets/image/arrival-img/fb.png'
import twitter from '../assets/image/arrival-img/twitter.png'
import youtube from '../assets/image/arrival-img/youtube.png'
import whatsapp from '../assets/image/arrival-img/whatsapp.png'
import insta from '../assets/image/arrival-img/insta.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function () {
  const [active, setActive] = useState(false)
  AOS.init({
    // Add your AOS options here
  });

  const [isZoomed, setIsZoomed] = useState(false);
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
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  gotoTop();
  return (
    <div className='overflow-x-hidden' >
      <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
        <Link to="https://axesstechnology.in/contact" className='buy-now-bt'>BuyNow</Link>
      </div>
      <section className='nav-banner'>
        <nav className="navbar navbar-expand-lg nav-banner" id='home'>
          <div className="container-fluid navbanner">
            <a className="navbar-brand heading1" href="#" style={{ fontFamily: "800", fontSize: "38px" }}>Time<span style={{ color: "#f81f1f ", }}>Zone</span></a>
            <button className="navbar-toggler shadow-none" onClick={() => setActive(!active)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className={`bi ${active ? "bi-x" : "bi-list"}`}></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-4  p-4 mb-lg-0 text-center ">

                <li className="nav-item heading1">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                </li>

                <li className="nav-item heading1">
                  <a className="nav-link active px-3 " aria-current="page" id='name-nav' onClick={() => gotoTop('fashion')}>Fashion</a>
                </li>

                {/* <li class="nav-item heading1">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('about')} >About</a>
                </li> */}

                <li className="nav-item heading1">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('latest')} >Buy Online</a>
                </li>

                <li className="nav-item heading1">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('spectacular savings')}>Spectacular Savings</a>
                </li>



                <li className="nav-item border-end heading1">
                  <a className="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')}>Contact</a>
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

            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="1100">
              <div className='text-center fs-5 fw-bold mt-2 py-2 '>
                <h3 className='heading6'>    Select your New <br className='d-none d-lg-block' /> Perfect Style
                </h3>
              </div>

              <div className='text-center heading3 mt-3'>
                <p className='heading3'>A watch makes a statement about both your fashion sense and your work ethic.</p>
              </div>

              <div className='text-center'>
                <button
                  className='btn1 heading3 mt-4'
                  style={{ borderRadius: "10px" }}
                  onClick={() => window.open('tel:+1234567890', '_blank')}
                >
                  Contact now
                </button>
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
      {/* arrival start */}
      <section className='container' id="fashion">
        <div className='row py-2 my-2 text-center'>
          <div className='text-center py-2 my-2'>
            <h2 className='mb-4 heading4'>Fashion</h2>
          </div>

          <div className='col-md-4' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className={`zoom-container ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
              <img src={arrival1} alt="arrival watch" className='img-fluid rounded-3 w-75' />
            </div>
            <div className='text-center pt-3'>
              <h4 className='heading3 product'>Thermo Ball Etip Gloves</h4>
              <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
            </div>
          </div>

          <div className='col-md-4' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className={`zoom-container ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
              <img src={arrival2} alt="arrival watch" className='img-fluid rounded-3 w-75' />
            </div>
            <div className='text-center pt-3'>
              <h4 className='heading3 product'>Versace V-Palazzo </h4>
              <span className='heading2' style={{ color: "red" }}>$ 10,743</span>
            </div>
          </div>

          <div className='col-md-4' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className={`zoom-container ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
              <img src={arrival3} alt="arrival watch" className='img-fluid rounded-3 w-75' />
            </div>
            <div className='text-center pt-3'>
              <h4 className='heading3 product'>Bfit Pro Silicone Black</h4>
              <span className='heading2' style={{ color: "red" }}>$ 25,743</span>
            </div>
          </div>

        </div>
      </section>
      {/* gallery start */}
      <section className='container-fluid '>
        <div className='arrival-bg'>
          <div className='row py-3 my-3  d-flex justify-content-center align-items-center'>
            <div className='col-md-6 text-light p-5' data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="1100">
              <h1 className='heading4 '>New Life Start In right Time</h1>
              <p className='pt-4 heading3'>Discover a delicate selection of watches perfect for the deeply in love. OMEGA's newest range of sparkling Mini Trésor timepieces. Three beautiful models matched with elegant bracelets.
              </p>
              <p className='pt-4 heading3'>Special events, limited editions and the best of the Penarosa lifestyle welcome to the newsletter for the most fashionable wrists</p>


            </div>
            <div className='col-md-6 d-flex '>
              <div className='col-6 d-flex justify-content-center align-items-center'>
                <div className='text-center' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <img src={arrival4} alt="arrival watch" className='img-fluid w-75 rounded-1' />
                </div>
              </div>
              <div className='col-6'>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <img src={arrival2} alt="arrival watch" className='img-fluid w-50 rounded-1' />
                </div>

                <div className='text-center pt-4 mt-1' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <img src={arrival5} alt="arrival watch" className='img-fluid w-75 rounded-1' />
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
      <section className='container-fluid'>
        <div className='row py-3 my-3'>
          <div className='col-md-6'>
            <div data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src={gallery1} alt="galleryimg" className='img-fluid' />
            </div>
          </div >
          <div className='col-md-3'>
            <div data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1800">
              <img src={gallery2} alt="galleryimg" className='img-fluid' />
            </div>
          </div>
          <div className='col-md-3'>
            <div data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
              <img src={gallery3} alt="galleryimg" className='img-fluid' />
            </div>
            <div className='pt-4' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1400">
              <img src={gallery4} alt="galleryimg" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
      {/* latest start */}
      <section id='latest'>
        <div className='' style={{ backgroundColor: "#DCDCDC" }}>
          <div className='text-center py-5  '>
            <h2 className='mb-1 heading4' >Buy Online</h2>
            <p className='heading3  '>Time you enjoy wasting is not wasted time.</p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className="col-md-4 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch2} alt="" />
                    <div className="img-cap">
                      <span className='heading2' >Add to cart</span>
                    </div>

                  </div>
                  <div className="popular-caption">
                    <h3><a href="#" className='product heading3 product'>Thermo Ball Etip Gloves</a></h3>
                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch3} alt="" />
                    <div className="img-cap">
                      <span className='heading2'>Add to cart</span>
                    </div>

                  </div>
                  <div className="popular-caption">
                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch4} alt="" />
                    <div className="img-cap">
                      <span className='heading2'>Add to cart</span>
                    </div>
                    <div className="favorit-items">
                      <span className="flaticon-heart"></span>
                    </div>
                  </div>
                  <div className="popular-caption">
                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch5} alt="" />
                    <div className="img-cap">
                      <span className='heading2'>Add to cart</span>
                    </div>
                    <div className="favorit-items">
                      <span className="flaticon-heart"></span>
                    </div>
                  </div>
                  <div className="popular-caption">
                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch6} alt="" />
                    <div className="img-cap">
                      <span className='heading2'>Add to cart</span>
                    </div>
                    <div className="favorit-items">
                      <span className="flaticon-heart"></span>
                    </div>
                  </div>
                  <div className="popular-caption">
                    <h3><a href="product_details.html" className='product heading3'>Thermo Ball Etip Gloves</a></h3>
                    <span className='heading2' style={{ color: "red" }}>$ 45,743</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 px-3" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <img src={watch7} alt="" />
                    <div className="img-cap">
                      <span className='heading2'>Add to cart</span>
                    </div>
                    <div className="favorit-items">
                      <span className="flaticon-heart"></span>
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
              <a href='' style={{ textDecoration: "none" }}>
                <button className='btn1 heading3'> View More Products</button>
              </a>
            </div>
            <div className="video-area" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="container-fluid videos  ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="video-wrap">
                      <div className="play-btn">
                        <a href="https://www.youtube.com/watch?v=KMc6DyEJp04" className='popup-video'>
                          <i className="bi bi-play-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumb-content-box">
                  <div className="thumb-content">
                    <a href="https://www.youtube.com/watch?v=KMc6DyEJp04" style={{ textDecoration: "none" }} >
                      Next Video


                      <i className="bi bi-arrow-right"></i>
                    </a>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* popular start */}
      <section className='container'>
        <div className='row py-2 my-2'>
          <div className='col-md-6 d-flex justify-content-center align-items-center' data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
            <div className='text-end px-3 mt-3'>
              <h1 className='heading4  '>Watch of Choice</h1>
              <p className='heading1'>Wearing a watch is like wearing a symbol; a symbol of style, elegance and character in our lives and have been part of human history since the 1500s. It is no wonder many people are obsessed with owning a stylish, quality watch!
              </p>
              <button className='btn1 ' >Show Watch</button>
            </div>
          </div>
          <div className='col-md-6' data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
            <div className='text-center'>
              <img src={popular1} alt="" className='img-fluid w-75' />
            </div>
          </div>

          <div className='col-md-6' data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
            <div className='text-center'>
              <img src={popular2} alt="" className='img-fluid w-75' />
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center align-items-center' data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
            <div className='px-3'>
              <h1 className='heading4 '>Watch of Choice</h1>
              <p className='heading1'>Wear it proudly and make a statement of sophistication. A watch makes a statement about both your fashion sense and your work ethic.
              </p>
              <div>
                <button className='btn1 '>Show Watch</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* choice watch & footer */}
      <section className='container-fluid pt-4 mt-4' id='spectacular savings'>
        <h2 className='heading4 text-center mb-4'> Spectacular Savings </h2>
        <div className="pap-holder mb-3">
          <div className="row flex-wrap g-lg-0 g-3 justify-content-evenly">
            <div className="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center papcard1 "
              >
                <img
                  src={dropicon}
                  alt="debit-card"
                  className="img-fluid pap-img mb-2"
                />
                <p className="pap-text m-0 fs-5  heading2">
                  Free Shipping
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center papcard2 "
              >
                <img
                  src={profiticon}
                  alt="profits image"
                  className="img-fluid pap-img mb-2"
                />
                <p className="pap-text m-0 e fs-5 heading2">Cost-Effective</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center papcard3 "
              >
                <img
                  src={emiicon}
                  alt="job image"
                  className="img-fluid pap-img mb-2"
                />
                <p className="pap-text m-0 fs-5 heading2 ">EMI Option</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center papcard4"
              >
                <img
                  src={secureicon}
                  alt="attention image"
                  className="img-fluid pap-img mb-2"
                />
                <p className="pap-text m-0  fs-5 heading2">Secure Payment</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                className="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center papcard5"
              >
                <img
                  src={customericon}
                  alt="analysis image"
                  className="img-fluid pap-img mb-2"
                />
                <p className="pap-text m-0  fs-5 heading2">Customer Services</p>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section id='contact' className='text-center'>
        <footer className='bg-black ' >
          <div className='row mt-5 text-light '>
            <div className='col-md-4 mt-3 '>
              <h4 className='heading1 text-center heading1' style={{ color: "#ff2020" }}>Address</h4>
              <p className='text-center heading2 mt-4'>xxxxx <br />xxx  <br />chennai-24</p>
              <div className='text-center'>
                <a className='#' href='#'>
                  <img src={insta} alt="" className='img-fluid footer-icons' />
                  <img src={whatsapp} alt="" className='img-fluid footer-icons' />
                  <img src={twitter} alt="" className='img-fluid footer-icons' />
                  <img src={fb} alt="" className='img-fluid footer-icons' />
                  <img src={youtube} alt="" className='img-fluid footer-icons' />
                </a>
              </div>
            </div>
            <div className='col-md-2 mt-3'>
              <div>

                <h4 className='heading1' style={{ color: "#ff2020" }}>Quick Links</h4>
                <a className='#' href='#' style={{ color: "#fff", textDecoration: "none" }}>
                  <p className='heading2'>Offers & Discounts</p>
                  <p className='heading2'>Get Coupon</p>
                  <p className='heading2'>Contact Us</p>
                </a>
              </div>
            </div>
            <div className='col-md-2 mt-3'>
              <div>

                <h4 className='heading1' style={{ color: "#ff2020" }}>New Products</h4>
                <a className='#' href='#' style={{ color: "#fff", textDecoration: "none" }}>
                  <p className='heading2'>Woman Cloth</p>
                  <p className='heading2'>Fashion Accessories</p>
                  <p className='heading2'>Man Accessories</p>
                  <p className='heading2'>Rubber made Toys</p>
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <h4 className='heading1 text-center mt-3' style={{ color: "#ff2020" }}>World Wild Link</h4>
              <div className='text-center'>
                <img src={footerimg} alt="" className='img-fluid w-75' />
              </div>
            </div>



          </div>
          <h5 className='text-center heading3' style={{ color: "#ff2020" }}>Copyrights timezone ©  All rights reserved.</h5>
        </footer>
      </section>

      <Scroll />
      <div>




      </div>
    </div>
  )
}

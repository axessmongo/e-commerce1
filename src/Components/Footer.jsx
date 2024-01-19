import React from 'react'
import profiticon from '../assets/image/arrival-img/profits.png'
import dropicon from '../assets/image/arrival-img/drop-shipping.png'
import emiicon from '../assets/image/arrival-img/emi-payment.png'
import secureicon from '../assets/image/arrival-img/isecure-payment.png'
import customericon from '../assets/image/arrival-img/attention.png'
import footerimg from '../assets/image/arrival-img/World-Map.png'
function Footer() {
    return (
        <section className='container-fluid'>
            <div class="pap-holder mb-3">
                <div class="row flex-wrap g-lg-0 g-3 justify-content-evenly">
                    <div class="col-lg-2 col-md-6 col-12">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-warning"
                        >
                            <img
                                src={dropicon}
                                alt="debit-card"
                                class="img-fluid pap-img mb-2"
                            />
                            <p class="pap-text m-0 text-white fs-5">
                                Free Shipping
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-12">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-primary"
                        >
                            <img
                                src={profiticon}
                                alt="profits image"
                                class="img-fluid pap-img mb-2"
                            />
                            <p class="pap-text m-0 text-white fs-5">Cost-Effective</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-12">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-secondary"
                        >
                            <img
                                src={emiicon}
                                alt="job image"
                                class="img-fluid pap-img mb-2"
                            />
                            <p class="pap-text m-0 text-white fs-5">EMI Option</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-12">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-danger"
                        >
                            <img
                                src={secureicon}
                                alt="attention image"
                                class="img-fluid pap-img mb-2"
                            />
                            <p class="pap-text m-0 text-white fs-5">Secure Payment</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-12">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1400"
                            class="border pap-card d-flex flex-column text-center align-items-center py-3 px-2 h-100 justify-content-center bg-info"
                        >
                            <img
                                src={customericon}
                                alt="analysis image"
                                class="img-fluid pap-img mb-2"
                            />
                            <p class="pap-text m-0 text-white fs-5">Customer Services</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='bg-black'>
            <div className='row py-3 my-3 text-light'>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center px-4'>
                        <h2 className='text-danger'>Time Zone</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit, 
                            iure quos quas, accusantium quia quasi eveniet</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 className='text-danger'>Quick Links</h4>
                        <p>About</p>
                        <p>Offers & Discounts</p>
                        <p>Get Coupon</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 className='text-danger'>New Products</h4>
                        <p>Woman Cloth</p>
                        <p>Fashion Accessories</p>
                        <p>Man Accessories</p>
                        <p>Rubber made Toys</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                    <h4 className='text-danger'>World Wild Link</h4>
                    <div className=' pt-4'>
                        <img src={footerimg} alt="" className='img-fluid w-75' />
                    </div>
                    </div>
                </div>
            </div>
            <h5 className='text-center pb-2 text-danger'>right TimeZone © 2021. All rights reserved</h5>
            </footer>
        </section>
    )
}

export default Footer
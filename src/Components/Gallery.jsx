import React from 'react'
import gallery1 from '../assets/image/arrival-img/gallery1.png'
import gallery2 from '../assets/image/arrival-img/gallery2.png'
import gallery3 from '../assets/image/arrival-img/gallery3.png'
import gallery4 from '../assets/image/arrival-img/gallery4.png'
import arrival4 from '../assets/image/arrival-img/arrival-1.avif'
import arrival5 from '../assets/image/arrival-img/arrival-2.avif'
import arrival2 from '../assets/image/arrival-img/arrival-watch-2.webp'

function Gallery() {
    return (
        <section className='container-fluid'>

            <div className='arrival-bg'>
                <div className='row py-5 my-5 d-flex justify-content-center align-items-center'>
                    <div className='col-md-6 text-light p-5'>
                        <h1 className='text-danger'>New Life Start In right Time</h1>
                        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit labore laboriosam
                            culpa molestiae, praesentium unde vero quidem rerum officiis quam ex nobis minus in qui.
                            Quisquam obcaecati veritatis incidunt.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ut modi ipsam labore fugit,
                            reiciendis exercitationem iste necessitatibus saepe, amet officia. Quasi ab quas vel,
                            debitis similique perspiciatis tenetur earum.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ut modi ipsam labore fugit,
                            reiciendis exercitationem iste necessitatibus saepe, amet officia. Quasi ab quas vel,
                            debitis similique perspiciatis tenetur earum.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus expedita non aut debitis
                            odit cum labore quisquam repudiandae a excepturi impedit, sed voluptatem hic, ratione cumque
                            recusandae corrupti sequi ea.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus expedita non aut debitis
                            odit cum labore quisquam repudiandae a excepturi impedit.
                        </p>

                    </div>
                    <div className='col-md-6 d-flex'>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <div className='text-center'>
                                <img src={arrival4} alt="arrival watch" className='img-fluid w-75 rounded-1' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <img src={arrival2} alt="arrival watch" className='img-fluid w-50 rounded-1' />
                            </div>

                            <div className='text-center pt-4 mt-1'>
                                <img src={arrival5} alt="arrival watch" className='img-fluid w-75 rounded-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row py-3 my-3'>
                <div className='col-md-6'>
                    <div>
                        <img src={gallery1} alt="galleryimg" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <img src={gallery2} alt="galleryimg" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <img src={gallery3} alt="galleryimg" className='img-fluid' />
                    </div>
                    <div className='pt-4'>
                        <img src={gallery4} alt="galleryimg" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
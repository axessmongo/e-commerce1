import React from 'react'
import popular1 from '../assets/image/arrival-img/popular1.png.webp'
import popular2 from '../assets/image/arrival-img/popular2.png.webp'

function Popular() {
    return (
        <section className='container'>
            <div className='row py-2 my-2'>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='text-end px-3'>
                        <h1 className='text-danger'>Watch of Choice</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quam facilis magni pariatur nulla delectus odio adipisci
                            dolor sit amet consectetur, adipisicing elit.
                        </p>
                        <button className='popular-bts'>Show Watch</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-center'>
                        <img src={popular1} alt="" className='img-fluid' />
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='text-center'>
                        <img src={popular2} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='px-3'>
                        <h1 className='text-danger'>Watch of Choice</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Quam facilis magni pariatur nulla delectus odio adipisci
                            dolor sit amet consectetur, adipisicing elit.
                        </p>
                        <button className='popular-bts'>Show Watch</button>
                    </div>
                </div>
            </div>
     
        </section>
    )
}

export default Popular
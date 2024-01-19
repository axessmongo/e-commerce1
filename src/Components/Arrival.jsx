import React from 'react'
import arrival1 from '../assets/image/arrival-img/arrival-watch-1.webp'
import arrival2 from '../assets/image/arrival-img/arrival-watch-2.webp'
import arrival3 from '../assets/image/arrival-img/arrival-watch-3.webp'



function Arrival() {
    return (
        <section className='container'>
            <div className='row py-2 my-2 text-center'>
                <div className='text-center py-2 my-2'>
                    <h1>New Arrival</h1>
                </div>
                <div className='col-md-4'>
                    <div>
                        <img src={arrival1} alt="arrival watch" className='img-fluid rounded-3' />
                    </div>
                    <div className='text-center pt-3'>
                        <h4>Thermo Ball Etip Gloves</h4>
                        <p className='text-danger'>$ 45,743</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div>
                        <img src={arrival2} alt="arrival watch" className='img-fluid rounded-3' />
                    </div>
                    <div className='text-center pt-3'>
                        <h4>Thermo Ball Etip Gloves</h4>
                        <p className='text-danger'>$ 45,743</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div>
                        <img src={arrival3} alt="arrival watch" className='img-fluid rounded-3' />
                    </div>
                    <div className='text-center pt-3'>
                        <h4>Thermo Ball Etip Gloves</h4>
                        <p className='text-danger'>$ 45,743</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arrival
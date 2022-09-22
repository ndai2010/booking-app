import React from 'react'
import './Styles/Index.scss'
import NavBar from '../../Components/NavBar/NavBar'
import banner from '../../assets/20495237_2106.w023.n001.491B.p1.491.jpg'

import galley1 from '../../assets/gallery01.jpg'
import galley2 from '../../assets/gallery02.jpg'
import galley3 from '../../assets/gallery03.jpg'


//component
import ModalBooking from '../../Components/ModalBooking/ModalBooking'
import RoomSection from '../../Components/RoomSection/RoomSection'

function HomePage() {
    return (
        <div className='homepage'>
            <NavBar />
            <div className='banner'>
                <img src={banner} alt='' width='100%'></img>
            </div>
            <div className='booking-section'>
                <ModalBooking />
            </div>
            <div className='discover'>
                <div className='discover-container container'>
                    <div className='discover-content row'>
                        <div className='left-content col-md-5'>
                            <h3>Welcome to <span>NDTravel</span></h3>
                            <p>If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages for the best price. Enjoy your vacancy and we do the rest..</p>
                        </div>
                        <div className='right-content col-md-7'>
                            <div className='gallery'>
                                <img src={galley1} width='100%' alt='galley1'></img>
                            </div>
                            <div className='gallery'>
                                <img src={galley2} width='100%' alt='galley1'></img>
                            </div>
                            <div className='gallery'>
                                <img src={galley3} width='100%' alt='galley1'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RoomSection />
            <div className='service-section'>
                <div className='content'>
                    <div className='top-content item'>
                        <div className='description'></div>
                        <div className='galley'></div>
                    </div>
                    <div className='bot-content item'>
                        <div className='galley'></div>
                        <div className='description'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
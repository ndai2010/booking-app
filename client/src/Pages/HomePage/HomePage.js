import React from 'react'
import './Styles/Index.scss'
import NavBar from '../../Components/NavBar/NavBar'
import banner from '../../assets/20495237_2106.w023.n001.491B.p1.491.jpg'

import galley1 from '../../assets/gallery01.jpg'
import galley2 from '../../assets/gallery02.jpg'
import galley3 from '../../assets/gallery03.jpg'
import services from '../../assets/services.jpg'
import services2 from '../../assets/services2.jpg'
import services3 from '../../assets/services-promo-right.jpg'

//component
import ModalBooking from '../../Components/ModalBooking/ModalBooking'
import RoomSection from '../../Components/RoomSection/RoomSection'
import BlogSection from '../../Components/BlogSection/BlogSection'
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
                        <div className='description col-md-5'>
                            <div className='section-title p-3'>
                                <h2>Enjoy</h2>
                                <h3>OUR services</h3>
                            </div>
                            <div className='section-content'>
                                <div className='col-md-6 p-3'>
                                    <div class="services-box">
                                        <h4>spa</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p>
                                    </div>
                                    <hr></hr>
                                    <div class="services-box">
                                        <h4>pool</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p>
                                    </div>
                                    <hr></hr>
                                    <div class="services-box">
                                        <h4>restaurant</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p>
                                    </div>
                                </div>
                                <div class="col-md-6 p-3">
                                    <div class="services-box">
                                        <h4>Massage</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p><p>
                                        </p></div>
                                    <hr />
                                    <div class="services-box">
                                        <h4>Music</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p><p>
                                        </p></div>
                                    <hr />

                                    <div class="services-box">
                                        <h4>Water Skilling</h4>
                                        <p>Tolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit </p><p>
                                        </p></div>
                                </div>
                            </div>
                        </div>
                        <div className='galley col-md-6 col-md-offset-1 padding-0'>
                            <img class="img-responsive" src={services} alt="hotel booking template" />
                        </div>
                    </div>
                    <div className='bot-content item'>
                        <div className='galley col-md-6 col-md-offset-1 padding-0'>
                            <img class="img-responsive" src={services2} alt="hotel booking template" />
                        </div>
                        <div className='description'>
                            <div class="section-title">
                                <h2>Happy with</h2>
                                <h3>OUR facilities</h3>
                            </div>
                            <p>
                                Tdolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.
                                Tdolor sit amet, consectetur, adipis civelit sed quia non qui find it ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam eius modi. Neque porro quisquam.
                            </p>
                            <hr />
                            <div class="services-box-right">
                                <img class="img-responsive" src={services3} alt="hotel booking template" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog-sections'>
                <BlogSection />
            </div>
        </div>
    )
}



export default HomePage
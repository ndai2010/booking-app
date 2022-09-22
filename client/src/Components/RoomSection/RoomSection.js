import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import RoomSectionCard from '../RoomSectionCard/RoomSectionCard'
function RoomSection() {
    return (
        <div className='room-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-tile'>
                        <h4>EXPLORE</h4>
                        <h3>Our rooms</h3>
                    </div>
                </div>
            </div>
            <div className='container pt-4 justify-content-center'>
                <div className='row'>
                    <div className='room-carousel'>
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className='swiper-room'
                            slidesPerView={4}
                            spaceBetween={30}
                        >
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <RoomSectionCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomSection
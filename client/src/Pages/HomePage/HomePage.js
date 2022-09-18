import React from 'react'
import './Styles/Index.scss'
import NavBar from '../../Components/NavBar/NavBar'
import banner from '../../assets/20495237_2106.w023.n001.491B.p1.491.jpg'
function HomePage() {
    return (
        <div className='homepage'>
            <NavBar />
            <div className='banner'>
                <img src={banner} alt='' width='100%'></img>
                <div className='form-booking container'>
                    <div className='form-booking content'>
                        content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
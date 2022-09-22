import React from 'react'
import room06 from '../../assets/room06.jpg'
import './Style.scss'
function RoomSectionCard() {
    return (
        <div className='item-container'>
            <div className='image'>
                <img src={room06} width='100%' alt=''></img>
            </div>
            <div className='description'>
                <div className='header'>Ultra suite</div>
                <div className='body'>
                    <span>Room with all inclusive</span>
                    <p>Ut enim ad minima veniam, uis  rice nostrum exercitationem ut ullam et  nis corporis suscipit e laboriosam et ...</p>
                </div>
                <div className='footer'>
                    <div className='button-booking'>
                        <h5>Book now</h5>
                    </div>
                    <div className='price'>
                        <h3>118$</h3>
                        <span>Per night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomSectionCard
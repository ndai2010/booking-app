import React from 'react'
import './ModalBooking.scss'
function ModalBooking() {
    return (
        <div className='modal-booking container'>
            <div className='modal-booking-content col-sm-12'>
                <h2>Make <span> Reservation</span></h2>
                <form className='booking-form' noValidate="true">
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="Text" className='form-control' placeholder='Your name'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="Number" className='form-control' placeholder='Number of rooms'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="email" className='form-control' placeholder='Email'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="Number" className='form-control' placeholder='Number of people'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="Text" className='form-control' placeholder='Phone number'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="date" className='form-control'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <input type="date" className='form-control'></input>
                    </div>
                    <div className='form-group col-md-3 col-sm-6 col-xs-12'>
                        <button type='submit' className='button-small-soild disabled'>Book now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalBooking
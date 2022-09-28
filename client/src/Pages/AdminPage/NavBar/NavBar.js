import React, { useState } from 'react'
import './style.scss'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { MdLanguage, MdMessage } from 'react-icons/md'
import { CgDarkMode, CgBell } from 'react-icons/cg'
import { FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { fatchLogoutAuth } from '../../../Redux/Actions/Actions'

function NavBar() {
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(fatchLogoutAuth());
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='nav-bar-container'>
            <div className='container'>
                <div className='row justify-content-between' style={{ alignItems: 'center' }}>
                    <div className='search-box form-group col-md-3'>
                        <input type={'search'} className='form-control'></input>
                        <FiSearch className='icon' />
                    </div>
                    <div className='info-group col-md-6'>
                        <div className='button-group'>
                            <div className='language box'>
                                <MdLanguage className='icon' />
                            </div>
                            <div className='dark-mode box'><CgDarkMode className='icon' /></div>
                            <div className='box-bell box'><CgBell className='icon' /></div>
                        </div>
                        <div className='info-user-box col-md-4' onClick={() => setIsOpen(!isOpen)}>
                            <div className='avatar'><FaUserAlt className='icon' /></div>
                            <div className='desciption'>
                                <span>Name</span>
                            </div>
                            {
                                isOpen && (<div className='drop-down'>
                                    <ul>
                                        <li>
                                            <FaUserCircle className='icon' />
                                            <span>Profile</span></li>
                                        <li>
                                            <MdMessage className='icon' />
                                            <span>Messages</span>
                                        </li>
                                        <li onClick={LogOut()}>
                                            <FiLogOut className='icon' />
                                            <span>Logout</span>
                                        </li>
                                    </ul>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
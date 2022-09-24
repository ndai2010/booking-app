import React, { useState } from 'react'
import './style.scss'

import { RiDashboardFill } from 'react-icons/ri'
import { FaUsers, FaHotel } from 'react-icons/fa'
import { MdOutlineBedroomParent, MdCategory } from 'react-icons/md'

import { Link } from 'react-router-dom'
function SideBar() {
    const [index, setIndex] = useState(0)

    const handleClick = (indx) => {
        setIndex(indx)
    }
    return (
        <div className='side-bar container'>
            <div className='header'>
                <h2>LOGO</h2>
            </div>
            <div className='side-bar-content'>
                <ul className='list'>
                    <Link to='/admin'>
                        <li className={index === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                            <RiDashboardFill className='icon' />
                            <span>Dashboards</span>
                        </li>
                    </Link>
                    <Link to="users-management">
                        <li className={index === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                            <FaUsers className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="hotels-management">
                        <li className={index === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                            <FaHotel className='icon' />
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li className={index === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
                            <MdOutlineBedroomParent className='icon' />
                            <span>Rooms</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li className={index === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
                            <MdCategory className='icon' />
                            <span>Categoies</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div >
    )
}

export default SideBar
import React from 'react'
import './NavBar.scss'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div className='navbar-container'>
            <div className='content container'>
                <div className='logo d-flex'>
                    <GoThreeBars className='icon' />
                    <h3>Logo</h3>
                </div>
                {/* <div className=''></div> */}
                <div className='login-group'>
                    {/* <div className='avatar'>avatar</div> */}
                    <Link to={'/login'}>
                        <div className='login-btn btn'>Đăng nhập</div>
                        <div className='register btn'>Đăng ký</div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default NavBar
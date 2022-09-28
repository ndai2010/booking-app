import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai'
function NavBar() {
    const AuthLogin = useSelector(state => state.loginReducer)
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    const LogOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        setUser('')
    }
    return (
        <div className='navbar-container'>
            <div className='content container'>
                <div className='logo d-flex'>
                    <GoThreeBars className='icon' />
                    <h3>Logo</h3>
                </div>
                {
                    user !== '' ?
                        (<div className='user-container'>
                            <div className='avatar'><AiOutlineUser className='icon' />
                                <div className='menu-list'>
                                    <ul>
                                        <li className='profile'>profile</li>
                                        <li onClick={() => LogOut()} className='log-out'>Log out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>) :
                        (<div className='login-group'>
                            <Link to={'/login'}>
                                <div className='login-btn btn'>Đăng nhập</div>
                                <div className='register btn'>Đăng ký</div>
                            </Link>

                        </div>)
                }

            </div>
        </div>
    )
}

export default NavBar
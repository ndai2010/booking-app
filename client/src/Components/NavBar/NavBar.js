import React, { useEffect, useState } from 'react'
import './NavBar.scss'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai'
import { fatchLogoutAuth } from '../../Redux/Actions/Actions'

function NavBar() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const AuthLogin = useSelector(state => state.loginReducer)

    const LogOut = () => {
        dispatch(fatchLogoutAuth());
    }
    useEffect(() => {
        setUser(AuthLogin)
    }, [AuthLogin])
    console.log(user);
    return (
        <div className='navbar-container'>
            <div className='content container'>
                <div className='logo d-flex'>
                    <GoThreeBars className='icon' />
                    <h3>Logo</h3>
                </div>
                {
                    localStorage.getItem('accessToken') ?
                        (<div className='user-container'>
                            <div className='avatar'><AiOutlineUser className='icon' />
                                <div className='menu-list'>
                                    <ul>
                                        {
                                            user.isAdmin ? (
                                                <Link style={{ textDecoration: 'none', color: '#333' }} to={'/admin'}>
                                                    <li>Admin</li>
                                                </Link>
                                            ) : (<></>)
                                        }
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
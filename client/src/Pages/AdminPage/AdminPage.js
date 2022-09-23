import React from 'react'
import SideBar from './SideBar/SideBar'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import './Style.scss'
function AdminPage() {
    return (
        <div>
            <div className='admin-container'>
                <SideBar />
                <div className='admin-content'>
                    <NavBar />
                    <div className='manage-content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminPage
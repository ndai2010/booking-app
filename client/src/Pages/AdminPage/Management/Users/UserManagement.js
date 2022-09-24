import React from 'react'
import './style.scss'
import { FaTrash } from 'react-icons/fa'
import { MdAdd, MdSearch } from 'react-icons/md'
import { GoSettings } from 'react-icons/go'
import { Table } from 'reactstrap'
function UserManagement() {
    return (
        <div className='user-manage-container'>
            <div className='manage-content'>
                <div className='header'>
                    <div className='title'>
                        <h4>User list</h4>
                    </div>
                    <div className='button-action-group'>
                        <div className='delete-button'>
                            <FaTrash className='icon' />
                        </div>
                        <div className='add-button'>
                            <MdAdd className='icon' />
                            <span>add user</span>
                        </div>
                    </div>
                </div>
                <div className='body'>
                    <div className='action-group'>
                        <div className='search-box'>
                            <MdSearch className='icon' />
                            <input type='text' className='input-search'></input>
                        </div>
                        <div className='select-date'>
                            <input type={'date'} className='input'></input>
                        </div>
                        <div className='select-role'>
                            <select className='select'>
                                <option>all</option>
                            </select>
                        </div>
                        <div className='filter-button'>
                            <GoSettings className='icon' />
                            <span>filters</span>
                        </div>
                    </div>
                    <div className='table-user-list'>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">2 <span class="sr-only"></span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManagement
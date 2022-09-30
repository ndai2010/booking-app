import React, { useEffect } from 'react'
import './style.scss'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import { MdAdd, MdSearch } from 'react-icons/md'
import { GoSettings } from 'react-icons/go'
import { Input, Table } from 'reactstrap'

import { fatchGetAllRequest } from '../../../../Redux/Actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
function UserManagement() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.UserReducer)

    useEffect(() => {
        dispatch(fatchGetAllRequest())
        console.log(users);
    }, [])
    const AddUser = () => {
    }
    const actionEditUser = (data) => {
        console.log(data);
    }
    const actionDeleteUser = (id) => {
        console.log(id);
    }
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
                        <div className='add-button' onClick={() => AddUser()}>
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
                                    <th>
                                        <Input type='checkbox'></Input>
                                    </th>
                                    <th>User name</th>
                                    <th>Email</th>
                                    <th>phone</th>
                                    <th>address</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.data && users.data.length > 0 &&
                                    users.data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row"><Input type='checkbox'></Input></th>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{`${item.city}, ${item.country}`}</td>
                                                <td>{item.isAdmin ? 'Admin' : 'Customer'}</td>
                                                <td>
                                                    <div className='action-button'>
                                                        <FaPencilAlt className='icon edit-btn' onClick={() => actionEditUser(item)} />
                                                        <FaTrash className='icon trash-btn' onClick={() => actionDeleteUser(item.id)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
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
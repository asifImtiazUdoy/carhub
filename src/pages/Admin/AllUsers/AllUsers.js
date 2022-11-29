import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck, FaShieldAlt, FaTrashAlt } from 'react-icons/fa';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import ConfirmationModal from '../../Common/ConfirmationModal';
import Loading from '../../Common/Loading';

const AllUsers = () => {
    const [close, setClose] = useState(null);
    const [deleteUser, setDeleteUser] = useState('');

    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/users`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        fetch(`${baseUrl}/user/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    refetch();
                    toast.success("Promoted to Admin!")
                }
            })
    }


    const handleDelete = (id) => {
        fetch(`${baseUrl}/user/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    setClose(null);
                    refetch();
                    toast.success("User Deleted Successfully!")
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className="card w-full bg-base-100 shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="All Categories"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">All Users</h2>
                        <div>
                            <div className="tooltip" data-tip="See all Buyers">
                                <button className="btn btn-sm btn-outline btn-primary mr-2">Buyer</button>
                            </div>
                            <div className="tooltip" data-tip="See all Sellers">
                                <button className="btn btn-sm btn-outline btn-secondary">Seller</button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((userList, index) => {
                                        return (
                                            <tr key={userList._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>{userList.name}</td>
                                                <td>{userList.email}</td>
                                                <td>
                                                    <span className={`badge ${userList.type === "Seller" ? 'badge-secondary' : 'badge-primary'}`}>{userList.type}</span>
                                                </td>
                                                <td>
                                                    <div className="tooltip" data-tip="Make Admin">
                                                        <label onClick={() => handleMakeAdmin(userList._id)} className='btn btn-sm btn-outline btn-success mr-2'>{userList.type === "Admin" ? <FaCheck /> : <FaShieldAlt />}</label>
                                                    </div>
                                                    <div className="tooltip" data-tip="Delete User">
                                                        <label onClick={() => { setDeleteUser(userList); setClose([]) }} htmlFor="confirmation-modal" className="btn btn-sm btn-outline btn-secondary"><FaTrashAlt /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                close && <ConfirmationModal handleDelete={handleDelete} data={deleteUser}></ConfirmationModal>
            }
        </>
    );
};

export default AllUsers;
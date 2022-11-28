import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import load from '../../../loading.gif';

const AllUsers = () => {
    const { data: allUsers = [], isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/users`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'><img src={load} alt="loader" /></div>
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
                                                    <span className={`badge ${userList.type === "Seller" ? 'badge-secondary':'badge-primary'}`}>{userList.type}</span>
                                                </td>
                                                <td>
                                                    <label className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label>
                                                    <button className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt /></button>
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
        </>
    );
};

export default AllUsers;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import Loading from '../../Common/Loading';

const Orders = () => {
    const {user} = useContext(AuthContext);

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/bookings?email=${user?.email}&type=buyer`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className="card w-full bg-base-100 shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="Orders"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">My Bookings</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Seller Email</th>
                                    <th>Meetup Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((booking, index) => {
                                        return (
                                            <tr key={booking._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>{booking.seller_email}</td>
                                                <td>{booking.meetup}</td>
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

export default Orders;
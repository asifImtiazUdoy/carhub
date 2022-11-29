import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import Loading from '../../Common/Loading';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const { data: mybookings = [], isLoading } = useQuery({
        queryKey: ['mybookings'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
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
                    <BreadCrumb path="All Categories"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">My Bookings</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Buyer</th>
                                    <th>Buyer Email</th>
                                    <th>Phone</th>
                                    <th>Meetup Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mybookings.map((booking, index) => {
                                        return (
                                            <tr key={booking._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>{booking.buyer}</td>
                                                <td>{booking.buyer_email}</td>
                                                <td>{booking.buyer_phone}</td>
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

export default MyBookings;
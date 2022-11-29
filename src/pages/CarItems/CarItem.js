import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookingModal from '../Common/BookingModal';

const CarItem = (props) => {
    const [close, setClose] = useState(null);
    const { _id, name, image, original_price, price, location, use, booked } = props.car;
    
    return (
        <div className="card bg-base-200 shadow-xl mb-16">
            <figure className="px-4 -mt-12 relative">
                <Link to={`/car/${_id}`}>
                    <img src={image} alt="Shoes" className="rounded-xl shadow" />
                    <span className='font-bold absolute right-6 bottom-2 bg-primary text-white px-4 py-1 rounded'>${price}</span></Link>
            </figure>
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Original Price: $</span>{original_price}</p>
                <div className="flex justify-between w-full">
                    <p className='flex items-center font-semibold'><FaMapMarkerAlt className='text-secondary' />&nbsp;{location}</p>
                    <p className='flex justify-end items-center font-semibold'><FaCalendarAlt className='text-secondary' />&nbsp;{use} years</p>
                </div>
                <label onClick={() => setClose([])} htmlFor='booking-modal' className={`btn btn-sm ${booked === 1 ? '' : 'btn-secondary'} w-full`}>{booked === 1 ? 'Already Booked' : 'Book Now'}</label>
            </div>
            {
                close && <BookingModal setClose={setClose} car={props.car}></BookingModal>
            }
        </div>
    );
};

export default CarItem;
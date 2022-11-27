import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const CarItem = () => {
    return (
        <div className="card bg-base-200 shadow-xl">
            <figure className="px-4 -mt-12 relative">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    <span className='font-bold absolute right-6 bottom-2 bg-primary text-white px-4 py-1 rounded'>$20000</span>
            </figure>
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title">Porche Tycan Turbo s</h2>
                    <p><span className='font-bold'>Original Price: $</span>110000</p>
                <div className="flex justify-between w-full">
                    <p className='flex items-center font-semibold'><FaMapMarkerAlt className='text-secondary' />&nbsp;California</p>
                    <p className='flex justify-end items-center font-semibold'><FaCalendarAlt className='text-secondary' />&nbsp;7 years</p>
                </div>
                <button className="btn btn-sm btn-secondary w-full">Book Now</button>
            </div>
        </div>
    );
};

export default CarItem;
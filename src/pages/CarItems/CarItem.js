import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const CarItem = (props) => {
    const {name, image, original_price, price, location, use} = props.car;
    return (
        <div className="card bg-base-200 shadow-xl">
            <figure className="px-4 -mt-12 relative">
                <img src={image} alt="Shoes" className="rounded-xl shadow" />
                    <span className='font-bold absolute right-6 bottom-2 bg-primary text-white px-4 py-1 rounded'>${price}</span>
            </figure>
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title">{name}</h2>
                    <p><span className='font-bold'>Original Price: $</span>{original_price}</p>
                <div className="flex justify-between w-full">
                    <p className='flex items-center font-semibold'><FaMapMarkerAlt className='text-secondary' />&nbsp;{location}</p>
                    <p className='flex justify-end items-center font-semibold'><FaCalendarAlt className='text-secondary' />&nbsp;{use} years</p>
                </div>
                <button className="btn btn-sm btn-secondary w-full">Book Now</button>
            </div>
        </div>
    );
};

export default CarItem;
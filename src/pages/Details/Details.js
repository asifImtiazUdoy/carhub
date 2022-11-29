import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const car = useLoaderData();
    const { name, seller_name, image, original_price, price, location, use } = car;

    return (
        <div>
            <div className="hero min-h-screen mt-16">
                <div className="hero-content flex-col lg:grid lg:grid-cols-5 lg:gap-4">
                    <div className="lg:col-span-2">
                    <img src={image} className="rounded-lg shadow-2xl" alt='Car Img' />
                    </div>
                    <div className='lg:col-span-3'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className='text-xl my-4'><span className='font-bold'>Seller:</span> {seller_name}</p>
                        <p className='text-xl my-4'><span className='font-bold'>Original Price:</span> ${original_price}</p>
                        <p className='text-xl my-4'><span className='font-bold'>Sale Price:</span> ${price}</p>
                        <p className='text-xl my-4'><span className='font-bold'>Location:</span> {location}</p>
                        <p className='text-xl my-4'><span className='font-bold'>Years of Use:</span> {use} Years</p>
                        <p className='text-xl my-4'><span className='font-bold'>Location:</span> {location}</p>
                    </div>
                    <div className="text-center w-full lg:col-span-5">
                    <Link to='/products' className='btn btn-outline btn-secondary my-8'>See Others Cars</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
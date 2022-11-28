import React from 'react';
import { FaCar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import CarItem from '../CarItems/CarItem';

const CategoryProducts = () => {
    const [products, name] = useLoaderData();

    return (
        <div className="mt-16">
            <div>
                <h1 className='text-center text-3xl font-bold mb-4 mt-20 uppercase'>{name}</h1>
                <div className="flex justify-center items-center">
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                    <span className='px-2'><FaCar></FaCar></span>
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 lg:mx-24 py-24">
            {
                products.map(car => <CarItem key={car._id} car={car}></CarItem>)
            }
            </div>
        </div>
    );
};

export default CategoryProducts;
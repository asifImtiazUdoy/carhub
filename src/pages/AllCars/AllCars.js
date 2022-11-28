import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCar } from 'react-icons/fa';
import { baseUrl } from '../../Helper/Helper';
import CarItem from '../CarItems/CarItem';
import Loading from '../Common/Loading';

const AllCars = () => {
    const { data: cars = [], isLoading } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/products`)
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return ( cars.length > 0 &&
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold mb-4 mt-20 uppercase'>All Cars</h1>
                <div className="flex justify-center items-center">
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                    <span className='px-2'><FaCar></FaCar></span>
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                </div>
            </div>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 lg:px-24 py-28'>
                {
                    cars.map(car => <CarItem key={car._id} car={car}></CarItem>)
                }
            </div>
        </div>
    );
};

export default AllCars;
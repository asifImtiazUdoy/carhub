import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCar } from 'react-icons/fa';
import { baseUrl } from '../../Helper/Helper';
import Loading from '../Common/Loading';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/categories`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold mb-4 mt-20 uppercase'>Categories</h1>
                <div className="flex justify-center items-center">
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                    <span className='px-2'><FaCar></FaCar></span>
                    <span className='w-16 h-1 bg-secondary rounded'></span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 lg:mx-24 py-12">
                {
                    categories.map(category => <HomeCategory key={category._id} category={category}></HomeCategory>)
                }
            </div>
        </div>
    );
};

export default HomeCategories;
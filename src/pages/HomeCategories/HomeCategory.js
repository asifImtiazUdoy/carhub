import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCategory = ({category}) => {
    return (
        <Link className='mb-4' to={`/category/${category.name}`}>
            <div className="card shadow-xl bg-base-200 text-black text-primary-content ease-in duration-300 hover:-translate-y-4 hover:bg-pink-500 hover:text-white mb-4">
                <div className="card-body">
                    <div className="opacity-10 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                        <FaCar className='text-9xl w-full'/>
                    </div>
                    <h2 className="text-center w-full text-5xl font-bold uppercase">{category.name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default HomeCategory;
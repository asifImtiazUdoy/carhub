import React from 'react';
import CarItem from './CarItem';

const CarItems = () => {
    return (
        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 lg:px-24 py-28'>
            <CarItem></CarItem>
            <CarItem></CarItem>
            <CarItem></CarItem>
        </div>
    );
};

export default CarItems;
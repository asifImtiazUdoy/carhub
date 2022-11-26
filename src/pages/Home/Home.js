import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CarItems from '../CarItems/CarItems';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <CarItems></CarItems>
        </div>
    );
};

export default Home;
import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import CarItems from '../CarItems/CarItems';
import HomeCategories from '../HomeCategories/HomeCategories';
import Stats from '../Stats/Stats';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <CarItems></CarItems>
            <HomeCategories></HomeCategories>
            <Stats></Stats>
        </div>
    );
};

export default Home;
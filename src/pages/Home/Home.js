import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            This is home
        </div>
    );
};

export default Home;
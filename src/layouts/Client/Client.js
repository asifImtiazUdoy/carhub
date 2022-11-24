import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './partials/Footer/Footer';
import Header from './partials/Header/Header';

const Client = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Client;
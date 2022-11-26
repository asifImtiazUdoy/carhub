import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Client/partials/Header/Header';
import Sidebar from './partials/Sidebar/Sidebar';

const Profile = () => {
    return (
        <div>
            <Header profile></Header>
            <div className="drawer drawer-mobile lg:grid-cols-4 shadow-sm">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:col-span-3 mt-16 lg:ml-8 p-4 lg:pr-24">
                    <Outlet></Outlet>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Profile;
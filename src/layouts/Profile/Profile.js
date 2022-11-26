import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Client/partials/Header/Header';
import Sidebar from './partials/Sidebar/Sidebar';

const Profile = () => {
    return (
        <div>
            <div className="drawer drawer-mobile lg:grid-cols-4 shadow-sm">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:col-span-3">
                    <Header profile></Header>
                    <Outlet></Outlet>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Profile;
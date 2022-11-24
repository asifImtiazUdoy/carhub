import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menu = <>
        <li className='uppercase font-semibold'><Link to='/'>Home</Link></li>
        <li className='uppercase font-semibold'><Link to='/'>Blog</Link></li>
        <li className='uppercase font-semibold'><Link to='/'>About</Link></li>
    </>

    const handleTheme = (e) => {
        const theme = document.getElementById('html');
        if (e.target.checked) {
            theme.setAttribute('data-theme', 'dark')
        }else{
            theme.setAttribute('data-theme', 'light')
        }
    }
    
    return (
        <div className="navbar shadow-lg fixed-top lg:px-24">
            <div className="navbar-start mx-auto">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl font-bold">Car<span className='text-secondary'>Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <input onChange={handleTheme} type="checkbox" className="toggle toggle-md" />
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">Profile</Link>
                        </li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
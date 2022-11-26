import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Header = ({ profile }) => {
    const [scroll, setScroll] = useState(0);
    const { user, logOut } = useContext(AuthContext);

    const handleTheme = (e) => {
        const theme = document.getElementById('html');
        if (e.target.checked) {
            theme.setAttribute('data-theme', 'dark')
        } else {
            theme.setAttribute('data-theme', 'light')
        }
    }

    const handleLogout = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }

    const menu = <>
        <li className='lg:uppercase font-semibold'><Link to='/'>Home</Link></li>
        <li className='lg:uppercase font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='lg:uppercase font-semibold'><Link to='/'>About</Link></li>
    </>

    return (
        <div className="navbar lg:px-24 z-10 bg-base-100 fixed top-0 z-30 h-16 w-full bg-opacity-90 backdrop-blur transition-all duration-100 text-base-content shadow-md">
            <div className="navbar-start mx-auto">
                {profile &&
                        <label htmlFor="sidebar" className="btn btn-ghost drawer-button lg:hidden">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                }
                <Link to='/' className="btn btn-ghost text-xl font-bold">Car<span className='text-secondary'>Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <FaSun />
                <input onChange={handleTheme} type="checkbox" className="toggle toggle-sm mx-1" />
                <FaMoon />
                {user?.uid ?
                    <div className="dropdown dropdown-end mx-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt='img' />
                                        :
                                        <div className="flex justify-center items-center h-full w-full bg-zinc-200">
                                            <FaUserAlt className='text-2xl'></FaUserAlt>
                                        </div>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/dashboard' className="justify-between">Profile</Link>
                            </li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <Link to='/login' className="btn btn-sm mx-2">Login</Link>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
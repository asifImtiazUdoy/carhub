import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer-side z-0">
            <label htmlFor="sidebar" className="drawer-overlay"></label>
            <aside className='bg-base-200'>
                <div class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 justify-center py-2 px-4 hidden lg:flex h-16 shadow-sm">
                    <Link to='/' className="btn btn-ghost text-xl font-bold flex-0">Car<span className='text-secondary'>Hub</span></Link>
                </div>
                <ul className="menu w-80 lg:w-full p-4 text-base-content lg:pl-24">
                    <li><Link>Sidebar Item 1</Link></li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
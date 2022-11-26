import React, { useContext } from 'react';
import { FaFire, FaHeart, FaShoppingBasket, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Sidebar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="drawer-side z-0 mt-16 shadow-lg">
            <label htmlFor="sidebar" className="drawer-overlay"></label>
            <aside className='bg-base-200 w-80 lg:w-full'>
                <div className="lg:ml-24 ml-6 mt-4 mb-8">
                    <div className="avatar">
                        {
                            user?.photoURL ?
                                <div className="w-28 rounded-full">
                                    <img src={user?.photoURL} alt='Profile' />
                                </div>
                                :
                                <div className="w-28 rounded-full">
                                    <FaUserAlt className='text-2xl'></FaUserAlt>
                                </div>
                        }
                    </div>
                    <h2 className='font-bold text-2xl mb-2'>{user?.displayName}</h2>
                    <p className='badge badge-secondary px-4'>Buyer</p>
                </div>
                <div className="divider"></div>
                <ul className="menu p-4 text-base-content bg-base-100 lg:ml-24 rounded">
                    <li className='border-b-2'>
                        <Link to='/dashboard' className='flex justify-start items-center font-semibold'><FaFire />Dashboard</Link>
                    </li>
                    <li className='border-b-2'>
                        <Link className='flex justify-start items-center font-semibold'><FaHeart />My Wishlist</Link>
                    </li>
                    <li className='border-b-2'>
                        <Link className='flex justify-start items-center font-semibold'><FaShoppingCart />My Carts</Link>
                    </li>
                    <li className='border-b-2'>
                        <Link className='flex justify-start items-center font-semibold'><FaShoppingBasket />My Purchases</Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
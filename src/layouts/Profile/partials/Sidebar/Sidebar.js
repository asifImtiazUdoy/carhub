import React, { useContext } from 'react';
import { FaCarAlt, FaFileAlt, FaFire, FaHeart, FaShoppingBasket, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../Hooks/useUser';
import Loading from '../../../../pages/Common/Loading';

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, userLoading] = useUser(user?.email);

    if (userLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer-side mt-16 shadow-lg">
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
                                    <div className="flex justify-center items-center h-full border-8">
                                        <FaUserAlt className='text-5xl text-center'></FaUserAlt>
                                    </div>
                                </div>
                        }
                    </div>
                    <h2 className='font-bold text-2xl mb-2'>{currentUser.name ? currentUser.name:user?.displayName}</h2>
                    <p className={`badge ${currentUser.type === 'Buyer' ? 'badge-primary' : 'badge-secondary'} px-4`}>{currentUser.type}</p>
                </div>
                <div className="divider"></div>
                <ul className="menu p-4 text-base-content bg-base-100 lg:ml-24 rounded">
                    <li className='border-b-2'>
                        <Link to='/user' className='flex justify-start items-center font-semibold'><FaFire />Dashboard</Link>
                    </li>
                    {
                        currentUser.type === "Buyer" &&
                        <>
                            <li className='border-b-2'>
                                <Link className='flex justify-start items-center font-semibold'><FaHeart />My Wishlist</Link>
                            </li>
                            <li className='border-b-2'>
                                <Link className='flex justify-start items-center font-semibold'><FaShoppingCart />My Carts</Link>
                            </li>
                            <li className='border-b-2'>
                                <Link to='/user/orders' className='flex justify-start items-center font-semibold'><FaShoppingBasket />My Orders</Link>
                            </li>
                        </>
                    }

                    {
                        currentUser.type === "Seller" &&
                        <>
                            <li className='border-b-2'>
                                <Link to='/user/products' className='flex justify-start items-center font-semibold'><FaCarAlt />My Products</Link>
                            </li>
                            <li className='border-b-2'>
                                <Link to='/user/bookings' className='flex justify-start items-center font-semibold'><FaCarAlt />My Bookings</Link>
                            </li>
                        </>
                    }
                    {
                        currentUser.type === "Admin" &&
                        <>
                            <li className='border-b-2'>
                                <Link to='/user/categories' className='flex justify-start items-center font-semibold'><FaFileAlt />All Categories</Link>
                            </li>
                            <li className='border-b-2'>
                                <Link to='/user/allusers' className='flex justify-start items-center font-semibold'><FaUserAlt />All users</Link>
                            </li></>
                    }


                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
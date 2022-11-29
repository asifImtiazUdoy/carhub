import React, { useContext } from 'react';
import { FaEnvelope, FaMobile, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';
import BreadCrumb from '../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import Loading from '../Common/Loading';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, userLoading] = useUser(user?.email);

    if (userLoading) {
        <Loading></Loading>
    }

    return (
        <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body">
                <BreadCrumb path="Dashboard"></BreadCrumb>
                <hr className='mb-4' />
                <h2 className="card-title mb-8">Dashboard</h2>
                <div className="grid grid-cols-4 gap-4">
                    <Link>
                        <div className={`card text-primary-content shadow-lg ${currentUser.type === 'Buyer' ? 'bg-primary' : 'bg-secondary'}`}>
                            <div className="card-body p-4 flex-row justify-between items-center">
                                <h2 className='border-r-2 text-4xl font-bold px-2 pr-4'><FaUserAlt /></h2>
                                <p className="mb-0 text-2xl font-bold text-center uppercase">{currentUser.type}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <p className="mb-0 text-2xl font-bold uppercase my-4">{user?.displayName}</p>
                <div className='flex w-max'>
                    <p className="mb-0 text-2xl font-bold my-4 flex items-center mr-4"><FaEnvelope className='mr-2 text-secondary' />Email:</p>
                    <p className="mb-0 text-2xl font-semibold my-4">{user?.email}</p>
                </div>
                <div className='flex w-max'>
                    <p className="mb-0 text-2xl font-bold my-4 flex items-center mr-4"><FaMobile className='mr-2 text-secondary' />Phone:</p>
                    <p className="mb-0 text-2xl font-semibold my-4">{user?.email}</p>
                </div>
                <div className='mt-12'>
                    <button className='btn btn-sm btn-outline btn-primary'>Apply for Seller</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
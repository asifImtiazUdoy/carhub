import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import BreadCrumb from '../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import CategoryModal from '../Common/CategoryModal';

const Categories = () => {
    const [close, setClose] = useState([]);

    return (
        <>
            <div className="card w-full bg-base-100 shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="All Categories"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">All Categories</h2>
                        <label onClick={() => setClose([])} htmlFor="category-modal" className='btn btn-sm btn-outline btn-primary'><FaPlus /> &nbsp; Add Category</label>
                    </div>
                </div>
            </div>
            {
                close && <CategoryModal setClose={setClose}></CategoryModal>
            }
        </>
    );
};

export default Categories;
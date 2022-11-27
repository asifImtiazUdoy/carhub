import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { baseUrl } from '../../Helper/Helper';
import BreadCrumb from '../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import CategoryModal from '../Common/CategoryModal';

const Categories = () => {
    const [close, setClose] = useState([]);
    const {data: categories = [], isLoading} = useQuery({
        queryKey: [categories],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/categories`);
            const data = res.json();
            return data;
        }
    })

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
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
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
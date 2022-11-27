import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaPencilAlt, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { baseUrl } from '../../Helper/Helper';
import BreadCrumb from '../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import CategoryModal from '../Common/CategoryModal';
import load from '../../loading.gif';

const Categories = () => {
    const [close, setClose] = useState([]);
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/categories`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'><img src={load} alt="loader" /></div>
    }

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
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map((category, index) => {
                                        return (
                                            <tr key={category._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>{category.name}</td>
                                                <td>
                                                    <label onClick={() => setClose([])} htmlFor="category-modal" className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label>
                                                    <button className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt/></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                close && <CategoryModal setClose={setClose} refetch={refetch}></CategoryModal>
            }
        </>
    );
};

export default Categories;
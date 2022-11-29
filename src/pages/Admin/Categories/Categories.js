import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import CategoryModal from '../../Common/CategoryModal';
import ConfirmationModal from '../../Common/ConfirmationModal';
import Loading from '../../Common/Loading';

const Categories = () => {
    const [close, setClose] = useState(null);
    const [cat, setCat] = useState('');
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/categories`);
            const data = res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        fetch(`${baseUrl}/category/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    setClose(null);
                    refetch();
                    toast.success("Item Deleted Successfully!")
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
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
                                                    {/* <label onClick={() => setClose([])} htmlFor="category-modal" className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label> */}
                                                    <div className="tooltip" data-tip="Delete Category">
                                                        <label onClick={() => { setCat(category); setClose([]) }} htmlFor="confirmation-modal" className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt /></label>
                                                    </div>
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
            {
                close && <ConfirmationModal handleDelete={handleDelete} data={cat}></ConfirmationModal>
            }
        </>
    );
};

export default Categories;
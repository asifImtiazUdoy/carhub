import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaPencilAlt, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../../Helper/Helper';
import BreadCrumb from '../../../layouts/Profile/partials/BreadCrumb/BreadCrumb';
import load from '../../../loading.gif';
import ProductModal from '../../Common/ProductModal';

const Products = () => {
    const {user} = useContext(AuthContext);
    const [close, setClose] = useState([]);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/products?email=${user.email}`);
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
                        <label onClick={() => setClose([])} htmlFor="product-modal" className='btn btn-sm btn-outline btn-primary'><FaPlus /> &nbsp; Add Product</label>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Thumbnail</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Years of Use</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => {
                                        return (
                                            <tr key={product._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>
                                                    <img width='60' src={product.image} alt="product img" />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.use}</td>
                                                <td>
                                                    <label onClick={() => setClose([])} htmlFor="category-modal" className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label>
                                                    <button className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt /></button>
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
                close && <ProductModal setClose={setClose} refetch={refetch}></ProductModal>
            }
        </>
    );
};

export default Products;
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../Helper/Helper';

const ProductModal = ({setClose, refetch}) => {
    const {user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`${baseUrl}/categories`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    const handleCreate = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imagebb_key}`, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResult => {
            if (imgResult.success) {
                const product = {
                    name: data.name,
                    email: user.email,
                    category: data.category_id,
                    image: imgResult.data.url,
                    original_price: data.original_price,
                    price: data.price,
                    location: data.location,
                    use: data.use
                }
                fetch(`${baseUrl}/product`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledge) {
                        toast.success('Product added Successfully!')
                        refetch();
                        setClose(null);
                    }
                })
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative mt-16">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center font-bold">Add Product</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select className="select select-bordered" {...register('category_id', { required: true })}>
                                        {
                                            categories.map(cat => <option key={cat._id}>{cat.name}</option>)
                                        }
                                    </select>
                                {errors.category_id && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car Image</span>
                                </label>
                                <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered file-input-sm" />
                                {errors.image && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="text" {...register('original_price', { required: true })} placeholder="Original Price" className="input input-bordered" />
                                {errors.original_price && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sell Price</span>
                                </label>
                                <input type="text" {...register('price', { required: true })} placeholder="Sell Price" className="input input-bordered" />
                                {errors.price && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" {...register('location', { required: true })} placeholder="Location of the car" className="input input-bordered" />
                                    {errors.location && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Year of Use</span>
                                    </label>
                                    <input type="text" {...register('use', { required: true })} placeholder="Years of Use" className="input input-bordered" />
                                    {errors.use && <span className='text-red-600'>This field is required</span>}
                                </div>
                            </div>
                            <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
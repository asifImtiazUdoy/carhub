import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const CategoryModal = ({setClose, refetch}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCreate = (data) => {
        fetch('http://localhost:5000/category', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                refetch();
                setClose(null);
                toast.success('Category Added Successfully!');
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center font-bold">Create Category</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                                <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;
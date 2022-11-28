import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../Helper/Helper';
import useUser from '../../Hooks/useUser'
import Loading from './Loading';

const BookingModal = ({setClose, car}) => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currentUser, userLoading] = useUser(user?.email);

    if (userLoading) {
        <Loading></Loading>
    }

    const handleCreate = (data) => {
        const booking = {
            buyer: currentUser.name,
            buyer_email: currentUser.email,
            seller_email: car.email,
            product_id: car._id,
            product_name: car.name,
            price: car.price,
            buyer_phone: data.phone,
            meetup: data.meet
        }
        console.log(booking);
        fetch(`${baseUrl}/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                setClose(null);
                toast.success('Booking Successful!');
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center font-bold">Create Category</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" className="input input-bordered" value={currentUser.name} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" className="input input-bordered" value={currentUser.email} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car Model</span>
                                </label>
                                <input type="text" className="input input-bordered" value={car.name} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" className="input input-bordered" value={`$${car.price}`} disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register('phone', { required: true })} placeholder="Phone" className="input input-bordered" />
                                {errors.phone && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Meetup Location</span>
                                </label>
                                <input type="text" {...register('meet', { required: true })} placeholder="Meetup Location" className="input input-bordered" />
                                {errors.meet && <span className='text-red-600'>This field is required</span>}
                            </div>
                                <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
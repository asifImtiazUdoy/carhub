import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { baseUrl } from '../../Helper/Helper';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const [createdUser, setCreatedUser] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(createdUser);

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        const user = {
            name: data.name,
            email: data.email,
            type: data.type ? data.type: 'Buyer'
        }
        
        createUser(data.email, data.password)
            .then(result => {
                if (result.user?.uid) {
                    fetch(`${baseUrl}/user`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(data => {
                        setCreatedUser(data.email);
                        toast.success('User Created Successfully');
                    })
                }
            })
            .catch(e => console.error(e))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    type: "Buyer"
                }
                fetch(`${baseUrl}/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    setCreatedUser(data.email);
                    toast.success('User Created Successfully');
                })
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen w-full mt-16">
            <div className="hero-content w-1/3">
                <div className="card w-full shadow-xl bg-base-100">
                    <h2 className='text-center text-3xl font-bold p-4'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register('email', { required: "Email is required" })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <div className="form-control">
                                    <label className="cursor-pointer label justify-start items-center shadow-sm">
                                        <input type="checkbox" {...register('type')} className="checkbox checkbox-primary mr-2" value="Seller"/>
                                        <span className="label-text font-bold text-primary">SignUp as a Seller</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-secondary">Sign Up</button>
                            </div>
                            <label className="label">
                                <p className='flex justify-between'>Already have an account?<Link to="/login" className="text-primary text-end link-hover underline">Sign In</Link></p>
                            </label>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button type='button' onClick={handleGoogleLogin} className="btn btn-outline"><FaGoogle className='text-secondary'></FaGoogle> &nbsp; Continue with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
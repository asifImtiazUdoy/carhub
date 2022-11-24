import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
        .catch(e => console.error(e))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen w-full">
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
                                <label className="label">
                                    <p className='flex justify-between'>Already have an account?<Link to="/login" className="text-primary text-end link-hover underline">Sign In</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-secondary">Sign Up</button>
                            </div>
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
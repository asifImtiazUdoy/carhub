import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../Helper/Helper';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
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
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setCreatedUser(user.email);
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
                    <h2 className='text-center text-3xl font-bold p-4'>Sign In</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="card-body">
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
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-secondary">Login</button>
                            </div>
                            <label className="label">
                                <p className='flex justify-between'>Don't have an account?<Link to="/register" className="text-primary text-end link-hover underline">Create New</Link></p>
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

export default Login;
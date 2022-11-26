import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors} } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace:true })
        })
        .catch(e => console.error(e))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content w-1/3">
                <div className="card w-full shadow-xl bg-base-100">
                    <h2 className='text-center text-3xl font-bold p-4'>Sign In</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register('email', {required: "Email is required"})} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', {required: true})} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p className='flex justify-between'>Don't have an account?<Link to="/register" className="text-primary text-end link-hover underline">Create New</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-secondary">Login</button>
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

export default Login;
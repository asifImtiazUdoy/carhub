import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex justify-center h-screen flex-col items-center">
                <img className='lg:w-2/3' src="/404.png" alt="404" />
                <div>
                    <Link to='/' className='btn btn-warning'>Go Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
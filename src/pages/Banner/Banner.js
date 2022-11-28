import React from 'react';

const Banner = () => {
    return (
        <div className="hero mt-16" style={{ backgroundImage: `url("/banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content my-28">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to CarHub</h1>
                    <p className="mb-5">Buy car in fair price from carhub. You can also sell your old car here. Buy, Sell and Enjoy!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
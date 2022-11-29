import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to='/'>Home</Link>
                <Link to='/products'>Cars</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link className='text-3xl' to='/'><FaFacebookSquare></FaFacebookSquare></Link>
                    <Link className='text-3xl' to='/'><FaTwitterSquare></FaTwitterSquare></Link>
                    <Link className='text-3xl' to='/'><FaLinkedin></FaLinkedin></Link>
                </div>
            </div>
            <div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by A M Asif Imtiaz Udoy</p>
            </div>
        </footer>
    );
};

export default Footer;
import React from "react";
import './css/style.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
       localStorage.clear();
       toast.success('🦄 Logout Successfully!', {
           position: "top-center",
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "colored",
           });
       setTimeout(() => {
           navigate('/login');
       }, 2700);
    }

    return(
        <body>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    <nav className="navbar">
        <div className="logo">
            <div className="logo-div"><span className="doc">Click</span><span>Doctor</span></div>
        </div>
        <div className="navlinks">
            <Link to="/home"><div className="navlink" id="navlink1">Home</div></Link>
            <Link to="/doctorpage"><div className="navlink" id="navlink2">Doctor Page</div></Link>
            <Link to="/services"><div className="navlink" id="navlink3">Services</div></Link>
            <Link to="/aboutus"><div className="navlink" id="navlink4">About Us</div></Link>
            <div className=" navlink"><span className="contactus">Contact us: </span> +123 456 7890</div>
        </div>
        <div className="navbtn">
            <Link to="/login"><div className="login">Log in / Sign up</div></Link>
            <div className="logout" onClick={() => {logout()}}><i class="fa-solid fa-right-from-bracket"></i></div>
        </div>
    </nav>
</body>
    )
}
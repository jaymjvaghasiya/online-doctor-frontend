import React, { useEffect, useState } from "react";
import './css/style.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

    let navigate = useNavigate();

    let {register, handleSubmit, formState: {errors}} = useForm();
    let submitHandler = async(data) => {
        try
        {
            let res = await axios.post("http://localhost:3001/user/login", data);
            if(res.data.flag == 1)
            {
                localStorage.setItem("id", res.data.data._id);
                toast.success('😎 Login Successfull.', {
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
                    navigate('/doctorpage');
                }, 2700);
            }
            else
            {
                toast.error('😥 Invalide Credentials.', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        catch(err)
        {
            console.log(err.message);
        }
    }

    let velidationSchema = {
        Email: {
            required: {
                value: true,
                message: "Email is required."
            }
        },
        Password: {
            required: {
                value: true,
                message: "Password is required."
            }
        }
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
        
    <div className="loginform">
        <div className="right">
            <img src="./images/od2.jpg" alt="" />
        </div>
        <div className="left">
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                <h1>Login</h1>
                <div className="uname">
                    <input type="email" name="username" id="" placeholder="Email" {...register("Email", velidationSchema.Email)} />
                    {errors.Email && <p className="validation">{errors.Email.message}</p>}
                </div>
                <div className="pass">
                    <input type="password" name="password" id="" placeholder="password" {...register("Password", velidationSchema.Password)} />
                    {errors.Password && <p className="validation">{errors.Password.message}</p>}
                </div>
                <div className="rem">
                    <p className="remme"> <input type="checkbox" name="remember" id="" checked /> <span>Remember me</span></p>
                    <p className="signup"><Link to="/signup">Sign up?</Link></p>
                </div>
                <div className="sub">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
</body>
    )
}
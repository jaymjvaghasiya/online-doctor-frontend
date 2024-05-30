import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import './css/style.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Signup = () => {

    let navigate = useNavigate();

    let {register, handleSubmit, formState: {errors}} = useForm({});
    let submitHandler = async(data) => {
        console.log(data);
        let res = await axios.post("http://localhost:3001/user/user", data);
        toast.success('😁 Sign up successfull!', {
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
            navigate('/Login');
        }, 2700);
    }

    let validationSchema = {
        First_name: {
            required: {
                value: true,
                message: "First name is required."
            }
        },
        Last_name: {
            required: {
                value: true,
                message: "Lase name is required.",
            }
        },
        Email: {
            required: {
                value: true,
                message: "Email is required."
            },
            unique: {
                value: true,
                message: "This email id is already exists."
            }
        },
        Password: {
            required: {
                value: true,
                message: "Password is required."
            },
            minLength: {
                value: 8,
                message: "Minimum length  must be 8."
            }
        },
        Gender: {
            required: {
                value: true,
                message: "Gender is required."
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
    <div className="signupform">
        <div className="right">
            <img src="./images/od2.jpg" alt="" />
        </div>
        <div className="left">
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                <h1>Signup</h1>
                <div className="name">
                    <div className="fname">
                        <input type="text" name="firstname" id="" placeholder="Firstname" {...register("First_name", validationSchema.First_name)} />
                        {errors.First_name && <p className="validation">{errors.First_name.message}</p>}
                    </div>
                    <div className="lname">
                        <input type="text" name="lastname" id="" placeholder="Lastname" {...register("Last_name", validationSchema.Last_name)} />
                        {errors.Last_name && <p className="validation">{errors.Last_name.message}</p>}
                    </div>
                </div>
                <div className="cred">
                    <div className="mail">
                        <input type="email" name="mail" id="" placeholder="Email" {...register("Email", validationSchema.Email)} />
                        {errors.Email && <p className="validation">{errors.Email.message}</p>}
                    </div>
                    <div className="pass">
                        <input type="password" name="password" id="" placeholder="Password" {...register("Password", validationSchema.Password)} />
                        {errors.Password && <p className="validation">{errors.Password.message}</p>}
                    </div>
                </div>
                <div className="gdr">
                    <label for="">Gender: </label>
                    <div className="m">
                        <input type="radio" name="Gender" id="" value="male" {...register("Gender", validationSchema.Gender)} /> <span>Male</span>
                    </div>
                    <div className="f">
                        <input type="radio" name="Gender" id="" value="female" {...register("Gender", validationSchema.Gender)} /> <span>Female</span>
                    </div>
                    {errors.Gender && <p className="validation">{errors.Gender.message}</p>}
                </div>
                <div className="tandc">
                    <input type="checkbox" name="" id="" checked /> <span>Terms & Conditions</span>
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
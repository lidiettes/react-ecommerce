import React, { useEffect } from 'react'
import { useState } from 'react';
import './Login.css';
import getDataUsers from '../../api/apiUsers';
import { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext/UserDataContext';
import { ApiContext } from '../../context/ApiContext/ApiContext';
import { UserContext } from '../../context/UserContext/UserContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    //fetch
    const { userData, setUserData } = useContext(UserDataContext);
    const { fetchUser } = useContext(ApiContext);

    useEffect(() => {
        fetchUser()
    }, []);

    //LOGIN
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

    const getDataForm = e => {
        e.preventDefault();

        const target = e.target;
        const email = target.email.value;
        const password = target.password.value;

        const authentic = userData.find(u => email === u.email) && userData.find(u => password === u.password)
        console.log(authentic);

        if (authentic) {
            setUser(authentic);
            navigate("/shippingPage");
        } else {
            console.log("error credenciales");
        }
    }

    //REGISTER


    const getUserRegister = (e) => {
        e.preventDefault();

        const newUser = {
            id: new Date().getTime(),
            name: e.target.name.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        setUser(newUser); // login the new user
       
    }
   

    

    return (
        <>
            <div className="wrapper">
                <div className="heading">
                    <p>Sign in </p>
                </div>
                <form onSubmit={getDataForm} className="form-group">
                    <p className="account-heading">or use your account</p>
                    <input type="text" placeholder="email" id="email" name="email" className="email" />
                    <input type="password" placeholder="password" id="password" name="password" className="passwd" />
                    <a href="#" className="btn btn-forget">Forget your password?</a>
                    <button href="#" type="submit" className="btn btn-primary">Sign in</button>
                </form>

                <form onSubmit={getUserRegister} action="#" className="form-group">
                    <br />
                    <p>REGISTER</p>
                    <input type="text" placeholder="name" name="name" className="name" />
                    <input type="text" placeholder="lastName" name="lastName" className="lastName" />
                    <input type="text" placeholder="email" name="email" className="email" />
                    <input type="password" placeholder="password" name="password" className="passwd" />
                    <button href="#" type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <div className="social">
                    <p>Or sign in with... </p>
                    <a href="#" className="social-links"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="social-links"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>


        </>
    )
}

export default Login
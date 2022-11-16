import React, { useEffect } from 'react'
import { useState } from 'react';
import './Login.css';
import getDataUsers from '../../api/apiUsers';

const Login = () => {

    //fetch

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await getDataUsers();
            setUser(data);
        }
        fetch();
    }, [])

    console.log(user);

    const getDataForm = e => {
        e.preventDefault();
        const target = e.target;
        const email = target.email.value;
        const password = target.password.value;
        alert(email + password);
        
    //autentificar la info....
    // si es correcta, setUser(info)

        // const user = {
        //     id: new Date().getTime(),
        //     email,
        //     password
        // };
      
        // setUser(user)

    
        // saveUserStorage(user);
    }


    // const saveUserStorage = (user) => {
    //     let saved = JSON.parse(localStorage.getItem("users"));
    //     if (Array.isArray(saved)) {
    //         saved.push(user);
    //     } else {
    //         saved = [user];
    //     }
    //     localStorage.setItem('users', JSON.stringify([saved]));
    //     return user;
    //     console.log(saved);
    // }


    return (

        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

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


                <form onSubmit={getDataForm} action="#" className="form-group">
                    <br />
                    <p>REGISTER</p>
                    <input type="text" placeholder="name" name ="name"className="name" />
                    <input type="text" placeholder="lastName" name= "lastName"className="lastName" />
                    <input type="text" placeholder="email" name="email" className="email" />
                    <input type="password" placeholder="password" name="password"className="passwd" />
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
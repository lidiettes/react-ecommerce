import React from 'react'
import './Login.css';

const Login = () => {
    return (

        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerpolicy="no-referrer" />

            
                <div className="wrapper">
                    <div className="heading">
                        <p>Sign in </p>
                    </div>
                   
                    <form action="#" className="form-group">
                        <p className="account-heading">or use your account</p>
                        <input type="text" placeholder="email" className="email" />
                        <input type="password" placeholder="password" className="passwd" />
                        <a href="#" className="btn btn-forget">Forget your password?</a>
                        <a href="#" type="submit" className="btn btn-primary">Sign in</a>
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
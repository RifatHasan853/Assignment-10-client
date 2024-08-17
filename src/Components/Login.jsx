

import { useContext } from "react";
//import { Link, useNavigate } from "react-router-dom";
import 'animate.css';
import {Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate;
    console.log('location i n the login page', location)

    const handleLogin = e => {
        e.preventDefault();
      //  const email = e.target.email.value;
        //const password = e.target.password.value;
        //console.log(email, password);
          console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        

        signIn(email, password)
            .then(result => {
                console.log(result.user)
              //  e.target.reset();
                //navigate('/');
                navigate(location?.state ? location.state:'/');
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hotel||Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="hero-content flex-col">
            <div className="text-center  ">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-rose-500">
            
                <div className="card-body animate__animated animate__backInDown animate__delay-0.5s animate__slow">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" required className="  input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-rose-300 font-bold">Login</button>
                        </div>
                    </form>
                    <p> New to this site? Please <Link to="/register">
                        <button className="btn btn-link">Register</button>
                    </Link> </p>
                    <div className="flex justify-between">
                    <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                    <p><button onClick={handleGithubSignIn} className="btn btn-ghost">Github</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Login;
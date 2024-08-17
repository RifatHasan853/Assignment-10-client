//easyTravel
//WpmIc2RLky7O93eO

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('user logged out successfully'))
        .catch(error => console.error (error))
    }

    const navLinks = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/allplaces"> All Tourists Spot</NavLink></li>
        <li><NavLink to="/add">Add Tourists Spot</NavLink></li>

        <li><NavLink to="/login">Login</NavLink></li>

        <li><NavLink to="/register">Register</NavLink></li>
       
        { user && <>
           
            <li><NavLink to="/mylist">My List</NavLink></li>
           
        </>}
       

       
    </>

    return (
        <div className="navbar bg-rose-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 animate__animated animate__bounceInLeft animate__delay-0.5s animate__slow">
                        {navLinks}
                    </ul>
                </div>
                <a className=" text-2xl font-bold">Sunset Retreat Hotel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 animate__animated animate__bounceInLeft animate__delay-0.5s animate__slow">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className=" flex ">
                        <p>{user.email}</p>
                        <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full cursor-pointer mr-16" />
                        <span className="absolute top-0 right-0 bg-rose-200 p-1 hover:rounded-lg text-xs mr-20 mt-6">{user.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-sm ml-4 bg-rose-300">Logout</button>
                    
                    </div>
                    
                ) : (
                    <Link to="/login" className="btn btn-sm bg-rose-300">Login</Link>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;
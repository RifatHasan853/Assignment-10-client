
import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../Providers/AuthProvider";
import {  updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const handleRegister = e => {
         
    e.preventDefault();
   const name = e.target.name.value;
   const photo=e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name,photo, email, password, accepted);


     // reset error and success
    setRegisterError('');
    setSuccess('');
       if (password.length < 6) {
        setRegisterError('Password should be at least 6 characters or longer');
        return;
    }
    else if (!/[A-Z]/.test(password)) {
        setRegisterError('Your password should have at least one upper case characters.')
        return;
    }
    else if (!/[a-z]/.test(password)) {
     setRegisterError('Your password should have at least one lower case characters.')
     return;
 }
    else if(!accepted){
        setRegisterError('Please accept our terms and conditions!')
        return;
    }

    // create user in firebase
    createUser(email, password)
        .then(result => {
            console.log(result.user)
             setSuccess('User registered successfully')
               // update profile
               updateProfile(result.user, {
                 displayName: name, 
                 photoURL: photo,
             })
             .then( () => console.log('profile updated'))
             .catch()

             // send verification email: 
             //sendEmailVerification(result.user)
             //.then( () =>{
                // alert('Please check your email and verify your account')
             //})
    
         })
        .catch(error => {
            console.error(error);
             setRegisterError(error.message);
        })
}
  
    return (
        <div className="">
      
   <div className="mx-auto md:w-1/2">
       <h2 className="text-3xl mb-8">Register And Update</h2>
       <form onSubmit={handleRegister} className="animate__animated animate__backInRight animate__delay-0.5s animate__slow">
           <input className="mb-4 w-full  py-2 px-4 input input-bordered" type="text" name="name" placeholder="Your Name" id="" required />

           <br />
           <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered mb-4 w-full  py-2 px-4" />
           <br/>
           <input className=" input input-bordered mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="" required />
           <br />
           <div className="mb-4 relative border">
               <input
                   className="w-full py-2 px-4"
                   type={showPassword ? "text" : "password"}
                   name="password"
                   placeholder="Password"
                   id="" required />
                 <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                       {
                           showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                       }

                   </span>
           </div>
           <br />
           <div className="mb-2">
               <input type="checkbox" name="terms" id="terms" />
               <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
           </div>
           <br />
           <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
       </form>
       <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
       {
           registerError && <p className="text-red-700">{registerError}</p>
       }
       {
           success && <p className="text-green-600">{success}</p>
       }
      
   </div>
</div>
    );
};

export default Register;
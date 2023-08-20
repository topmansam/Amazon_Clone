import  React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "./firebase";
 
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const signIn =  e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/');
        })
        .catch(error => alert(error.message));
    };
    
    const register = e => {
        console.log("hi");
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => alert(error.message));
    };
    
    return (
      
       
        <div className='login__logo'>
            <Link to= '/'>
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png'
             />
             </Link>   
             <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = 'text' value ={email} onChange =
                     {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type = 'password' value ={password}
                     onChange = {e => setPassword(e.target.value)}
                     />
                    
                    <button type = 'submit' onClick = {signIn}
                    className='login__signInButton'>Sign-In</
                    button>
                </form>
                <p>
                    By signing-in you agree to Amazon Clone Conditions of Use sale. Please see your Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}> Create your Amazon Account</button>
             </div>
        </div>
    )
}
export default Login
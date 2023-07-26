// Signup.js

import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passward, setPassward] = useState("");

    const navigate = useNavigate();

    const UserRegisterHandler = (e)=>{
        e.preventDefault();
        if(!name || !email || !passward){
            return alert("fill all fields");
        }

        if(window.localStorage.getItem("user") == undefined){
            window.localStorage.setItem("user",JSON.stringify([{name, email, passward}]))

        }else{
            window.localStorage.setItem("user",JSON.stringify([...JSON.parse(window.localStorage.getItem("user")), {name, email, passward}]))
        }
        navigate('/signin')

        // fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         username: 'kminchelle',
        //         password: '0lelplR',
        //     })
        //     // body: JSON.stringify({
        //     //     username: name,
        //     //     email: email,
        //     //     password: passward
        //     // })
        // })
        //     .then(res => res.json())
        //     .then(()=> {console.log("logd")});

        //     window.localStorage.setItem("key", "true");
        //     navigate('../menu')


    }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={(e)=>UserRegisterHandler(e)}>
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Full Name" required />
        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input onChange={(e)=> setPassward(e.target.value)} type="password" placeholder="Password" minLength={6} required />
        {/* <input type="password" placeholder="Confirm Password" minLength={6} required /> */}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/signin">Log in</a></p>
    </div>
  );
};

export default Signup;

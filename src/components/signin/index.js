// Signin.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Signin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassward, setUserPassward] = useState("");
    const [reload, setRelod] = useState(false);

    const navigate = useNavigate();


    // useEffect(() => {
    //     fetch('https://dummyjson.com/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({

    //             username: 'kminchelle',
    //             password: '0lelplR',
    //             // expiresInMins: 60, // optional
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(console.log);

    // })

    useEffect(()=>{

    },[reload])

    const SubmitHandler = (e)=>{
        
        if(!userEmail || !userPassward){
            return alert("Fill all fields!")
        }

        let userData = JSON.parse(window.localStorage.getItem("user"));
        console.log(userData)
        let c=0;
        userData.forEach(ele => {
            if(ele.email == userEmail && ele.passward == userPassward){
                window.localStorage.setItem("suser", JSON.stringify("present"));
                c = 1;
                return navigate('/');
            }
        });
       setRelod(!reload)

        c == 0 ? alert("Wrong email and passward") : navigate('/');

        // const user = await fetch("https://dummyjson.com/auth/login").then((res)=> res.json())
        // console.log(user, "user")
        // user.forEach(ele => {
        //     if(ele.email == userEmail && ele.password == userPassward){
        //         navigate('/menu');
        //     }
        // });
    }


    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={(e)=>SubmitHandler(e)}>
                <input onChange={(e)=> setUserEmail(e.target.value)} type="email" placeholder="Email" required />
                <input onChange={(e)=> setUserPassward(e.target.value)} type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default Signin;

import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Context = createContext();

const Signin = (props) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassward, setUserPassward] = useState("");
    const [user, setUser] = useState();

    const navigate = useNavigate();


    const SubmitHandler = async(e)=>{
        e.preventDefault();
        if(!userEmail || !userPassward){
            return alert("Fill all fields!")
        }

        const user = await fetch("http://localhost:5000/get-data").then((res)=> res.json())
        
        user.forEach(ele => {
            if(ele.email == userEmail && ele.password == userPassward){
                window.localStorage.setItem("user", "present");
                setUser(true);
                return navigate('/menu');
            }
        });
    }


    return (
<>
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={(e)=>SubmitHandler(e)}>
                <input onChange={(e)=> setUserEmail(e.target.value)} type="email" placeholder="Email" required />
                <input onChange={(e)=> setUserPassward(e.target.value)} type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>

        <Context.Provider value={user}>
            {props.children}
        </Context.Provider>
        </>
    );
};

export default Signin;

export {Context};


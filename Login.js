import React from 'react';
import "./Login.css";
import connect from "./images/connect.jpg";
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebasedb";

function Login() {
   const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result =>{
            console.log(result);
        })
   };

    return (
        <div className="Login">
            <div className="Login__logo">
                <img src={connect} alt="" style={{paddingTop:"5%",width:"350px",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
            </div>
        <Button type="submit" onClick={signIn} style={{marginBottom:"30%",display:"block",marginLeft:"auto",marginRight:"auto"}}>Sign in</Button>    
        </div>
    )
}

export default Login

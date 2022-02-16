import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [userName,setuserName]=useState();
    const [password,setpassword]=useState();
    const [error,seterror]=useState();
    const navigate= useNavigate();
    function useNameHandeler(e){
        setuserName(e.target.value)
    }
    function passwordHandeler(e){
        setpassword(e.target.value);
    }
    function clickHandler(e){
        e.preventDefault();
        if(!userName&&!password){
            seterror("Please enter User Name And Password ");

        }else if(!userName||!password){
            seterror("use valid");

        }else{
            navigate("/welcome")

        }
    }
  return (
    <>
    <form action="">
    <h1>Sing Up</h1>
    <input type="text" onChange={useNameHandeler}  value={userName}/>
    <input type="password" onChange={passwordHandeler}  value={password} />
    <button onClick={clickHandler}>Sign Up</button>
    </form>
    </>
  )
}

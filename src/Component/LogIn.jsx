import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signUpFormValidation } from "../utils/validation";

export const LogIn = () => {
  const [userName, setuserName] = useState();
  const [passWord, setpassWord] = useState();
  const [error, seterror] = useState({});
  const navigate = useNavigate();
  function clickHandeler(e) {
    e.preventDefault();
    if (!userName) {
      seterror({ userName: "invalide name" });
    }
    if (!passWord) {
      seterror({ ...userName, passWord: "Invalid Password" });
    } else {
      navigate("/welcome");
    }
  }
  function changeuser(e) {
    setuserName(e.target.value);
  }
  function chngepassword(e) {
    setpassWord(e.target.value);
  }

  return (
    <>
      <h1>Log In</h1>
      <form action="">
        <input type="text" onChange={changeuser} value={userName} />
        <p>{error.userName}</p>
        <input type="password" onChange={chngepassword} value={passWord} />
        <p>{error.passWord}</p>
        <button onClick={clickHandeler}>Log In</button>
      </form>
    </>
  );
};

import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Login = () => {
  const {setPassword,setEmail,handleSubmit,isLogin,isError} = useGlobalContext();
  return (
  <div className="form-signin m-auto col-md-4 text-center">
    {isLogin? <h1>Successfully Logged in </h1> :
      <form onSubmit={handleSubmit}>
        <h3 className="fw-dark heading">Welcome Back</h3>
        <p className="para">Sub-title text goes here</p>
        <div className="form-control-sm">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-control-sm mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button className="w-100 btn btn-md btn-dark login-btn" type="submit">
          Login
        </button>
        <div className="mt-2 mb-5">
          <div className="checkbox">
              <input className="m-1" id="formBasicCheckbox" type="checkbox" value="remember-me"/> 
            <label>
              Remember Password
            </label>
          </div>
          <a href="#" className="forget-pass">Forget Password?</a>
        </div>
      </form>}
      {isError && <p style={{textAlign: 'left'}}>Login Failed</p>}
    </div>
  );
};

export default Login;

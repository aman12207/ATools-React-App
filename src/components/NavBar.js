import React from "react";
import { useGlobalContext } from "../context";
import Logo from '../images/logo.png'

const NavBar = () => {
  const {isLogin,setLogin} = useGlobalContext()
  const handleLogout = (e) =>{
    if(e.target.innerHTML == 'Logout'){
      setLogin(false);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light p-0">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" width="135" height="45" className="d-inline-block align-text-top"/>
      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " style={{flexGrow:'0'}} id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <button type="button" className="btn btn-dark me-2 trial">Start Free Trial</button>
            <button onClick={(e)=>handleLogout(e)}  type="button" className="btn btn-success login">{isLogin ? 'Logout' : 'Login'}</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

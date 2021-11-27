import React from 'react';
import { Button } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css';


const Header = () => {
  const {user,logOut}=useAuth();
    return (
      
        <>
       
     <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="/home"><i class="fas fa-user-graduate"></i> Rased Academy</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contract">Contract</NavLink>
        </li>
       
        
      </ul>
      {
      user?.email?
      <img style={{borderRadius:`50%`, height:`35px` }}src={user?.photoURL} alt="" />:
      <NavLink to="/login"className="btn-style"><i class="fas fa-user-circle"></i> log in</NavLink>
      
    }
  <strong className="mx-1">{user?.displayName} </strong>
      {user?.email?

      <Button onClick={logOut} className="text-white"><i class="fas fa-sign-out-alt"></i> logOut</Button>:
        <  NavLink to="/registration" className="btn-style"><i className="fas fa-users "></i> Register</NavLink>
    
      
    }
      
     
    
     
    </div>
    
  </div>
  
</nav>


</>
        
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';



const Header = () => {
    
    const {user , logOut}= useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
              <Link to ="/home">Home</Link>
              </li>
              <li className="nav-item mx-3">
              <Link to ="/about">About</Link>
              </li>
              <li className="nav-item mx-3">
              <Link to ="/services">Services</Link>
              </li>
              <li className="nav-item mx-3">
              <Link to ="/private-one">My Private 1</Link>
              </li>
              <li className="nav-item mx-3">
              <Link to ="/private-two">My private 2</Link>
              </li>

              {

                user.email ? 
                <button onClick={logOut}> Sign Out</button>
                :
                <li className="nav-item mx-3">
                <Link to ="/login">Login</Link>
                </li>
              }
             <p>Name: {user?.displayName}</p>
             </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
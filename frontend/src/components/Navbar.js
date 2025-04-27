import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/" className="logo-link">KrishiKare</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/insurance">Insurance</Link></li>
      <li><Link to="/rentals">Rentals</Link></li> 
      <li>About</li>
    </ul>
    <div className="nav-auth">
    <Link to="/signin">
    <button className="sign-in">Sign In</button>
    </Link>
    <Link to="/register">
      <button className="register">Register</button>
      </Link>
    </div>
  </nav>
);

export default Navbar;

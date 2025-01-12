import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">BookVerse </Link>
        </div>

        {/* Dynamically add the 'active' class based on menuOpen */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Toggle menu on click */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;

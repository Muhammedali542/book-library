import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="#">Mohamed Ali</a>
        </div>

        {/* Dynamically add the 'active' class based on menuOpen */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
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

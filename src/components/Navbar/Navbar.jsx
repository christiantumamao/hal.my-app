import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["home", "service", "about", "pricing", "contact"];

  
  const handleScroll = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>
            <i className="fas fa-dumbbell"></i> F3 Zone
          </h1>
        </div>

        <div className="navbar-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="navbar-toggle">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

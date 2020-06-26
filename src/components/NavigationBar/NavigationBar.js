import React from "react";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <nav className="navbar">
      <a className="logo">logo</a>
      <ul className="main-nav">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Blog
          </a>
        </li>{" "}
      </ul>
    </nav>
  );
}

export default NavigationBar;

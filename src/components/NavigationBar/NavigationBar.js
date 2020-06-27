import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

import "./NavigationBar.scss";
function NavigationBar() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <nav className="navigationBar">
      <NavLink
        to="/"
        activeClassName="active"
        className={theme === "primary" ? "primaryColor" : "secondaryColor"}
      >
        Todo App
      </NavLink>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className={theme === "primary" ? "primaryColor" : "secondaryColor"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            activeClassName="active"
            className={theme === "primary" ? "primaryColor" : "secondaryColor"}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            activeClassName="active"
            className={theme === "primary" ? "primaryColor" : "secondaryColor"}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

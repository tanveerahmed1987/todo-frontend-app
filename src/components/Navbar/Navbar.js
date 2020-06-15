import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  console.log(styles);
  return (
    <ul className={styles.topnav}>
      <li>
        <NavLink to="/" exact activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName={styles.active}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName={styles.active}>
          Contact
        </NavLink>
      </li>
      <li className="right">
        <NavLink to="/login" activeClassName={styles.active}>
          Login
        </NavLink>
      </li>
      <li className="right">
        <NavLink to="/register" activeClassName={styles.active}>
          Register
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;

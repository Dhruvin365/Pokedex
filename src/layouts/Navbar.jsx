import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : styles.inActivePage;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokedex"
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : styles.inActivePage;
            }}
          >
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : styles.inActivePage;
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactRow"
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : styles.inActivePage;
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

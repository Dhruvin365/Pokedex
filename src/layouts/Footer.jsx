import React from "react";
import styles from "../styles/layouts/footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; Copyright 2024. All rights Reserved.</p>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/PrivacyPolicy"
            className={({ isActive }) => {
              console.log("isActive", isActive);
              return isActive ? styles.activePage : styles.inActivePage;
            }}
          >
            Privacy Policy
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

export default Footer;

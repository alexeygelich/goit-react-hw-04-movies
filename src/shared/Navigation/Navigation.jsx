import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routers.js";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <ul className={styles.NavigationList}>
    <li>
      <NavLink exact to={routes.home} className={styles.NavigationLink} activeClassName={styles.NavigationLinkActive}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.movies} className={styles.NavigationLink} activeClassName={styles.NavigationLinkActive}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;

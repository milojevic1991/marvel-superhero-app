import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navBar.module.css";
import logoMarvel from "../../assets/Images/Marvel-nav.png";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className={classes.imgLogo}>
          <img src={logoMarvel}></img>{" "}
        </div>
        <ul>
          <NavLink className={classes.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={classes.navLink} to="/">
            Home
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

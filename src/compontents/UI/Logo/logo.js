import React from "react";
import logoMarvel from "../../../assets/Images/Marvel-Logo.png";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logoMarvel}>
      <img src={logoMarvel} alt="Marvel Logo"></img>
    </div>
  );
};

export default Logo;

import React from "react";
import classes from "./heroItem.module.css";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const HeroItem = ({ heroImg, heroName, heroDesc, clickProp }) => {
  return (
    <div className={classes.heroItemWrapper}>
      <div className={classes.heroItemContent}>
        <img alt="Marvel-Hero-Img" src={heroImg}></img>
        <h1>{heroName}</h1>
        <p>{heroDesc}</p>
        <AnimatePresence>
          <Link onClick={() => clickProp()} to="/hero">
            {" "}
            Read more..
          </Link>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroItem;

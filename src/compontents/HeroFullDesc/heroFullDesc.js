import React from "react";
import classes from "./heroFullDesc.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HeroFullDesc = () => {
  const state = useSelector((state) => state.marvelSingleHero);

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };
  const heroFullDesc = state.map((marvelHero, index) => {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div key={index} className={classes.heroFullWrapp}>
          <header>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                left: "20px",
                top: "20px",
                textDecoration: "none",
                fontSize: "20px",
              }}
              to="/"
            >
              ...GO BACK
            </NavLink>
            <h1>{marvelHero.name}</h1>
            <div className={classes.heroHeaderImg}>
              <img alt='HeroImg' src={marvelHero.thumbnail + ".jpg"}></img>
            </div>
          </header>
          <section className={classes.heroFullDescWrapper}>
            <p>{marvelHero.description} </p>
            <div className={classes.heroFullDescInfo}>
              <div className={classes.heroFullDescInfoNumbers}>
                <h1>Comics</h1>
                <h3>{marvelHero.comics}</h3>
              </div>
              <div className={classes.heroFullDescInfoNumbers}>
                <h1>Comics</h1>
                <h3>{marvelHero.series}</h3>
              </div>
              <div className={classes.heroFullDescInfoNumbers}>
                <h1>Comics</h1>
                <h3>{marvelHero.stories}</h3>
              </div>
            </div>

            <a href={marvelHero.urls[0]}>Overview</a>
          </section>
        </div>
      </motion.div>
    );
  });

  return <>{heroFullDesc}</>;
};

export default HeroFullDesc;

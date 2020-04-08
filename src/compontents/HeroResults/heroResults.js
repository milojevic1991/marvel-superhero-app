import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HeroItem from "../HeroItem/heroItem";
import classes from "./heroResults.module.css";
import { MagicSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

import * as actions from "../../store/actions/actions";

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

const HeroResults = () => {
  const marvelCharState = useSelector((state) => state.marvelCharData);
  const loading = useSelector((state) => state.loading);
  const inputLength = useSelector((state) => state.inputLength);
  const dispatch = useDispatch();

  let loadingCircle, errorResult;

  if (loading) {
    loadingCircle = (
      <div
        style={{
          position: "absolute",
          top: "-65px",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <MagicSpinner size={95} color={"#c3000a"} />{" "}
      </div>
    );
  } else {
    loadingCircle = null;
  }

  if (inputLength.length > 1 && marvelCharState.length === 0) {
    errorResult = (
      <h1
        style={{
          color: "white",
          fontFamily: "Marvel",
          margin: "0 auto",
          fontSize: "20px",
        }}
      >
        ...Our spider sense not tingling at the moment. Try different name.
      </h1>
    );
  } else {
    errorResult = "";
  }

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className={classes.heroResultsWrapper} id="heroResults">
        {loadingCircle}

        {errorResult}

        {marvelCharState.map((el, index) => {
          return (
            <HeroItem
              key={index}
              heroImg={el.thumbnail.path + ".jpg"}
              heroName={el.name}
              heroDesc={el.description}
              clickProp={() => dispatch(actions.readMoreBtnHandler(el.id))}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroResults;

import React from "react";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/actions";
import classes from "./search.module.css";

const Search = () => {
  const stateSearchParam = useSelector((state) => state.searchParam);
  const dispatch = useDispatch();

  const searchEvent = (e) => {
    const param = e.target.value;
    dispatch(actions.fetchData(param));
    dispatch(actions.searchInputHandler(param));
  };

  return (
    <div className={classes.inputSearch}>
      <form>
        <input
          onChange={searchEvent}
          type="text"
          value={stateSearchParam}
          placeholder="Find your superhero..."
        ></input>
      </form>
    </div>
  );
};

export default Search;

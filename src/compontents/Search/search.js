import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/actions";

const Search = () => {


  const stateSearchParam = useSelector((state) => state.searchParam);
  const dispatch = useDispatch();

  const searchEvent = (e) => {
    const param = e.target.value;
    dispatch(actions.fetchData(param));
    dispatch(actions.searchInputHandler(param))
  };


//   const sumbit = (e) => {

//    dispatch(actions.fetchData());
//      e.preventDefault();
//   }
  return (
    <>
      <div>MARVEL</div>
      <form>
        <input
          onChange={searchEvent}
          type="text"
          value={stateSearchParam}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Search;

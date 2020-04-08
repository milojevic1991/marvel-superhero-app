import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Logo from "./compontents/UI/Logo/logo";
import Search from "./compontents/Search/search";
import HeroResults from "./compontents/HeroResults/heroResults";
import HeroFullDesc from "./compontents/HeroFullDesc/heroFullDesc";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

function App() {
  const state = useSelector((state) => state.marvelCharData);

  useEffect(() => {
    if (state.length > 0) {
      const element = document.getElementById("heroResults");
      console.log("element", element);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <BrowserRouter>
      <div className="App">
      {/* Personal info */}
      <h3 className='who'>by Nemanja M.</h3>
      <a href="https://github.com/milojevic1991"><i class="fi-xnsuxl-github-alt"></i></a>
      <a href="https://www.linkedin.com/in/nemanjamilojevic1991/"><i class="fi-xnsuxl-linkedin"></i></a>
        <Logo />
        <Route exact path="/">
          <Search />
          <HeroResults />
        </Route>

        <Route exact path="/hero">
          <HeroFullDesc />
        </Route>

        <ScrollIntoViewIfNeeded>
          <div>Hello</div>
        </ScrollIntoViewIfNeeded>

      </div>
    </BrowserRouter>
  );
}

export default App;

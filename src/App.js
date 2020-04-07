import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import Logo from './compontents/UI/Logo/logo';

import Search from './compontents/Search/search';

import HeroResults from './compontents/HeroResults/heroResults';
import HeroFullDesc from './compontents/HeroFullDesc/heroFullDesc';


function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
        <Logo/>
        
        <Route exact path="/">
        <Search/>
         <HeroResults/>
        </Route>
        <Route exact path="/hero">
         <HeroFullDesc/>
        </Route>


    </div>
    </BrowserRouter>
  );
}

export default App;

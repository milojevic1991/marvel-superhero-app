import React from 'react';
import './App.css';
import axios from 'axios';
import api from './Api/api';
import Logo from './compontents/UI/Logo/logo';

import Search from './compontents/Search/search';

import HeroResults from './compontents/HeroResults/heroResults';

function App() {
  
 
  // const md5 = require('md5');
  // const ts = Date.now();
  // console.log(ts);
  // const publicKey = 'eb734a2de53d4806a8f666bd61276371';
  // const privateKey = 'c88575644d46effece0b0d3555d3fed3617225aa';
  // const hash = md5(ts+publicKey+privateKey);
  // // console.log(hash);

  // // const name = 'spider'
  
  
  // const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hulk&apikey=${publicKey}&hash=${hash}`
 



  // axios.get(url).then((response) => {
  //   console.log(response.data.data.results);
  // })

  
  // console.log(ts);
  



  return (
    <div className="App">

      <Logo/>
      <Search/>
      <HeroResults/>
    </div>
  );
}

export default App;

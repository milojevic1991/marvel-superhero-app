import React from 'react';
import axios from 'axios';

const api = () => {

   const md5 = require('md5');
   const ts = Date.now();
   const publicKey = 'eb734a2de53d4806a8f666bd61276371';
   const privateKey = 'c88575644d46effece0b0d3555d3fed3617225aa';
   const hash = md5(ts+publicKey+privateKey);

   const name = 'spider';

   const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hulk&apikey=${publicKey}&hash=${hash}`
   
   return  axios.get(url).then(response => response);
  
};

export default api;
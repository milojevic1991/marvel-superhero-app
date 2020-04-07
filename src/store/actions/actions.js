import * as actionType from './actionType';
import axios from 'axios';



export const searchInputHandler = (searchParam) => {
   return{
      type:actionType.SEARCH_INPUT,
      payload: searchParam
   }
}


export const fetchData = (searchParam) => {
    
   return dispatch => {
      dispatch(fetchStart());
      
      //Data for fetching Marvel api
      const md5 = require('md5');
      const ts = Date.now();
      console.log('fetcuje-u action sam prolzim');
      const publicKey = 'eb734a2de53d4806a8f666bd61276371';
      const privateKey = 'c88575644d46effece0b0d3555d3fed3617225aa';
      const hash = md5(ts+publicKey+privateKey);

      const inputName = searchParam;

      if (inputName.length === 0) {
         dispatch(fetchEmptyState());
      }
      else{
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputName}&apikey=${publicKey}&hash=${hash}`
            console.log('url fetch',url);
         axios.get(url)
         .then((response) => {
            // console.log('response',response);
           dispatch(fetchSuccess(response.data.data.results,inputName));
          })
          .catch(error =>{
               dispatch(fetchError(error));
          })

         }
     






      
   }
}

export const fetchSuccess = (data,inputLength) => {
   return{
      type:actionType.FETCH_SUCCESS,
      payload: {
         ...data
      },
      inputLength:inputLength
   }
}

export const fetchStart = () => {

  return{
     type:actionType.FETCH_START
  }
   
}

export const fetchError = (error) => {

   return{
      type:actionType.FETCH_ERROR,
      payload: {
         error
      }
   }
    
 }

 export const fetchEmptyState = () => {

   return{
      type:actionType.FETCH_EMPTY_STATE,
     
   }
    
 }

 export const readMoreBtnHandler = (id) => {

   return{
      type:actionType.READ_MORE_BTN_HANDLER,
     payload:id
   }
    
 }
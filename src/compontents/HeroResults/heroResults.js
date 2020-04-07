import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import HeroItem from '../HeroItem/heroItem';
import classes from './heroResults.module.css';
import { MagicSpinner } from "react-spinners-kit";

import * as actions from "../../store/actions/actions";



const HeroResults = () => {

   const marvelCharState = useSelector(state => state.marvelCharData);
   const loading = useSelector(state => state.loading);
   const inputLength = useSelector(state => state.inputLength);
   const dispatch = useDispatch();
   
   let loadingCircle,
   errorResult;
   
   if (loading  ) {
      loadingCircle =     <div style ={{position:'absolute', top:'-65px',left:'50%',transform:'translate(-50%, 50%)'}}>  <MagicSpinner size={95} color={'#c3000a'} /> </div>
   }
   else{
      loadingCircle =null;
   }

   if (inputLength.length>1 && marvelCharState.length ===0) {
      errorResult = <h1 style={{color:'white',fontFamily:'Marvel', margin:'0 auto',fontSize:'20px' }}>...Our spider sense not tingling at the moment. Try different name.</h1>
   }
   else{
      errorResult='';
   }





   // const clickTest =(id) => {

   //    console.log('id proppp',id);
   // }

   return (
      <div className={classes.heroResultsWrapper}>
         {loadingCircle}
     
      
         {errorResult}
    
        { marvelCharState.map((el) => {

         return  <HeroItem
           heroImg={el.thumbnail.path + '.jpg'}
           heroName={el.name}
           heroDesc={el.description}
           clickProp={()=> dispatch(actions.readMoreBtnHandler(el.id))}
           />

           
        }) }
        
      </div>
   );
};

export default HeroResults;
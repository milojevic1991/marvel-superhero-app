import React from 'react';
import {useSelector} from 'react-redux';
import HeroItem from '../HeroItem/heroItem';
import classes from './heroResults.module.css';
import { MagicSpinner } from "react-spinners-kit";


const HeroResults = () => {

   const marvelCharState = useSelector(state => state.marvelCharData);
   const loading = useSelector(state => state.loading);
   let loadingCircle;
   
   if (loading) {
      loadingCircle =     <div style ={{position:'absolute', top:'-65px',left:'50%',transform:'translate(-50%, 50%)'}}>  <MagicSpinner size={95} color={'#aa0002'} /> </div>
   }
   else{
      loadingCircle =null;
   }

   return (
      <div className={classes.heroResultsWrapper}>
      
      {loadingCircle}
  
    
        {marvelCharState.map((el) => {

         return  <HeroItem
           heroImg={el.thumbnail.path + '.jpg'}
           heroName={el.name}
           heroDesc={el.description}
           />

           
        })}
        
      </div>
   );
};

export default HeroResults;
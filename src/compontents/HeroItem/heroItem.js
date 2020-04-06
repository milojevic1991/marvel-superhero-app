import React from 'react';
import classes from './heroItem.module.css';

const HeroItem = ({heroImg,heroName,heroDesc}) => {
   return (
      <div className={classes.heroItemWrapper}>
         <div className={classes.heroItemContent}>

         <img alt='Marvel-Hero-Img' src={heroImg}></img>
         <h1>{heroName}</h1>
         <p>{heroDesc}</p>
         <a href="/">Read more..</a>
         </div>
      </div>
   );
};

export default HeroItem;
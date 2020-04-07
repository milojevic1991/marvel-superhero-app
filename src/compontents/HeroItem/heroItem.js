import React from 'react';
import classes from './heroItem.module.css';
import {Link} from 'react-router-dom';

const HeroItem = ({heroImg,heroName,heroDesc,clickProp}) => {


   // const clickTest=(e) => {
   //    console.log('klik');
      
   // }
   return (
      <div className={classes.heroItemWrapper}>
         <div className={classes.heroItemContent}>

         <img alt='Marvel-Hero-Img' src={heroImg}></img>
         <h1>{heroName}</h1>
         <p>{heroDesc}</p>
         <Link onClick={()=>clickProp()} to="/hero"> Read more..</Link>
         </div>
      </div>
   );
};

export default HeroItem;
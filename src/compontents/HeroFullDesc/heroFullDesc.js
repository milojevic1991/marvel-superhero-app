import React,{useEffect} from 'react';
import classes from './heroFullDesc.module.css';
import {useSelector} from 'react-redux';
import {NavLink } from 'react-router-dom';

const HeroFullDesc = () => {
  
  const state = useSelector(state=> state.marvelSingleHero);


  
  const heroFullDesc = state.map(marvelHero => {

     return ( <div className={classes.heroFullWrapp}>
      <header>
      <NavLink 
      activeStyle={{
         fontWeight: "bold",
         color: "white",
         position:'absolute',
         left:'20px',
         top:'20px',
         textDecoration:'none',
         fontSize:'20px'

       }}
      to="/">...GO BACK</NavLink >
       <h1>{marvelHero.name}</h1>
           <div className={classes.heroHeaderImg} ><img src ={marvelHero.thumbnail +'.jpg'}></img></div>
      </header>
      <section className={classes.heroFullDescWrapper}>
         <p>
         {marvelHero.description} </p>
         <div className={classes.heroFullDescInfo} >
            
            <div className={classes.heroFullDescInfoNumbers}  >
               <h1>Comics</h1>
               <h3>{marvelHero.comics}</h3>
            </div>
            <div className={classes.heroFullDescInfoNumbers} >
            <h1>Comics</h1>
               <h3>{marvelHero.series}</h3>
            </div>
            <div className={classes.heroFullDescInfoNumbers} >
            <h1>Comics</h1>
               <h3>{marvelHero.stories}</h3>
            </div>
         </div>

         <a href={marvelHero.urls[0]}>Overview</a>
      </section>
   </div>
     )
  

   })


  
return (
   <>

   {heroFullDesc}
   </>
   );
};

export default HeroFullDesc;
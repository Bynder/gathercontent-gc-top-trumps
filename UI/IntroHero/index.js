import React from 'react';
import introStyles from './introHero.module.css';

export function IntroHero () {
   return (
      <div className={introStyles.intro}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input type="text" placeholder="ENTER A NAME" className={introStyles.nameInput} />
         <button className={introStyles.button}>
            <span className={introStyles.buttonBorder} />
            GET JAMMIN'
         </button>
      </div>
   )
}

import React from 'react';
import introStyles from './introHero.module.css';
import {Button} from "../Button";

export function IntroHero () {
   return (
      <div className={introStyles.intro}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input type="text" placeholder="ENTER A NAME" className={introStyles.nameInput} />
         <Button text="GET JAMMIN'" />
      </div>
   )
}

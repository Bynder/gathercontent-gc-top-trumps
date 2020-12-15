import React from 'react';
import introStyles from './introHero.module.css';
import {Button} from "../Button";
import {USER_TURN} from "../Home";

export function IntroHero({setPage, setName, name, startGame}) {
   return (
      <div className={introStyles.intro}>
         <span className={introStyles.logo}/>
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input onChange={(event) => setName(event.target.value)} value={name} type="text"
                placeholder="ENTER A NAME" className={introStyles.nameInput}/>
         <Button disabled={!name} onClick={() => {
            setPage(USER_TURN);
            startGame();
         }} text="GET JAMMIN!"/>
      </div>
   )
}

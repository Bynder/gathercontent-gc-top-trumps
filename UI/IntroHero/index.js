import React from 'react';
import introStyles from './introHero.module.css';
import {Button} from "../Button";
import {USER_TURN} from "../Home";
import { Helmet } from "react-helmet";

export function IntroHero({setPage, setName, name, startGame}) {
   return (
      <div className={introStyles.intro}>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Welcome to GC Top Trumps - please enter your name </title>
            <link rel="canonical" href="http://mysite.com/example" />
            <html lang="en" />
         </Helmet>
         <span className={introStyles.logo}/>
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <label>
            Enter your name:
            <input onChange={(event) => setName(event.target.value)} value={name} type="text"
                        placeholder="ENTER A NAME" className={introStyles.nameInput}/>
         </label>
         <Button disabled={!name} onClick={() => {
            setPage(USER_TURN);
            startGame();
         }} text="GET JAMMIN!"/>
      </div>
   )
}

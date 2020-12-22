import React, {useEffect} from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import {FinalScore} from "../../UI/FinalScore";
import {Button} from "../../UI/Button";
import {navigate} from "gatsby";

export default function Results({location}) {

   useEffect(() => {
      document.addEventListener('keydown', handleEnter, false);
      return () => document.removeEventListener('keydown', handleEnter)
   }, []);

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         navigate("/game")
      }
   }

   return (
      <div className={introStyles.container}>
         <FinalScore won={location.state?.won} totalRounds={location.state?.turnCount}
                     totalWins={location.state?.roundsWon} timeElapsed={location.state?.timeElapsed}
         />
      </div>
   )
}

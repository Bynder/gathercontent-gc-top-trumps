import React from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import {FinalScore} from "../../UI/FinalScore";

export default function Results({location}) {
   console.log(location.state)

   const timeElapsed = location.state.timeElapsed

   const minutes =
      Math.floor(timeElapsed / 60) < 10
         ? `0${Math.floor(timeElapsed / 60)}`
         : Math.floor(timeElapsed / 60)

   const seconds =
      Math.floor(timeElapsed % 60) < 10
         ? `0${Math.floor(timeElapsed % 60)}`
         : Math.floor(timeElapsed % 60)

   return (
      <div className={introStyles.container}>
         <FinalScore outcome={location.state.outcome} totalRounds={location.state.turnCount}
                     totalWins={location.state.roundsWon} minutes={minutes} seconds={seconds}
         />
      </div>
   )
}

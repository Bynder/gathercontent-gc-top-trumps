import React from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import {FinalScore} from "../../UI/FinalScore";
import {Button} from "../../UI/Button";
import {navigate} from "gatsby";

export default function Results({location}) {
   return (
      <div className={introStyles.container}>
         <FinalScore won={location.state.won} totalRounds={location.state.turnCount}
                     totalWins={location.state.roundsWon} timeElapsed={location.state.timeElapsed}
         />

         <Button onClick={() =>  navigate("/game")}>Play Again</Button>
      </div>
   )
}

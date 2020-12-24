import React, { useContext, useEffect } from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import { FinalScore } from "../../UI/FinalScore"
import { navigate } from "gatsby"
import { AudioContext } from '../context/AudioContext';

export default function Results({ location }) {
   const {playGameWin, playGameLoose} = useContext(AudioContext);

   useEffect(() => {
      location.state?.won ? playGameWin() : playGameLoose();

      document.addEventListener("keydown", handleEnter, false)
      return () => document.removeEventListener("keydown", handleEnter)
   }, [])

   const handleEnter = e => {
      if (e.key === "Enter") {
         navigate("/game")
      }
   }

   return (
      <div className={introStyles.container}>
         <FinalScore
            won={location.state?.won}
            totalRounds={location.state?.turnCount}
            totalWins={location.state?.roundsWon}
            timeElapsed={location.state?.timeElapsed}
            playAgainHandler={() =>  navigate("/game")}
         />
      </div>
   )
}

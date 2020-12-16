import React, {useState} from "react"
import {ResultCard} from "../ResultCard"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {PLAYER_USER} from "../../src/pages/game";


export function Result({
                          computerName,
                          usersTurnCard,
                          computersTurnCard,
                          selectedAttribute,
                          incrementTurnCount,
                          winner,
                       }) {

   const playerWon = () => {
      return winner === PLAYER_USER
   }

   return (
      <div>

         <h1>You</h1>
         <ResultCard
            name={usersTurnCard.name}
            description={usersTurnCard.cardDescription}
            attributes={GetAttributesFromCard(usersTurnCard)}
            selectedAttribute={selectedAttribute}
            winner={playerWon}
         />
         <h1>{computerName}</h1>

         <ResultCard
            name={computersTurnCard.name}
            description={computersTurnCard.cardDescription}
            attributes={GetAttributesFromCard(computersTurnCard)}
            selectedAttribute={selectedAttribute}
            winner={!playerWon}
         />

         <button onClick={() => incrementTurnCount()}>Next Round</button>

         <div>Round {playerWon() ? 'Won' : 'Lost'}!</div>
      </div>
   )
}

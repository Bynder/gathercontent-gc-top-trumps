import React from "react"
import resultStyles from "./result.module.css"
import { GetAttributesFromCard } from "../../src/utils/helpers"
import { PLAYER_USER } from "../../src/pages/game"
import { Card } from "../Card"
import { Button } from "../Button"

export function Result({
   usersTurnCard,
   computersTurnCard,
   selectedAttribute,
   incrementTurnCount,
   winner,
}) {
   const playerWon = winner === PLAYER_USER

   return (
      <div>
         <div className={resultStyles.resultContainer}>
            <div className={resultStyles.result}>
               <h1>You</h1>
               <Card hasPlayerWon={playerWon}>
                  <Card.Image name={usersTurnCard.name} />
                  <Card.Description description={usersTurnCard.cardDescription} />
                  <Card.AttributeList
                     attributes={GetAttributesFromCard(usersTurnCard)}
                     selectedAttribute={selectedAttribute}
                     hasPlayerWon={playerWon}
                  />
               </Card>
            </div>

            <div className={resultStyles.result}>
               <h1>Computer</h1>

               <Card hasPlayerWon={!playerWon}>
                  <Card.Image name={computersTurnCard.name} />
                  <Card.Description description={computersTurnCard.cardDescription} />
                  <Card.AttributeList
                     attributes={GetAttributesFromCard(computersTurnCard)}
                     selectedAttribute={selectedAttribute}
                     hasPlayerWon={!playerWon}
                  />
               </Card>
            </div>
            <Button
               text="Next Round"
               className={resultStyles.button}
               onClick={() => incrementTurnCount()}
            >
               Next Round
            </Button>
         </div>

         <div>Round {playerWon ? "Won" : "Lost"}!</div>
      </div>
   )
}

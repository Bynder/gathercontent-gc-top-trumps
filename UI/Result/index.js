import React, {useEffect} from "react"
import resultStyles from "./result.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {PLAYER_COMPUTER, PLAYER_USER} from "../../src/pages/game"
import {Card} from "../Card"
import {Button} from "../Button"

export function Result({
                          computerName,
                          usersTurnCard,
                          computersTurnCard,
                          selectedAttribute,
                          incrementTurnCount,
                          winner,
                       }) {

   let message = 'Draw';

   if (winner === PLAYER_USER) {
      message = 'Round Won!!';
   }
   if (winner === PLAYER_COMPUTER) {
      message = 'Round Lost!!';
   }

   useEffect(() => {
      document.addEventListener('keydown', handleEnter, false);
      return () => document.removeEventListener('keydown', handleEnter)
   }, []);

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         incrementTurnCount()
      }
   }


   return (
      <div>
         <div className={resultStyles.resultContainer}>
            <div className={resultStyles.result}>
               <h1>You</h1>
               <Card hasPlayerWon={winner === PLAYER_USER}>
                  <Card.Image name={usersTurnCard.name} mugShotUrl={usersTurnCard.mugshot} altText={usersTurnCard.mugshotAltText} />
                  <Card.Description description={usersTurnCard.cardDescription}/>
                  <Card.AttributeList
                     attributes={GetAttributesFromCard(usersTurnCard)}
                     selectedAttribute={selectedAttribute}
                     hasPlayerWon={winner === PLAYER_USER}
                  />
               </Card>
            </div>

            <div className={resultStyles.result}>
               <h1>{computerName}</h1>

               <Card hasPlayerWon={winner === PLAYER_COMPUTER}>
                  <Card.Image name={computersTurnCard.name} mugShotUrl={computersTurnCard.mugshot} altText={computersTurnCard.mugshotAltText} />
                  <Card.Description description={computersTurnCard.cardDescription}/>
                  <Card.AttributeList
                     attributes={GetAttributesFromCard(computersTurnCard)}
                     selectedAttribute={selectedAttribute}
                     hasPlayerWon={winner === PLAYER_COMPUTER}
                  />
               </Card>
            </div>
         </div>

         <div className={resultStyles.resultsFooter}>
            <Button
               text="Next Round"
               className={resultStyles.button}
               onClick={() => incrementTurnCount()}
            >
               Next Round
            </Button>
         </div>
         <div>{message}</div>
      </div>
   )
}

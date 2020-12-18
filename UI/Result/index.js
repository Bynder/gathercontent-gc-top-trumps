import React from "react"
import resultStyles from "./result.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {Card} from "../Card"
import {Button} from "../Button"
import { StarSmall } from '../Icons';

const PLAYER_USER = 'PLAYER_USER';
const PLAYER_COMPUTER = 'PLAYER_COMPUTER';
export function Result({
                          computerName,
                          usersTurnCard,
                          computersTurnCard,
                          selectedAttribute,
                          incrementTurnCount,
                          winner,
                       }) {

   const playerWon = winner === PLAYER_USER

   let message = 'Draw';

   if (winner === PLAYER_USER) {
      message = 'Round Won!!';
   }
   if (winner === PLAYER_COMPUTER) {
      message = 'Round Lost!!';
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

export function RoundWon () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.roundWon}`}>
         <span>Round won!</span>
         <StarSmall style={{position: 'absolute', width: '8px', top: '75px', left: '-10px', transform: 'rotate(50deg)'}} />
         <StarSmall style={{position: 'absolute', width: '16px', top: '60px', left: '-20px', transform: 'rotate(50deg)'}} />
         <StarSmall style={{position: 'absolute', width: '8px', top: '-20px', right: '-30px'}} />
         <StarSmall style={{position: 'absolute', width: '16px', top: '-30px', right: '-15px'}} />
      </span>
   );
}

export function RoundLost () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.roundLost}`}>
         <span>Round lost!</span>
      </span>
   );
}

export function Draw () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.draw}`}>
         <span>Draw!</span>
      </span>
   );
}

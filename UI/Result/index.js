import React, {useState} from "react"
import {ResultCard} from "../ResultCard"
import {GetAttributesFromCard} from "../../src/utils/helpers"

export function Result({usersTurnCard, computersTurnCard, selectedAttribute, incrementTurnCount}) {

   return (
      <div>
         <h1>You</h1>
         <ResultCard
            name={usersTurnCard.name}
            description={usersTurnCard.cardDescription}
            attributes={GetAttributesFromCard(usersTurnCard)}
            selectedAttribute={selectedAttribute}
         />
         <h1>Computer</h1>
         <ResultCard
            name={computersTurnCard.name}
            description={computersTurnCard.cardDescription}
            attributes={GetAttributesFromCard(computersTurnCard)}
            selectedAttribute={selectedAttribute}
         />

         <button onClick={() => incrementTurnCount()}>Next Round</button>
      </div>
   )
}

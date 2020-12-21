import React from "react"
import { WaitingCard } from "../WaitingCard"
import { animated } from "react-spring"
import { Card } from "../Card"
import { GetAttributesFromCard } from "../../src/utils/helpers"

export function ComputersTurn({
   name,
   animationStyle,
   loadingLabel,
   playerWon,
   computersTurnCard,
   selectedAttribute,
   isLoading,
}) {
   return (
      <animated.div style={animationStyle}>
         <h1>{name}</h1>
         {isLoading ? (
            <WaitingCard label={loadingLabel} />
         ) : (
            <Card hasPlayerWon={playerWon}>
               <Card.Image name={computersTurnCard.name} mugShotUrl={computersTurnCard.mugshot} altText={computersTurnCard.mugshotAltText}/>
               <Card.Description description={computersTurnCard.cardDescription} />
               <Card.AttributeList
                  attributes={GetAttributesFromCard(computersTurnCard)}
                  selectedAttribute={selectedAttribute}
                  hasPlayerWon={playerWon}
               />
            </Card>
         )}
      </animated.div>
   )
}

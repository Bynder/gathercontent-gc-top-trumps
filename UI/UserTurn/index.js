import React, { useState } from "react"
import userTurnStyles from "./userTurn.module.css"
import { GetAttributesFromCard } from "../../src/utils/helpers"
import { ChooseYourJamStat } from "../ChooseYourJamStat"
import { Card } from "../Card"
import { Button } from "../Button"
import { animated } from "react-spring"

export function UserTurn({
   card: { name, cardDescription, mugshot, mugshotAltText },
   card,
   takeTurn,
   animationStyle,
   playerWon,
   showButton,
   selectedAttribute,
   setSelectedAttribute,
   isResults
}) {
   return (
      <animated.div style={animationStyle}>
         <h1>You</h1>
         {!isResults && <ChooseYourJamStat />}
         <Card hasPlayerWon={playerWon}>
            <Card.Image name={name} mugShotUrl={mugshot} altText={mugshotAltText} />
            <Card.Description description={cardDescription} />
            <Card.AttributeList
               attributes={GetAttributesFromCard(card)}
               selectedAttribute={selectedAttribute}
               onSelectAttribute={setSelectedAttribute}
               hasPlayerWon={playerWon}
               isInteractive={!isResults}
            />
         </Card>

         {showButton && (
            <div className={userTurnStyles.button}>
               <Button disabled={!selectedAttribute} onClick={() => takeTurn(selectedAttribute)}>
                  Slam It!
               </Button>
            </div>
         )}
      </animated.div>
   )
}

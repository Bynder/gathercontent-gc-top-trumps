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

   const attributes = GetAttributesFromCard(card);

   const handleNumbers = (e) => {
      if ([1, 2, 3, 4, 5].includes(parseInt(e.key))) {
         setSelectedAttribute(attributes[e.key - 1].description)
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', handleNumbers, false);
      return () => document.removeEventListener('keydown', handleNumbers)
   }, []);

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         slamJams(selectedAttribute)
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', handleEnter, false);
      return () => document.removeEventListener('keydown', handleEnter)
   }, [selectedAttribute]);


   return (
      <animated.div style={animationStyle}>
         <h1>You</h1>
         {!isResults && <ChooseYourJamStat />}
         <Card hasPlayerWon={playerWon}>
            <Card.Image name={name} mugShotUrl={mugshot} altText={mugshotAltText} />
            <Card.Description description={cardDescription} />
            <Card.AttributeList
               attributes={attributes}
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

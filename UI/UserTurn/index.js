import React, {useEffect, useState} from "react"
import userTurnStyles from "./userTurn.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {ChooseYourJamStat} from "../ChooseYourJamStat"
import {Card} from "../Card"
import {Button} from "../Button"
import {animated} from "react-spring"

export function UserTurn({
                            card: {name, cardDescription, mugshot, mugshotAltText},
                            card,
                            takeTurn,
                            animationStyle,
                            playerWon,
                            showButton,
                            selectedAttribute,
                            setSelectedAttribute,
                            isResults,
                            slamJams
                         }) {

   const attributes = GetAttributesFromCard(card);

   const handleKeysPress = (e) => {

      if(isResults){
         return
      }

      if (e.key === 'Enter' && selectedAttribute) {
         slamJams(selectedAttribute)
      }

      if ([1, 2, 3, 4, 5].includes(parseInt(e.key))) {
         setSelectedAttribute(attributes[e.key - 1].description)
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', handleKeysPress, false);
      return () => document.removeEventListener('keydown', handleKeysPress)
   }, [selectedAttribute, isResults]);


   return (
      <animated.div style={animationStyle}>
         <h1 className={userTurnStyles.title}>You</h1>
         {!isResults && <ChooseYourJamStat/>}
         <Card hasPlayerWon={playerWon}>
            <Card.Image name={name} mugShotUrl={mugshot} altText={mugshotAltText}/>
            <Card.Description description={cardDescription}/>
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

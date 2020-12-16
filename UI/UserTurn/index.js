import React, {useEffect, useState} from "react"
import userTurnStyles from "./userTurn.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {ChooseYourJamStat} from "../ChooseYourJamStat";
import {Card} from "../Card"
import {Button} from "../Button"

export function UserTurn({card: {name, cardDescription}, card, slamJams}) {

   const [selectedAttribute, setSelectedAttribute] = useState(null)
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
      <div>
         <ChooseYourJamStat/>
         <Card>
            <Card.Image name={name}/>
            <Card.Description description={cardDescription}/>
            <Card.AttributeList
               attributes={GetAttributesFromCard(card)}
               selectedAttribute={selectedAttribute}
               onSelectAttribute={setSelectedAttribute}
            />
         </Card>

         {selectedAttribute && (
            <div className={userTurnStyles.button}>
               <Button onClick={() => slamJams(selectedAttribute)}>Slam It!</Button>
            </div>
         )}
      </div>
   )
}

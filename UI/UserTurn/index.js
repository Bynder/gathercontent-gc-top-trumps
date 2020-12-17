import React, { useState } from "react"
import userTurnStyles from "./userTurn.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {ChooseYourJamStat} from "../ChooseYourJamStat";
import { Card } from "../Card"
import { Button } from "../Button"

export function UserTurn({ card: {name, cardDescription, mugshot, mugshotAltText}, card, takeTurn }) {
   const [selectedAttribute, setSelectedAttribute] = useState(null)

   return (
      <div>
         <ChooseYourJamStat />
         <Card>
            <Card.Image name={name} mugShotUrl={mugshot} altText={mugshotAltText}/>
            <Card.Description description={cardDescription}/>
            <Card.AttributeList
               attributes={GetAttributesFromCard(card)}
               selectedAttribute={selectedAttribute}
               onSelectAttribute={setSelectedAttribute}
            />
         </Card>

         {selectedAttribute && (
            <div className={userTurnStyles.button}>
               <Button onClick={() => takeTurn(selectedAttribute)}>Slam It!</Button>
            </div>
         )}
      </div>
   )
}

import React, {useState} from "react"
import {Card} from "../Card"
import {GetAttributesFromCard} from "../../src/utils/helpers"

export function UserTurn({card: {name, cardDescription}, card, slamJams}) {
   const [selectedAttribute, setSelectedAttribute] = useState(null)

   return (
      <div>

         <h1>Choose your Jam stat</h1>

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
            <button onClick={() => slamJams(selectedAttribute)}>Slam It!</button>)}
      </div>
   )
}

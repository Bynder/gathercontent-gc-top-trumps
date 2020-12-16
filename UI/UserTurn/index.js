import React, { useState } from "react"
import userTurnStyles from "./userTurn.module.css"
import { map } from "lodash"
import { Card } from "../Card"
import { Button } from "../Button"

export function UserTurn({ usersTurnCard: { name, cardDescription, ...attributes }, slamJams }) {
   const [selectedAttribute, setSelectedAttribute] = useState(null)

   const parsedAttributes = map(attributes, (value, key) => ({ description: key, score: value }))

   return (
      <div>
         <Card>
            <Card.Image name={name} />
            <Card.Description description={cardDescription} />
            <Card.AttributeList
               attributes={parsedAttributes}
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

import React from "react"
import { map } from "lodash"
import { Card } from "../Card"

export function UserTurn({ usersTurnCard: { name, cardDescription, ...attributes } }) {
   const attributesArray = map(attributes, (value, key) => ({ description: key, score: value }))

   return (
      <div>
         <Card name={name} description={cardDescription} attributes={attributesArray} />
         <button>Slam It!</button>
      </div>
   )
}

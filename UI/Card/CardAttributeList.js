import React from "react"
import cardStyles from "./card.module.css"
import { Card } from "./CardAttribute"

export function CardAttributeList({ attributes, onSelectAttribute = () => "", selectedAttribute }) {
   return (
      <ul className={cardStyles.attributeList}>
         {attributes.map((attr, index) => (
            <Card
               stat={attr.description}
               value={attr.score}
               index={index}
               onSelect={() => onSelectAttribute(attr.description)}
               selected={selectedAttribute === attr.description}
               isAnyAttributeSelected={!!selectedAttribute}
            />
         ))}
      </ul>
   )
}

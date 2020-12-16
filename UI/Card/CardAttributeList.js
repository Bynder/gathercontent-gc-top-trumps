import React from "react"
import cardStyles from "./card.module.css"
import { CardAttribute } from "./CardAttribute"

export function CardAttributeList({ attributes, onSelectAttribute = () => "", selectedAttribute }) {
   console.log(attributes)
   return (
      <ul className={cardStyles.attributeList}>
         {attributes.map((attr, index) => (
            <CardAttribute
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

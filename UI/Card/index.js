import React from "react"
import cardStyles from "./card.module.css"
import { JamStat } from "../JamStat"

export function Card({
   name,
   description,
   mugShotUrl,
   altText,
   attributes,
   onSelectAttribute,
   selectedAttribute,
}) {
   return (
      <div className={cardStyles.card}>
         <div className={cardStyles.mugShotContainer}>
            <img alt={altText} src={mugShotUrl} className={cardStyles.mugShot} />
            <p className={cardStyles.name}>{name}</p>
         </div>
         <div className={cardStyles.description}>
            <p>{description}</p>
         </div>

         <ul className={cardStyles.attributeList}>
            {attributes.map((attr, index) => (
               <JamStat
                  stat={attr.description}
                  value={attr.score}
                  index={index}
                  onSelect={() => onSelectAttribute(attr.description)}
                  selected={selectedAttribute === attr.description}
                  isAnyAttributeSelected={!!selectedAttribute}
               />
            ))}
         </ul>
      </div>
   )
}

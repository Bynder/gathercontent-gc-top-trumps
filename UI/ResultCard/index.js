import React from "react"
import cardStyles from "./card.module.css"
import { ResultStat } from "../ResultStat"

export function ResultCard({
   name,
   description,
   mugShotUrl,
   altText,
   attributes
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
               <ResultStat
                  stat={attr.description}
                  value={attr.score}
                  index={index}
               />
            ))}
         </ul>
      </div>
   )
}

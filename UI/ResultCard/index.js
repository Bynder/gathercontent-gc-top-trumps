import React from "react"
import cardStyles from "./card.module.css"
import {ResultStat} from "../ResultStat"

export function ResultCard({
                              name,
                              description,
                              mugShotUrl,
                              altText,
                              attributes,
                              selectedAttribute,
                              winner
                           }) {
   return (
      <div className={cardStyles.card}>

         {winner && 'STAR'}

         <div className={cardStyles.mugShotContainer}>
            <img alt={altText} src={mugShotUrl} className={cardStyles.mugShot}/>
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
                  selected={selectedAttribute === attr.description}
               />
            ))}
         </ul>
      </div>
   )
}

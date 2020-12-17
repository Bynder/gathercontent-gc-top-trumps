import React from "react"
import cardStyles from "./card.module.css"

export function CardImage({ name, mugShotUrl, altText }) {
   return (
      <div className={cardStyles.mugShotContainer}>
         <img alt={altText} src={mugShotUrl} className={cardStyles.mugShot} width="355" height="160" />
         <p className={cardStyles.name}>{name}</p>
      </div>
   )
}

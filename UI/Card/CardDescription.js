import React from "react"
import cardStyles from "./card.module.css"

export function CardDescription({ description }) {
   return (
      <div className={cardStyles.description}>
         <p>{description}</p>
      </div>
   )
}

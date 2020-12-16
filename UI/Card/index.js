import React from "react"
import cardStyles from "./card.module.css"
import { CardAttributeList } from "./CardAttributeList"
import { CardImage } from "./CardImage"
import { CardDescription } from "./CardDescription"
import { CardAttribute } from "./CardAttribute"
import { Star } from "../Icons"

function Card({ children, hasPlayerWon }) {
   return (
      <div className={cardStyles.card}>
         {hasPlayerWon && (
            <span className={cardStyles.star}>
               <Star />
            </span>
         )}
         {children}
      </div>
   )
}

Card.AttributeList = CardAttributeList
Card.Attribute = CardAttribute
Card.Image = CardImage
Card.Description = CardDescription

export { Card }

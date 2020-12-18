import React from "react"
import cardAttributeStyles from "./cardAttribute.module.css"
import { StarSmall, Rarity, Spreadibility, Taste, Trendiness, Versatility } from "../Icons"
import { AttributeIcon } from './AttributeIcon';
import { AttributeBar } from './AttributeBar';
import { AttributeNumber } from './AttributeNumber';

const statColours = [
   {
      icon: Taste,
      colour: cardAttributeStyles.red,
   },
   {
      icon: Spreadibility,
      colour: cardAttributeStyles.purple,
   },
   {
      icon: Versatility,
      colour: cardAttributeStyles.green,
   },
   {
      icon: Trendiness,
      colour: cardAttributeStyles.blue,
   },
   {
      icon: Rarity,
      colour: cardAttributeStyles.yellow
   },
]

export function CardAttribute({
                                 stat,
                                 value,
                                 index,
                                 onSelect,
                                 selected,
                                 isAnyAttributeSelected,
                                 hasPlayerWon,
                              }) {
   const { colour, icon: Icon } = statColours[index]

   return (
      <li>
         <button
            onClick={onSelect}
            className={cardAttributeStyles.container}
            style={{ opacity: isAnyAttributeSelected && !selected ? 0.25 : 1 }}
         >
            <AttributeIcon colour={colour} stat={stat} style={{'margin-right': '10px'}}>
               <Icon/>
            </AttributeIcon>
            <AttributeBar score={value} colour={colour} />
            <AttributeNumber score={value} colour={colour} />
         </button>
         {hasPlayerWon && selected && (
            <span className={cardAttributeStyles.star}>
               <StarSmall />
            </span>
         )}
      </li>
   )
}

CardAttribute.defaultProps = {
   index: 0,
}

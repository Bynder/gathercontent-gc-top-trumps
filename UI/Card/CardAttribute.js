import React from "react"
import cardAttributeStyles from "./cardAttribute.module.css"
import { ReactComponent as Rarity }  from "../../static/Rarity.svg"
import { ReactComponent as Spreadibility } from "../../static/Spreadibility.svg"
import { ReactComponent as Taste } from "../../static/Taste.svg"
import { ReactComponent as Trendiness } from "../../static/Trendiness.svg"
import { ReactComponent as Versatility } from "../../static/Versatility.svg"
import { StarSmall } from "../Icons"
import { ReactTooltip } from "react-tooltip";

const statColours = [
   {
      innerColour: "#B81422",
      outerColour: "#E51A2B",
      barColour: "#F5A3AA",
      icon: Taste,
   },
   {
      innerColour: "#6E19E6",
      outerColour: "#5814B8",
      barColour: "#C5A3F5",
      icon: Spreadibility,
   },
   {
      innerColour: "#39C639",
      outerColour: "#2E9E2E",
      barColour: "#B0E8B0",
      icon: Versatility,
   },
   {
      innerColour: "#006EFF",
      outerColour: "#0058CC",
      barColour: "#99C5FF",
      icon: Trendiness,
   },
   {
      innerColour: "#F9D006",
      outerColour: "#C7A705",
      barColour: "#FCEC9C",
      icon: Rarity,
   },
]

export function CardAttribute({
   stat,
   value,
   icon,
   index,
   onSelect,
   selected,
   isAnyAttributeSelected,
   hasPlayerWon,
}) {
   const { outerColour, innerColour, barColour, icon: Icon } = statColours[index]

   return (
      <li className={cardAttributeStyles.attribute}>
         <button
            onClick={onSelect}
            className={cardAttributeStyles.container}
            style={{ opacity: isAnyAttributeSelected && !selected ? 0.25 : 1 }}
         >
            <div data-tip={stat} data-for="cardAttributeToolTip"
               style={{
                  border: `6px solid ${outerColour}`,
                  background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`,
               }}
               className={cardAttributeStyles.icon}
            >
               <Icon />
            </div>
            <div className={cardAttributeStyles.bar}>
               <div
                  style={{
                     border: `6px solid ${outerColour}`,
                     background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`,
                  }}
                  className={cardAttributeStyles.outerBar}
               >
                  <div
                     style={{
                        width: `${value}0%`,
                        background: `linear-gradient(180deg, #FFFFFF 0%, ${barColour} 100%)`,
                     }}
                     className={cardAttributeStyles.innerBar}
                  />
               </div>
            </div>
            <div
               style={{
                  "textShadow": `4px 0 0 ${outerColour}, -4px 0 0 ${outerColour}, 0 4px 0 ${outerColour}, 0 -4px 0 ${outerColour}, 2px 2px ${outerColour}, -2px -2px 0 ${outerColour}, 2px -2px 0 ${outerColour}, -2px 2px 0 ${outerColour}`,
               }}
               className={cardAttributeStyles.number}
            >
               {value}
            </div>
         </button>
         {hasPlayerWon && selected ? (
            <span className={cardAttributeStyles.star}>
               <StarSmall />
            </span>
         ) : null}
      </li>
   )
}

CardAttribute.defaultProps = {
   index: 0,
}

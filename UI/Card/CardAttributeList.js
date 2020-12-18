import React from "react"
import cardStyles from "./card.module.css"
import {CardAttribute} from "./CardAttribute"
import ReactTooltip from "react-tooltip";
import asideStyles from "../ScoreAside/scoreAside.module.css";

export function CardAttributeList({attributes, onSelectAttribute = () => "", selectedAttribute, hasPlayerWon}) {
   return (
      <div>
         <ReactTooltip
            className={asideStyles.tooltip}
            place="left"
            effect={"solid"}
            offset={{'left': 0}}
            clickable={true}
            arrowColor={"transparent"}
            id="cardAttributeToolTip"
         />
         <ul className={cardStyles.attributeList}>
            {attributes.map((attr, index) => (
               <CardAttribute
                  stat={attr.description}
                  value={attr.score}
                  index={index}
                  onSelect={() => onSelectAttribute(attr.description)}
                  selected={selectedAttribute === attr.description}
                  isAnyAttributeSelected={!!selectedAttribute}
                  hasPlayerWon={hasPlayerWon}
                  key={attr.description}
               />
            ))}
         </ul>
      </div>
   )
}

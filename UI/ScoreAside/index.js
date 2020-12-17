import React, { useEffect, useState } from "react"
import asideStyles from "./scoreAside.module.css"
import ReactTooltip from 'react-tooltip';

export function ScoreAside({ turnNumber, wins, cardsLeft }) {
   const [timeElapsed, setTimeElapsed] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTimeElapsed(timeElapsed + 1)
      }, 1000)

      return () => clearInterval(intervalId)
   }, [timeElapsed])

   const minutes =
      Math.floor(timeElapsed / 60) < 10
         ? `0${Math.floor(timeElapsed / 60)}`
         : Math.floor(timeElapsed / 60)
   const seconds =
      Math.floor(timeElapsed % 60) < 10
         ? `0${Math.floor(timeElapsed % 60)}`
         : Math.floor(timeElapsed % 60)

   return (
      <div className={asideStyles.aside}>
         <ul>
         <ReactTooltip
            className={asideStyles.tooltip}
            place="right"
            effect={"solid"}
            offset={{'right': 65}}
            clickable={true}
            arrowColor={"transparent"}
         />
            <li className={asideStyles.turnNumber} data-tip="Rounds">
               <span className={asideStyles.stat}>{turnNumber}</span>
               <span className={asideStyles.icon}></span>
            </li>
            <li className={asideStyles.wins} data-tip="Wins">
               <span className={asideStyles.stat}>{wins}</span>
               <span className={asideStyles.icon}></span>
            </li>
            <li className={asideStyles.cardsLeft} data-tip="Cards Remaining">
               <span className={asideStyles.stat}>{cardsLeft}</span>
               <span className={asideStyles.icon}></span>
            </li>
            <li className={asideStyles.time} data-tip="Time">
               <span className={asideStyles.stat}>
                  {minutes}:{seconds}
               </span>
               <span className={asideStyles.icon}></span>
            </li>
         </ul>
      </div>
   )
}

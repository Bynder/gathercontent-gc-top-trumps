import React, { useEffect, useState } from "react"
import asideStyles from "./scoreAside.module.css"
import ReactTooltip from 'react-tooltip';
import { Cards, Clock, Round, Wins } from '../Icons';
import { ScorePoint } from '../ScorePoint';

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
            offset={{'right': -20}}
            clickable={true}
            arrowColor={"transparent"}
            id="asideToolTip"
         />
            <li data-tip="Rounds" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Round /></ScorePoint>
               <span className={asideStyles.stat}>{turnNumber}</span>
            </li>
            <li data-tip="Wins" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Wins /></ScorePoint>
               <span className={asideStyles.stat}>{wins}</span>
            </li>
            <li data-tip="Cards Remaining" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Cards /></ScorePoint>
               <span className={asideStyles.stat}>{cardsLeft}</span>
            </li>
            <li data-tip="Time" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Clock /></ScorePoint>
               <span className={asideStyles.stat}>
                  {minutes}:{seconds}
               </span>
            </li>
         </ul>
      </div>
   )
}

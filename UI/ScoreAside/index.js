import React, { useEffect, useState } from "react"
import asideStyles from "./scoreAside.module.css"
import ReactTooltip from 'react-tooltip';
import { Cards, Clock, Round, Wins } from '../Icons';
import { ScorePoint } from '../ScorePoint';
import { FormatTime } from "../../src/utils/helpers"

export function ScoreAside({ turnNumber, wins, cardsLeft, timeElapsed}) {

   const time = FormatTime(timeElapsed)

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
            <li data-tip="Cards" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Cards /></ScorePoint>
               <span className={asideStyles.stat}>{cardsLeft}</span>
            </li>
            <li data-tip="Time" data-for="asideToolTip">
               <ScorePoint className={asideStyles.m15}><Clock /></ScorePoint>
               <span className={asideStyles.stat}>
                  {time.minutes}:{time.seconds}
               </span>
            </li>
         </ul>
      </div>
   )
}

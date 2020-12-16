import React, { useEffect, useState } from "react"
import asideStyles from './scoreAside.module.css';

export function ScoreAside({turnNumber, wins, cardsLeft}) {
   const [timeElapsed, setTimeElapsed] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTimeElapsed(timeElapsed + 1);
      }, 1000);

      return () => clearInterval(intervalId);
   }, [timeElapsed]);

   return (
      <div className={asideStyles.aside}>
         <ul>
            <li className={asideStyles.turnNumber}>
               <span className={asideStyles.stat}>{turnNumber}</span>
               <span className={asideStyles.icon}></span>
               <span className={asideStyles.tooltip}>Rounds</span>
            </li>
            <li className={asideStyles.wins}>
               <span className={asideStyles.stat}>{wins}</span>
               <span className={asideStyles.icon}></span>
               <span className={asideStyles.tooltip}>Wins</span>

            </li>
            <li className={asideStyles.cardsLeft}>
               <span className={asideStyles.stat}>{cardsLeft}</span>
               <span className={asideStyles.icon}></span>
               <span className={asideStyles.tooltip}>Cards&nbsp;Remaining</span>

            </li>
            <li className={asideStyles.time}>
               <span className={asideStyles.stat}>{timeElapsed}</span>
               <span className={asideStyles.icon}></span>
               <span className={asideStyles.tooltip}>Time</span>

            </li>
         </ul>

      </div>
   )
}

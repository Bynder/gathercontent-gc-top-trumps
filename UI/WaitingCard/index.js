import React from 'react';
import waitingStyles from './waitingCard.module.css';
import cardStyles from '../Card/card.module.css'
import { ReactComponent as Loader } from '../../static/loader.svg';


export function WaitingCard() {
   return (
      <div className={`${cardStyles.card} ${waitingStyles.waitingCard}`}>
         <div className={waitingStyles.loading}>
            <Loader style={{
               fill: "#FFFFFF"
            }}/>
            <p className={waitingStyles.status}>Waiting</p>
         </div>
      </div>
   )
}

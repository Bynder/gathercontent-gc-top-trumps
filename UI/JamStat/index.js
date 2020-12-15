import React from 'react';
import jamStatStyles from './jamstat.module.css';

export function JamStat ({stat, value, icon, innerColour, outerColour}) {
   return (
      <div className={jamStatStyles.container}>
         <div style={{
            border: "6px solid ${outerColour}",
            background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`
         }} className={jamStatStyles.icon}>
         </div>
         <div className={jamStatStyles.bar}>
            <div className={jamStatStyles.outerBar}>
               <div style={{
                  width: `${value}0%`
               }} className={jamStatStyles.innerBar} />
            </div>
         </div>
         <div className={jamStatStyles.number}>
            {value}
         </div>
      </div>
   )
}

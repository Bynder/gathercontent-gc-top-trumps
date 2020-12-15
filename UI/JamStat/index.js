import React from 'react';
import jamStatStyles from './jamstat.module.css';

export function JamStat ({stat, value, icon, innerColour, outerColour, barColour}) {
   return (
      <div className={jamStatStyles.container}>
         <div style={{
            border: `6px solid ${outerColour}`,
            background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`
         }} className={jamStatStyles.icon}>
         </div>
         <div className={jamStatStyles.bar}>
            <div style={{
               border: `6px solid ${outerColour}`,
               background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`
            }} className={jamStatStyles.outerBar}>
               <div style={{
                  width: `${value}0%`,
                  background: `linear-gradient(180deg, #FFFFFF 0%, ${barColour} 100%)`
               }} className={jamStatStyles.innerBar} />
            </div>
         </div>
         <div style={{
            "text-shadow": `4px 0 0 ${outerColour}, -4px 0 0 ${outerColour}, 0 4px 0 ${outerColour}, 0 -4px 0 ${outerColour}, 2px 2px ${outerColour}, -2px -2px 0 ${outerColour}, 2px -2px 0 ${outerColour}, -2px 2px 0 ${outerColour}`
         }} className={jamStatStyles.number}>
            {value}
         </div>
      </div>
   )
}

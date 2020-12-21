import React from 'react';
import cardAttributeStyles from './cardAttribute.module.css';

export function AttributeBar({value, outerColour, innerColour, colour, barColour}) {
   return (
      <div className={cardAttributeStyles.bar}>
         <div
            style={{
               border: `6px solid ${outerColour}`,
               background: `linear-gradient(180deg, ${outerColour} 0%, ${innerColour} 100%)`,
            }}
            className={`${cardAttributeStyles.outerBar} ${colour}`}
         >
            <div
               style={{
                  width: `${value}0%`,
                  background: `linear-gradient(180deg, #FFFFFF 0%, ${barColour} 100%)`,
               }}
               className={`${cardAttributeStyles.innerBar} ${colour}`}
            />
         </div>
      </div>
   );
}

import React from 'react';
import cardAttributeStyles from './cardAttribute.module.css';

export function AttributeBar({ score, colour }) {
   return (
      <div className={`${cardAttributeStyles.bar} ${cardAttributeStyles.gradient} ${colour}`}>
         <div className={cardAttributeStyles.innerBorder}>
            <div className={cardAttributeStyles.innerBarShadow}>
               <div className={cardAttributeStyles.innerBar} style={{ width: `${score}0%` }}/>
            </div>
         </div>
      </div>
   );
}

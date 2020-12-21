import React from 'react';
import cardAttributeStyles from './cardAttribute.module.css';

export function AttributeIcon({ children, colour, stat, style }) {
   return (
      <div className={`${cardAttributeStyles.att} ${cardAttributeStyles.gradient} ${colour}`}
           data-tip={stat}
           data-for="cardAttributeToolTip"
           style={style}
      >
         <div className={cardAttributeStyles.innerBorder}>
            <div className={cardAttributeStyles.innerCircleShadow}>
               {children}
            </div>
         </div>
      </div>
   );
}

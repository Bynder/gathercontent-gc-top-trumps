import React from 'react';
import cardAttributeStyles from './cardAttribute.module.css';

export function AttributeIcon({ children, colour, stat, style }) {
   return (
      <div className={`${cardAttributeStyles.att} ${colour}`}
           data-tip={stat}
           data-for="cardAttributeToolTip"
           style={style}
      >
         <div className={cardAttributeStyles.frame1}>
            <div className={cardAttributeStyles.frame3}>
               {children}
            </div>
         </div>
      </div>
   );
}

import React from 'react';
import cardAttributeStyles from './cardAttribute.module.css';

export function AttributeNumber({ score, colour }) {
   return (
      <div className={`${cardAttributeStyles.number} ${colour}`}>
         {score}
      </div>
   );
}

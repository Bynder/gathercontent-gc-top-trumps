import React from 'react';
import buttonStyles from './button.module.css';

export function Button ({onClick, text, ...rest}) {
   return (
      <button onClick={onClick} className={buttonStyles.button} {...rest}>
         {text}
      </button>
   )
}
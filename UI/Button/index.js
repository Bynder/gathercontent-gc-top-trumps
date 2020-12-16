import React from 'react';
import buttonStyles from './button.module.css';

export function Button ({onClick, className, text, ...rest}) {
   return (
      <button onClick={onClick} className={`${buttonStyles.button} ${className}`} {...rest}>
         {text}
      </button>
   )
}

import React from 'react';
import buttonStyles from './button.module.css';

export function Button ({onClick, text}) {
   return (
      <button onClick={onClick} className={buttonStyles.button}>
         {text}
      </button>
   )
}

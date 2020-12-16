import React from 'react';
import buttonStyles from './button.module.css';

export function Button ({children, className, ...rest}) {
   return (
      <button className={`${buttonStyles.button} ${className}`} {...rest}>
         {children}
      </button>
   )
}

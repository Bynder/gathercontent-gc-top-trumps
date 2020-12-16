import React from 'react';
import StarSvg from '../../static/Star.svg';
import StarSmallSvg from '../../static/StarSmall.svg';
import ArrowSvg from '../../static/Arrow.svg';
import iconStyles from './icons.module.css';

export function Star() {
   return <StarSvg className={iconStyles.shadow}/>
}

export function StarSmall() {
   return <StarSmallSvg className={iconStyles.shadow}/>
}

export const BLUE_GRADIENT = 'blueGradient';
export const RED_GRADIENT = 'redGradient';
export const PURPLE_GRADIENT = 'purpleGradient';
export const GREEN_GRADIENT = 'greenGradient';
export const YELLOW_GRADIENT = 'yellowGradient';

const GRADIENTS = [
   BLUE_GRADIENT,
   RED_GRADIENT,
   PURPLE_GRADIENT,
   GREEN_GRADIENT,
   YELLOW_GRADIENT,
];

export function Arrow({gradient = GREEN_GRADIENT}) {
   if (!GRADIENTS.includes(gradient)) {
      throw new Error(`Invalid color ${gradient}`);
   }
   console.log(gradient)
   return <ArrowSvg className={`${iconStyles[gradient]} ${iconStyles.shadow}`} />
}

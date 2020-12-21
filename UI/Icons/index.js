import React from 'react';
import { ReactComponent as StarSvg } from '../../static/Star.svg';
import { ReactComponent as StarSmallSvg } from '../../static/StarSmall.svg';
import { ReactComponent as ArrowSvg } from '../../static/Arrow.svg';
import { ReactComponent as SoundOffSvg } from '../../static/SoundOff.svg';
import { ReactComponent as SoundOnSvg } from '../../static/SoundOn.svg';
import { ReactComponent as InfoSvg } from '../../static/Info.svg';
import { ReactComponent as RoundSvg } from '../../static/Round.svg';
import { ReactComponent as WinSvg } from '../../static/Win.svg';
import { ReactComponent as CardsSvg } from '../../static/Cards.svg';
import { ReactComponent as ClockSvg } from '../../static/Clock.svg';
import { ReactComponent as RaritySvg } from "../../static/Rarity.svg"
import { ReactComponent as SpreadibilitySvg } from "../../static/Spreadibility.svg"
import { ReactComponent as TasteSvg } from "../../static/Taste.svg"
import { ReactComponent as TrendinessSvg } from "../../static/Trendiness.svg"
import { ReactComponent as VersatilitySvg } from "../../static/Versatility.svg"
import iconStyles from './icons.module.css';

export function Star() {
   return <StarSvg className={iconStyles.shadow}/>
}

export function StarSmall({ style }) {
   return <StarSmallSvg className={iconStyles.shadow} style={style}/>
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
   return <ArrowSvg className={`${iconStyles[gradient]} ${iconStyles.shadow}`} />
}

export function SoundOff() {
   return <SoundOffSvg />
}

export function SoundOn() {
   return <SoundOnSvg />
}

export function Info() {
   return <InfoSvg />
}

export function Round () {
   return <RoundSvg className={iconStyles.shadowSm}/>;
}

export function Wins () {
   return <WinSvg className={iconStyles.shadowSm}/>;
}

export function Cards () {
   return <CardsSvg className={iconStyles.shadowSm}/>;
}

export function Clock () {
   return <ClockSvg className={iconStyles.shadowSm}/>;
}

export function Rarity () {
   return <RaritySvg className={iconStyles.shadowAttributes} />;
}
export function Spreadibility () {
   return <SpreadibilitySvg className={iconStyles.shadowAttributes} />;
}
export function Taste () {
   return <TasteSvg className={iconStyles.shadowAttributes} />;
}
export function Trendiness () {
   return <TrendinessSvg className={iconStyles.shadowAttributes} />;
}
export function Versatility () {
   return <VersatilitySvg className={iconStyles.shadowAttributes} />;
}

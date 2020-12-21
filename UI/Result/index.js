import React from "react"
import resultStyles from "./result.module.css"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {Card} from "../Card"
import {Button} from "../Button"
import { StarSmall } from '../Icons';

export function RoundWon () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.roundWon}`}>
         <span>Round won!</span>
         <StarSmall style={{position: 'absolute', width: '8px', top: '75px', left: '-10px', transform: 'rotate(50deg)'}} />
         <StarSmall style={{position: 'absolute', width: '16px', top: '60px', left: '-20px', transform: 'rotate(50deg)'}} />
         <StarSmall style={{position: 'absolute', width: '8px', top: '-20px', right: '-30px'}} />
         <StarSmall style={{position: 'absolute', width: '16px', top: '-30px', right: '-15px'}} />
      </span>
   );
}

export function RoundLost () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.roundLost}`}>
         <span>Round lost!</span>
      </span>
   );
}

export function Draw () {
   return (
      <span className={`${resultStyles.whiteBorder} ${resultStyles.draw}`}>
         <span>Draw!</span>
      </span>
   );
}

import { Button } from '../../UI/Button';
import resultStyles from '../../UI/Result/result.module.css';
import { Draw, RoundLost, RoundWon } from '../../UI/Result';
import React from 'react';
import { DRAW_COMPUTER, DRAW_PLAYER, PLAYER_COMPUTER, PLAYER_USER } from '../pages/game';

export function ResultFooter({roundWinner, nextRound}) {
   return (
      <div className={resultStyles.resultFooter}>
         {(roundWinner === DRAW_PLAYER || roundWinner === DRAW_COMPUTER) && (
            <Draw />
         )}
         {roundWinner === PLAYER_USER && (
            <RoundWon />
         )}
         {roundWinner === PLAYER_COMPUTER && (
            <RoundLost />
         )}
         <Button className={resultStyles.button} onClick={nextRound}>
            Next Round
         </Button>
      </div>
   );
}

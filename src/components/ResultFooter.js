import { Button } from '../../UI/Button';
import resultStyles from '../../UI/Result/result.module.css';
import { Draw, RoundLost, RoundWon } from '../../UI/Result';
import React, {useEffect} from 'react';
import { DRAW_COMPUTER, DRAW_PLAYER, PLAYER_COMPUTER, PLAYER_USER } from '../pages/game';

export function ResultFooter({roundWinner, nextRound, showNextRoundButton}) {
   useEffect(() => {
      document.addEventListener('keydown', handleEnter, false);
      return () => document.removeEventListener('keydown', handleEnter)
   }, []);

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         nextRound()
      }
   }

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
         {showNextRoundButton && (
            <Button className={resultStyles.button} onClick={nextRound}>
               Next Round
            </Button>
         )}
      </div>
   );
}

ResultFooter.defaultProps = {
   showNextRoundButton: true
}

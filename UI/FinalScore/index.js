import React from 'react';
import finalScoreStyles from './FinalScore.module.css';
import cardStyles from '../Card/card.module.css';
import {ScorePoint} from "../ScorePoint";
import { ReactComponent as LogoSvg } from '../../static/Logo.svg';

export function FinalScore ({outcome, totalRounds, totalWins, totalTime, score}) {
   return (
      <div className={finalScoreStyles.finalScoreCard}>
         <div className={cardStyles.card}>
            <div className={finalScoreStyles.logo}>
               <LogoSvg />
            </div>
            <h1 className={finalScoreStyles.result}>{outcome}</h1>
            <div className={finalScoreStyles.scorePoints}>
               <div className={finalScoreStyles.scorePointRow}>
                  <ScorePoint scorePointClassName="turnNumber" />
                  <span className={finalScoreStyles.scoreTitle}>Total rounds</span>
                  <span className={finalScoreStyles.scoreValue}>{totalRounds}</span>
               </div>

               <div className={finalScoreStyles.scorePointRow}>
                  <ScorePoint scorePointClassName="wins" />
                  <span className={finalScoreStyles.scoreTitle}>Total rounds</span>
                  <span className={finalScoreStyles.scoreValue}>{totalWins}</span>
               </div>

               <div className={finalScoreStyles.scorePointRow}>
                  <ScorePoint scorePointClassName="time" />
                  <span className={finalScoreStyles.scoreTitle}>Total rounds</span>
                  <span className={finalScoreStyles.scoreValue}>{totalTime}</span>
               </div>
            </div>

            <p className={finalScoreStyles.finalScore}>Final Score</p>
            <div className={finalScoreStyles.finalScoreResult}>
               <h3 className={finalScoreStyles.behind}>{score}</h3>
               <h3 className={finalScoreStyles.infront}>{score}</h3>
            </div>
         </div>
      </div>
   );
}

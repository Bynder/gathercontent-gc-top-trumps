import React from 'react';

import { ScorePoint } from '../ScorePoint';
import { Cards, Clock, Round, Wins } from '../Icons';

export default {
   title: "ScorePoints"
}

export const ScorePoints = () => {
   return <>
      <ScorePoint><Round/></ScorePoint>
      <ScorePoint><Wins/></ScorePoint>
      <ScorePoint><Cards/></ScorePoint>
      <ScorePoint><Clock/></ScorePoint>
   </>;
}

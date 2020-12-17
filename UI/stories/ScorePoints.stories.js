import React from 'react';

import { ScorePoint } from '../ScorePoint';

export default {
   title: "ScorePoints"
}


export const ScorePoints = (args) => <>
   <ScorePoint scorePointClassName="turnNumber" />
   <ScorePoint scorePointClassName="wins" />
   <ScorePoint scorePointClassName="cardsLeft" />
   <ScorePoint scorePointClassName="time" />
</>

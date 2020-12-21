import React from 'react';
import { Draw, RoundLost, RoundWon } from '../Result';

export function Results() {
   return (
      <>
         <RoundWon />
         <RoundLost />
         <Draw />
      </>
   );
}

export default {
   title: 'Results'
};

import React from 'react';
import chooseYourJamStat from './chooseYourJamStat.module.css';

export function ChooseYourJamStat () {
   return (
      <div className={chooseYourJamStat.chooseYourJamStat} style={{left: "-210px", top: "-20px", zIndex: "1"}}>
         <h2 className={chooseYourJamStat.behind}>Choose your <br />Jam Stat!</h2>
         <h2 className={chooseYourJamStat.infront}>Choose your <br />Jam Stat!</h2>
      </div>
   );
}

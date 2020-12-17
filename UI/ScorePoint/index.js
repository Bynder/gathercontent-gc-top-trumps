import scorePointStyles from "../ScorePoint/scorePoint.module.css";
import React from "react";

export function ScorePoint({scorePointClassName}) {

   return (
      <div className={`${scorePointStyles.scorePoint} `}>
         <span className={scorePointStyles.scorePointBg}></span>
         <span className={`${scorePointStyles.icon} ${scorePointStyles[scorePointClassName]}`}></span>
   </div>);
}

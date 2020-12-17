import React from "react";
import scorePointStyles from "../ScorePoint/scorePoint.module.css";

export function ScorePoint({ children }) {
   return <span className={scorePointStyles.scorePointBg}>{children}</span>;
}

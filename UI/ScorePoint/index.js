import React from "react";
import scorePointStyles from "../ScorePoint/scorePoint.module.css";

export function ScorePoint({ children, className }) {
   return <span className={`${scorePointStyles.scorePointBg} ${className}`}>{children}</span>;
}

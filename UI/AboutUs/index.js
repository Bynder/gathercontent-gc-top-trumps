import React from "react"
import aboutStyles from "./about.module.css"

export function AboutUs({introTitle, introContent}) {

   return (
      <div className={aboutStyles.about}>
         <h1 className={aboutStyles.title}>{introTitle}</h1>
         <p className={aboutStyles.text}>{introContent}</p>
      </div>
   )
}

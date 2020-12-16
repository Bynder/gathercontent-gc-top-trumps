import React, { useState } from "react"
import { IntroHero } from "../../UI/IntroHero"
import introStyles from "../../UI/IntroHero/introHero.module.css"

export default function Intro() {


   return (
      <div className={introStyles.container}>
         <IntroHero />
      </div>
   )
}

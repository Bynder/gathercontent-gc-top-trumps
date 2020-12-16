import React from "react"
import { IntroHero } from "../../UI/IntroHero"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import Audio from '../components/Audio'
import InfoIcon from '../components/InfoIcon'

export default function Intro({data, location}) {
   return (
      <InfoIcon>
         <div className={introStyles.container}>
            <IntroHero />
         </div>
      </InfoIcon>
   )
}

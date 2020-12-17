import React from "react"
import { IntroHero } from "../../UI/IntroHero"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import InfoIcon from '../components/InfoIcon'
import { navigate } from 'gatsby';

export default function Intro() {
   return (
      <InfoIcon>
         <div className={introStyles.container}>
            <IntroHero onSubmit={(e, state) => {
               e.preventDefault()
               navigate("/game", { state });
            }} />
         </div>
      </InfoIcon>
   )
}

import React from "react"
import introStyles from "./intro.module.css"
import { Button } from '../Button';
import {navigate} from "gatsby";

export function IntroUI({introContent}) {

   return (
      <div className={introStyles.container}>
         <span className={introStyles.logo} />
         <div className={introStyles.intro}>
            <div className={introStyles.text} dangerouslySetInnerHTML={{__html: introContent}}/>
         </div>
         <div className={introStyles.buttonContainer}>
            <Button className={introStyles.button} onClick={(e, state) => {
               e.preventDefault()
               navigate("/game", { state });
            }}>
               GET JAMMIN'
            </Button>
         </div>
      </div>
   )
}

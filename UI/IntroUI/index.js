import React from "react"
import introStyles from "./intro.module.css"
import { Button } from '../Button';
import {navigate} from "gatsby";

export function IntroUI({introHeader, introContent}) {

   return (
      <div className={introStyles.container}>
         <div className={introStyles.intro}>
            <div className={introStyles.header} dangerouslySetInnerHTML={{__html: introHeader}}/>
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

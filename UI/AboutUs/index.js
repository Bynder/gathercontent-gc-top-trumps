import React from "react"
import aboutStyles from "./about.module.css"
import { Button } from '../Button';

export function AboutUs({introContent, toggle}) {

   return (
      <div className={aboutStyles.container}>
         <span className={aboutStyles.logoAbout} />
         <div className={aboutStyles.about}>
            <div className={aboutStyles.text} dangerouslySetInnerHTML={{__html: introContent}}/>
         </div>
         <div className={aboutStyles.buttonContainer}>
            <Button className={aboutStyles.button} onClick={toggle}>
               GET JAMMIN'
            </Button>
         </div>
      </div>
   )
}

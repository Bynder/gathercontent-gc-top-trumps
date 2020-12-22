import React from "react"
import aboutStyles from "../AboutUs/about.module.css";
import {Button} from "../Button";
import {navigate} from "gatsby";

function NotFound() {
   return <div className={aboutStyles.notFoundContainer}>
      <span className={aboutStyles.notFound}/>
      <h1>Jam not found!</h1>
      <Button onClick={() => navigate("/game")}>
         Get Jammin!
      </Button>
   </div>
}

export {NotFound}

import aboutStyles from "../../UI/AboutUs/about.module.css";
import React from "react";
import {Button} from "../../UI/Button";
import {navigate} from "gatsby";

export default function NotFound() {

   return (
      <div >
         <span className={aboutStyles.notFound}/>
         <h1>Jam not found!</h1>
         <Button onClick={() =>  navigate("/game")}>
            Get Jammin!
         </Button>
      </div>
   )
}

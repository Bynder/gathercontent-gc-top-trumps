import React from "react"
import notFoundStyles from "./not-found.module.css";
import {Button} from "../Button";
import {navigate} from "gatsby";

function NotFound() {
   return (
      <div className={notFoundStyles.container}>
         <img src="/jam_not_found.jpg"/>
         <h1>Jam not found!</h1>
         <Button onClick={() => navigate("/game")}>
            Get Jammin!
         </Button>
      </div>
   )
}

export {NotFound}

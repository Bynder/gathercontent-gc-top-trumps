import React, { useState } from "react"
import { Link } from "gatsby"
import introStyles from "./introHero.module.css"
import buttonStyles from "../Button/button.module.css"

export function IntroHero({ startGame }) {
   const [name, setName] = useState("")

   return (
      <div className={introStyles.intro}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input
            onChange={event => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="ENTER A NAME"
            className={introStyles.nameInput}
         />
         <Link className={buttonStyles.button} to="/game" state={{ name }}   >
            GET JAMMIN!
         </Link>
      </div>
   )
}

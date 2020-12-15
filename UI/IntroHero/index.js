import React from "react"
import { USER_TURN } from "../Home"
import introStyles from "./introHero.module.css"

export function IntroHero({ setName, name, setPage }) {
   return (
      <form onSubmit={() => setPage(USER_TURN)} className={introStyles.intro}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input
            onChange={setName}
            type="text"
            placeholder="ENTER A NAME"
            className={introStyles.nameInput}
         />
         <button className={introStyles.button} disabled={!name}>
            <span className={introStyles.buttonBorder} />
            GET JAMMIN'
         </button>
      </form>
   )
}

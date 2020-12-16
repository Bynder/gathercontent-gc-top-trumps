import React, { useState } from "react"
import introStyles from "./introHero.module.css"
import buttonStyles from "../Button/button.module.css"
import { navigate } from 'gatsby';

export function IntroHero() {
   const [name, setName] = useState("")

   return (
      <form className={introStyles.intro} onSubmit={e => {
         e.preventDefault()
         // Implementation of this function is an exercise for the reader.
         navigate(
            "/game",
            {
               state: { name },
            }
         );
      }}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input
            onChange={event => setName(event.target.value)}
            onKeyPress={(event) => { if (event.nativeEvent.key === "Enter") {
               navigate("/game", {state: { name }});
            }}}
            value={name}
            type="text"
            placeholder="ENTER A NAME"
            className={introStyles.nameInput}
            name="name"
         />
         <button className={buttonStyles.button}>
            GET JAMMIN!
         </button>
      </form>
   )
}

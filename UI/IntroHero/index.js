import React, { useState } from "react"
import introStyles from "./introHero.module.css"
import { Button } from '../Button';

export function IntroHero({ onSubmit = console.log }) {
   const [name, setName] = useState("")

   return (
      <form className={introStyles.intro} onSubmit={e => onSubmit(e, { name })}>
         <span className={introStyles.logo} />
         <p className={introStyles.text}>Welcome to Slam Jam!</p>
         <p className={introStyles.text}>All you need to do is enter a name. Easy!</p>
         <input
            onChange={event => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="ENTER A NAME"
            className={introStyles.nameInput}
            name="name"
         />
         <Button className={introStyles.button}>
            GET JAMMIN!
         </Button>
      </form>
   )
}

import React, {useState} from "react"
import {WaitingCard} from "../WaitingCard";

export function ComputersTurn({name}) {

   return (
      <div>
         <h1>{name}</h1>
         <WaitingCard  />
      </div>
   )
}

import React from "react"

export function UserTurn({ usersTurnCard }) {
   console.log(usersTurnCard);
   return (
      <div>
         <h1>{usersTurnCard.name}</h1>
         <p>{usersTurnCard.description}</p>
         <ul>
            <li>Rarity: {usersTurnCard.rarity}</li>
            <li>Spreadability: {usersTurnCard.spreadability}</li>
            <li>Versatility: {usersTurnCard.versatility}</li>
            <li>Style: {usersTurnCard.style}</li>
            <li>Tastiness: {usersTurnCard.tastiness}</li>
         </ul>
         <button>Slam It!</button>
      </div>
   )
}

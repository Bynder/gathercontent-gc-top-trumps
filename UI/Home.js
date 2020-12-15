import React, { useState, useEffect } from "react"
import { shuffle, chunk } from "lodash"

function Home({ data }) {
   const [cards] = useState(
      data.cards.edges.map(card => ({
         ...card.node,
         rarity: parseInt(card.node.rarity[0]?.label),
         spreadability: parseInt(card.node.spreadability[0]?.label),
         versatility: parseInt(card.node.versatility[0]?.label),
         style: parseInt(card.node.style[0]?.label),
         tastiness: parseInt(card.node.tastiness[0]?.label),
      }))
   )

   const [turnCount, setTurnCount] = useState(0)

   const [isUsersTurn, setIsUsersTurn] = useState(true)
   const [isGameStarted, setIsGameStarted] = useState(false)

   const [computersCards, setComputersCards] = useState([])
   const [usersCards, setUsersCards] = useState([])

   const [usersTurnCard, setUsersTurnCard] = useState([])
   const [computersTurnCard, setComputersTurnCard] = useState([])

   const incrementTurnCount = () => setTurnCount(turnCount + 1)

   const startGame = () => {
      // const shuffledCards = shuffle(cards)
      const splitCards = chunk(cards, cards.length / 2)

      setUsersCards(splitCards[0])
      setComputersCards(splitCards[1])

      setIsGameStarted(true)

      incrementTurnCount()
   }

   const drawCard = () => {
      setComputersTurnCard(computersCards[0])
      setUsersTurnCard(usersCards[0])

      setUsersCards(usersCards.slice(1))
      setComputersCards(computersCards.slice(1))
   }

   useEffect(() => {
      if (!turnCount) {
         return
      }

      drawCard()
   }, [turnCount])

   return (
      <>
         {isGameStarted && isUsersTurn && (
            <div style={{ display: "flex", flexDirection: "column", width: 200, border: '1px solid red' }}>
               <h1>Card</h1>
               <p>{usersTurnCard.name}</p>
               <p>{usersTurnCard.description}</p>
               <button>rarity: {usersTurnCard.rarity}</button>
               <button>spreadability: {usersTurnCard.spreadability}</button>
               <button>versatility: {usersTurnCard.versatility}</button>
               <button>style: {usersTurnCard.style}</button>
               <button>tastiness: {usersTurnCard.tastiness}</button>
            </div>
         )}
         {!isGameStarted && <button onClick={startGame}>Play!</button>}
      </>
   )
}

export { Home }

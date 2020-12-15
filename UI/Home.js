import React, { useState } from "react"
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

   const [isUsersTurn, setIsUsersTurn] = useState(true)
   const [isGameStarted, setIsGameStarted] = useState(false)
   const [computersCards, setComputersCards] = useState([])
   const [usersCards, setUsersCards] = useState([])
   const [usersTurnCard, setUsersTurnCard] = useState([])
   const [computersTurnCard, setComputersTurnCard] = useState([])

   const startGame = () => {
      // const shuffledCards = shuffle(cards)
      const splitCards = chunk(cards, cards.length / 2)

      setUsersCards(splitCards[0])
      setComputersCards(splitCards[1])

      setIsGameStarted(true)
   }

   const drawCard = () => {
      setComputersTurnCard(computersCards[0])
      setUsersTurnCard(usersCards[0])

      setUsersCards(usersCards.slice(1))
      setComputersCards(computersCards.slice(1))
   }

   return (
      <>
         <p>{usersTurnCard.name}</p>
         {!isGameStarted && <button onClick={startGame}>Play!</button>}
         {isGameStarted && <button onClick={drawCard}>Draw card!</button>}
      </>
   )
}

export { Home }

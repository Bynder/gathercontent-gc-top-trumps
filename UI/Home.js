import React, { useState, useEffect } from "react"
import { shuffle, chunk } from "lodash"

function Home({ data }) {
   // const [cards] = useState(
   //    data.cards.edges.map(card => ({
   //       ...card.node,
   //       rarity: parseInt(card.node.rarity[0]?.label),
   //       spreadability: parseInt(card.node.spreadability[0]?.label),
   //       versatility: parseInt(card.node.versatility[0]?.label),
   //       style: parseInt(card.node.style[0]?.label),
   //       tastiness: parseInt(card.node.tastiness[0]?.label),
   //    }))
   // )
   const cards = [
      {
         name: "Ume Plum Jam\n",
         cardDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in faucibus dolor, ac viverra libero. Fusce bibendum diam felis, ut condimentum nulla rutrum vitae. \n\n\n",
         rarity: 5,
         spreadability: 7,
         tastiness: 1,
         versatility: 6,
         style: 4,
      },
      {
         name: "Crap Card",
         cardDescription: "\n",
         rarity: 1,
         spreadability: 1,
         tastiness: 1,
         versatility: 1,
         style: 1,
      },
      {
         name: "God CARD",
         cardDescription: "\n",
         rarity: 10,
         spreadability: 10,
         tastiness: 10,
         versatility: 10,
         style: 10,
      },
      {
         name: "Mediocre Card",
         cardDescription: "\n",
         rarity: 5,
         spreadability: 5,
         tastiness: 5,
         versatility: 5,
         style: 5,
      },
      {
         name: "Another Card",
         cardDescription: "\n",
         rarity: 2,
         spreadability: 5,
         tastiness: 3,
         versatility: 5,
         style: 6,
      },
      {
         name: "Extra Card",
         cardDescription: "\n",
         rarity: 1,
         spreadability: 6,
         tastiness: 5,
         versatility: 3,
         style: 1,
      },
   ]

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
      if(!isUsersTurn){
         computersTurn()
      }

   }, [turnCount])

   const computersTurn = () => {
      computersCards
   }

   const slamJams = attribute => {
      const hasUserWon = usersTurnCard[attribute] > computersTurnCard[attribute]
      const isDraw = usersTurnCard[attribute] === computersTurnCard[attribute]


      if (isDraw) {
         console.log(`Draw: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`)
         setUsersCards([...usersCards, usersTurnCard])
         setComputersCards([...computersCards, computersTurnCard])
         setIsUsersTurn(!isUsersTurn)
         return;
      }

      if (hasUserWon) {
         console.log(`User Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`)
         setUsersCards([...usersCards, usersTurnCard, computersTurnCard])
         setIsUsersTurn(true)
         return;

      }
      console.log(`Computer Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`)
      setComputersCards([...computersCards, computersTurnCard, usersTurnCard])
      setIsUsersTurn(false)
      return;
   }

   return (
      <>
         <p>Users Cards: </p>
         <ul>
            {usersCards.map(card => (
               <li>{card.name}</li>
            ))}
         </ul>

         <p>Computers Cards: </p>
         <ul>
            {computersCards.map(card => (
               <li>{card.name}</li>
            ))}
         </ul>

         <p>Computers Turn Card: </p>
         <ul>
            <li>{computersTurnCard.name}</li>
         </ul>

         {isGameStarted && isUsersTurn && (
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 200,
                  border: "1px solid red",
               }}
            >
               <h1>Card</h1>
               <p>{usersTurnCard.name}</p>
               <p>{usersTurnCard.description}</p>
               <button onClick={() => slamJams('rarity')}>rarity: {usersTurnCard.rarity}</button>
               <button onClick={() => slamJams('spreadability')}>spreadability: {usersTurnCard.spreadability}</button>
               <button onClick={() => slamJams('versatility')}>versatility: {usersTurnCard.versatility}</button>
               <button onClick={() => slamJams('style')}>style: {usersTurnCard.style}</button>
               <button onClick={() => slamJams('tastiness')}>tastiness: {usersTurnCard.tastiness}</button>
            </div>
         )}
         {!isGameStarted && <button onClick={startGame}>Play!</button>}
      </>
   )
}

export { Home }

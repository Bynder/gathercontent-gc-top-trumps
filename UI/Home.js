import React, { useState } from "react"
import { shuffle, chunk } from "lodash"

function Home({data}) {
  const [cards] = useState(data.cards.edges.map((card) => card.node));

  const [isUsersTurn, setIsUsersTurn] = useState(true)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [computersCards, setComputersCards] = useState([])
  const [usersCards, setUsersCards] = useState([])
  const [usersTurnCard, setUsersTurnCard] = useState([])
  const [computersTurnCard, setComputersTurnCard] = useState([])

  const startGame = () => {
    const shuffledCards = shuffle(cards)
    const splitCards = chunk(shuffledCards, cards.length / 2)

    setComputersCards(splitCards[0])
    setUsersCards(splitCards[1])

    setIsGameStarted(true)
  }

  const drawCard = () => {
     console.log(computersCards);
    setComputersTurnCard(computersCards[0]);
    setUsersTurnCard(usersCards[0]);
    setUsersCards(usersCards.slice(1));
    setComputersCards(computersCards.slice(1));

  }

  return (
    <>
      <p>{usersTurnCard.name}</p>
      { !isGameStarted && <button onClick={startGame}>Play!</button> }
      { isGameStarted &&  <button onClick={drawCard}>Draw card!</button> }
       {computersCards.length}
    </>
  )
}

export { Home }

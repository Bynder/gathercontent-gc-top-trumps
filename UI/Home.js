import React, { useState } from "react"
import { shuffle, chunk } from "lodash"

function Home() {
  const cards = [
    { name: "Jam 1" },
    { name: "Jam 2" },
    { name: "Jam 3" },
    { name: "Jam 4" },
    { name: "Jam 5" },
    { name: "Jam 6" },
    { name: "Jam 7" },
    { name: "Jam 8" },
    { name: "Jam 9" },
    { name: "Jam 10" },
  ]

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
    setComputersTurnCard(computersCards[0])
    setUsersTurnCard(usersCards[0])
  }

  return (
    <>
      <p>{usersTurnCard.name}</p>
      { !isGameStarted && <button onClick={startGame}>Play!</button> }
      { isGameStarted &&  <button onClick={drawCard}>Draw card!</button> }
    </>
  )
}

export { Home }

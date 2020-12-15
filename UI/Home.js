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

  const [computersCards, setComputersCards] = useState([])
  const [usersCards, setUsersCards] = useState([])

  const startGame = () => {
    const shuffledCards = shuffle(cards)
    const splitCards = chunk(shuffledCards, cards.length / 2)

    setComputersCards(splitCards[0])
    setUsersCards(splitCards[1])
  }

  return (
    <>
      {computersCards.map(({ name }) => (
        <p>{name}</p>
      ))}
      {usersCards.map(({ name }) => (
        <p>{name}</p>
      ))}
      <button onClick={startGame}>Play!</button>
    </>
  )
}

export { Home }

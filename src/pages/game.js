import React, {useEffect, useState} from "react"
import {graphql} from "gatsby"
import {chunk, map, orderBy, shuffle} from "lodash"
import {UserTurn} from "../../UI/UserTurn"
import {Result} from "../../UI/Result"
import {ComputersTurn} from "../../UI/ComputersTurn";

export const PLAYER_USER = "PLAYER_USER"
export const PLAYER_COMPUTER = "PLAYER_COMPUTER"

export default function Game({data, location}) {
   const [cards] = useState(
      data.cards.edges.map(card => ({
         ...card.node,
         rarity: parseInt(card.node.rarity[0]?.label),
         spreadability: parseInt(card.node.spreadability[0]?.label),
         versatility: parseInt(card.node.versatility[0]?.label),
         trendiness: parseInt(card.node.trendiness[0]?.label),
         tastiness: parseInt(card.node.tastiness[0]?.label),
      }))
   )


   const names = [
      'Barack O - Jar - Ma',
      'Jamantha Fox',
      'Halle Berry',
      'Silence of the Jams',
      'David Jameron',
      'Spready Murphy',
      'Lidney Poitier',
      'Jam Humphries',
   ]

   const [computerName, setComputerName] = useState(null)
   const [gameWinner, setGameWinner] = useState(null)
   const [roundWinner, setRoundWinner] = useState(null)
   const [turnCount, setTurnCount] = useState(0)

   const [isUsersTurn, setIsUsersTurn] = useState(true)
   const [selectedAttribute, setSelectedAttribute] = useState(0)

   const [computersCards, setComputersCards] = useState([])
   const [usersCards, setUsersCards] = useState([])

   const [usersTurnCard, setUsersTurnCard] = useState([])
   const [computersTurnCard, setComputersTurnCard] = useState([])

   const incrementTurnCount = () => setTurnCount(turnCount + 1)

   const startGame = () => {

      setComputerName(shuffle(names)[0])
      const shuffledCards = shuffle(cards)
      const splitCards = chunk(shuffledCards, shuffledCards.length / 2)

      setUsersCards(splitCards[0])
      setComputersCards(splitCards[1])

      incrementTurnCount()
   }

   const drawCard = () => {
      setComputersTurnCard(computersCards[0])
      setUsersTurnCard(usersCards[0])

      setUsersCards(usersCards.slice(1))
      setComputersCards(computersCards.slice(1))
   }

   const computersTurn = () => {
      const {name, cardDescription, ...attributes} = computersTurnCard

      const attributesArray = map(attributes, (value, key) => ({key: key, value: value}))
      const orderedAttributes = orderBy(attributesArray, ["value"], ["desc"])
      setTimeout(() => slamJams(orderedAttributes[0].key), 1500)
   }

   const slamJams = attribute => {
      setSelectedAttribute(attribute)

      const hasUserWon = usersTurnCard[attribute] > computersTurnCard[attribute]
      const isDraw = usersTurnCard[attribute] === computersTurnCard[attribute]

      if (isDraw) {
         console.log(
            `Draw: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
         )
         setUsersCards([...usersCards, usersTurnCard])
         setComputersCards([...computersCards, computersTurnCard])
         setIsUsersTurn(!isUsersTurn)
         setRoundWinner(false)
         return
      }

      if (hasUserWon) {
         console.log(
            `User Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
         )
         setUsersCards([...usersCards, usersTurnCard, computersTurnCard])
         setIsUsersTurn(true)
         setRoundWinner(PLAYER_USER)
         return
      }
      console.log(
         `Computer Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
      )
      setComputersCards([...computersCards, computersTurnCard, usersTurnCard])
      setIsUsersTurn(false)
      setRoundWinner(PLAYER_COMPUTER)

      return
   }

   useEffect(() => {
      if (!turnCount) {
         return
      }

      if (!usersCards.length || !computersCards.length) {
         setGameWinner(usersCards.length ? PLAYER_USER : PLAYER_COMPUTER)
         return
      }

      setRoundWinner(null)
      drawCard()
      if (!isUsersTurn) {
         computersTurn()
      }
   }, [turnCount])

   useEffect(() => {
      startGame()
   }, [])

   return (
      <div>

         {isUsersTurn && !roundWinner && (
            <UserTurn card={usersTurnCard} slamJams={slamJams}></UserTurn>
         )}

         {!isUsersTurn && !roundWinner && (
            <ComputersTurn name={computerName} card={computersTurnCard}></ComputersTurn>
         )}

         {roundWinner && (
            <Result
               computerName={computerName}
               usersTurnCard={usersTurnCard}
               computersTurnCard={computersTurnCard}
               winner={roundWinner}
               selectedAttribute={selectedAttribute}
               incrementTurnCount={incrementTurnCount}
               slamJams={slamJams}
            ></Result>
         )}
      </div>
   )
}

export const pageQuery = graphql`
   query pageQuery {
      cards: allGatherContentCard {
         edges {
            node {
               name
               cardDescription
               rarity {
                  label
               }
               spreadability {
                  label
               }
               tastiness {
                  label
               }
               versatility {
                  label
               }
               trendiness {
                  label
               }
            }
         }
      }
   }
`

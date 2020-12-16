import React, {useEffect, useState} from 'react';
import {graphql} from "gatsby";
import {chunk, map, orderBy, shuffle} from "lodash";
import {UserTurn} from "../../UI/UserTurn";

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

   const [winner, setWinner] = useState(null)
   const [turnCount, setTurnCount] = useState(0)

   const [isUsersTurn, setIsUsersTurn] = useState(true)

   const [computersCards, setComputersCards] = useState([])
   const [usersCards, setUsersCards] = useState([])

   const [usersTurnCard, setUsersTurnCard] = useState([])
   const [computersTurnCard, setComputersTurnCard] = useState([])

   const incrementTurnCount = () => setTurnCount(turnCount + 1)

   const startGame = () => {
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
      slamJams(orderedAttributes[0].key)
   }

   const slamJams = attribute => {

      //Show spinner?
      //Pause?

      const hasUserWon = usersTurnCard[attribute] > computersTurnCard[attribute]
      const isDraw = usersTurnCard[attribute] === computersTurnCard[attribute]

      if (isDraw) {
         console.log(
            `Draw: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
         )
         setUsersCards([...usersCards, usersTurnCard])
         setComputersCards([...computersCards, computersTurnCard])
         setIsUsersTurn(!isUsersTurn)

         incrementTurnCount()
         return
      }

      if (hasUserWon) {
         console.log(
            `User Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
         )
         setUsersCards([...usersCards, usersTurnCard, computersTurnCard])
         setIsUsersTurn(true)

         incrementTurnCount()
         return
      }
      console.log(
         `Computer Won: Users= ${attribute} - ${usersTurnCard[attribute]} \n Computers= ${attribute} - ${computersTurnCard[attribute]}`
      )
      setComputersCards([...computersCards, computersTurnCard, usersTurnCard])
      setIsUsersTurn(false)

      incrementTurnCount()
      return
   }

   useEffect(() => {
      if (!turnCount) {
         return
      }

      if (!usersCards.length || !computersCards.length) {
         setWinner(usersCards.length ? "USER" : "COMPUTER")
         return
      }

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
         <div>{location?.state?.name ?? 'no name'}</div>
         <UserTurn usersTurnCard={usersTurnCard} slamJams={slamJams}></UserTurn>
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

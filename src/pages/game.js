import React, {useEffect, useState} from "react"
import {graphql} from "gatsby"
import { useSpring } from "react-spring"
import { Button } from "../../UI/Button"
import {chunk, map, orderBy, shuffle} from "lodash"
import {UserTurn} from "../../UI/UserTurn"
import {Result} from "../../UI/Result"
import {ComputersTurn} from "../../UI/ComputersTurn";
import {ScoreAside} from "../../UI/ScoreAside"
import {WaitingCard} from "../../UI/WaitingCard";
import resultStyles from "../../UI/Result/result.module.css";
import InfoIcon from "../components/InfoIcon";

export const PLAYER_USER = "PLAYER_USER"
export const PLAYER_COMPUTER = "PLAYER_COMPUTER"
export const DRAW_PLAYER = "DRAW_PLAYER"
export const DRAW_COMPUTER = "DRAW_COMPUTER"

export const GAME_STATE_YOUR_TURN = "YOUR_TURN"
export const GAME_STATE_WAITING_FOR_COMPUTER = "WAITING_FOR_COMPUTER "
export const GAME_STATE_COMPUTER_TURN = "COMPUTER_TURN"
export const GAME_STATE_RESULTS = "STATE_RESULTS"

export default function Game({data}) {
   const [userProps, userSet] = useSpring(() => ({ opacity: 1 }))
   const [waitingProps, waitingSet] = useSpring(() => ({ opacity: 0, display: "none" }))

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

   const cards = data.cards.edges.map(card => ({
         ...card.node,
         mugshot: card.node.mugshot[0]?.optimised_image_url,
         rarity: parseInt(card.node.rarity[0]?.label),
         spreadability: parseInt(card.node.spreadability[0]?.label),
         versatility: parseInt(card.node.versatility[0]?.label),
         trendiness: parseInt(card.node.trendiness[0]?.label),
         tastiness: parseInt(card.node.tastiness[0]?.label),
      })
   )

   const shuffledCards = shuffle(cards)
   const splitCards = chunk(shuffledCards, shuffledCards.length / 2)

   const [allState, setAllState] = useState({
      gameState: GAME_STATE_YOUR_TURN,
      computerName: shuffle(names)[0],
      usersCards: splitCards[0],
      computersCards: splitCards[1],
      turnCount: 1,
      roundsWon: 0,
      roundWinner: null,
      currentPlayer: PLAYER_USER,
      selectedAttribute: 0
   })

   const incrementTurnCount = () => setAllState({...allState, turnCount: allState.turnCount + 1})

   const usersTurn = (cards = {}) => {
      waitingSet({ opacity: 0, display: "none" })
      userSet({ opacity: 1, display: "block" })
      setAllState({...allState, ...cards, gameState: GAME_STATE_YOUR_TURN})
   }

   const computersTurn = (cards = {}) => {
      userSet({ opacity: 0, display: "none" })
      waitingSet({ opacity: 1, display: "block" })

      const {
         name,
         cardDescription,
         mugshot,
         mugshotAltText,
         id,
         ...attributes
      } = allState.computersCards[0]
      const attributesArray = map(attributes, (value, key) => ({key: key, value: value}))
      const orderedAttributes = orderBy(attributesArray, ["value"], ["desc"])

      setAllState({...allState, ...cards, gameState: GAME_STATE_COMPUTER_TURN})

      setTimeout(() => slamJams(orderedAttributes[0].key), 1500)
   }

   const takeTurn = attribute => {
      waitingSet({ opacity: 1, display: "block" })
      setTimeout(() => slamJams(attribute), 700);	      userSet({ opacity: 0, display: "none" })
      setAllState({...allState, gameState: GAME_STATE_WAITING_FOR_COMPUTER})
      setTimeout(() => slamJams(attribute), 700);
   }

   const drawCard = () => {

      const [usersCard, ...usersRemaining] = allState.usersCards;
      const [computersCard, ...computersRemaining] = allState.usersCards;


      if (allState.roundWinner === PLAYER_USER) {
         return {
            computersCards: allState.computersCards.splice(1),
            usersCards: [...allState.usersCards.splice(1), usersCard, computersCard],
         }
      }

      if (allState.roundWinner === PLAYER_COMPUTER) {
         return {
            usersCards: allState.usersCards.splice(1),
            computersCards: [...allState.computersCards.splice(1), computersCard, usersCard],
         }
      }

      return {
         usersCards: [...allState.usersCards.splice(1), usersCard],
         computersCards: [...allState.computersCards.splice(1), computersCard]
      }
   }

   const slamJams = attribute => {
      waitingSet({ opacity: 1, display: "block" })
      userSet({ opacity: 1, display: "block" })

      const [usersCard, ...usersRemaining] = allState.usersCards;
      const [computersCard, ...computersRemaining] = allState.computersCards;

      const hasUserWon = usersCard[attribute] > computersCard[attribute]
      const isDraw = usersCard[attribute] === computersCard[attribute]

      if (isDraw) {

         setAllState({
            ...allState,
            roundWinner: allState.currentPlayer === PLAYER_USER ? DRAW_PLAYER : DRAW_COMPUTER,
            gameState: GAME_STATE_RESULTS,
            selectedAttribute: attribute
         })
         return
      }

      if (hasUserWon) {

         setAllState({
            ...allState,
            roundsWon: allState.roundsWon + 1,
            currentPlayer: PLAYER_USER,
            roundWinner: PLAYER_USER,
            gameState: GAME_STATE_RESULTS,
            selectedAttribute: attribute
         })

         return
      }

      setAllState({
         ...allState,
         currentPlayer: PLAYER_COMPUTER,
         roundWinner: PLAYER_COMPUTER,
         gameState: GAME_STATE_RESULTS,
         selectedAttribute: attribute
      })

      return
   }

   useEffect(() => {

      if (!allState.usersCards.length || !allState.computersCards.length) {
         //Show results
         return
      }

      [null, PLAYER_USER, DRAW_PLAYER].includes(allState.roundWinner) ? usersTurn(drawCard()) : computersTurn(drawCard())

   }, [allState.turnCount])

   return (
      <InfoIcon>
         <ScoreAside
            cardsLeft={allState.usersCards.length}
            turnNumber={allState.turnCount}
            wins={allState.roundsWon}
         />
         <div className={resultStyles.resultContainer}>
            <div className={resultStyles.result}>
               <UserTurn
                  animationStyle={userProps}
                  card={allState.usersCards[0]}
                  takeTurn={takeTurn}
                  playerWon={
                     allState.gameState === GAME_STATE_RESULTS &&
                     allState.roundWinner === PLAYER_USER
                  }
                  showButton={allState.gameState !== GAME_STATE_RESULTS}
                  selectedAttribute={allState.selectedAttribute}
                  setSelectedAttribute={attr =>
                     setAllState({ ...allState, selectedAttribute: attr })
                  }
               />
            </div>
            <div className={resultStyles.result}>
               <ComputersTurn
                  animationStyle={waitingProps}
                  name={allState.computerName}
                  isLoading={allState.gameState !== GAME_STATE_RESULTS}
                  loadingLabel={
                     allState.gameState === GAME_STATE_WAITING_FOR_COMPUTER
                        ? "Waiting"
                        : "Choosing Jam Stat"
                  }
                  playerWon={allState.roundWinner === PLAYER_USER}
                  computersTurnCard={allState.computersCards[0]}
                  selectedAttribute={allState.selectedAttribute}
               />
            </div>
            {allState.gameState === GAME_STATE_RESULTS && (
               <>
                  <Button
                     text="Next Round"
                     className={resultStyles.button}
                     onClick={() => incrementTurnCount()}
                  >
                     Next Round
                  </Button>
                  <div>{allState.roundWinner === PLAYER_USER ? "YOU WON!!" : "YOU LOST!!"}</div>
               </>
            )}
         </div>
      </InfoIcon>
   )
}

export const pageQuery = graphql`
query cardsQuery {
  cards: allGatherContentItemsByFolderPlayingcards {
    edges {
      node {
        id
        cardDescription
        rarity {
          label
        }
        mugshot {
          optimised_image_url
        }
        mugshotAltText
        spreadability {
          label
        }
        tastiness {
          label
        }
        trendiness {
          label
        }
        versatility {
          label
        }
        name
        mugshotAltText
        mugshot {
          optimised_image_url
        }
      }
    }
  }
}
`

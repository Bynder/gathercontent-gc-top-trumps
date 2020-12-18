import {map} from "lodash"

export function GetAttributesFromCard(card) {
   const { name, cardDescription, mugshot, mugshotAltText, id, ...attributes } = card
   return map(attributes, (value, key) => ({
      description: key,
      score: value
   }))
}

export function FormatTime(timeElapsed) {

   const minutes =
      Math.floor(timeElapsed / 60) < 10
         ? `0${Math.floor(timeElapsed / 60)}`
         : Math.floor(timeElapsed / 60)

   const seconds =
      Math.floor(timeElapsed % 60) < 10
         ? `0${Math.floor(timeElapsed % 60)}`
         : Math.floor(timeElapsed % 60)

   return { minutes:minutes, seconds:seconds}
}

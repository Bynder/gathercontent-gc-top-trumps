import {map} from "lodash"

export function GetAttributesFromCard(card) {
   const {name, cardDescription, ...attributes} = card
   return map(attributes, (value, key) => ({description: key, score: value}))
}

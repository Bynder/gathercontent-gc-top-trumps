import { graphql, Link } from "gatsby"
import React from "react"
import {Home} from "../../UI/Home"

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

export default Home

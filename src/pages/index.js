import { graphql, Link } from "gatsby"
import React from "react"
import {Home} from "../../UI/Home"

export const pageQuery = graphql`
   query pageQuery {
      cards: allGatherContentCard {
         edges {
            node {
               name
               id
            }
         }
      }
   }
`

export default Home

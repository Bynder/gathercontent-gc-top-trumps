import { graphql, Link } from "gatsby"
import React from "react"

export default function Home({ data: { cards } }) {
   return (
      <div>
         <h1>Jams</h1>
         <ul>
            {cards.edges.map(({ node }) => (
               <li key={node.id}>
                  <Link to={`/card/${node.id}`}>
                     {node.name !== "\n" ? node.name : "We're not jamming!"}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

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

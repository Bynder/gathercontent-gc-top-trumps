import React from "react"
import { graphql, Link } from "gatsby"

export default function CardPage({ data }) {
  console.log(data);
  const { id, name, cardDescription, rarity, spreadability, tastiness, versatility, trendiness, mugshot, mugshotAltText } = data.gatherContentCard;

   return (
      <div>
         <Link to="/">Go home</Link>
         <ul>
            <li><img width="200" src={mugshot[0].optimised_image_url} alt={mugshotAltText} /></li>
           <li>{id}</li>
           <li>{name}</li>
           <li>{cardDescription}</li>
           <li>{rarity[0].label}</li>
           <li>{spreadability[0].label}</li>
           <li>{tastiness[0].label}</li>
           <li>{versatility[0].label}</li>
           <li>{trendiness[0].label}</li>
         </ul>
      </div>
   )
}

export const query = graphql`
   query($id: String) {
      gatherContentCard(id: { eq: $id }) {
        id
        name
        cardDescription
        mugshot {
         optimised_image_url
        }
        mugshotAltText
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
`

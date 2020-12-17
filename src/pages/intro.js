import React, {useState} from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import {graphql, navigate} from 'gatsby';

export default function Intro({data, location}) {

   const introHeader = data.allGatherContentItemsByFolderWelcomeandintro.nodes[0].header;
   const introContent = data.allGatherContentItemsByFolderWelcomeandintro.nodes[0].introAndExplainer;

   return (
      <div className={introStyles.container}>
         <div className={introStyles.header}>
            {introHeader}
         </div>
      <div className={introStyles.text}>
         {introContent}
      </div>
      </div>
   )
}

export const pageQuery = graphql`
query introQuery {
  allGatherContentItemsByFolderWelcomeandintro {
    nodes {
      header
      introAndExplainer
    }
  }
}
`

import React from "react"
import introStyles from "../../UI/IntroHero/introHero.module.css"
import {graphql} from 'gatsby';
import InfoIcon from "../components/InfoIcon";
import {IntroUI} from "../../UI/IntroUI";

export default function Intro({data}) {
   const introContent = data.allGatherContentItemsByFolderWelcomeandintro.nodes[0].introAndExplainer;

   return (
      <InfoIcon>
         <div className={introStyles.container}>
            <IntroUI introContent={introContent} />
         </div>
      </InfoIcon>
   )
}

export const pageQuery = graphql`
query introQuery {
  allGatherContentItemsByFolderWelcomeandintro {
    nodes {
      introAndExplainer
    }
  }
}
`

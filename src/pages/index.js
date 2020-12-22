import React, { useEffect } from "react"
import introStyles from "../../UI/IntroUI/intro.module.css"
import {graphql} from 'gatsby';
import InfoIcon from "../components/InfoIcon";
import {IntroUI} from "../../UI/IntroUI";

export default function Intro({data}) {
   const colouredStrings = [
      ['Tastiness', '<span style="color:red">Tastiness</span>'],
      ['Spreadability', '<span style="color:purple">Spreadability</span>'],
      ['Versatility', '<span style="color:green">Versatility</span>'],
      ['Trendiness', '<span style="color:blue">Trendiness</span>'],
      ['Rarity', '<span style="color:orange">Rarity</span>'],
   ];

   const introContent = colouredStrings.reduce((finalStr, [key, value]) => finalStr.replace(key, value),
      data.allGatherContentItemsByFolderWelcomeandintro.nodes[0].introAndExplainer);

   useEffect(() => {
      document.addEventListener('keydown', handleEnter, false);
      return () => document.removeEventListener('keydown', handleEnter)
   }, []);

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         navigate("/game")
      }
   }

   return (
      <InfoIcon>
         <div className={introStyles.container}>
            <IntroUI introContent={introContent}/>
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

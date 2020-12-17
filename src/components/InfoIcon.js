import React, { useState} from 'react';
import {Button} from '../../UI/Button';
import {Info} from '../../UI/Icons';
import {AboutUs} from '../../UI/AboutUs'
import { useStaticQuery, graphql } from "gatsby";

export default function InfoIcon({children, ...rest}) {
   const data = useStaticQuery(graphql`
query InfoQuery {
  allGatherContentItemsByFolderAbouttheproject {
    nodes {
      header
      explainer
    }
  }
}
`).allGatherContentItemsByFolderAbouttheproject.nodes[0];

   const [displayInfo, setDisplayInfo] = useState(false);
   const toggle = () => {
      setDisplayInfo(!displayInfo)
   }

   return (
   displayInfo ?
      <AboutUs introTitle={data.header} introContent={data.explainer} toggle={toggle}></AboutUs> :
      <>
      <Button
         onClick={toggle}
         style={{position: 'absolute', top: '20px', right: '100px'}}
         aria-label="Game information"
      >
         <Info/>
      </Button>
         {children}
      </>);
}


import React, {useRef, useState} from 'react';
import {Button} from '../../UI/Button';
import {Info} from '../../UI/Icons';
import {AboutUs} from '../../UI/AboutUs'
import { useStaticQuery, graphql } from "gatsby";

export default function InfoIcon({children, ...rest}) {
   const data = { 'header': 'Some Title', 'description': 'Some Description'}

   const [displayInfo, setDisplayInfo] = useState(false);
   const toggle = () => {
      setDisplayInfo(!displayInfo)
   }


   return (
   displayInfo ?
      <AboutUs introTitle={data.header} introContent={data.description}></AboutUs> :
      <>
      <Button onClick={toggle} style={{position: 'absolute', top: '20px', right: '20px'}}>
         <Info/>
      </Button>
         {children}
      </>);
}


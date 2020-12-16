import React, {useState} from "react"
import {Card} from "../Card"
import {GetAttributesFromCard} from "../../src/utils/helpers"
import {ChooseYourJamStat} from "../ChooseYourJamStat";
import {Button} from "../Button";

export function UserTurn({card: {name, cardDescription}, card, slamJams}) {
   const [selectedAttribute, setSelectedAttribute] = useState(null)

   return (
      <div>

         <ChooseYourJamStat />

         <Card>
            <Card.Image name={name}/>
            <Card.Description description={cardDescription}/>
            <Card.AttributeList
               attributes={GetAttributesFromCard(card)}
               selectedAttribute={selectedAttribute}
               onSelectAttribute={setSelectedAttribute}
            />
         </Card>

         {selectedAttribute && (
            <Button text='Slam It!' onClick={() => slamJams(selectedAttribute)} />)}
      </div>
   )
}

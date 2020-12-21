import React from "react"

import { Card } from "../Card"

export default {
   title: "Card",
   component: Card,
}

const Template = args => (
   <div>
      <Card hasPlayerWon={true}>
         <Card.Image name={args.name} mugShotUrl={args.mugShotUrl} altText={args.altText} />
         <Card.Description description={args.description} />
         <Card.AttributeList
            attributes={args.attributes}
            onSelectAttribute={() => {}}
            selectedAttribute={'Versatility'}
            hasPlayerWon={true}
         />
      </Card>
      Things we need to do:
      <ul>
         <li>Figure out icons in storybook AND gatsby</li>
         <li>The colours and gradients are a mess</li>
         <li>The text border is also a mess</li>
         <li>Spacing is a bit funky</li>
         <li>Should use a composite component</li>
      </ul>
   </div>
)

export const Primary = Template.bind({})
Primary.args = {
   name: "Strawberry",
   description: "Your grandmother's standard Strawberry jam. No frills here.",
   mugShotUrl:
      "https://images.unsplash.com/photo-1468577760773-139c2f1c335f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
   altText: "Jam on toast",
   attributes: [
      {
         description: "Tastiness",
         score: 9,
         innerColour: "#B81422",
         outerColour: "#E51A2B",
         barColour: "#F5A3AA",
      },
      {
         description: "Spreadability",
         score: 3,
         innerColour: "#6E19E6",
         outerColour: "#5814B8",
         barColour: "#C5A3F5",
      },
      {
         description: "Versatility",
         score: 5,
         innerColour: "#39C639",
         outerColour: "#2E9E2E",
         barColour: "#B0E8B0",
      },
      {
         description: "Style",
         score: 2,
         innerColour: "#006EFF",
         outerColour: "#0058CC",
         barColour: "#99C5FF",
      },
      {
         description: "Rarity",
         score: 1,
         innerColour: "#F9D006",
         outerColour: "#C7A705",
         barColour: "#FCEC9C",
      },
   ],
}

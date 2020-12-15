import React from 'react';

import { Card } from '../Card';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: "Strawberry Jam!",
    description: "Really really tasty",
    mugShotUrl: "https://images.unsplash.com/photo-1468577760773-139c2f1c335f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
    altText: "Jam on toast",
    attributes: [
        {
            description: "Tastiness",
            score: 9
        },
        {
            description: "Spreadability",
            score: 3
        },
        {
            description: "Versatility",
            score: 5
        },
        {
            description: "Style",
            score: 2
        },
        {
            description: "Rarity",
            score: 1
        }
    ]
};

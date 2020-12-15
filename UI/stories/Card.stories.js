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

};
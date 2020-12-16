import React from 'react';

import { WaitingCard } from '../WaitingCard';

export default {
   title: 'WaitingCard',
   component: WaitingCard,
};

const Template = (args) => <div><WaitingCard label='Waiting'  /></div>;
export const Primary = Template.bind({});
Primary.args = {};

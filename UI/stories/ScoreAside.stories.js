import React from 'react';

import { ScoreAside } from '../ScoreAside';

export default {
   title: 'ScoreAside',
   component: ScoreAside,
};

const Template = (args) => <div><ScoreAside {...args} />
   Things we need to do:
   <ul>
      <li>There's a janky drop shadow on everything which I can't remove.</li>
      <li>Spacing, probably</li>
   </ul>
</div>;

export const Primary = Template.bind({});
Primary.args = {
   turnNumber: 1,
   wins: 0,
   cardsLeft: 15,
   time: "00:21"
};

import React from 'react';

import { IntroHero } from '../IntroHero';

export default {
   title: 'Intro Hero',
   component: IntroHero,
};

const Template = (args) => <div style={{
   marginTop: "100px"
}}><IntroHero {...args} />

Still to do:
   <ul>
      <li>
         Fix the borders on input + button
      </li>
      <li>
         Add some nice screenreader talkiness to the logo
      </li>
      <li>
         Focus & hover states on input + button
      </li>
   </ul>

</div>;

export const Primary = Template.bind({});
Primary.args = {};

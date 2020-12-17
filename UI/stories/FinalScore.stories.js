import React from 'react';

import { FinalScore } from "../FinalScore";

export default {
   title: 'Final Score',
   component: FinalScore,
};

const Template = (args) => <div style={{padding: "100px"}}>
   <FinalScore outcome={args.outcome} totalRounds={args.totalRounds} totalWins={args.totalWins} totalTime={args.totalTime} score={args.score} />
</div>

export const Primary = Template.bind({});
Primary.args = {
   outcome: "You won!",
   totalRounds: 21,
   totalWins: 16,
   totalTime: "21:10",
   score: "1,234"
}

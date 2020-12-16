import React from 'react';
import { ReactComponent as Star } from '../../static/Star.svg';
import { ReactComponent as StarSmall } from '../../static/StarSmall.svg';

export default {
    title: 'Icons',
    // component: Card,
};

const Template = (args) => <>
   &lt;Star /&gt;
   <Star style={{filter: "drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.1))"}}/>
   <br/>
   &lt;StarSmall /&gt;
   <StarSmall style={{filter: "drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.1))"}} />
</>;

import React from 'react';
import { Star, StarSmall, Arrow, BLUE_GRADIENT, RED_GRADIENT, GREEN_GRADIENT, PURPLE_GRADIENT, YELLOW_GRADIENT } from '../Icons';

export default {
    title: 'Icons',
};

export const Icons = (args) => <>
   &lt;Star /&gt;
   <Star/>
   <br/>
   &lt;StarSmall /&gt;
   <StarSmall/>
   <br/>
   &lt;Arrow /&gt;
   <Arrow gradient={RED_GRADIENT}/>
   <Arrow gradient={PURPLE_GRADIENT}/>
   <Arrow gradient={BLUE_GRADIENT}/>
   <Arrow gradient={GREEN_GRADIENT}/>
   <Arrow gradient={YELLOW_GRADIENT}/>
</>;

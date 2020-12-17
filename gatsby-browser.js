import React from 'react';
import "./src/styles/global.css"

import { AudioProvider } from './src/context/AudioContext';
import AudioControls from './src/components/AudioControls';

export const wrapRootElement = ({ element }) => (
   <AudioProvider>
      <AudioControls/>
      {element}
   </AudioProvider>
)

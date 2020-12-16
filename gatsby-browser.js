import React from 'react';
import "./src/styles/global.css"

import { AudioProvider } from './src/context/AudioContext';

export const wrapRootElement = ({ element }) => (
   <AudioProvider>{element}</AudioProvider>
)

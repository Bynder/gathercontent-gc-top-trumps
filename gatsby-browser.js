import React from 'react';
import "./src/styles/global.css"

import { AudioProvider } from './src/context/AudioContext';
import AudioControls from './src/components/AudioControls';
import { Helmet } from "react-helmet";

export const wrapRootElement = ({ element }) => (
      <AudioProvider>
         <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>SlamJams by GatherContent</title>
            <link rel="canonical" href="https://slamjams.lol" />
         </Helmet>
         <AudioControls/>
         {element}
      </AudioProvider>
)

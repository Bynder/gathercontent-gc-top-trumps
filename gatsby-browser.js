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
            <meta name="description" content="JamSlam is a one-player game powered by GatherContent, Gatsby and Unsplash." />
            <title>JamSlam by GatherContent</title>
            <link rel="canonical" href="https://jamslam.lol" />
         </Helmet>
         <AudioControls/>
         {element}
      </AudioProvider>
)

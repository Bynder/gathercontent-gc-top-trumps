import React, { useContext } from 'react';
import { Button } from '../../UI/Button';
import { SoundOff, SoundOn } from '../../UI/Icons';
import { AudioContext } from '../context/AudioContext';

export default function AudioControls() {
   const { isSoundEnabled, enableSound, disableSound } = useContext(AudioContext);

   return (
      <Button
         onClick={isSoundEnabled ? disableSound : enableSound}
         style={{ position: 'absolute', top: '20px', right: '20px'}}
         aria-label="Mute Audio"
      >
         {isSoundEnabled ? <SoundOn/> : <SoundOff/>}
      </Button>
   );
}

import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

export const AudioContext = React.createContext({ isSoundEnabled: true });

export function AudioProvider({ children }) {
   const [soundEnabled, setSoundEnabled] = useState(true);

   const background = useRef(new Howl({ src: '/Casual Game Background.mp3', loop: true }));
   const roundWin = useRef(new Howl({ src: '/Correct Answer.mp3' }));
   const roundLoose = useRef(new Howl({ src: '/Wrong.mp3' }));
   const gameWin = useRef(new Howl({ src: '/Win Fanfare (WAV).mp3', volume: 0.4 }));
   const gameLoose = useRef(new Howl({ src: '/Game Over Pipe Organ.mp3' }));

   useEffect(() => {
      if (soundEnabled && !background.current.playing()) {
         background.current.play()
      } else {
         background.current.stop();
      }
   }, [soundEnabled])

   return (
      <AudioContext.Provider value={{
         playRoundWin: () => soundEnabled && roundWin.current.play(),
         playRoundLoose: () => soundEnabled && roundLoose.current.play(),
         playGameWin: () => soundEnabled && gameWin.current.play(),
         playGameLoose: () => soundEnabled && gameLoose.current.play(),
         enableSound: () => setSoundEnabled(true),
         disableSound: () => setSoundEnabled(false),
         isSoundEnabled: soundEnabled,
      }}>
         {children}
      </AudioContext.Provider>
   )
}

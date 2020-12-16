import React, { useRef, useState } from 'react';
import { Button } from '../../UI/Button';
import { SoundOff, SoundOn } from '../../UI/Icons';

export default function Audio({ children, ...rest }) {
   const audio = useRef();
   const [isPlaying, setIsPlaying] = useState(!audio?.current?.paused);

   const pause = () => {
      audio.current.pause();
      setIsPlaying(false);
   }

   let play = () => {audio.current.play(); setIsPlaying(true)};
   return <>
      <audio ref={audio} src="/Casual Game Background.mp3" autoPlay loop {...rest}/>
      {isPlaying ? (
         <Button onClick={pause} style={{ position: 'absolute', top: '20px', right: '150px'}}>
            <SoundOn/>
         </Button>
      ) : (
         <Button onClick={play} style={{ position: 'absolute', top: '20px', right: '150px'}}>
            <SoundOff/>
         </Button>
      )}
      {children}
   </>;
}

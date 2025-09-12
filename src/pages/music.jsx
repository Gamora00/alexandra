import React, { useRef } from 'react';

import Epic from '../assets/epicWould.jpg';
import Song from '../assets/EPICMUSIC.mp3';

import '../style/card.css'
function Music() {
  const audioRef = useRef(new Audio(Song));

  const playMusic = () => {
    audioRef.current.play();
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // reset to start
  };

  return (
    <div className='music-container'>
      <div className='card'>
        <img src={Epic} alt="cover" />
        <h3 className='music_name'>Would you fall in love with me again</h3>
        <div>
          <button onClick={stopMusic}>Stop</button>
          <button onClick={playMusic}>Play</button>
        </div>
      </div>
    </div>
  );
}

export default Music;

import React, { useContext } from 'react';
import Display from './components/display'; 
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/player';
import { PlayerContext } from './context/PlayerContext';

const App = () => {

  const {audioRef,audio,track} = useContext(PlayerContext);


  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display /> 
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
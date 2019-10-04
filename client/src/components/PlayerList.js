import React from 'react';
import Player from './Player';

function PlayerList({ data }) {
  return (
    <div className='player-list-container'>
      {data.map(player => (
        <div key={player.id} className='player'>
          <Player
            id={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        </div>
      ))}
    </div>
  );
}

export default PlayerList;

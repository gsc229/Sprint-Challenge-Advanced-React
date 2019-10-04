// cool snippet: type rfce tab for component
import React from 'react';

function Player({ id, name, country, searches }) {
  return (
    <div className={`player`}>
      <h2 className='name' id={id}>
        {name}
      </h2>
      <h4>{country}</h4>
      <p>Searches: {searches}</p>
    </div>
  );
}

export default Player;

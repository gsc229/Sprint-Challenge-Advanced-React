import React from 'react';
import { useInput } from '../hooks/useInput';
import { useLocalStorage } from '../hooks/useLocalStorage';

//A form component to input player data. Will need name, country and searches inputs. each input will be controlled with the same hook - useInput()...useInput() will be bound with useLocalStorage();

function ChoosePlayerForm({ data }) {
  console.log('ChoosePlayer data: ', data);
  const [storedValue, setStoredValue] = useLocalStorage('data', data);

  const [playerName, handlePlayerName, setPlayerName] = useInput(
    'playerName',
    ''
  );

  const [country, handleCountry, setCountry] = useInput('country', '');

  const [searches, handleSearches, setSearches] = useInput('searches', '');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(localStorage);
    /*  setPlayerName('');
    setCountry('');
    setSearches(''); */
  };

  const clearForm = event => {
    setPlayerName('');
    setSearches('');
    setCountry('');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} action=''>
        <input
          placeholder='Player Name'
          type='text'
          value={playerName}
          onChange={handlePlayerName}
        />
        <input
          placeholder='Country'
          type='text'
          value={country}
          onChange={handleCountry}
        />
        <input
          placeholder='Number of searches'
          type='number'
          value={searches}
          onChange={handleSearches}
        />
        <button type='submit'>Submit</button>
        <button onClick={clearForm}>Clear Inputs</button>
      </form>
    </div>
  );
}

export default ChoosePlayerForm;
